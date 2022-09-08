var Web3 = require('web3');
var abi = require('./hireme_abi.json'); 

var ROPSTEN_URL = 'https://ropsten.infura.io/v3/3d9ed93fcc1d4a528ddedb419d178bb1';
var web3 = new Web3(ROPSTEN_URL);

const privKey =
'0xf13d07be45d991a2d7a9a99f0df15c55c919865c6c55ee2a7371b41c20767765';
const addressFrom = '0xbca99DF5ddFA6B2E2A7837eD85C991e2710fD6a2';
const addressTo = '0xCc14BE1009fc0a50f434635E86738B1A2a77F4DD';
const emailHash = '2ba7e583e0cf32365281b3937aa4f1548a4c5fcfb77873e919b770d065e49e4a'; //dylandilla@gmail.com

var account = web3.eth.accounts.privateKeyToAccount(privKey);

web3.eth.sendTransaction({from: account, to: addressTo, data: emailHash}).then(function(receipt){
    console.log(receipt);
});
