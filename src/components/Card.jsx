import React from "react";
// import superEth from "../assets/supereth.png";
export default function Card({ image}) {
  return (
    <div className="card">
      <div className="card-image">
        <img src={image} alt="super1" />
      </div>
    
    </div>
  );
}
