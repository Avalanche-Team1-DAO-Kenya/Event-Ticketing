import { Contract, JsonRpcProvider, Wallet } from "ethers";
import contract from "../contaracts/EventTicketing.json"; // Ensure this file exports the `abi` and `address`.

const { abi, address } = contract as { abi: any; address: string }; // Type the contract object.

export const getContract = (signerOrProvider: Wallet | JsonRpcProvider): Contract => {
  if (!address) {
    throw new Error("Contract address is missing.");
  }
  return new Contract(address, abi, signerOrProvider);
};
