import React from "react";

const SocialIcons = ({ socialLinks }) => {
    return (
        <div className="flex flex-wrap justify-center gap-4 sm:gap-6">
            {socialLinks.map(({ name, icon, url, color }) => (
                <a
                    key={name}
                    href={url}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={name}
                    className="group relative flex items-center justify-center w-[clamp(3.5rem,10vw,5rem)] h-[clamp(3.5rem,10vw,5rem)] rounded-[clamp(1rem,2vw,1.5rem)] bg-white/[0.02] backdrop-blur-xl border border-white/[0.08] transition-all duration-500 ease-out hover:bg-white/[0.08] hover:border-white/20 hover:scale-110 hover:shadow-2xl active:scale-95"
                    style={{
                        "--hover-color": color,
                    }}
                >
                    {/* Animated gradient background on hover */}
                    <div
                        className="absolute inset-0 rounded-[clamp(1rem,2vw,1.5rem)] opacity-0 group-hover:opacity-20 transition-opacity duration-500 blur-xl"
                        style={{
                            background: `radial-gradient(circle at center, ${color}, transparent 70%)`
                        }}
                    />

                    {/* Dynamic border glow */}
                    <span
                        className="absolute inset-0 rounded-[clamp(1rem,2vw,1.5rem)] opacity-0 transition-all duration-500 group-hover:opacity-100"
                        style={{
                            boxShadow: `0 0 30px ${color}60, inset 0 0 15px ${color}30`,
                            border: `1px solid ${color}40`
                        }}
                    />

                    {/* Icon with enhanced transparency effect */}
                    <div className="relative z-10 w-[clamp(1.75rem,5vw,2.5rem)] h-[clamp(1.75rem,5vw,2.5rem)] flex items-center justify-center">
                        <img
                            src={icon}
                            alt={name}
                            className="w-full h-full object-contain transition-all duration-500 opacity-70 group-hover:opacity-100 group-hover:scale-110 group-hover:drop-shadow-[0_0_8px_rgba(255,255,255,0.5)]"
                        />
                    </div>

                    {/* Glass reflection overlay */}
                    <div className="absolute inset-0 rounded-[clamp(1rem,2vw,1.5rem)] bg-gradient-to-br from-white/10 via-transparent to-transparent opacity-50 group-hover:opacity-70 transition-opacity duration-500 pointer-events-none" />

                    {/* Subtle shine effect */}
                    <div className="absolute inset-0 rounded-[clamp(1rem,2vw,1.5rem)] overflow-hidden pointer-events-none">
                        <div className="absolute -top-1/2 -left-1/2 w-full h-full bg-gradient-to-br from-white/20 to-transparent rotate-45 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                    </div>
                </a>
            ))}
        </div>
    );
};

export default SocialIcons;
