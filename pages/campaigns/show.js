import React, {Component} from 'react';
import Layout from '../../components/Layout';
import Campaign from '../../ethereum/campaign';
import { Card, Grid ,Button} from 'semantic-ui-react';
import web3 from '../../ethereum/web3';
import ContributeForm from '../../components/ContributeForm';
import {Link} from '../../routes';


 
class CampaignShow extends Component{

    static async getInitialProps(props){
         const campaign = Campaign(props.query.address);
         const summary = await campaign.methods.getSummary().call();



         return{
            address:props.query.address,
            minimumContribution:summary[0],
            balance:summary[1],
            requestsCount:summary[2],
            approversCount:summary[3],
            manager:summary[4]
         };

    }




  renderCards(){

    const{
        minimumContribution,
        balance,
        requestsCount,
        approversCount,
        manager
    } = this.props


    const items = [
        {
          header: manager,
          meta: 'Address of manager',
          description:
            'The manager create this campaign and can create request to withdraw money',
          style:{ overflowWrap:'break-word'}  
          
        },
        {
            header: minimumContribution,
            meta: 'MinimumContribution',
            description:
              'you must contribute atlest this much wei to become an approver'
          },

          {
            header: requestsCount,
            meta: 'Count of Request',
            description: 
              'A request try to withdraw money from contract.Request must be approved by approvers',
            
          },

          {
              header:approversCount,
              meta:"Number of approvers",
              description:
                 'Number of people already donated to campaign'
          },
          {
              header:web3.utils.fromWei(balance,'ether'),
              meta:'Campaign Balance (ether)',
              description:
              'The Balance is how much  money this campaign has left to spend'
          }
      ];

      return <Card.Group items={items} />;
      
  }
   









    render(){
        return(
          <Layout>


            <Grid>
                  <Grid.Row>
                        <Grid.Column width={10}>
                            {this.renderCards()}
                         </Grid.Column>
                  
                        <Grid.Column width={6}>
                            <ContributeForm   address={this.props.address}/>
                        </Grid.Column>

                  </Grid.Row>

                  <Grid.Row>
                      <Grid.Column>
                               <Link route={`/campaigns/${this.props.address}/requests`}>
                                <a>
                                    <Button primary>View Requests</Button>
                                </a>
                                </Link>
                     </Grid.Column>     
                  </Grid.Row>
            </Grid>

          </Layout>

              
        );
    };
};

export default CampaignShow;

