import { abi } from './nftAbi';

export const is_production = true;
export const polygonProvider = {
  network: {
    chainID: is_production ? 137 : 80001,
    chainName: is_production ? 'Polygon' : 'Polygon testnet',
    nativeCurrency: {
      name: 'MATIC',
      symbol: 'MATIC',
      decimals: 18,
    },
    rpc: is_production
      ? 'https://rpc-mainnet.maticvigil.com/'
      : 'https://matic-mumbai.chainstacklabs.com',
    blockExplorerUrl: is_production
      ? 'https://explorer.matic.network/'
      : 'https://mumbai.polygonscan.com/',
  },
  provider: {
    MetaMask: { name: 'MetaMask' },
    WalletConnect: {
      name: 'WalletConnect',
      useProvider: 'rpc',
      provider: {
        rpc: {
          rpc: {
            [is_production ? 137 : 80001]: is_production
              ? 'https://rpc-mainnet.maticvigil.com/'
              : 'https://matic-mumbai.chainstacklabs.com',
          },
          chainId: is_production ? 137 : 80001,
        },
      },
    },
  },
};

// ETH CONFIG
// export const polygonProvider = {
//   network: {
//     chainID: is_production ? 1 : 4,
//     chainName: is_production ? 'Ethereum' : 'Rinkeby',
//     nativeCurrency: {
//       name: 'ETH',
//       symbol: 'ETH',
//       decimals: 18,
//     },
//     rpc: is_production
//       ? 'https://mainnet.infura.io/v3/e30174475e4b42bc9daab0cb45748b9c'
//       : 'https://rinkeby.infura.io/v3/e30174475e4b42bc9daab0cb45748b9c',
//     blockExplorerUrl: is_production ? 'https://etherscan.io/' : 'https://rinkeby.etherscan.io/',
//   },
//   provider: {
//     MetaMask: { name: 'MetaMask' },
//     WalletConnect: {
//       name: 'WalletConnect',
//       useProvider: 'rpc',
//       provider: {
//         rpc: {
//           rpc: {
//             [is_production ? 1 : 4]: is_production
//               ? 'https://mainnet.infura.io/v3/e30174475e4b42bc9daab0cb45748b9c'
//               : 'https://rinkeby.infura.io/v3/e30174475e4b42bc9daab0cb45748b9c',
//           },
//           chainId: is_production ? 1 : 4,
//         },
//       },
//     },
//   },
// };

export const contractConfig = {
  abi,
  address: is_production ? '0xA20c3F980086AC900650B02d2f8DCc59009b1156' : '',
};
