import React, { useState } from 'react';
import Stars from './Stars';

const Hero: React.FC = () => {
  const [videoFailed, setVideoFailed] = useState(false);
  const videoSrc = '/backgroundHero.mp4';

  const bottomStyle = { clipPath: 'polygon(0 100%, 100% 100%, 50% 50%)' };

  return (
    <div className={classes.heroContainer}>
      <video
        autoPlay
        muted
        loop
        playsInline
        preload="metadata"
        className={classes.videoBg}
        src={videoSrc}
        onError={() => setVideoFailed(true)}
      >
        Your browser does not support the video tag.
      </video>

      {videoFailed && (
        <div className={classes.videoFallback}>
          Video unavailable in this browser.
        </div>
      )}

      <div style={bottomStyle} className={classes.sunriseSunsetBackground}>
          <Stars />
      </div>
    </div>
  );
};

const classes = {
  sunriseSunsetBackground:
    'absolute inset-0',

  heroContainer: 'relative w-full aspect-square overflow-hidden',

  videoBg: `
    absolute inset-0 z-0 h-full w-full
    object-cover
    opacity-80
    pointer-events-none
  `,

  videoFallback:
    'absolute inset-0 z-20 grid place-items-center bg-[radial-gradient(circle_at_20%_20%,#3b82f6_0%,#0f172a_50%,#020617_100%)] text-slate-100 text-sm tracking-wide uppercase',
};

export default Hero;

