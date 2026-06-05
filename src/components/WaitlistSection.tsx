"use client";

import { AnimatedSection } from "./AnimatedSection";
import { ArrowRight, MapPin, Wallet, Sparkles } from "lucide-react";

export function WaitlistSection() {
    return (
        <section id="waitlist" className="py-24 bg-[#1A1A1A] relative overflow-hidden">
            {/* Warm glow accents */}
            <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-[#F26B3A]/10 rounded-full blur-[120px] pointer-events-none" />
            <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-[#F26B3A]/8 rounded-full blur-[100px] pointer-events-none" />

            <div className="max-w-4xl mx-auto px-6 relative z-10">

                {/* Header */}
                <AnimatedSection className="text-center mb-12">
                    <span className="text-[#F26B3A] text-sm font-semibold tracking-wider uppercase mb-4 block">
                        FOR STUDENTS
                    </span>
                    <h2 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
                        Coming to your uni.<br />
                        <span className="text-[#F26B3A]">Be the first to know.</span>
                    </h2>
                    <p className="text-lg text-white/60 max-w-2xl mx-auto font-medium leading-relaxed">
                        We're expanding campus by campus. Join the student waitlist and we'll reach your university faster — and lock you in at our lowest prices.
                    </p>
                </AnimatedSection>

                {/* Perks row */}
                <AnimatedSection className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
                    <div className="flex items-center gap-2.5 bg-white/5 border border-white/10 px-5 py-3 rounded-full text-white/70 text-sm font-medium backdrop-blur-sm">
                        <Wallet size={16} className="text-[#F26B3A]" />
                        Meals at below-retail prices
                    </div>
                    <div className="flex items-center gap-2.5 bg-white/5 border border-white/10 px-5 py-3 rounded-full text-white/70 text-sm font-medium backdrop-blur-sm">
                        <MapPin size={16} className="text-[#F26B3A]" />
                        Launching near your campus
                    </div>
                    <div className="flex items-center gap-2.5 bg-white/5 border border-white/10 px-5 py-3 rounded-full text-white/70 text-sm font-medium backdrop-blur-sm">
                        <Sparkles size={16} className="text-[#F26B3A]" />
                        Early access &amp; priority spots
                    </div>
                </AnimatedSection>

                {/* CTA Card */}
                <AnimatedSection>
                    <div className="bg-[#FAF7F4] rounded-[2.5rem] p-10 md:p-14 text-center shadow-2xl shadow-black/40 relative overflow-hidden">
                        {/* Subtle inner glow */}
                        <div className="absolute -top-20 left-1/2 -translate-x-1/2 w-64 h-64 bg-[#FFE8DF] rounded-full blur-[60px] opacity-50 pointer-events-none" />

                        <div className="relative z-10">
                            <p className="text-[#1A1A1A]/60 text-base font-medium mb-3 uppercase tracking-widest text-sm">
                                Takes 2 minutes
                            </p>
                            <h3 className="text-3xl md:text-4xl font-bold text-[#1A1A1A] mb-4">
                                Join the Student Waitlist
                            </h3>
                            <p className="text-[#1A1A1A]/60 font-medium mb-10 max-w-md mx-auto text-lg leading-relaxed">
                                Tell us which university you're at. We'll prioritise campuses with the most demand — your sign-up literally moves us faster.
                            </p>

                            <a
                                href="https://tally.so/r/RGj5zj"
                                target="_blank"
                                rel="noopener noreferrer"
                                id="waitlist-cta-button"
                                className="inline-flex items-center gap-3 bg-[#F26B3A] hover:bg-[#d95c2e] text-white px-10 py-4 rounded-full font-bold text-lg transition-all shadow-lg shadow-[#F26B3A]/30 hover:shadow-xl hover:shadow-[#F26B3A]/40 hover:-translate-y-0.5 group"
                            >
                                Fill in the Waitlist Survey
                                <ArrowRight size={20} className="transition-transform group-hover:translate-x-1" />
                            </a>

                            <p className="mt-6 text-sm text-[#1A1A1A]/40 font-medium">
                                No spam. Just a heads-up when we're at your campus. 🎓
                            </p>
                        </div>
                    </div>
                </AnimatedSection>
            </div>
        </section>
    );
}
