import { useState } from "react";
import { mintTicket } from "../services/blockchain";

const AdminPage = () => {
    const [recipient, setRecipient] = useState("");
    const [metadata, setMetadata] = useState("");

    const handleMint = async () => {
        try {
            const txHash = await mintTicket(recipient, metadata);
            alert(`Ticket minted! Transaction Hash: ${txHash}`);
        } catch (error) {
            console.error("Error minting ticket:", error);
        }
    };

    return (
        <div>
            <h1>Mint Tickets</h1>
            <input
                type="text"
                placeholder="Recipient Address"
                value={recipient}
                onChange={(e) => setRecipient(e.target.value)}
            />
            <textarea
                placeholder="Metadata"
                value={metadata}
                onChange={(e) => setMetadata(e.target.value)}
            />
            <button onClick={handleMint}>Mint Ticket</button>
        </div>
    );
};

export default AdminPage;
