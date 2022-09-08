var Web3 = require('web3');

var ROPSTEN_URL = 'https://ropsten.infura.io/v3/3d9ed93fcc1d4a528ddedb419d178bb1';
var web3 = new Web3(ROPSTEN_URL);

var found = false;
var attempts = 1;

while(!found){
    console.log("Attempt #" + attempts + ":");

    // create a wallet
    var wallet = web3.eth.accounts.create(); 

    // check address
    if(wallet.address.startsWith('0xbca9')){
        console.log("Match found!");
        console.log(wallet)
        found = true;
    } else {
        console.log("Not a match.")
        console.log("Address: " + wallet.address)
        attempts++;
    }

}
