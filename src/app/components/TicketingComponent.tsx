"use client";

import React, { useEffect, useState } from "react";
import { ethers } from "ethers";
import { getProvider, getSigner } from "../utils/provider";
import { getContract } from "../utils/contract";

const TicketingComponent = () => {
  const [account, setAccount] = useState<string | null>(null);
  const [tickets, setTickets] = useState<number | null>(null);

  useEffect(() => {
    const connectWallet = async () => {
      if (window.ethereum) {
        const accounts = await window.ethereum.request({ method: "eth_requestAccounts" });
        setAccount(accounts[0]);
      } else {
        alert("Please install a Web3 wallet like MetaMask");
      }
    };

    connectWallet();
  }, []);

  const fetchTickets = async () => {
    const provider = getProvider();
    const contract = getContract(provider);
    const ticketCount = await contract.getTickets(account);
    setTickets(ticketCount.toNumber());
  };

  return (
    <div>
      <h1>Event Ticketing System</h1>
      {account ? (
        <div>
          <p>Connected Wallet: {account}</p>
          <button onClick={fetchTickets}>Get My Tickets</button>
          {tickets !== null && <p>You have {tickets} tickets.</p>}
        </div>
      ) : (
        <p>Please connect your wallet.</p>
      )}
    </div>
  );
};

export default TicketingComponent;
