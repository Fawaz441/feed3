import React from "react";
import partners1 from "../assets/partners1.svg";
import partners2 from "../assets/partners2.svg";
import partners3 from "../assets/partners3.svg";
import partners4 from "../assets/partners4.svg";



export default function Partnership() {
  const data = [partners1, partners2, partners3, partners4];
  return (
    <div className="partnership">
      <div className="container">
        <h2 className="title">Partnership pipeline</h2>
        <div className="partners-container">
          {data.map((partner, index) => (
            <div className="partners" key={index}>
              <img src={partner} alt="partner" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

