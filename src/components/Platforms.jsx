import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import Card from "./Card";
import platform1 from "../assets/platform1.svg";
import platform2 from "../assets/platform2.svg";
import platform3 from "../assets/platform3.svg";

export default function Platforms() {
  const data = [
    {
      image: platform1,
     
    },
    {
      image: platform2,
     
    },
    {
      image: platform3,
     
    },
  ];
  return (
    <div className="platforms" id='product'>
      <div className="title-container">
        <h2 className="title">Scope of Feed3</h2>
        <p className="description">
         Multi-platform in-game feedback. No game too big or small 
        </p>
      </div>
      <div className="cards">
        {data.map(({ image}, index) => (
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
      
    </div>
  );
}
