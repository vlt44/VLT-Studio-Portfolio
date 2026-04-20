import React from "react";

const Game = () => {
  return (
    <div className={classes.gameContainer}>
        <h1 className={classes.title}>Let's Play</h1>
        <p className={classes.subtitle}>Late night. Don’t become takeout.</p>
        <p className={classes.instructions}>Stop the falling orders before they reach the ground.</p>
        <p className={classes.instructions}>← → Move • Space to shoot</p>
        <div>
          <iframe src="https://scratch.mit.edu/projects/382209881/embed" width="485" height="402" allowFullScreen></iframe>
        </div>
    </div>
  );
}

const classes = {
  gameContainer: 'justify-items-center place-self-center justify-self-center place-items-center text-align-center',
  
  wrapper: "absolute inset-0 flex flex-col items-center justify-center text-center px-6 pointer-events-none",

  title: `
    text-4xl md:text-6xl font-black tracking-tight
    text-white
    drop-shadow-[0_4px_12px_rgba(0,0,0,0.8)]
    mb-4
  `,

  subtitle: `
    text-lg md:text-xl font-medium
    text-white/80
    italic
    mb-6
  `,

  instructions: `
    text-base md:text-lg
    text-white/70
    leading-relaxed
  `,
};

export default Game;
