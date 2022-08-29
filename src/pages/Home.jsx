import React, { useEffect } from "react";
import Clients from "../components/Clients";
import Home from "../components/Home";
import Play from "../components/Play";
import Gamers from '../components/Gamers'
import Powered from '../components/Powered'
import Freeda from '../components/Freeda'
import Platforms from "../components/Platforms";
import scrollreveal from "scrollreveal";
import Bot from "../components/Bot";
import Technology from "../components/Technology";
import Partnership from "../components/Partnership";
import Roadmap from "../components/Roadmap";
import Tokenomics from "../components/Tokenomics";
import Presale from "../components/Presale";
import Team from "../components/Team";
import Signup from "../components/Signup";
import Faq from "../components/Faq";
import Feed from "../components/Feed";
import Ellipse from "../components/Ellipse";

function HomePage() {

  useEffect(() => {
    const registerAnimations = () => {
      const sr = scrollreveal({
        origin: "bottom",
        distance: "60px",
        duration: 1000,
        reset: false,
      });
      sr.reveal(
        `
         nav,
        .home,
       
    `,
        {
          interval: 500,
        }
      );
    };
    registerAnimations();
  }, []);
  window.setTimeout(() => {
    const home = document.getElementsByClassName("home");
    home[0].style.transform = "none";
    const nav = document.getElementsByTagName("nav");
    nav[0].style.transform = "none";
  }, 1500);
  return (
    <div  className="home-container">
    
      <Home />
      <Clients />
      <Play />
      <Gamers/>
      <Powered/>
      <Platforms/>
      <Freeda/>
      <Bot/>
      <Technology/>
      <Partnership/>
      <Roadmap/>
      <Tokenomics/>
      <Presale/>
      <Feed/>
      <Team/>
      <Signup/>
      <Faq/>
      <Ellipse/>
      {/* <Footer /> */}
    </div>
  );
}

export default HomePage;
