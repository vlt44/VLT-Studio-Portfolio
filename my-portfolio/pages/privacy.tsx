import React from "react";

const classes = {
  page: `
    relative min-h-screen text-white px-6 py-28 overflow-hidden
    bg-[#05070d]
  `,

  // subtle star/noise overlay
  backgroundOverlay: `
    absolute inset-0 opacity-20 pointer-events-none
    bg-[radial-gradient(circle_at_20%_30%,rgba(255,255,255,0.15)_0px,transparent_2px),
        radial-gradient(circle_at_80%_70%,rgba(255,255,255,0.1)_0px,transparent_2px)]
    bg-[length:200px_200px]
  `,

  container: "relative max-w-2xl mx-auto",

  title: `
    text-4xl md:text-5xl font-light tracking-tight text-center
    text-white/90 mb-6
  `,

  updated: `
    text-sm text-white/40 text-center mb-10
  `,

  divider: `
    w-16 h-px bg-white/20 mx-auto mb-16
  `,

  section: "mb-14",

  heading: `
    text-xl md:text-2xl font-medium tracking-tight
    text-white/85 mb-4
  `,

  text: `
    text-white/65 leading-relaxed
  `,

  list: `
    list-disc pl-6 text-white/65 leading-relaxed space-y-3
  `,
};

export default function PrivacyPage() {
  return (
    <main className={classes.page}>
      <div className={classes.backgroundOverlay} />
      <div className={classes.container}>
        <h1 className={classes.title}>Privacy Policy</h1>
        <p className={classes.updated}>
          Last updated: {new Date().getFullYear()}
        </p>

        <section className={classes.section}>
          <h2 className={classes.heading}>Overview</h2>
          <p className={classes.text}>
            This website is a personal portfolio operated by Vanessa Taylor.
            This Privacy Policy explains what information may be collected,
            how it is used, and how it is protected when you visit this site.
          </p>
        </section>

        <section className={classes.section}>
          <h2 className={classes.heading}>Information Collected</h2>
          <p className={classes.text}>
            Depending on how you use this website, the following information may
            be collected:
          </p>
          <ul className={classes.list}>
            <li>Name and email address, if you submit a contact form</li>
            <li>Any message or details you choose to provide</li>
            <li>
              Basic usage data such as pages visited, browser type, device
              information, and general site activity
            </li>
          </ul>
        </section>

        <section className={classes.section}>
          <h2 className={classes.heading}>How Information Is Used</h2>
          <ul className={classes.list}>
            <li>To respond to inquiries or messages you send</li>
            <li>To maintain, improve, and understand website performance</li>
            <li>To review overall site usage and visitor engagement</li>
          </ul>
        </section>

        <section className={classes.section}>
          <h2 className={classes.heading}>Analytics and Cookies</h2>
          <p className={classes.text}>
            This site may use analytics or similar tools to understand general
            visitor behavior, such as which pages are viewed and how the site is
            used. These tools may use cookies or related technologies to collect
            anonymous or aggregated information.
          </p>
        </section>

        <section className={classes.section}>
          <h2 className={classes.heading}>Sharing of Information</h2>
          <p className={classes.text}>
            Personal information is not sold or traded. Information may be
            shared only when reasonably necessary to operate this site, such as
            through trusted hosting, analytics, or form service providers.
          </p>
        </section>

        <section className={classes.section}>
          <h2 className={classes.heading}>Data Security</h2>
          <p className={classes.text}>
            Reasonable measures are taken to protect information submitted
            through this website. However, no method of transmission over the
            internet or electronic storage is completely secure.
          </p>
        </section>

        <section className={classes.section}>
          <h2 className={classes.heading}>Third-Party Links</h2>
          <p className={classes.text}>
            This website may include links to third-party platforms such as
            GitHub, LinkedIn, Instagram, or other external websites. Their
            privacy practices are governed by their own policies.
          </p>
        </section>

        <section className={classes.section}>
          <h2 className={classes.heading}>Your Choices</h2>
          <p className={classes.text}>
            You may choose not to submit personal information through contact
            forms. You can also manage cookies through your browser settings,
            though some site features may be affected.
          </p>
        </section>

        <section className={classes.section}>
          <h2 className={classes.heading}>Updates to This Policy</h2>
          <p className={classes.text}>
            This Privacy Policy may be updated from time to time. Any changes
            will be reflected on this page with an updated effective date.
          </p>
        </section>

        <section className={classes.section}>
          <h2 className={classes.heading}>Contact</h2>
          <p className={classes.text}>
            For questions about this Privacy Policy, you can contact Vanessa
            Taylor through the contact information provided on this website.
          </p>
        </section>
      </div>
    </main>
  );
}