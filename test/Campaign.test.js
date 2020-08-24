const assert =  require('assert');
const ganache = require('ganache-cli');
const Web3 = require('web3');
const web3 = new Web3(ganache.provider());

const compiledFactory = require('../ethereum/build/CampaignFactory.json');
const compiledCampaign = require('../ethereum/build/Campaign.json');


let accounts;
let factory;
let campaignAddress;
let campaign;


beforeEach(async()=>{
    accounts = await web3.eth.getAccounts();

    factory =  await new  web3.eth.Contract(JSON.parse(compiledFactory.interface))
    .deploy({data:compiledFactory.bytecode})
    .send({ from:accounts[0] , gas: '1000000' }); 


     await factory.methods.createCampaign('100').send({
         from:accounts[0],
         gas:'1000000'
     });

     const addresses = await factory.methods.getDeployedCampaigns().call();
     campaignAddress = addresses[0];


     campaign = await new web3.eth.Contract(JSON.parse(compiledCampaign.interface),campaignAddress);

}); 


  describe('Campaign',() => {
     //to check wheather contracts are deployed properly
     it('deploys a factory and a campaign',() => {

        assert.ok(factory.options.address);
        assert.ok(campaign.options.address);
     });


     //to check wheather caller as marked as manger
     it('mark caller as the campaign manger', async()=>{
       const manager = await campaign.methods.manager().call();
       assert.equal(accounts[0],manager);
     });

     //to check wheather people are able to contribute money
     it('allow the people to contribute money and marks them as approvers',async() =>{
           await campaign.methods.contribute().send({
                value:'200',
                from:accounts[1]
           });

        const isContributor = await campaign.methods.approvers(accounts[1]).call();
        assert(isContributor);
     });


    //to check wheather minium contribution satisfy
    it('require a minimum contribution',async()=>{

      try{
        await campaign.methods.contribute().send({
          value:'5',
          from:accounts[1]
        });
        assert(false)

      } catch(err){
        assert(err);
      }
    });



    //check whaether manager is able to make request[]
    it('allow manager to make a payment request',async()=>{
      await campaign.methods.createRequest('buy batteries','100',accounts[1]).send({
        from:accounts[0],
        gas:'1000000' 
      });

      const request = await campaign.methods.requests(0).call();
      assert.equal('buy batteries',request.description);
    });


    //
    it('process request',async()=>{

      await campaign.methods.contribute().send({
        value:web3.utils.toWei('10','ether'),
        from:accounts[0]
      });

      await campaign.methods.createRequest('buy batteries',web3.utils.toWei('5','ether'),accounts[1])
      .send({
        from:accounts[0],
        gas:'1000000'
      });

      
      await campaign.methods.approveRequest(0).send({
        from:accounts[0],
        gas:'1000000'
      });
       

       await campaign.methods.finalizeRequest(0).send({
         from:accounts[0],
         gas:'1000000'
       });


       let balance = await web3.eth.getBalance(accounts[1]);
       balance = web3.utils.toWei(balance,'ether');
       balance = parseFloat(balance);
          console.log(balance);

          assert(balance > 104);

    });


  });