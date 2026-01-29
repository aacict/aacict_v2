"use client"
import { Designation, FirstName, LastName, PersonalStatement, SocialLinks } from "@/app/utils/constants";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { ReactTyped } from "react-typed";

export default function Intro() {
    return (
        <section id="intro" className="flex flex-col min-h-screen items-center justify-center">
            <div className="container all-section-container m-auto px-24 z-10">
                <div id="typed-strings">
                    <ReactTyped
                        className="text-5xl h-16"
                        strings={[
                            `I'm ${FirstName} ${LastName}`,
                            `I'm a ${Designation}`,
                        ]}
                        typeSpeed={100}
                        backSpeed={50}
                        backDelay={1500}
                        loop
                    />
                </div>
                <div className="py-4 text-justify">
                    {PersonalStatement}
                </div>
                <div className="social-icons py-4 px-2">
                    {SocialLinks.map(({ href, icon, style }, index) => (
                        <a
                            key={index}
                            href={href}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="m-1"
                        >
                            <FontAwesomeIcon icon={icon} beat style={style} />
                        </a>
                    ))}
                </div>
            </div>
        </section >
    );
}