import { useEffect, useState } from "react";
import { contract, provider } from "../utils/contract";

export default function Home() {
  const [account, setAccount] = useState("");
  const [ticketData, setTicketData] = useState(null);

  useEffect(() => {
    if (provider) {
      provider.send("eth_requestAccounts", []).then((accounts) => {
        setAccount(accounts[0]);
      });
    }
  }, []);

  const fetchTicketData = async () => {
    try {
      const data = await contract.getTicketDetails(); // Replace with actual function
      setTicketData(data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <h1>Event Ticketing System</h1>
      <p>Connected Account: {account}</p>
      <button onClick={fetchTicketData}>Fetch Ticket Data</button>
      <div>
        {ticketData ? (
          <pre>{JSON.stringify(ticketData, null, 2)}</pre>
        ) : (
          <p>No ticket data yet</p>
        )}
      </div>
    </div>
  );
}
