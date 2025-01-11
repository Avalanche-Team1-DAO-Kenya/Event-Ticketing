import { JsonRpcProvider, BrowserProvider, JsonRpcSigner } from "ethers";

// Connect to the Avalanche C-Chain network
export const getProvider = (): JsonRpcProvider => {
  const avalancheRpcUrl = "https://api.avax.network/ext/bc/C/rpc";
  return new JsonRpcProvider(avalancheRpcUrl);
};

// Function to get the signer from the browser's window.ethereum (for MetaMask)
export const getSigner = async (provider: JsonRpcProvider): Promise<JsonRpcSigner | null> => {
  if (typeof window !== "undefined" && window.ethereum) {
    const browserProvider = new BrowserProvider(window.ethereum);  // Use BrowserProvider for MetaMask
    const signer = await browserProvider.getSigner();  // Await the Promise to get the signer
    return signer;
  } else {
    console.error("Ethereum provider not found. Please install MetaMask.");
    return null;
  }
};
