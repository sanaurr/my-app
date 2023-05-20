import './App.css';
import { useState } from 'react';
import React from 'react';
import myImage from './demo-img/download.jpg';


const HomePage = () => {
  return (
    <>
      <h1>Our products </h1>
      <div>
        <img src={myImage} alt="KTM" /> 
      </div>
        
      
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
