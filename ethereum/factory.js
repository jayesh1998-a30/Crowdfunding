import web3 from './web3';
import CampaignFactory from './build/CampaignFactory';

const address = '0x4397Fb730057209759648B48Bf62fCB610cBdF3d';


const instance = new web3.eth.Contract(JSON.parse(CampaignFactory.interface),address);

export default instance;

//this process  tell web3 to deploy  copy of the contract  instance