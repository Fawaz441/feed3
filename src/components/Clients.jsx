import React from "react";
import clients1 from "../assets/polygon.png";
import clients2 from "../assets/solana.png";
import clients3 from "../assets/moralis.png";
import clients4 from "../assets/bsc.png";



export default function Clients() {
  const data = [clients1, clients2, clients3, clients4];
  return (
    <div className="clients">
      <div className="container">
        <div className="clients-container">
          {data.map((client, index) => (
            <div className="client" key={index}>
              <img src={client} alt="client" width='150px'/>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
