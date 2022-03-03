import Web3 from 'web3';

import { AbiItem } from 'web3-utils';
import { polygonProvider } from 'config';

class ContractService {
  public Web3;

  constructor() {
    this.Web3 = new Web3(polygonProvider.network.rpc);
  }

  public getContract(abi: AbiItem | AbiItem[], address: string) {
    return new this.Web3.eth.Contract(abi, address);
  }

  public resetWeb3(newWeb3: Web3) {
    this.Web3 = newWeb3;
  }
}

export default new ContractService();
