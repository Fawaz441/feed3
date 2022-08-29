import React from "react";
import logo from "../assets/logo.svg";
import twitter from "../assets/tw.svg";
import telegram from "../assets/telegram.svg";
import line from "../assets/line.svg"



export default function Footer() {
  const links = [
    {
      title: "Learn",
      data: [
        {
          title:"Whitepaper",
          link:'https://feed3.gitbook.io/feed3/'
        },
        {
          title:"FAQs",
          link:'#faq'
        },
        {
          title:"Press @ feed3.io",
          link:'#'
        },
        {
          title:"Audit coming soon",
          link:'#'
        },
      ]
    },

    {
      title: "Participate",
        data: [
          {
            title:"Buy $FD3",
            link:'https://feed3.gitbook.io/feed3/'
          },
          {
            title:"Join twitter",
            link:'https://twitter.com/Feed3Token'
          },
          {
            title:"Join telegram",
            link:'https://t.me/Feed3Official'
          }, 
        ]
    },
    {
      title: "Links",
        data: [
          {
            title:"Product",
            link:'#'
          },
          {
            title:"Tokenomics",
            link:'/tokenomics'
          },
          {
            title:"Terms of use",
            link:'/terms'
          }, 
          {
            title:"Privacy policy",
            link:'/policy'
          },
        ]
    },
    
  ];
  const socialLink = [
    {
      social: twitter,
      link: "https://twitter.com/Feed3Token"
    },
    {
      social: telegram,
      link: "https://t.me/Feed3Official"
    },
  ];
  return (
    <>
    <img src={line} width='100%' alt="line"/>
    <footer>
      <div className="container">
      <div className="upper">
        <div className="links">
          {links.map(({ title, data }, index) => {
            return (
              <div className="link" key={index}>
                <h4>{title}</h4>
                <ul>
                  {data.map((link, index2) => (
                    <a href={link.link}><li key={index2}>{link.title}</li></a>
                  ))}
                </ul>
              </div>
            );
          })}
         </div>
      </div>
      <div className="lower">
        <img src={logo} alt='logo'/>
        <p>Copyright © 2022 FEED3 - All rights reserved</p>
          <ul>
             {socialLink.map((icon, index) => (
                  <a href={icon.link} target='_blank' rel="noreferrer" ><img src={icon.social} alt='social-icon'/></a>
              ))}
           </ul>
      </div>

      </div>
    </footer>
    </>
  );
}
