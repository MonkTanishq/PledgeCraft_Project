import web3 from "./web3";
import CampaignFactory from "./build/CampaignFactory.json";
 
const instance = new web3.eth.Contract(
  CampaignFactory.abi,
  "0x440a635E78C8B79f4D5ab952B27f6EBA635C12D7"
);
 
export default instance;