import { useState } from "react";
import { getTicketData } from "../services/blockchain";
import { QRCode } from 'react-qrcode';


const TicketsPage = () => {
    const [ticketId, setTicketId] = useState<number | null>(null);
    const [metadata, setMetadata] = useState("");

    const handleFetch = async () => {
        try {
            if (ticketId !== null) {
                const data = await getTicketData(ticketId);
                setMetadata(data);
            }
        } catch (error) {
            console.error("Error fetching ticket:", error);
        }
    };

    return (
        <div>
            <h1>Your Tickets</h1>
            <input
                type="number"
                placeholder="Ticket ID"
                onChange={(e) => setTicketId(Number(e.target.value))}
            />
            <button onClick={handleFetch}>Fetch Ticket</button>
            {metadata && (
                <div>
                    <p>Ticket Data: {metadata}</p>
                    <QRCode value={metadata} />
                </div>
            )}
        </div>
    );
};

export default TicketsPage;
