import React from "react";

const SocialIcons = ({ socialLinks }) => {
    return (
        <div className="grid grid-cols-2 gap-6 w-full max-w-sm md:max-w-none md:flex md:justify-center md:gap-8">
            {socialLinks.map(({ name, icon: Icon, url, color }) => (
                <a
                    key={name}
                    href={url}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={name}
                    className="group relative flex items-center justify-center w-16 h-16 rounded-2xl bg-white/5 backdrop-blur-lg border border-white/10 transition-all duration-300 ease-[cubic-bezier(0.175,0.885,0.32,1.275)] hover:scale-110 active:scale-90"
                    style={{
                        "--hover-color": color,
                    }}
                >
                    {/* Dynamic Glow using :before or inline styles. 
              Using inline styles for shadows is cleaner for dynamic colors props.
          */}
                    <span
                        className="absolute inset-0 rounded-2xl opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                        style={{
                            boxShadow: `0 0 20px ${color}, inset 0 0 10px ${color}40`,
                            borderColor: color
                        }}
                    />

                    <Icon
                        className="z-10 text-gray-300 transition-colors duration-300 group-hover:text-white"
                        size={28}
                        strokeWidth={1.5}
                    />

                    {/* Subtle reflection overlay for glass effect */}
                    <div className="absolute inset-0 rounded-2xl bg-gradient-to-tr from-white/10 to-transparent pointer-events-none" />
                </a>
            ))}
        </div>
    );
};

export default SocialIcons;
