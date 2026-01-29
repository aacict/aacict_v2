"use client"
import { skills } from "@/app/utils/constants";
export default function Skills() {
    // Create 3 rows with different speeds
    const row1 = skills.slice(0, 10)
    const row2 = skills.slice(10, 20)
    const row3 = skills.slice(20)

    return (
        <section id="skills" className="flex flex-col min-h-screen items-center justify-center">
            <div className="text-center mb-16 px-6">
                <h1 className="text-6xl md:text-8xl font-black mb-4 tracking-tighter">
                    <span className="bg-linear-to-r from-purple-400 via-pink-400 to-orange-400 bg-clip-text text-transparent">
                        Tech Stack
                    </span>
                </h1>
                <p className="text-gray-400 text-lg font-light">Technologies I work with</p>
            </div>

            <div className="space-y-8">
                <div className="overflow-hidden">
                    <div className="flex gap-6 animate-scroll-right">
                        {row1.map((skill, idx) => {
                            const Icon = skill.icon;
                            return (
                                <div
                                    key={`r1-${idx}`}
                                    className="group relative shrink-0"
                                >
                                    <div className="flex items-center gap-4 bg-linear-to-br from-gray-800/40 to-gray-900/40 backdrop-blur-sm border border-gray-700/50 rounded-2xl px-6 py-4 hover:border-gray-600 transition-all duration-300 hover:scale-110">
                                        <div className={`p-3 rounded-xl bg-linear-to-br ${skill.color}`}>
                                            <Icon className="w-6 h-6 text-white" />
                                        </div>
                                        <span className="text-white font-semibold text-lg whitespace-nowrap">
                                            {skill.name}
                                        </span>
                                    </div>
                                    {/* Glow effect */}
                                    <div className={`absolute inset-0 rounded-2xl bg-linear-to-br ${skill.color} opacity-0 group-hover:opacity-20 blur-xl transition-opacity duration-300 -z-10`}></div>
                                </div>
                            );
                        })}
                    </div>
                </div>

                {/* Row 2 - Scroll left */}
                <div className="overflow-hidden">
                    <div className="flex gap-6 animate-scroll-left">
                        {row2.map((skill, idx) => {
                            const Icon = skill.icon;
                            return (
                                <div
                                    key={`r2-${idx}`}
                                    className="group relative shrink-0"
                                >
                                    <div className="flex items-center gap-4 bg-linear-to-br from-gray-800/40 to-gray-900/40 backdrop-blur-sm border border-gray-700/50 rounded-2xl px-6 py-4 hover:border-gray-600 transition-all duration-300 hover:scale-110">
                                        <div className={`p-3 rounded-xl bg-linear-to-br ${skill.color}`}>
                                            <Icon className="w-6 h-6 text-white" />
                                        </div>
                                        <span className="text-white font-semibold text-lg whitespace-nowrap">
                                            {skill.name}
                                        </span>
                                    </div>
                                    {/* Glow effect */}
                                    <div className={`absolute inset-0 rounded-2xl bg-linear-to-br ${skill.color} opacity-0 group-hover:opacity-20 blur-xl transition-opacity duration-300 -z-10`}></div>
                                </div>
                            );
                        })}
                    </div>
                </div>

                {/* Row 3 - Scroll right (faster) */}
                <div className="overflow-hidden">
                    <div className="flex gap-6 animate-scroll-right-fast">
                        {row3.map((skill, idx) => {
                            const Icon = skill.icon;
                            return (
                                <div
                                    key={`r3-${idx}`}
                                    className="group relative shrink-0"
                                >
                                    <div className="flex items-center gap-4 bg-linear-to-br from-gray-800/40 to-gray-900/40 backdrop-blur-sm border border-gray-700/50 rounded-2xl px-6 py-4 hover:border-gray-600 transition-all duration-300 hover:scale-110">
                                        <div className={`p-3 rounded-xl bg-linear-to-br ${skill.color}`}>
                                            <Icon className="w-6 h-6 text-white" />
                                        </div>
                                        <span className="text-white font-semibold text-lg whitespace-nowrap">
                                            {skill.name}
                                        </span>
                                    </div>
                                    {/* Glow effect */}
                                    <div className={`absolute inset-0 rounded-2xl bg-linear-to-br ${skill.color} opacity-0 group-hover:opacity-20 blur-xl transition-opacity duration-300 -z-10`}></div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>
        </section >
    );
};