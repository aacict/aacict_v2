"use client"
import { Designation, FirstName, LastName, PersonalStatement, SocialLinks } from "@/app/utils/constants";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faDownload } from "@fortawesome/free-solid-svg-icons";
import { ReactTyped } from "react-typed";
import Image from "next/image";
import { Dancing_Script } from "next/font/google";
const signature = Dancing_Script({ subsets: ["latin"] });

const PHOTO_PATH = "/images/Ashish_Thapa.png";
const RESUME_PATH = "/resume/Ashish_Thapa_Resume_Software_Developer.pdf";

export default function Intro() {
    return (
        <section id="intro" className="w-full relative flex flex-col min-h-screen items-center justify-center bg-linear-to-br from-gray-950 via-gray-900 to-black text-white overflow-hidden">

            <div className="absolute left-5 top-5 z-10">
                <span className={`${signature.className} font-serif tracking-widest text-blue-400 uppercase text-xs`}>
                    Developed by {FirstName}
                </span>
            </div>

            <div className="w-full m-auto z-10">
                <div className="flex flex-col lg:flex-row items-center justify-center gap-20 sm:gap:30 md:gap-40 lg:gap-50 pt-20">

                    {/* ── Left: Photo ── */}
                    <div className="relative shrink-0 animate-fade-in ">
                        {/* Rotating border ring */}
                        <div className="absolute inset-0 rounded-full bg-linear-to-br from-blue-500 via-purple-500 to-pink-500 animate-spin-slow p-0.75">
                            <div className="h-full w-full rounded-full bg-gray-950"></div>
                        </div>

                        {/* Glow behind photo */}
                        <div className="absolute inset-0 rounded-full bg-linear-to-br from-blue-500 via-purple-500 to-pink-500 blur-2xl opacity-40 -z-10"></div>

                        {/* Photo container */}
                        <div className="relative w-56 h-54 md:w-72 md:h-70 rounded-full overflow-hidden border-4 border-gray-900">
                            <Image
                                src={PHOTO_PATH}
                                alt={`${FirstName} ${LastName}`}
                                fill
                                sizes="(max-width: 768px) 224px, 288px"
                                priority
                                className="object-cover object-top"
                            />
                        </div>

                        {/* Small floating badge */}
                        <div className="absolute -bottom-2 -right-2 bg-linear-to-r from-blue-500 to-purple-500 text-white text-xs font-bold px-4 py-2 rounded-full shadow-lg shadow-blue-500/40 whitespace-nowrap">
                            {Designation}
                        </div>
                    </div>

                    {/* ── Right: Content ── */}
                    <div className="flex flex-col gap-6 text-center lg:text-left">

                        {/* Typed heading */}
                        <div className="relative">
                            <ReactTyped
                                className="text-xl md:text-4xl lg:text-5xl font-black bg-linear-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent"
                                strings={[
                                    `Hi, I'm ${FirstName} ${LastName}`,
                                    `I'm a ${Designation}`,
                                ]}
                                typeSpeed={80}
                                backSpeed={40}
                                backDelay={2000}
                                loop
                            />
                        </div>

                        {/* Personal statement */}
                        <p className="text-md md:text-lg text-gray-300 leading-relaxed font-light max-w-xl lg:mx-0">
                            {PersonalStatement}
                        </p>

                        {/* Social icons + Resume button row */}
                        <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 pt-4">

                            {/* Social links */}
                            {SocialLinks.map(({ href, icon, style }, index) => (
                                <a
                                    key={index}
                                    href={href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="group relative p-4 bg-linear-to-br from-gray-800/40 to-gray-900/40 backdrop-blur-sm border border-gray-700/50 rounded-xl hover:border-gray-600 transition-all duration-300 hover:scale-110 hover:-translate-y-1"
                                >
                                    <FontAwesomeIcon
                                        icon={icon}
                                        className="text-2xl text-gray-300 group-hover:text-white transition-colors duration-300"
                                        style={style}
                                    />
                                    <div className="absolute inset-0 rounded-xl bg-linear-to-r from-blue-500 to-purple-500 opacity-0 group-hover:opacity-20 blur-xl transition-opacity duration-300 -z-10"></div>
                                </a>
                            ))}

                            {/* Resume download button */}
                            <a
                                href={RESUME_PATH}
                                download={`${FirstName}_${LastName}_Resume.pdf`}
                                className="group relative flex items-center gap-3 px-6 py-4 bg-linear-to-r from-blue-500 to-purple-500 text-white font-semibold rounded-xl shadow-lg shadow-blue-500/30 hover:shadow-blue-500/50 hover:scale-105 hover:-translate-y-1 transition-all duration-300"
                            >
                                <FontAwesomeIcon
                                    icon={faDownload}
                                    className="text-lg group-hover:animate-bounce"
                                />
                                <span>Resume</span>

                                {/* Shine sweep on hover */}
                                <div className="absolute inset-0 rounded-xl overflow-hidden">
                                    <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-500 bg-linear-to-r from-transparent via-white/20 to-transparent"></div>
                                </div>
                            </a>
                        </div>
                    </div>
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