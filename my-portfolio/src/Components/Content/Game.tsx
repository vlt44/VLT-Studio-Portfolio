import React from "react";

const Game = () => {
  return (
    <div className={classes.gameContainer}>
        <h1 className={classes.title}>Let's Play</h1>
        <p className={classes.title}>Pollo Rico</p>
        <p className={classes.subtitleTight}>Late night. Don’t become takeout.</p>
        <p className={classes.subtitle}>Stop the falling orders from reaching the street.</p>
        <p className={classes.instructions}>← → Move • Space to shoot on desktop</p>
        <p className={classes.instructions}>Tap ← → • Yellow button to shoot on mobile</p>
        <div className={classes.frameWrapper}>
          <iframe
            className={classes.frame}
            src="https://scratch.mit.edu/projects/382209881/embed"
            title="Late night game"
            allowFullScreen
          ></iframe>
        </div>
    </div>
  );
}

const classes = {
  gameContainer: 'w-full px-4 md:px-6 py-12 flex flex-col items-center text-center',

  frameWrapper: 'relative mt-4 w-full max-w-[485px] overflow-hidden rounded-lg',

  frame: 'h-auto w-full [aspect-ratio:485/402] min-h-[280px] md:min-h-[402px]',
  
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

  subtitleTight: `
    text-lg md:text-xl font-medium
    text-white/80
    italic
    mb-0
  `,

  instructions: `
    text-base md:text-lg
    text-white/70
    leading-relaxed
  `,
};

export default Game;
