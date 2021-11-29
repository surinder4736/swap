import { ChainId } from '@nguyenphu27/sdk'
import MULTICALL_ABI from './abi.json'

const MULTICALL_NETWORKS: { [chainId in ChainId]: string } = {
  [ChainId.MAINNET]: '0x1Ee38d535d541c55C9dae27B12edf090C608E6Fb', // TODO
  [ChainId.TESTNET]: '0x83dB7991BE2De348eefC1eC8901Cf353b538b85A'
}
export { MULTICALL_ABI, MULTICALL_NETWORKS }
