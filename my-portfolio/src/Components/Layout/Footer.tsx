import React from "react";
import { Github, Instagram, Linkedin } from "lucide-react";

const classes = {
  footer: "bg-transparent text-white py-10 px-6",
  container: "max-w-6xl mx-auto",

  topRow: "flex place-content-center items-center border-b border-white/10 pb-8",
  connectText: "text-sm opacity-80",

  socialLinks: "flex items-center space-x-6",
  icon: "w-6 h-6 opacity-60 hover:opacity-100 hover:scale-110 transition-all",

  bottomRow: "flex flex-col items-center pt-6 text-xs opacity-70 leading-relaxed",
  legalLinks: "flex space-x-6",
  link: "hover:opacity-100 transition-opacity",
};

const Footer = () => {
  return (
    <footer className={classes.footer}>
      <div className={classes.container}>
        
        {/* Top Row */}
        <div className={classes.topRow}>

          <div className={classes.socialLinks}>
            <a
              href="https://github.com/vlt44"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Github className={classes.icon} />
            </a>

            <a
              href="https://instagram.com/vlt44_"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Instagram className={classes.icon} />
            </a>
          </div>
        </div>

        {/* Bottom Row */}
        <div className={classes.bottomRow}>
          <p>© {new Date().getFullYear()} VLT Studio</p>

          <div className={classes.legalLinks}>
            <a href="/terms" className={classes.link}>
              Terms & Conditions
            </a>
            
            <a href="/privacy" className={classes.link}>
              Privacy Policy
            </a>
          </div>

          <p>Designed & Built by Vanessa Taylor</p>
        </div>

      </div>
    </footer>
  );
};

export default Footer;