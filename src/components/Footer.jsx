import React from "react";
import { ArrowUp } from "lucide-react";
import { styles } from "../styles";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className={`w-full py-8 border-t border-white/5 bg-[#09090E]/90 backdrop-blur-md relative z-10`}>
      <div className={`max-w-7xl mx-auto ${styles.paddingX} flex flex-col sm:flex-row justify-between items-center gap-4`}>
        <p className="text-secondary text-sm font-normal text-center sm:text-left">
          © {new Date().getFullYear()} <span className="text-white font-semibold">Ameen</span>. Built with React, Three.js &amp; Tailwind CSS.
        </p>

        <button
          onClick={scrollToTop}
          className="flex items-center gap-2 text-sm text-[#06b6d4] hover:text-white font-medium transition-colors group px-3 py-1.5 rounded-lg hover:bg-white/5"
          aria-label="Scroll back to top"
        >
          <span>Back to Top</span>
          <ArrowUp className="w-4 h-4 group-hover:-translate-y-1 transition-transform" />
        </button>
      </div>
    </footer>
  );
};

export default Footer;
