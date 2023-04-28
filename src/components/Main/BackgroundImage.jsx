import React, { useState, useEffect } from 'react';
import styles from '../../style';

const PhotoDisplay = ({ photos }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % photos.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [photos.length]);

  return (
    <div
      style={{
        position: 'relative',
        overflow: 'hidden',
        marginBottom: '-100px',
        paddingBottom: '100px',
        minHeight: '80vh',
      }}
    >
      <img
        src={photos[currentIndex]}
        alt={`Photo ${currentIndex + 1}`}
        style={{
          width: '100%',
          height: '100%',
          objectFit: 'contain',
          filter: 'brightness(70%)',
        }}
      />
      <div
        style={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          textAlign: 'center',
          color: 'white',
          zIndex: '1',
          width: '100%',
          padding: '10px'
        }}
      >
        <h1
          style={{
            fontSize: '4rem',
            fontWeight: 'bold',
            textShadow: '2px 2px 4px #000000',
          }}
        >
          Parallax Text Effect
        </h1>
        <p style={{ fontSize: '2rem' }}>
          This is a demo of a parallax text effect using React and CSS.
        </p>
      </div>
      <div
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          bottom: 70,
          right: 0,
          backgroundColor: 'rgba(0, 0, 0, 0.7)',
          background: 'linear-gradient(to bottom, rgba(0,0,0,0.7) 10%, rgba(0,4,15) 100%)',
        }}
      />
    </div>
  );
};

export default PhotoDisplay;
