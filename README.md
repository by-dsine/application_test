# application_test

This is how I found the solution for the application with blockchain.capital. Their smart contract test can be found here: https://ropsten.etherscan.io/address/0xCc14BE1009fc0a50f434635E86738B1A2a77F4DD#code

A short explanation of the test:
1) The allow() modifier checks that whoever calls the contract has an address that shares the top 2 bytes with the "magic" address.
2) To create an address with these bytes, I brute force generated ETH addresses until I found a match.
3) I then sent my encrypted email address to hire() function from my mined ETH address.
