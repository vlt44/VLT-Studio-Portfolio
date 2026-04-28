import React from "react";

const ContactMe: React.FC = () => {
  return (
    <section className={classes.section}>
      <div className={classes.background} aria-hidden="true" />
      <div className={classes.topWave} style={waveStyles.bottom} aria-hidden="true" />
      <div className={classes.bottomWave} style={waveStyles.top} aria-hidden="true" />

      <div className={classes.content}>
        <h2 className={classes.title}>Contact Me</h2>
        <form className={classes.form}>
          <label className={classes.field}>
            <span className={classes.label}>Name</span>
            <input
              type="text"
              name="name"
              autoComplete="name"
              placeholder="Your name"
              className={classes.input}
            />
          </label>

          <label className={classes.field}>
            <span className={classes.label}>Email</span>
            <input
              type="email"
              name="email"
              autoComplete="email"
              placeholder="you@example.com"
              className={classes.input}
            />
          </label>

          <label className={classes.field}>
            <span className={classes.label}>Message</span>
            <textarea
              name="message"
              rows={5}
              placeholder="Excited to connect with you..."
              className={classes.textarea}
            />
          </label>

          <button type="submit" className={classes.button}>
            Send message
          </button>
        </form>
      </div>
    </section>
  );
};

const classes = {
  section:
    "relative isolate mx-4 my-10 min-h-[100svh] overflow-hidden rounded-[2rem] bg-slate-950/35 px-6 py-32 text-white shadow-[0_30px_90px_rgba(0,0,0,0.65)] backdrop-blur-sm sm:mx-8 lg:mx-12",
  sectionMask: {},
  background:
    "absolute inset-0 z-0 bg-[url('/ContactMeBackground.jpg')] bg-cover bg-center bg-no-repeat",
  topWave:
    "absolute inset-x-0 top-0 z-10 h-20 pointer-events-none",
  bottomWave:
    "absolute inset-x-0 bottom-0 z-10 h-20 pointer-events-none",

  content: "relative z-20 mx-auto max-w-3xl text-center",
  title: "text-7xl font-bold tracking-tight leading-tight sm:text-6xl text-white drop-shadow-[0_8px_30px_rgba(0,0,0,0.7)]",
  text: "mt-4 text-base text-white/85 sm:text-lg",
  form:
    "mt-10 flex flex-col gap-4 text-left",
  field: "flex flex-col gap-2",
  label: "text-xl font-bold leading-6 text-white drop-shadow-md",
  input:
    "w-full rounded-2xl border border-white/15 bg-white px-4 py-3 text-slate-900 placeholder:text-slate-500 outline-none transition focus:border-cyan-300/60 focus:ring-2 focus:ring-cyan-300/20",
  textarea:
    "w-full rounded-2xl border border-white/15 bg-white px-4 py-3 text-slate-900 placeholder:text-slate-500 outline-none transition focus:border-cyan-300/60 focus:ring-2 focus:ring-cyan-300/20",
  button:
    "inline-flex items-center justify-center rounded-full bg-cyan-300 px-6 py-3 font-semibold text-slate-950 transition hover:bg-cyan-200 focus:outline-none focus:ring-2 focus:ring-cyan-200/60",
};

const waveSvg =
  '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 120" preserveAspectRatio="none"><path fill="#000000" d="M0 70C120 10 240 10 360 70C480 130 600 130 720 70C840 10 960 10 1080 70C1200 130 1320 130 1440 70V120H0Z"/></svg>';

const waveStyles = {
  top: {
    backgroundImage: `url("data:image/svg+xml;utf8,${encodeURIComponent(waveSvg)}")`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "100% 100%",
    backgroundPosition: "top center",
  },
  bottom: {
    backgroundImage: `url("data:image/svg+xml;utf8,${encodeURIComponent(waveSvg)}")`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "100% 100%",
    backgroundPosition: "top center",
    transform: "rotate(180deg)",
  },
} as const;

export default ContactMe;