import React,{Component}  from 'react';
import { Card,Button } from 'semantic-ui-react';
import Layout from '../components/Layout'
import factory from '../ethereum/factory';
import {Link} from '../routes';


class CampaignIndex extends Component{


    static async getInitialProps(){
        const campaigns = await factory.methods.getDeployedCampaigns().call();
        //returns array of address
        return {campaigns};   
    }


    renderCampaigns(){
     
        const items = this.props.campaigns.map(address =>{
            return{
                header: address,
                description: (
                <Link route={`/campaigns/${address}`}>
                <a>View campaign</a>
                </Link>
                ),
                fluid:true   
            }
        })

        return <Card.Group centered items={items}/>;

    }
    


    render(){
        return(
         <Layout>
                <div>
                <link rel="stylesheet" href="//cdn.jsdelivr.net/npm/semantic-ui@2.4.2/dist/semantic.min.css" />
                <h3>Open Campaigns</h3>
                

                <Link route='/campaigns/new'>
                  <a>
                        <Button 
                        content='Create Campaign'
                        icon='add circle' 
                        labelPosition='left'
                        primary
                        floated='right'
                        />
                  </a>     
                </Link>



                {this.renderCampaigns()}
                </div>
        </Layout>
        );
    }
}


export default CampaignIndex;