import React from "react";
import Card from "./Card";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import technology1 from "../assets/technology1.svg";
import technology2 from "../assets/technology2.svg";
import technology3 from "../assets/technology3.svg";

export default function Technology() {
  const data = [
    {
      image: technology1,
      
    },
    {
      image: technology2,
      
    },
    {
      image: technology3,
     
    },
  ];
  return (
    <div className="platforms">
      <div className="title-container">
        <h2 className="title">A Multiverse of Technologies</h2>
        <p className="description">
        A blend of multiple next-generation technologies to foster a robust and intuitive user experience. 
        </p>
      </div>
      <div className="cards">
        {data.map(({image}, index) => (
          <Card
            image={image}
          />
        ))}
      </div>

        <div className="cards mobile-carousel">
            <Carousel infiniteLoop useKeyboardArrows autoPlay showThumbs={false} showStatus={false}>
                {data.map(({image}, index) => (
                    <img src={image} alt={index}/>
                 ))}
            </Carousel>
        </div>
      <div className="ellipse">
      </div>
    </div>
  );
}
