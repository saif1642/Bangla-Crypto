// https://eth-ropsten.alchemyapi.io/v2/XrHo96o8QUQVmm3On5seefvBGe3_Jd3r

require("@nomiclabs/hardhat-waffle");

module.exports = {
   solidity: '0.8.0',
   networks: {
     ropsten:{
       url: 'https://eth-ropsten.alchemyapi.io/v2/XrHo96o8QUQVmm3On5seefvBGe3_Jd3r',
       accounts: ['5a3ba534d82cb1404a29a8fc35b2412069d5a50a0a993da79ca7c74e4aebe8f2']
     }
   }
}