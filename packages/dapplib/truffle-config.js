require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'grace hero fortune skull trap birth muscle come gesture phone outer gas'; 
let testAccounts = [
"0xaf927a466b29467963b92ce868e119467d48a7f4d7e78ea2f2cac02c7526955c",
"0x9a624e26b65047af4d9cf159d8d2b6102c2da500ad14766809c66cac9a2215e7",
"0x328c1e58cb7cf638768c43f6fd30fe8688b4af090a1452ba880c3444bfe45d9a",
"0x82a3df6d3b4e82ad5cee7f41f3a0313ce7ea943f274316637fb98a01ab1756ab",
"0x54208d0e4508c276f2cc61d757c5ac5d76c3016f99d2610b4b4abd1950a888ec",
"0x379121e3cf4b18f724399ceb882bbe67e91a03d0e84d4fd8b69559dd4093bd6b",
"0x9698146ff0d02ebee7294db340a031efdd282e7f12f90a3ad787c4036a6ace1e",
"0xe3d08560dc6c7ef9f422c87e2437490ecc54e75be8d8dd8e47fb83c98c129fb6",
"0x3d23a704fcea10bae2838effa81d3a0d37e9b30c27f4dcc688ff0d26bd3c2f9f",
"0x3c6ca08da34bd99452963260686a2007f8204a640d800094847ca0c112218698"
]; 
let devUri = 'https://api.avax-test.network/ext/bc/C/rpc';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                6, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 8000000,
            network_id: '*',
            chainId: 43113,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};


