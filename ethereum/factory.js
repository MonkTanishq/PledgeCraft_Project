import web3 from './web3';
import CampaignFactory from './build/CampaignFactory.json';

const instance = new web3.eth.Contract(
  JSON.parse(CampaignFactory.interface),
  '0xD54c9cAe5f6e5795966C86c8C2202a0666805719'
);

export default instance;
