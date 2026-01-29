"use client"
import { Designation, FirstName, LastName, PersonalStatement, SocialLinks } from "@/app/utils/constants";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { ReactTyped } from "react-typed";

export default function Intro() {
    return (
        <section id="intro" className="w-full relative flex flex-col min-h-screen items-center justify-center bg-linear-to-br from-gray-950 via-gray-900 to-black text-white">
            <div className="inline-block">
                <span className="absolute left-5 top-5 inset-0 font-mono tracking-widest text-blue-400 uppercase animate-slide-down">
                    Welcome to my portfolio
                </span>
            </div>
            <div className="container p-4 flex flex-col gap-8 text-center">
                <div className="relative">
                    <ReactTyped
                        className="text-xl md:text-4xl lg:text-5xl font-black h-20 md:h-28 bg-linear-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent"
                        strings={[
                            `I'm ${FirstName} ${LastName}`,
                            `I'm a ${Designation}`,
                        ]}
                        typeSpeed={80}
                        backSpeed={40}
                        backDelay={2000}
                        loop
                    />
                    {/* Cursor glow effect */}
                    <div className="absolute -right-2 top-0 w-1 h-20 md:h-28 bg-linear-to-b from-blue-400 to-purple-400 opacity-70 blur-sm"></div>
                </div>

                <div className="text-left p-4">
                    <p className="text-md md:text-lg text-gray-300 leading-relaxed font-light">
                        {PersonalStatement}
                    </p>
                </div>

                <div className="flex gap-4 pt-6 animate-slide-up animation-delay-200">
                    {SocialLinks.map(({ href, icon, style }, index) => (
                        <a
                            key={index}
                            href={href}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group relative p-4 bg-linear-to-br from-gray-800/40 to-gray-900/40 backdrop-blur-sm border border-gray-700/50 rounded-xl hover:border-gray-600 transition-all duration-300 hover:scale-110 hover:-translate-y-1"
                            style={{ animationDelay: `${index * 100}ms` }}
                        >
                            <FontAwesomeIcon
                                icon={icon}
                                className="text-2xl text-gray-300 group-hover:text-white transition-colors duration-300"
                                style={style}
                            />
                            {/* Glow effect on hover */}
                            <div className="absolute inset-0 rounded-xl bg-linear-to-r from-blue-500 to-purple-500 opacity-0 group-hover:opacity-20 blur-xl transition-opacity duration-300 -z-10"></div>
                        </a>
                    ))}
                </div>
            </div>

            {/* Scroll indicator */}
            <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
                <div className="w-6 h-10 border-2 border-gray-600 rounded-full flex justify-center p-1">
                    <div className="w-1 h-2 bg-linear-to-b from-blue-400 to-purple-400 rounded-full animate-scroll-dot"></div>
                </div>
            </div>
        </section>
    );
}