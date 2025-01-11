import { JsonRpcProvider, Provider, Signer } from "ethers";

// Connect to the Avalanche C-Chain network
export const getProvider = (): JsonRpcProvider => {
  const avalancheRpcUrl = "https://api.avax.network/ext/bc/C/rpc";
  return new JsonRpcProvider(avalancheRpcUrl);
};

// Function to get the signer from the browser's window.ethereum (for MetaMask)
export const getSigner = (provider: Provider): Signer | null => {
  if (typeof window !== "undefined" && window.ethereum) {
    const web3Provider = new ethers.providers.Web3Provider(window.ethereum);
    return web3Provider.getSigner();
  } else {
    console.error("Ethereum provider not found. Please install MetaMask.");
    return null;
  }
};
