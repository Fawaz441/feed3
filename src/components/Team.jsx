import React from "react";
import { BsLinkedin } from "react-icons/bs";
import flavia from "../assets/flavia.svg";
import paul from "../assets/paul.svg";
import denisa from "../assets/denisa.svg";


export default function Team() {
    const data = [
      {
        image: paul,
        firstName: "Paul Gligor",
        role:"Co-founder & CEO",
        linkedinLink:'https://www.linkedin.com/in/paulgligor/'
        
      },
        {
          image: denisa,
          firstName: "Denisa Moce",
          role:"Co-founder & CPO",
          linkedinLink:'https://www.linkedin.com/in/moce-denisa-9241a982'
        },
       
        {
          image: flavia,
          firstName: "Flavia Farcut",
          role:"Community lead ",
          linkedinLink:' https://www.linkedin.com/in/flavia-farcut-a88ab6231/'
         
        },
      ];

  return (
    <div className="team" id="team">
        <div className="container">
            <h2 className="title">Meet the Team</h2>
          <div className="member-container">
        {data.map(({ image, firstName,lastName,role,twitterLink,linkedinLink }, index) => (
            <div className="team-container">
              <div className="team-image">
                <img src={image} alt="super1" />
              </div>
              <div className="team-heading">
                <p className="team-name">{firstName} <br/>{lastName}</p>
                <p className="team-role">{role}</p>
              </div>
              <div className="team-social">
              <a href={linkedinLink}> <BsLinkedin/></a>
              </div>
            </div>
        ))}
        </div>
        </div>
    </div>
  );
}
