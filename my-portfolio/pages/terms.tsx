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

export default function TermsPage() {
  return (
    <main className={classes.page}>
      <div className={classes.backgroundOverlay} />
      <div className={classes.container}>
        <h1 className={classes.title}>Terms & Conditions</h1>
        <div className={classes.divider} />
        <p className={classes.updated}>
          Last updated: {new Date().getFullYear()}
        </p>

        <section className={classes.section}>
          <h2 className={classes.heading}>Overview</h2>
          <p className={classes.text}>
            These Terms & Conditions govern your use of this website. By
            accessing or using this site, you agree to these terms.
          </p>
        </section>

        <section className={classes.section}>
          <h2 className={classes.heading}>Use of This Website</h2>
          <p className={classes.text}>
            This website is provided for informational, portfolio, and
            professional contact purposes. You agree to use this site in a way
            that is lawful and does not interfere with its operation or
            security.
          </p>
        </section>

        <section className={classes.section}>
          <h2 className={classes.heading}>Intellectual Property</h2>
          <p className={classes.text}>
            Unless otherwise stated, the content on this website, including but
            not limited to text, design, artwork, branding, code samples,
            graphics, and written materials, is the property of Vanessa Taylor
            and may not be copied, reproduced, distributed, or used without
            prior written permission.
          </p>
        </section>

        <section className={classes.section}>
          <h2 className={classes.heading}>Project and Work Samples</h2>
          <p className={classes.text}>
            Portfolio projects and creative work displayed on this site are
            presented for demonstration and informational purposes. Some work
            may reference collaborative efforts, past employers, educational
            projects, or conceptual work. All third-party names, brands, and
            trademarks remain the property of their respective owners.
          </p>
        </section>

        <section className={classes.section}>
          <h2 className={classes.heading}>External Links</h2>
          <p className={classes.text}>
            This website may contain links to third-party websites or platforms.
            Vanessa Taylor is not responsible for the content, policies, or
            practices of any external sites.
          </p>
        </section>

        <section className={classes.section}>
          <h2 className={classes.heading}>No Warranty</h2>
          <p className={classes.text}>
            This website and its content are provided on an “as is” and “as
            available” basis without warranties of any kind, express or
            implied.
          </p>
        </section>

        <section className={classes.section}>
          <h2 className={classes.heading}>Limitation of Liability</h2>
          <p className={classes.text}>
            To the fullest extent permitted by law, Vanessa Taylor will not be
            liable for any damages arising out of or related to your use of, or
            inability to use, this website.
          </p>
        </section>

        <section className={classes.section}>
          <h2 className={classes.heading}>Changes to These Terms</h2>
          <p className={classes.text}>
            These Terms & Conditions may be updated from time to time without
            prior notice. Continued use of the website after changes are posted
            constitutes acceptance of those changes.
          </p>
        </section>

        <section className={classes.section}>
          <h2 className={classes.heading}>Contact</h2>
          <p className={classes.text}>
            For questions about these Terms & Conditions, please use the contact
            information provided on this website.
          </p>
        </section>
      </div>
    </main>
  );
}