'use client'

import React from 'react';
import FloatingArea from '../src/Components/Layout/FloatingArea';
import Footer from '../src/Components/Layout/Footer';
import Hero from '../src/Components/Layout/Hero';
import ScrollProgress from '../src/Components/Layout/ScrollProgress';
import Stars from '../src/Components/Layout/Stars';

export default function Page() {
  return (
    <div>
      <div role="status" aria-live="polite" className={classes.bannerShell}>
        <div className={classes.bannerInner}>
          Website under maintenance. Coming May 2026!
        </div>
      </div>

      <ScrollProgress />
      <main className={classes.main}>
        <Stars />
        <Hero />
        <FloatingArea />
        <Footer />
      </main>
    </div>
  );
}

const classes = {
  bannerShell: 'sticky top-0 z-50 bg-black/80 text-white',
  bannerInner: 'px-4 py-2 text-center text-sm',
  main: 'relative z-10'
};