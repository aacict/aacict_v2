'use client';

import { useState, useRef, useEffect } from 'react';
import { Send, Sparkles, User, Bot, Loader2 } from 'lucide-react';
import { FirstName, suggestedQuestions } from '@/app/utils/constants';
import Link from 'next/link';

interface Message {
    id: string;
    role: 'user' | 'assistant';
    content: string;
    timestamp: Date;
}

export default function AskAshish() {
    const [messages, setMessages] = useState<Message[]>([
        {
            id: '0',
            role: 'assistant',
            content: `Hi! I'm ${FirstName}'s AI assistant trained on his experience, projects, and expertise. Ask me anything about his work, skills, or background!`,
            timestamp: new Date(),
        },
    ]);
    const [input, setInput] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const messagesEndRef = useRef<HTMLDivElement>(null);
    const inputRef = useRef<HTMLTextAreaElement>(null);

    // Scroll to bottom when messages change
    useEffect(() => {
        messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    }, [messages]);

    // Auto-resize textarea
    useEffect(() => {
        if (inputRef.current) {
            inputRef.current.style.height = 'auto';
            inputRef.current.style.height = `${inputRef.current.scrollHeight}px`;
        }
    }, [input]);

    const handleSend = async () => {
        if (!input.trim() || isLoading) return;

        const userMessage: Message = {
            id: Date.now().toString(),
            role: 'user',
            content: input.trim(),
            timestamp: new Date(),
        };

        setMessages((prev) => [...prev, userMessage]);
        setInput('');
        setIsLoading(true);

        try {
            const response = await fetch('/api/ask-ashish', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ message: input.trim() }),
            });

            const data = await response.json();

            const assistantMessage: Message = {
                id: (Date.now() + 1).toString(),
                role: 'assistant',
                content: data.response || 'Sorry, I encountered an error. Please try again.',
                timestamp: new Date(),
            };

            setMessages((prev) => [...prev, assistantMessage]);
        } catch (error) {
            console.error('Error:', error);
            const errorMessage: Message = {
                id: (Date.now() + 1).toString(),
                role: 'assistant',
                content: 'Sorry, something went wrong. Please try again later.',
                timestamp: new Date(),
            };
            setMessages((prev) => [...prev, errorMessage]);
        } finally {
            setIsLoading(false);
        }
    };

    const handleKeyDown = (e: React.KeyboardEvent) => {
        if (e.key === 'Enter' && !e.shiftKey) {
            e.preventDefault();
            handleSend();
        }
    };

    return (
        <div className="min-h-screen bg-linear-to-br from-gray-950 via-gray-900 to-black text-white">
            {/* Background effects */}
            <div className="fixed inset-0 opacity-30">
                <div className="absolute top-0 -left-4 w-96 h-96 bg-blue-600 rounded-full mix-blend-multiply filter blur-3xl animate-blob"></div>
                <div className="absolute top-0 -right-4 w-96 h-96 bg-purple-600 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-2000"></div>
                <div className="absolute -bottom-8 left-20 w-96 h-96 bg-cyan-600 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-4000"></div>
            </div>

            <div className="relative z-10 flex flex-col h-screen max-w-5xl mx-auto">
                {/* Header */}
                <div className="shrink-0 border-b border-gray-800/50 backdrop-blur-sm bg-gray-900/20">
                    <div className="container mx-auto px-6 py-6">
                        <div className="flex items-center justify-between">
                            <div className="flex items-center gap-4">
                                <div className="p-3 bg-linear-to-r from-blue-500 to-purple-500 rounded-xl">
                                    <Sparkles className="w-6 h-6 text-white" />
                                </div>
                                <div>
                                    <h1 className="text-2xl font-bold bg-linear-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                                        Ask {FirstName}
                                    </h1>
                                    <p className="text-sm text-gray-400">AI-powered assistant trained on my expertise</p>
                                </div>
                            </div>
                            <Link
                                href="/"
                                className="px-4 py-2 bg-gray-800/50 hover:bg-gray-700/50 border border-gray-700 rounded-lg text-sm text-gray-300 hover:text-white transition-all duration-300"
                            >
                                ← Back to Portfolio
                            </Link>
                        </div>
                    </div>
                </div>

                {/* Messages area */}
                <div className="flex-1 overflow-y-auto px-6 py-8 space-y-6">
                    {messages.map((message, idx) => (
                        <div
                            key={message.id}
                            className={`flex gap-4 animate-slide-up ${message.role === 'user' ? 'flex-row-reverse' : 'flex-row'
                                }`}
                            style={{ animationDelay: `${idx * 50}ms` }}
                        >
                            {/* Avatar */}
                            <div
                                className={`shrink-0 w-10 h-10 rounded-xl flex items-center justify-center ${message.role === 'user'
                                    ? 'bg-linear-to-br from-emerald-500 to-teal-500'
                                    : 'bg-linear-to-br from-blue-500 to-purple-500'
                                    }`}
                            >
                                {message.role === 'user' ? (
                                    <User className="w-5 h-5 text-white" />
                                ) : (
                                    <Bot className="w-5 h-5 text-white" />
                                )}
                            </div>

                            {/* Message bubble */}
                            <div
                                className={`group max-w-[70%] ${message.role === 'user' ? 'items-end' : 'items-start'
                                    } flex flex-col gap-2`}
                            >
                                <div
                                    className={`relative px-5 py-3 rounded-2xl ${message.role === 'user'
                                        ? 'bg-linear-to-br from-emerald-600/80 to-teal-600/80 backdrop-blur-sm'
                                        : 'bg-gray-800/40 backdrop-blur-sm border border-gray-700/50'
                                        }`}
                                >
                                    <p className="text-sm leading-relaxed whitespace-pre-wrap">{message.content}</p>

                                    {/* Glow effect */}
                                    {message.role === 'assistant' && (
                                        <div className="absolute inset-0 rounded-2xl bg-linear-to-br from-blue-500 to-purple-500 opacity-0 group-hover:opacity-10 blur-xl transition-opacity duration-300 -z-10"></div>
                                    )}
                                </div>

                                {/* Timestamp */}
                                <span className="text-xs text-gray-500 px-2">
                                    {message.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                                </span>
                            </div>
                        </div>
                    ))}

                    {/* Loading indicator */}
                    {isLoading && (
                        <div className="flex gap-4 animate-slide-up">
                            <div className="shrink-0 w-10 h-10 rounded-xl flex items-center justify-center bg-linear-to-br from-blue-500 to-purple-500">
                                <Bot className="w-5 h-5 text-white" />
                            </div>
                            <div className="px-5 py-3 rounded-2xl bg-gray-800/40 backdrop-blur-sm border border-gray-700/50">
                                <div className="flex gap-2 items-center">
                                    <Loader2 className="w-4 h-4 animate-spin text-blue-400" />
                                    <span className="text-sm text-gray-400">Thinking...</span>
                                </div>
                            </div>
                        </div>
                    )}

                    <div ref={messagesEndRef} />
                </div>

                {/* Suggested questions (show only when no messages yet) */}
                {messages.length === 1 && (
                    <div className="shrink-0 px-6 pb-4">
                        <p className="text-xs text-gray-500 mb-3 font-medium">Suggested questions:</p>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                            {suggestedQuestions.map((question, idx) => (
                                <button
                                    key={idx}
                                    onClick={() => setInput(question)}
                                    className="text-left text-sm px-4 py-3 bg-gray-800/30 hover:bg-gray-800/50 border border-gray-700/30 hover:border-gray-600 rounded-xl text-gray-400 hover:text-gray-200 transition-all duration-300"
                                >
                                    {question}
                                </button>
                            ))}
                        </div>
                    </div>
                )}

                {/* Input area */}
                <div className="shrink-0 border-t border-gray-800/50 backdrop-blur-sm bg-gray-900/20">
                    <div className="container mx-auto px-6 py-4">
                        <div className="relative flex items-center gap-3">
                            {/* Textarea */}
                            <div className="flex-1 relative">
                                <textarea
                                    ref={inputRef}
                                    value={input}
                                    onChange={(e) => setInput(e.target.value)}
                                    onKeyDown={handleKeyDown}
                                    placeholder={`Ask ${FirstName} anything...`}
                                    rows={1}
                                    className="w-full px-5 py-3 pr-12 bg-gray-800/40 backdrop-blur-sm border border-gray-700/50 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-gray-600 resize-none max-h-32 transition-all duration-300"
                                    disabled={isLoading}
                                />
                                <div className="absolute right-3 bottom-3 text-xs text-gray-600">
                                    {input.length > 0 && `${input.length}`}
                                </div>
                            </div>

                            {/* Send button */}
                            <button
                                onClick={handleSend}
                                disabled={!input.trim() || isLoading}
                                className="p-3 bg-linear-to-r from-blue-500 to-purple-500 rounded-xl hover:scale-105 hover:shadow-lg hover:shadow-blue-500/50 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
                            >
                                {isLoading ? (
                                    <Loader2 className="w-5 h-5 text-white animate-spin" />
                                ) : (
                                    <Send className="w-5 h-5 text-white" />
                                )}
                            </button>
                        </div>
                        <p className="text-xs text-gray-600 mt-2 text-center">
                            Press Enter to send • Shift+Enter for new line
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}