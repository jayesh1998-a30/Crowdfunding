const HDWalletProvider = require('truffle-hdwallet-provider');
const Web3 = require('web3');


const compiledFactory = require('./build/CampaignFactory.json');


const provider = new HDWalletProvider(
    'vault nerve scrub danger demise under cliff strike wrestle garbage move kiwi',
    'https://rinkeby.infura.io/v3/2e759be8994046c6ac8fcbe80e818e11'
    
);


const web3 = new Web3(provider);

const deploy = async () => {

    const accounts  =  await web3.eth.getAccounts();

    console.log('Atempting to  deploy from account',accounts[0]);

    const result = await new  web3.eth.Contract(JSON.parse(compiledFactory.interface))
     .deploy({data:compiledFactory.bytecode})
     .send({ gas: '1000000',from: accounts[0] });

      
     console.log('Contract deploy to',result.options.address);



};

deploy();