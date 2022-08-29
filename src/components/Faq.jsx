import React, { useState } from 'react';
import AccordionData  from './AccordionData';
import styled from 'styled-components';
import { IconContext } from 'react-icons';
import { FiPlus, FiMinus } from 'react-icons/fi';

const AccordionSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding:6rem 1rem;
  .title{
    background:var(--background-text);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    text-fill-color: transparent;
    mix-blend-mode: normal;
    font-size:60px;
    margin-bottom:20px;
  }

 .description{
  color: var(--accent-color1);
  line-height: 32px;
  text-align:center !important;
}

@media screen and (max-width:500px){
  .title{
    font-size:32px;
  }
  .description{
    font-size:14px;
    text-align:center;
  }
}

`;

const Container = styled.div`
  box-shadow: 2px 10px 35px 1px rgba(153, 153, 153, 0.3);
  margin-top: 3rem;
  width:900px;

  @media screen and (max-width:1000px){
    width:auto;
  }
`;

const Wrap = styled.div`
  color: #fff;
  display: flex;
  align-items: center;
  width: 100%;
  background:linear-gradient(90deg, #FF56F6 1.61%, #B936EE 41.58%, #3BACE2 73.35%, #406AFF 98.46%);
  text-align: center;
  padding:1rem;
  border-bottom:1px solid var(--accent-color3);
  cursor: pointer;
  h1 {
    padding: 1rem;
    font-size: 1rem;
    text-align: start;
  }
  span {
    margin-right: 1.5rem;
  }
  @media screen and (max-width:1000px){
    h1 {
      padding: 0rem;
      font-size: 16px;
    }
  }
`;

const Dropdown = styled.div`
  background: inherit;
  color: #ffff;
  width: 100%;
  height:auto;
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items:start;
  padding:2rem;
  border-bottom: 1px solid #00ffb9;
  border-top: 1px solid #00ffb9;
  p {
    font-size: 16px;
    line-height: 25px;
    margin-bottom:0.5rem;
  }
  ul{
    margin:0px;
    padding-left:2rem;
  }
  li{
    font-size:14px;
    padding:0.5rem;
  }
`;

const Accordion = () => {
  const [clicked, setClicked] = useState(false);

  const toggle = index => {
    if (clicked === index) {
      //if clicked question is already active, then close it
      return setClicked(null);
    }

    setClicked(index);
  };

  return (
    <IconContext.Provider value={{ color: '#fff', size: '25px' }} >
      <AccordionSection id='faq'>
          <h2 className='title'>FAQ’s</h2>
          <p className='description'>Frequently asked questions</p>
        <Container>
          {AccordionData.map((item, index) => {
            return (
              <>
                <Wrap onClick={() => toggle(index)} key={index}>
                  <span>{clicked === index ? <FiMinus /> : <FiPlus />}</span>
                  <h1>{item.question}</h1>
                </Wrap>
                {clicked === index ? (
                  <Dropdown>
                    <p>{item.answer}</p>
                    {item.answer2 && <p>{item.answer2}</p>}
                    {item.answer3 && <p>{item.answer3}</p>}
                    {item.list && 
                    <ul>
                      {item.list.map((list, index2) => (
                       <li key={index2}>{list}</li>
                      ))}
                     </ul>
                     }
                  </Dropdown>
                ) : null}
              </>
            );
          })}
        </Container>
      </AccordionSection>
    </IconContext.Provider>
  );
};

export default Accordion;
