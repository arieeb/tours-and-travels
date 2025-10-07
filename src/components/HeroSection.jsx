import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../App.css';
import  Button  from './Button.jsx'; 
import './HeroSection.css';
import video1 from '../../public/videos/video-1.mp4';


function HeroSection() {
  return (
    <div className='hero-container'>
      <video src={video1} autoPlay loop muted />
      <h1>ADVENTURE AWAITS</h1>
      <p>What are you waiting for?</p>
      <div className='hero-btns'>
        <Button
          className='btns'
          buttonStyle='btn--outline'
          buttonSize='btn--large'
        >
          GET STARTED
        </Button>
        <Button
          className='btns'
          buttonStyle='btn--primary'
          buttonSize='btn--large'
          path='/trailer'
        >
          WATCH TRAILER <i className='far fa-play-circle' />
        </Button>
      </div>
    </div>
  );
}

export default HeroSection;
