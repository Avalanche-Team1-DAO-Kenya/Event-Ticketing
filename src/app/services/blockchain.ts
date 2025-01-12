import { ethers } from "ethers";

// Initialize provider using your Alchemy API URL
const provider = new ethers.JsonRpcProvider(process.env.NEXT_PUBLIC_ALCHEMY_API_URL);

// Your contract address and private key from environment variables
const contractAddress = process.env.NEXT_PUBLIC_CONTRACT_ADDRESS!;
const privateKey = process.env.NEXT_PUBLIC_PRIVATE_KEY!;

// Set up the wallet
const wallet = new ethers.Wallet(privateKey, provider);

// Import the ABI from the contract (corrected import format)
import abi from "../contaracts/EventTicketing.json";
const contract = new ethers.Contract(contractAddress, abi.abi, wallet);

// Mint Ticket Function
export const mintTicket = async (to: string, metadata: string) => {
    try {
        // Call mintTicket method on the contract
        const tx = await contract.mintTicket(to, metadata);
        await tx.wait();
        return tx.hash;  // Return the transaction hash
    } catch (error) {
        console.error("Error minting ticket:", error);
        throw error;
    }
};

// Get Ticket Data Function
export const getTicketData = async (ticketId: number) => {
    try {
        // Call getTicketData method on the contract
        return await contract.getTicketData(ticketId);
    } catch (error) {
        console.error("Error fetching ticket data:", error);
        throw error;
    }
};
