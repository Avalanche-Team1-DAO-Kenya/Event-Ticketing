import { ethers } from "ethers";

// Set up contract address and ABI
const CONTRACT_ADDRESS = "your_contract_address";
const CONTRACT_ABI = [
  // ABI array goes here
];

let provider;
let contract;

if (typeof window !== "undefined" && window.ethereum) {
  provider = new ethers.providers.Web3Provider(window.ethereum);
  contract = new ethers.Contract(CONTRACT_ADDRESS, CONTRACT_ABI, provider.getSigner());
}

export { provider, contract };
