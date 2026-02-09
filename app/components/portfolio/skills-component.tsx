"use client"
import { skills } from "@/app/utils/constants";

export default function Skills() {
    return (
        <section id="skills" className="flex flex-col min-h-screen items-center justify-center p-6">
            <div className="text-center mb-16 px-6">
                <h1 className="text-6xl md:text-8xl font-black mb-4 tracking-tighter">
                    <span className="bg-linear-to-r from-purple-400 via-pink-400 to-orange-400 bg-clip-text text-transparent">
                        Tech Stack
                    </span>
                </h1>
                <p className="text-gray-400 text-lg font-light">Technologies I work with</p>
            </div>

            <div className="flex flex-wrap justify-center gap-4 max-w-6xl">
                {skills.map((skill, idx) => {
                    const Icon = skill.icon;
                    return (
                        <div
                            key={idx}
                            className="group relative animate-fade-in-up"
                            style={{ animationDelay: `${idx * 90}ms` }}
                        >
                            <div className={`
                                flex items-center gap-3 px-6 py-3
                                bg-linear-to-r from-gray-800/60 to-gray-900/60
                                backdrop-blur-md border border-gray-700/50
                                rounded-full
                                transition-all duration-300
                                hover:scale-110 hover:border-gray-500
                                hover:shadow-lg
                            `}>
                                <div className={`p-2 rounded-full bg-linear-to-br ${skill.color}`}>
                                    <Icon className="w-5 h-5 text-white" />
                                </div>
                                <span className="text-white font-medium">
                                    {skill.name}
                                </span>
                            </div>

                            {/* Subtle glow */}
                            <div className={`
                                absolute inset-0 rounded-full bg-linear-to-br ${skill.color}
                                opacity-0 group-hover:opacity-20 blur-xl transition-opacity duration-300 -z-10
                            `}></div>
                        </div>
                    );
                })}
            </div>
        </section>
    );
}