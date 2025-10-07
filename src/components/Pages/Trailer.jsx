import React from 'react';
//import '../../App.css';
import './Trailer.css';

function Trailer() {
  return (
    <div className='trailer-container'>
      <video 
        src="/videos/video-2.mp4" 
        autoPlay 
        loop 
        muted
        playsInline
        controls 
        className='trailer-video'
        onError={(e) => console.error('Video error:', e)}
        onLoadedData={() => console.log('Video loaded successfully')}
      >
        Your browser does not support the video tag.
      </video>
      <div className='trailer-content'>
        <h1>ADVENTURE TRAILER</h1>
        <p>Experience the journey of a lifetime</p>
      </div>
    </div>
  );
}

export default Trailer;
