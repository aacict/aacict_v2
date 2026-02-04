"use client"
import { useState } from "react";
import { Code, Briefcase, Building, ExternalLink, Github } from 'lucide-react';
import Link from 'next/link';
import { clientProjects, personalProjects } from "@/app/utils/constants";

export default function Projects() {
    const [filter, setFilter] = useState('all');

    const filteredPersonal = filter === 'all' || filter === 'personal' ? personalProjects : [];
    const filteredClient = filter === 'all' || filter === 'client' ? clientProjects : [];

    return (
        <section className="w-full min-h-screen bg-linear-to-br from-gray-950 via-gray-900 to-black text-white overflow-hidden">
            <div className="relative z-10 px-4">
                {/* Header */}
                <div className="container mx-auto px-6 pt-20 pb-12">
                    <div className="text-center max-w-4xl mx-auto">
                        <div className="inline-block mb-4">
                            <span className="text-sm font-mono tracking-widest text-blue-400 uppercase">Portfolio</span>
                        </div>
                        <h1 className="text-6xl md:text-8xl font-black mb-6 tracking-tighter">
                            <span className="bg-linear-to-r from-blue-400 via-cyan-400 to-teal-400 bg-clip-text text-transparent">
                                Featured Projects
                            </span>
                        </h1>
                        <p className="text-gray-400 text-lg font-light mb-12">
                            A collection of personal experiments and professional client work
                        </p>

                        {/* Filter Buttons */}
                        <div className="flex gap-4 justify-center mb-16">
                            <button
                                onClick={() => setFilter('all')}
                                className={`px-6 py-3 rounded-xl font-semibold transition-all duration-300 ${filter === 'all'
                                    ? 'bg-linear-to-r from-blue-500 to-cyan-500 text-white shadow-lg shadow-blue-500/50'
                                    : 'bg-gray-800/50 text-gray-400 hover:bg-gray-700/50 border border-gray-700'
                                    }`}
                            >
                                All Projects
                            </button>
                            <button
                                onClick={() => setFilter('personal')}
                                className={`px-6 py-3 rounded-xl font-semibold transition-all duration-300 flex items-center gap-2 ${filter === 'personal'
                                    ? 'bg-linear-to-r from-purple-500 to-pink-500 text-white shadow-lg shadow-purple-500/50'
                                    : 'bg-gray-800/50 text-gray-400 hover:bg-gray-700/50 border border-gray-700'
                                    }`}
                            >
                                <Code className="w-5 h-5" />
                                Personal
                            </button>
                            <button
                                onClick={() => setFilter('client')}
                                className={`px-6 py-3 rounded-xl font-semibold transition-all duration-300 flex items-center gap-2 ${filter === 'client'
                                    ? 'bg-linear-to-r from-emerald-500 to-teal-500 text-white shadow-lg shadow-emerald-500/50'
                                    : 'bg-gray-800/50 text-gray-400 hover:bg-gray-700/50 border border-gray-700'
                                    }`}
                            >
                                <Briefcase className="w-5 h-5" />
                                Client Work
                            </button>
                        </div>
                    </div>
                </div>

                {/* Projects Sections */}
                <div className="space-y-16 pb-20">
                    {/* Personal Projects */}
                    {filteredPersonal.length > 0 && (
                        <div>
                            <div className="container mx-auto px-6 mb-8">
                                <div className="flex items-center gap-3">
                                    <div className="p-2 bg-linear-to-r from-purple-500 to-pink-500 rounded-lg">
                                        <Code className="text-white w-6 h-6" />
                                    </div>
                                    <h2 className="text-3xl font-bold text-white">Personal Projects</h2>
                                    <div className="h-px flex-1 bg-linear-to-r from-gray-700 to-transparent ml-4"></div>
                                </div>
                            </div>

                            <div className="overflow-hidden">
                                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                                    {filteredPersonal.map((project, idx) => (
                                        <div
                                            key={`personal-${idx}`}
                                            className="group relative shrink-0 w-100"
                                        >
                                            <div className="bg-linear-to-br from-gray-800/40 to-gray-900/40 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 h-full hover:border-gray-600 transition-all duration-300 hover:scale-105">
                                                {/* Project Header */}
                                                <div className="flex items-start justify-between mb-4">
                                                    <div className={`p-3 rounded-xl bg-linear-to-br ${project.color}`}>
                                                        <Code className="text-white w-6 h-6" />
                                                    </div>
                                                    <span className="text-xs font-mono text-gray-500">{project.year}</span>
                                                </div>

                                                {/* Title */}
                                                <h3 className="text-xl font-bold text-white mb-3">{project.title}</h3>

                                                {/* Description */}
                                                <p className="text-gray-400 text-sm mb-4">{project.description}</p>

                                                {/* Tags */}
                                                <div className="flex flex-wrap gap-2 mb-6">
                                                    {project.tags.map((tag) => (
                                                        <span
                                                            key={tag}
                                                            className="px-3 py-1 bg-gray-800/60 text-gray-300 text-xs rounded-full border border-gray-700"
                                                        >
                                                            {tag}
                                                        </span>
                                                    ))}
                                                </div>

                                                {/* Links */}
                                                <div className="flex gap-3">
                                                    <Link
                                                        href={project.github}
                                                        target="_blank"
                                                        rel="noopener noreferrer"
                                                        className="flex-1 flex items-center justify-center gap-2 px-4 py-2 bg-gray-800 hover:bg-gray-700 text-white rounded-lg transition-all duration-300 hover:scale-105"
                                                    >
                                                        <Github className="w-4 h-4" />
                                                        <span className="text-sm font-medium">Code</span>
                                                    </Link>
                                                    {project.web && <Link
                                                        href={project.web}
                                                        target="_blank"
                                                        rel="noopener noreferrer"
                                                        className={`flex-1 flex items-center justify-center gap-2 px-4 py-2 bg-linear-to-r ${project.color} text-white rounded-lg transition-all duration-300 hover:scale-105 shadow-lg`}
                                                    >
                                                        <ExternalLink className="w-4 h-4" />
                                                        <span className="text-sm font-medium">Live</span>
                                                    </Link>}
                                                </div>
                                            </div>

                                            {/* Glow effect */}
                                            <div className={`absolute inset-0 rounded-2xl bg-linear-to-br ${project.color} opacity-0 group-hover:opacity-20 blur-xl transition-opacity duration-300 -z-10`}></div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    )}

                    {/* Client Projects */}
                    {filteredClient.length > 0 && (
                        <div>
                            <div className="container mx-auto px-6 mb-8">
                                <div className="flex items-center gap-3">
                                    <div className="p-2 bg-linear-to-r from-emerald-500 to-teal-500 rounded-lg">
                                        <Briefcase className="text-white w-6 h-6" />
                                    </div>
                                    <h2 className="text-3xl font-bold text-white">Client Projects</h2>
                                    <div className="h-px flex-1 bg-linear-to-r from-gray-700 to-transparent ml-4"></div>
                                </div>
                            </div>

                            <div className="overflow-hidden">
                                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                                    {filteredClient.map((project, idx) => (
                                        <div
                                            key={`client-${idx}`}
                                            className="group relative shrink-0 w-100"
                                        >
                                            <div className="bg-linear-to-br from-gray-800/40 to-gray-900/40 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 h-full hover:border-gray-600 transition-all duration-300 hover:scale-105">
                                                {/* Project Header */}
                                                <div className="flex items-start justify-between mb-4">
                                                    <div className={`p-3 rounded-xl bg-linear-to-br ${project.color}`}>
                                                        <Building className="text-white w-6 h-6" />
                                                    </div>
                                                    <span className="text-xs font-mono text-gray-500">{project.year}</span>
                                                </div>

                                                {/* Company */}
                                                <div className="flex items-center gap-2 mb-2">
                                                    <Briefcase className="text-gray-500 w-3 h-3" />
                                                    <span className="text-xs font-medium text-gray-400">{project.company}</span>
                                                </div>

                                                {/* Title */}
                                                <h3 className="text-xl font-bold text-white mb-3">{project.title}</h3>

                                                {/* Description */}
                                                <p className="text-gray-400 text-sm mb-4">{project.description}</p>

                                                {/* Tags */}
                                                <div className="flex flex-wrap gap-2 mb-6">
                                                    {project.tags.map((tag) => (
                                                        <span
                                                            key={tag}
                                                            className="px-3 py-1 bg-gray-800/60 text-gray-300 text-xs rounded-full border border-gray-700"
                                                        >
                                                            {tag}
                                                        </span>
                                                    ))}
                                                </div>

                                                {/* Link */}
                                                <Link
                                                    href={project.web}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className={`w-full flex items-center justify-center gap-2 px-4 py-2 bg-linear-to-r ${project.color} text-white rounded-lg transition-all duration-300 hover:scale-105 shadow-lg`}
                                                >
                                                    <ExternalLink className="w-4 h-4" />
                                                    <span className="text-sm font-medium">Client</span>
                                                </Link>
                                            </div>

                                            {/* Glow effect */}
                                            <div className={`absolute inset-0 rounded-2xl bg-linear-to-br ${project.color} opacity-0 group-hover:opacity-20 blur-xl transition-opacity duration-300 -z-10`}></div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </section>
    );
}