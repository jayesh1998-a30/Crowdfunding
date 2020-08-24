import React ,{Component} from 'react';
import {Form,Button,Input,Message} from 'semantic-ui-react';
import Campaign from  '../ethereum/campaign';
import web3 from '../ethereum/web3';
import {Router} from '../routes';



class ContributeForm extends Component{

    //initialising the states of the variables
    state ={
        value:'',
        errorMessage:'',
        loading:false
    };

    onSubmit = async(event) => {
        
        //prevent browser to submit the web page
       event.preventDefault();

       //get access to campaign instance
        const campaign = Campaign(this.props.address);
    

        //loading start
        this.setState({loading:true,errorMessage:''});
       try{
                    //getting list of the accounts from web3
                    const accounts = await web3.eth.getAccounts();

                    //calling contribute method and converting value to Wei
                    await campaign.methods.contribute().send({
                        from:accounts[0],
                        value:web3.utils.toWei(this.state.value,'ether') });
                        Router.replaceRoute(`/campaigns/${this.props.address}`)

       }catch(err){

           //if erro is caught errorMessage variable will display err
           this.setState({errorMessage:err.message});
       }

       //loading stops
        this.setState({loading:false,value:''});
    };



    render(){
        return(
             //this.onsbmit is just giving referece to onSubmit function not calling it
            <Form onSubmit={this.onSubmit}  error={!!this.state.errorMessage} >


                <Form.Field>
                    <label>Amount to Contribute</label>
                    
                    <Input
                      value={this.state.value}
                      onChange={event => this.setState({value:event.target.value})}
                      label='ether'  
                      labelPosition='right'
                      
                    />
                </Form.Field>


                             <Message error
                              header = 'Oops!'
                              content={this.state.errorMessage}
                             />

          <Button primary  loading={this.state.loading}>Contribute!</Button>

            </Form>
            
        );
    }
}

export default  ContributeForm;