import { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";
import 'dotenv/config'

const {
  DEPLOYER_SIGNER_PRIVATE_KEY = '',
  INFURA_PROJECT_ID = ''
} = process.env

const config: HardhatUserConfig = {
  solidity: "0.8.9",
  networks: {
    rinkeby: {
      url: `https://rinkeby.infura.io/v3/${INFURA_PROJECT_ID}`,
      accounts: [
        DEPLOYER_SIGNER_PRIVATE_KEY
      ]
    }
  }
};

export default config;
