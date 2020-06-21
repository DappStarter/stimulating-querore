require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'inflict person forget turn ship riot pizza smooth coin merry flock tourist'; 
let testAccounts = [
"0x69cc7df6274e06e7757d4ba0773988f1ed6e771c60f48def505cfe534dddf2fa",
"0x5a1b184c9af877f5a8dd5c686fcc8c5967992e62f6a23d906b43fbac0b9b5c80",
"0xbf2700bc360d0b3d5e07c7595c1da5536fa246d7e8f765b5730711b07c34c01b",
"0xb893c5cb7b6f31d16609c824a48db3c3eec6266049af9c363ca7f1b90450fa72",
"0x9db48c2511eb9d7e02411d99660de1ea59790b438f07968f472dd7c92c5be5f8",
"0x1fbcb43c716f09ef0049a764dcbff6ff566f65a074b30c33e7558b478e277cd3",
"0x63f53f9a9b275090c803c196b15298f5a6755861d2ec7f48b8c93f9aa513fd8b",
"0x61e841d69c5e675931fa0118956df4923688bb6187881ed31c24ca4568e909e4",
"0xf5d0b87450203179a67ad9edccac10567b8356950e6af9d531faba8141618026",
"0xd90e326729c3e0a447db74cf654daacce80f4edf7415ada12523980ade318bc2"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};
