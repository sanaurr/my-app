import './App.css';
import { useState } from 'react';
import React from 'react';
import myImage from './demo-img/download.jpg';
import { styled } from 'styled-components';

// Styled component for the card container
const CardContainer = styled.div`
  width: 300px;
  border: 1px solid #ccc;
  border-radius: 4px;
  padding: 20px;
`;

// Styled component for the image
const CardImage = styled.img`
  width: 100%;
  height: auto;
  border-radius: 4px;
`;

// Styled component for the title
const CardTitle = styled.h3`
  font-size: 18px;
  margin-top: 10px;
`;

// Styled component for the price
const CardPrice = styled.p`
  font-size: 16px;
  margin-top: 5px;
`;

// Styled component for the button
const CardButton = styled.button`
  padding: 8px 12px;
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  margin-top: 10px;
`;

const Card = ({ imageSrc, title, price, buttonText }) => {
  return (
    <CardContainer>
      <CardImage src={imageSrc} alt={title} />
      <CardTitle>{title}</CardTitle>
      <CardPrice>{price}</CardPrice>
      <CardButton>{buttonText}</CardButton>
    </CardContainer>
  );
};


const HomePage = () => {
  return (
    <>
      <h1>Our products </h1>
      <Card imageSrc={myImage} title={'Motorsikal'} price={'1200RM'} buttonText={'Buy now'}/>
      <Card imageSrc={myImage} title={'Motorsikal'} price={'1200RM'} buttonText={'Buy now'}/>
    </>
  );
}

const AboutPage = () => {
  return (
    <>
      <h1>This is a About page</h1>
    </>
  );
}

const ContactPage = () => {
  return (
    <>
      <h1>This is a Contact page</h1>
    </>
  );
}

const CurrentUI = ({count}) => {
  if (count === 0) {
    return (<HomePage/>);
  } else if (count === 1) {
    return (<AboutPage/>);
  } else if (count === 2) {
    return (<ContactPage/>);
  } else {
    return (<>Error!</>);
  }
}


const MyApp = () => {
  
  const [count, setCount] = useState(0);
 

  return (
    <>
      <div class="menu">
        <div onClick={()=>setCount(0)} class="menu-item">Home</div>
        <div onClick={()=>setCount(1)} class="menu-item">About</div>
        <div onClick={()=>setCount(2)} class="menu-item">Contact</div>
      </div>
      <CurrentUI count={count}/>
    </>
  );
}

export default MyApp;
