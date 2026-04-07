import React from 'react';

const Hero: React.FC = () => {
  // Hourglass layout 
  const topStyle = { clipPath: 'polygon(0 0, 100% 0, 50% 50%)' };
  const rightStyle = { clipPath: 'polygon(100% -.5%, 100% 100.5%, 50% 50%)' };
  const bottomStyle = { clipPath: 'polygon(0 100%, 100% 100%, 50% 50%)' };
  const leftStyle = { clipPath: 'polygon(0 -.5%, 0 100.5%, 50% 50%)' };

  const classes = {
    sunriseSunsetBackground: 'absolute inset-0 bg-[linear-gradient(90deg,#FFF1E6_0%,#FFD166_14%,#FDBA74_26%,#FB7185_42%,#C084FC_58%,#7C3AED_76%,#312E81_90%,#0B1220_100%)]',
    heroContainer: 'relative w-full aspect-square overflow-hidden ',
  };

  return (
    <div className={classes.heroContainer}>
      <div style={topStyle} className={classes.sunriseSunsetBackground}>
      </div>
      <div style={rightStyle} className={classes.sunriseSunsetBackground}></div>
      <div style={leftStyle} className={classes.sunriseSunsetBackground} />
      <div style={bottomStyle}>
      </div>
    </div>
  );
};

export default Hero;

// <p>Bridging imagination and implementation</p>
