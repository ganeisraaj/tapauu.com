import Image from "next/image";
import Link from "next/link";
import { Clock, ShoppingBag, ArrowRight, CheckCircle2, MapPin, CalendarDays, Users, TrendingUp, Mail } from "lucide-react";
import { AnimatedSection } from "@/components/AnimatedSection";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 backdrop-blur-md bg-[#FAF7F4]/80 border-b border-[#1A1A1A]/5">
        <div className="max-w-7xl mx-auto px-6 h-28 flex items-center justify-between">
          <div className="flex items-center">
            <Image
              src="/logo.svg"
              alt="TAPAUU Logo"
              width={300}
              height={300}
              priority
              className="h-20 md:h-24 w-auto"
            />
          </div>

          <div className="hidden md:flex items-center gap-8 text-sm font-medium">
            <Link href="#problem" className="hover:text-[#F26B3A] transition-colors">About</Link>
            <Link href="#how-it-works" className="hover:text-[#F26B3A] transition-colors">How It Works</Link>
            <Link href="#story" className="hover:text-[#F26B3A] transition-colors">Our Story</Link>
            <Link href="#news" className="hover:text-[#F26B3A] transition-colors">News</Link>
            <Link href="#team" className="hover:text-[#F26B3A] transition-colors">Team</Link>
            <Link href="#contact" className="hover:text-[#F26B3A] transition-colors">Contact</Link>
          </div>

          <a
            href="https://tapauu-pilot.vercel.app"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#F26B3A] hover:bg-[#d95c2e] text-white px-6 py-2.5 rounded-full text-sm font-semibold transition-all shadow-sm hover:shadow-md"
          >
            Try the App
          </a>
        </div>
      </nav>

      <main className="flex-grow">
        {/* Hero Section */}
        <section className="relative pt-24 pb-32 overflow-hidden w-full">
          {/* Subtle Accent Background Gradient */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-gradient-radial from-[#FFE8DF] to-transparent opacity-70 -z-10 blur-3xl pointer-events-none" />

          <div className="max-w-7xl mx-auto px-6 flex flex-col items-center text-center">
            <AnimatedSection>
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold max-w-4xl tracking-tight leading-[1.1] mb-6">
                Guaranteed savings for students. <br className="hidden md:block" />
                <span className="text-[#F26B3A]">Guaranteed revenue for vendors.</span>
              </h1>
            </AnimatedSection>

            <AnimatedSection className="mt-2">
              <p className="text-lg md:text-xl text-[#1A1A1A]/70 max-w-2xl mb-10 leading-relaxed font-medium">
                TAPAUU is a prepaid meal wallet platform connecting budget-conscious university students to campus hawkers — at below-retail prices.
              </p>
            </AnimatedSection>

            <AnimatedSection className="flex flex-col sm:flex-row items-center gap-4 mb-14">
              <a
                href="https://tapauu-pilot.vercel.app"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto bg-[#F26B3A] hover:bg-[#d95c2e] text-white px-8 py-3.5 rounded-full font-semibold transition-all shadow-sm hover:shadow-md flex items-center justify-center gap-2"
              >
                Get Started <ArrowRight size={18} />
              </a>
              <Link
                href="#how-it-works"
                className="w-full sm:w-auto bg-transparent border-2 border-[#F26B3A] text-[#F26B3A] hover:bg-[#FFE8DF]/30 px-8 py-3.5 rounded-full font-semibold transition-all flex items-center justify-center"
              >
                Learn How It Works
              </Link>
            </AnimatedSection>

            <AnimatedSection className="flex flex-wrap justify-center gap-3 md:gap-6 mb-20 w-full">
              <div className="flex items-center gap-2 bg-white/60 backdrop-blur-sm border border-[#1A1A1A]/5 px-4 py-2 hover:bg-white transition-colors rounded-full shadow-sm">
                <Users size={16} className="text-[#F26B3A]" />
                <span className="text-sm font-medium">1.3M university students in Malaysia</span>
              </div>
              <div className="flex items-center gap-2 bg-white/60 backdrop-blur-sm border border-[#1A1A1A]/5 px-4 py-2 hover:bg-white transition-colors rounded-full shadow-sm">
                <ShoppingBag size={16} className="text-[#F26B3A]" />
                <span className="text-sm font-medium">RM4 saved every 6 meals</span>
              </div>
              <div className="flex items-center gap-2 bg-white/60 backdrop-blur-sm border border-[#1A1A1A]/5 px-4 py-2 hover:bg-white transition-colors rounded-full shadow-sm">
                <MapPin size={16} className="text-[#F26B3A]" />
                <span className="text-sm font-medium">Live in Sunway</span>
              </div>
            </AnimatedSection>

            <AnimatedSection className="w-full max-w-4xl relative">
              <div className="aspect-[16/9] md:aspect-[21/9] w-full rounded-[2rem] overflow-hidden shadow-2xl shadow-[#1A1A1A]/10 border-[6px] border-white bg-white">
                <Image
                  src="/hero_app_dashboard.png"
                  alt="TAPAUU App Dashboard"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            </AnimatedSection>
          </div>
        </section>

        {/* The Problem */}
        <section id="problem" className="py-24 bg-white">
          <div className="max-w-7xl mx-auto px-6 relative">
            <div className="absolute top-1/2 left-0 w-96 h-96 bg-[#FFE8DF] rounded-full blur-[100px] opacity-40 pointer-events-none" />

            <AnimatedSection className="text-center mb-16">
              <span className="text-[#F26B3A] text-sm font-semibold tracking-wider uppercase mb-3 block">WHY TAPAUU EXISTS</span>
              <h2 className="text-3xl md:text-4xl font-bold">A broken ecosystem.</h2>
            </AnimatedSection>

            <div className="grid md:grid-cols-2 gap-8 mb-16 relative z-10 w-full max-w-5xl mx-auto">
              <AnimatedSection className="bg-[#FAF7F4] p-10 rounded-[2rem] border border-[#1A1A1A]/5 shadow-sm">
                <div className="bg-white w-12 h-12 rounded-2xl flex items-center justify-center mb-6 shadow-sm">
                  <Users className="text-[#F26B3A]" size={24} />
                </div>
                <h3 className="text-2xl font-bold mb-4">For Students</h3>
                <p className="text-[#1A1A1A]/70 text-lg leading-relaxed font-medium">
                  Malaysia has 1.3 million university students eating near campus every day. Most are spending inconsistently, skipping meals, or making last-minute decisions with limited money.
                </p>
              </AnimatedSection>

              <AnimatedSection className="bg-[#FAF7F4] p-10 rounded-[2rem] border border-[#1A1A1A]/5 shadow-sm">
                <div className="bg-white w-12 h-12 rounded-2xl flex items-center justify-center mb-6 shadow-sm">
                  <TrendingUp className="text-[#F26B3A]" size={24} />
                </div>
                <h3 className="text-2xl font-bold mb-4">For Vendors</h3>
                <p className="text-[#1A1A1A]/70 text-lg leading-relaxed font-medium">
                  80% of small campus hawkers experience unpredictable daily sales. They cook blind every morning with no idea how many customers will show up.
                </p>
              </AnimatedSection>
            </div>

            <AnimatedSection>
              <div className="max-w-3xl mx-auto text-center bg-[#FFE8DF]/50 px-8 py-6 rounded-2xl border border-[#F26B3A]/10">
                <p className="text-xl md:text-2xl font-bold text-[#F26B3A]">
                  The real problem isn&apos;t food waste. It&apos;s demand inconsistency.
                </p>
              </div>
            </AnimatedSection>
          </div>
        </section>

        {/* How It Works */}
        <section id="how-it-works" className="py-24 bg-[#FAF7F4]">
          <div className="max-w-7xl mx-auto px-6">
            <AnimatedSection className="text-center mb-16">
              <span className="text-[#F26B3A] text-sm font-semibold tracking-wider uppercase mb-3 block">HOW IT WORKS</span>
              <h2 className="text-3xl md:text-4xl font-bold">Simple for students. Powerful for vendors.</h2>
            </AnimatedSection>

            <div className="grid md:grid-cols-2 gap-12 lg:gap-20 max-w-5xl mx-auto mb-16">
              <AnimatedSection>
                <div className="space-y-8 relative">
                  <div className="absolute left-[19px] top-4 bottom-4 w-0.5 bg-[#F26B3A]/20"></div>

                  <div className="relative flex gap-6">
                    <div className="w-10 h-10 rounded-full bg-white border-2 border-[#F26B3A] flex items-center justify-center text-[#F26B3A] font-bold z-10 shrink-0">1</div>
                    <div>
                      <h4 className="text-xl font-bold mb-2 mt-1.5">For Students</h4>
                      <ul className="space-y-4">
                        <li className="flex items-start gap-3">
                          <CheckCircle2 className="text-[#F26B3A] shrink-0 mt-0.5" size={20} />
                          <span className="text-[#1A1A1A]/80 font-medium">Subscribe to a prepaid meal package</span>
                        </li>
                        <li className="flex items-start gap-3">
                          <CheckCircle2 className="text-[#F26B3A] shrink-0 mt-0.5" size={20} />
                          <span className="text-[#1A1A1A]/80 font-medium">Browse participating vendors near campus</span>
                        </li>
                        <li className="flex items-start gap-3">
                          <CheckCircle2 className="text-[#F26B3A] shrink-0 mt-0.5" size={20} />
                          <span className="text-[#1A1A1A]/80 font-medium">Redeem your meal at below-retail prices</span>
                        </li>
                        <li className="flex items-start gap-3">
                          <CheckCircle2 className="text-[#F26B3A] shrink-0 mt-0.5" size={20} />
                          <span className="text-[#1A1A1A]/80 font-medium">No decision fatigue. Smart spending.</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </AnimatedSection>

              <AnimatedSection>
                <div className="space-y-8 relative">
                  <div className="absolute left-[19px] top-4 bottom-4 w-0.5 bg-[#F26B3A]/20"></div>

                  <div className="relative flex gap-6">
                    <div className="w-10 h-10 rounded-full bg-white border-2 border-[#F26B3A] flex items-center justify-center text-[#F26B3A] font-bold z-10 shrink-0">2</div>
                    <div>
                      <h4 className="text-xl font-bold mb-2 mt-1.5">For Vendors</h4>
                      <ul className="space-y-4">
                        <li className="flex items-start gap-3">
                          <CheckCircle2 className="text-[#F26B3A] shrink-0 mt-0.5" size={20} />
                          <span className="text-[#1A1A1A]/80 font-medium">List your top meals on TAPAUU</span>
                        </li>
                        <li className="flex items-start gap-3">
                          <CheckCircle2 className="text-[#F26B3A] shrink-0 mt-0.5" size={20} />
                          <span className="text-[#1A1A1A]/80 font-medium">Receive pre-committed orders from subscribers</span>
                        </li>
                        <li className="flex items-start gap-3">
                          <CheckCircle2 className="text-[#F26B3A] shrink-0 mt-0.5" size={20} />
                          <span className="text-[#1A1A1A]/80 font-medium">Cook exactly what you know will sell</span>
                        </li>
                        <li className="flex items-start gap-3">
                          <CheckCircle2 className="text-[#F26B3A] shrink-0 mt-0.5" size={20} />
                          <span className="text-[#1A1A1A]/80 font-medium">Get paid daily — predictable cash flow</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </AnimatedSection>
            </div>

            <AnimatedSection>
              <div className="text-center">
                <p className="inline-block bg-[#1A1A1A] text-white px-8 py-4 rounded-xl text-lg font-bold shadow-xl shadow-[#1A1A1A]/10">
                  Students know what they'll spend. Vendors know what they'll sell.
                </p>
              </div>
            </AnimatedSection>
          </div>
        </section>

        {/* Our Story / Journey */}
        <section id="story" className="py-24 bg-white overflow-hidden">
          <div className="max-w-4xl mx-auto px-6">
            <AnimatedSection className="mb-16">
              <span className="text-[#F26B3A] text-sm font-semibold tracking-wider uppercase mb-3 block">OUR JOURNEY</span>
              <h2 className="text-3xl md:text-4xl font-bold">Listening to the market.</h2>
            </AnimatedSection>

            <div className="relative pl-6 md:pl-0">
              <div className="absolute left-[39px] md:left-1/2 md:-ml-[1px] top-0 bottom-0 w-[2px] bg-[#FAF7F4]"></div>

              {/* Stage 1 */}
              <AnimatedSection className="relative mb-12 flex flex-col md:flex-row items-start md:items-center w-full">
                <div className="md:w-1/2 md:pr-12 md:text-right mb-4 md:mb-0 hidden md:block">
                  <span className="text-[#F26B3A] font-bold block mb-1">Sep 2025 – Jan 2026</span>
                  <h4 className="text-2xl font-bold">What We Believed</h4>
                </div>
                <div className="absolute left-[39px] md:left-1/2 w-4 h-4 rounded-full bg-[#1A1A1A] transform -translate-x-[7px] md:-translate-x-1/2 border-4 border-white"></div>
                <div className="pl-16 md:pl-0 md:w-1/2 md:pl-12 w-full">
                  <div className="md:hidden mb-2">
                    <span className="text-[#F26B3A] font-bold block mb-1">Sep 2025 – Jan 2026</span>
                    <h4 className="text-2xl font-bold">What We Believed</h4>
                  </div>
                  <p className="bg-[#FAF7F4] p-5 rounded-2xl font-medium text-[#1A1A1A]/80 border border-[#1A1A1A]/5">
                    Built a surplus food auction model. Spoke to 50+ vendors across Sunway and Bangi. Shipped the first app version.
                  </p>
                </div>
              </AnimatedSection>

              {/* Stage 2 (Pivot) */}
              <AnimatedSection className="relative mb-12 flex flex-col md:flex-row items-start md:items-center w-full">
                <div className="md:w-1/2 md:pr-12 md:text-right w-full pl-16 md:pl-0 md:order-1 order-2 mt-4 md:mt-0">
                  <div className="bg-[#FFE8DF]/50 p-6 rounded-2xl border border-[#F26B3A]/20">
                    <p className="italic text-[#F26B3A] font-bold text-lg mb-2">&quot;80% of small vendors don&apos;t have a surplus problem. They have a demand problem.&quot;</p>
                    <p className="text-sm font-medium text-[#1A1A1A]/70">Market told us the real issue. We listened.</p>
                  </div>
                </div>
                <div className="absolute left-[39px] md:left-1/2 w-4 h-4 rounded-full bg-[#F26B3A] transform -translate-x-[7px] md:-translate-x-1/2 border-4 border-white shadow-[0_0_0_4px_rgba(242,107,58,0.2)]"></div>
                <div className="pl-16 md:pl-0 md:w-1/2 md:pl-12 w-full md:order-2 order-1">
                  <h4 className="text-2xl font-bold text-[#F26B3A]">The Pivot</h4>
                </div>
              </AnimatedSection>

              {/* Stage 3 */}
              <AnimatedSection className="relative flex flex-col md:flex-row items-start md:items-center w-full">
                <div className="md:w-1/2 md:pr-12 md:text-right mb-4 md:mb-0 hidden md:block">
                  <span className="text-[#F26B3A] font-bold block mb-1">Feb 2026 – Apr 2026</span>
                  <h4 className="text-2xl font-bold">What We Did About It</h4>
                </div>
                <div className="absolute left-[39px] md:left-1/2 w-4 h-4 rounded-full bg-[#1A1A1A] transform -translate-x-[7px] md:-translate-x-1/2 border-4 border-white"></div>
                <div className="pl-16 md:pl-0 md:w-1/2 md:pl-12 w-full">
                  <div className="md:hidden mb-2">
                    <span className="text-[#F26B3A] font-bold block mb-1">Feb 2026 – Apr 2026</span>
                    <h4 className="text-2xl font-bold">What We Did About It</h4>
                  </div>
                  <p className="bg-[#FAF7F4] p-5 rounded-2xl font-medium text-[#1A1A1A]/80 border border-[#1A1A1A]/5">
                    Pivoted to a meal subscription model. Built an operational MVP. Launched a live pilot in Sunway with 3 vendors, 9 meal options, and 10 student testers over 10 days.
                  </p>
                </div>
              </AnimatedSection>

            </div>
          </div>
        </section>

        {/* Pilot Results */}
        <section className="py-24 bg-[#1A1A1A] text-white">
          <div className="max-w-7xl mx-auto px-6">
            <AnimatedSection className="text-center mb-16">
              <span className="text-[#F26B3A] text-sm font-semibold tracking-wider uppercase mb-3 block">PILOT · SUNWAY 2026</span>
              <h2 className="text-3xl md:text-5xl font-bold mb-6">We didn't just build it.<br className="hidden md:block" /> We ran it.</h2>
              <p className="text-white/70 max-w-2xl mx-auto text-lg leading-relaxed">
                The pilot validated daily usage behavior, vendor satisfaction, and the redemption flow. Results directly shape our next subscription tiers and expansion plan.
              </p>
            </AnimatedSection>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 w-full max-w-4xl mx-auto">
              <AnimatedSection className="bg-white/5 border border-white/10 rounded-2xl p-6 md:p-8 text-center flex flex-col items-center justify-center backdrop-blur-md">
                <span className="text-4xl md:text-5xl font-bold text-[#F26B3A] mb-2 block">3</span>
                <span className="text-sm font-semibold tracking-widest uppercase text-white/60">Vendors</span>
              </AnimatedSection>
              <AnimatedSection className="bg-white/5 border border-white/10 rounded-2xl p-6 md:p-8 text-center flex flex-col items-center justify-center backdrop-blur-md">
                <span className="text-4xl md:text-5xl font-bold text-[#F26B3A] mb-2 block">9</span>
                <span className="text-sm font-semibold tracking-widest uppercase text-white/60">Meal Options</span>
              </AnimatedSection>
              <AnimatedSection className="bg-white/5 border border-white/10 rounded-2xl p-6 md:p-8 text-center flex flex-col items-center justify-center backdrop-blur-md">
                <span className="text-4xl md:text-5xl font-bold text-[#F26B3A] mb-2 block">10</span>
                <span className="text-sm font-semibold tracking-widest uppercase text-white/60">Student Testers</span>
              </AnimatedSection>
              <AnimatedSection className="bg-white/5 border border-white/10 rounded-2xl p-6 md:p-8 text-center flex flex-col items-center justify-center backdrop-blur-md">
                <span className="text-4xl md:text-5xl font-bold text-[#F26B3A] mb-2 block">10</span>
                <span className="text-sm font-semibold tracking-widest uppercase text-white/60">Days Live</span>
              </AnimatedSection>
            </div>
          </div>
        </section>

        {/* The Model */}
        <section className="py-24 bg-[#FAF7F4]">
          <div className="max-w-7xl mx-auto px-6">
            <AnimatedSection className="text-center mb-16">
              <span className="text-[#F26B3A] text-sm font-semibold tracking-wider uppercase mb-3 block">THE MODEL</span>
              <h2 className="text-3xl md:text-4xl font-bold">Everyone wins. That's the point.</h2>
            </AnimatedSection>

            <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto mb-10">
              <AnimatedSection className="bg-white p-8 rounded-3xl shadow-sm border border-[#1A1A1A]/5 hover:shadow-md transition-shadow">
                <Users className="text-[#F26B3A] mb-6" size={32} />
                <h3 className="text-2xl font-bold mb-4">Students</h3>
                <p className="text-[#1A1A1A]/70 font-medium">
                  Purchase a prepaid meal wallet → eliminate daily decision fatigue → skip the queues with rapid grab-and-go pickup
                </p>
              </AnimatedSection>

              <AnimatedSection className="bg-white p-8 rounded-3xl shadow-sm border border-[#1A1A1A]/5 hover:shadow-md transition-shadow">
                <ShoppingBag className="text-[#F26B3A] mb-6" size={32} />
                <h3 className="text-2xl font-bold mb-4">Vendors</h3>
                <p className="text-[#1A1A1A]/70 font-medium">
                  Receive pre-committed demand → offer meals at a fixed discounted rate → benefit from predictable daily cash flow
                </p>
              </AnimatedSection>

              <AnimatedSection className="bg-[#F26B3A] text-white p-8 rounded-3xl shadow-md border border-[#F26B3A]">
                <TrendingUp className="text-white mb-6" size={32} />
                <h3 className="text-2xl font-bold mb-4">Platform</h3>
                <p className="text-white/90 font-medium">
                  Captures RM1 per meal redeemed → scales through high-frequency daily usage → model improves as vendor trust deepens
                </p>
              </AnimatedSection>
            </div>

            <AnimatedSection className="text-center">
              <p className="text-sm text-[#1A1A1A]/50 font-medium italic">
                * These are pilot numbers. As vendors commit to deeper discounts, student savings grow and so do our margins.
              </p>
            </AnimatedSection>
          </div>
        </section>

        {/* Future Plans */}
        <section className="py-24 bg-white border-y border-[#1A1A1A]/5">
          <div className="max-w-7xl mx-auto px-6">
            <AnimatedSection className="mb-16 text-center">
              <span className="text-[#F26B3A] text-sm font-semibold tracking-wider uppercase mb-3 block">WHERE WE'RE GOING</span>
              <h2 className="text-3xl md:text-4xl font-bold">Building the campus infrastructure.</h2>
            </AnimatedSection>

            <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              <AnimatedSection className="bg-[#FAF7F4] p-8 rounded-3xl relative overflow-hidden group">
                <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:opacity-20 transition-opacity">
                  <MapPin size={100} />
                </div>
                <h3 className="text-[#F26B3A] text-lg font-bold mb-2">Phase 1</h3>
                <h4 className="text-2xl font-bold mb-4">Density Network</h4>
                <p className="font-medium text-[#1A1A1A]/70 leading-relaxed relative z-10">
                  We're saturating campus perimeters first. Our immediate goal is to onboard every single highly-trafficked vendor within a 1km radius of universities, creating unbeatable convenience.
                </p>
              </AnimatedSection>

              <AnimatedSection className="bg-[#FAF7F4] p-8 rounded-3xl relative overflow-hidden group">
                <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:opacity-20 transition-opacity">
                  <TrendingUp size={100} />
                </div>
                <h3 className="text-[#F26B3A] text-lg font-bold mb-2">Phase 2</h3>
                <h4 className="text-2xl font-bold mb-4">Deepening Discounts</h4>
                <p className="font-medium text-[#1A1A1A]/70 leading-relaxed relative z-10">
                  As transaction volume becomes highly predictable, we leverage this data to negotiate even steeper discounts for students without compromising the bottom line of our partners.
                </p>
              </AnimatedSection>

              <AnimatedSection className="bg-[#FAF7F4] p-8 rounded-3xl relative overflow-hidden group border border-[#F26B3A]/20 shadow-sm">
                <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:opacity-20 transition-opacity text-[#F26B3A]">
                  <Users size={100} />
                </div>
                <h3 className="text-[#F26B3A] text-lg font-bold mb-2">Phase 3</h3>
                <h4 className="text-2xl font-bold mb-4">Default Ecosystem</h4>
                <p className="font-medium text-[#1A1A1A]/70 leading-relaxed relative z-10">
                  TAPAUU evolves from an app to an infrastructure. If you're a student, your wallet is on TAPAUU. If you're a vendor near campus, your demand is generated by TAPAUU.
                </p>
              </AnimatedSection>
            </div>
          </div>
        </section>

        {/* In The News */}
        <section id="news" className="py-24 bg-white border-t border-[#1A1A1A]/5">
          <div className="max-w-7xl mx-auto px-6">
            <AnimatedSection className="text-center mb-16">
              <span className="text-[#F26B3A] text-sm font-semibold tracking-wider uppercase mb-3 block">PRESS & NEWS</span>
              <h2 className="text-3xl md:text-4xl font-bold">What people are saying about us.</h2>
            </AnimatedSection>

            <div className="flex justify-center max-w-3xl mx-auto">
              <div className="w-full group bg-[#FAF7F4]/50 border-2 border-dashed border-[#1A1A1A]/10 p-10 md:p-12 rounded-3xl flex flex-col items-center justify-center text-center">
                <div className="bg-white w-14 h-14 rounded-full flex items-center justify-center mb-6 shadow-sm border border-[#1A1A1A]/5 text-[#F26B3A]">
                  <Mail size={24} />
                </div>
                <h3 className="text-2xl font-bold mb-3">Are you a journalist?</h3>
                <p className="text-[#1A1A1A]/60 text-lg font-medium mb-8">We&apos;d love to share our story with you.</p>
                <a href="mailto:hello@tapauu.com" className="bg-white px-8 py-3 rounded-full font-semibold border border-[#1A1A1A]/10 hover:border-[#F26B3A] hover:text-[#F26B3A] transition-colors shadow-sm">
                  Get in Touch
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Meet the Team */}
        <section id="team" className="py-24 bg-[#FAF7F4]">
          <div className="max-w-7xl mx-auto px-6">
            <AnimatedSection className="text-center mb-16">
              <span className="text-[#F26B3A] text-sm font-semibold tracking-wider uppercase mb-3 block">THE FOUNDERS</span>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Built across time zones.</h2>
              <p className="text-lg text-[#1A1A1A]/70 max-w-2xl mx-auto font-medium">
                Three university students. One real problem. Built across Germany, the US, and on the ground in Sunway.
              </p>
            </AnimatedSection>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-4xl mx-auto">
              {/* Linath */}
              <AnimatedSection className="bg-white rounded-[2rem] p-4 pb-6 shadow-sm border border-[#1A1A1A]/5 flex flex-col items-center">
                <div className="w-full aspect-square relative rounded-[1.5rem] overflow-hidden mb-6 bg-[#FAF7F4]">
                  <Image src="/founder_linath.jpg" alt="Linath" fill className="object-cover object-top" />
                </div>
                <h3 className="text-xl font-bold">Linath</h3>
                <span className="text-[#F26B3A] font-semibold text-sm">Co-Founder & CFO</span>
              </AnimatedSection>

              {/* Raaj */}
              <AnimatedSection className="bg-white rounded-[2rem] p-4 pb-6 shadow-sm border border-[#1A1A1A]/5 flex flex-col items-center">
                <div className="w-full aspect-square relative rounded-[1.5rem] overflow-hidden mb-6 bg-[#FAF7F4]">
                  <Image src="/founder_raaj.jpg" alt="Raaj" fill className="object-cover object-top" />
                </div>
                <h3 className="text-xl font-bold">Raaj</h3>
                <span className="text-[#F26B3A] font-semibold text-sm">Co-Founder & CEO</span>
              </AnimatedSection>

              {/* Daniel */}
              <AnimatedSection className="bg-white rounded-[2rem] p-4 pb-6 shadow-sm border border-[#1A1A1A]/5 flex flex-col items-center">
                <div className="w-full aspect-square relative rounded-[1.5rem] overflow-hidden mb-6 bg-[#FAF7F4]">
                  <Image src="/founder_daniel.jpg" alt="Daniel" fill className="object-cover object-top" />
                </div>
                <h3 className="text-xl font-bold">Daniel</h3>
                <span className="text-[#F26B3A] font-semibold text-sm">Co-Founder & COO</span>
              </AnimatedSection>
            </div>
          </div>
        </section>

      </main>

      {/* Footer / Contact */}
      <footer id="contact" className="bg-[#1A1A1A] text-white pt-24 pb-12 rounded-t-[3rem] mt-[-2rem] z-10 relative">
        <div className="max-w-7xl mx-auto px-6">
          <AnimatedSection className="mb-20 bg-[#FAF7F4] rounded-[3rem] p-12 md:p-16 text-[#1A1A1A] shadow-xl flex flex-col items-center text-center">
            <h2 className="text-xl md:text-2xl font-bold tracking-[0.2em] uppercase mb-8 text-[#1A1A1A]/80">Follow Us!</h2>

            <div className="flex flex-wrap items-center justify-center gap-8 md:gap-14 mb-16">
              <a href="https://www.instagram.com/tapauu_my/" target="_blank" rel="noopener noreferrer" className="text-[#1A1A1A] hover:text-[#F26B3A] hover:-translate-y-1 transition-all">
                <svg xmlns="http://www.w3.org/2000/svg" width="44" height="44" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
              </a>
              <a href="https://www.tiktok.com/@tapauu_my" target="_blank" rel="noopener noreferrer" className="text-[#1A1A1A] hover:text-[#F26B3A] hover:-translate-y-1 transition-all">
                <svg xmlns="http://www.w3.org/2000/svg" width="44" height="44" viewBox="0 0 24 24" fill="currentColor"><path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.12-3.44-3.17-3.43-5.3.01-3.33 3.4-5.96 6.66-4.84.14.05.27.08.42.15v4.01c-1.22-.36-2.61.19-2.87 1.4-.15.6.07 1.33.6 1.7.98.68 2.25-.09 2.37-1.35.01-4.71-.03-9.42.02-14.13.25-.13.52-.27.78-.4Z" /></svg>
              </a>
              <a href="https://www.linkedin.com/company/tapauu/posts/?feedView=all" target="_blank" rel="noopener noreferrer" className="text-[#1A1A1A] hover:text-[#F26B3A] hover:-translate-y-1 transition-all">
                <svg xmlns="http://www.w3.org/2000/svg" width="44" height="44" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
              </a>
            </div>

            <div className="w-full max-w-2xl border-t border-[#1A1A1A]/10 pt-10">
              <h2 className="text-2xl md:text-3xl font-bold mb-6">Want to partner or just say hi?</h2>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <a
                  href="mailto:hello@tapauu.com"
                  className="w-full sm:w-auto bg-[#F26B3A] hover:bg-[#d95c2e] text-white px-8 py-4 rounded-full font-semibold transition-all flex items-center justify-center gap-2 shadow-sm"
                >
                  <Mail size={18} /> hello@tapauu.com
                </a>
                <a
                  href="https://tapauu-pilot.vercel.app"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto bg-transparent border-2 border-[#1A1A1A] text-[#1A1A1A] hover:bg-[#1A1A1A] hover:text-white px-8 py-4 rounded-full font-semibold transition-all flex items-center justify-center gap-2"
                >
                  Try the App <ArrowRight size={18} />
                </a>
              </div>
            </div>
          </AnimatedSection>

          <div className="flex flex-col md:flex-row items-center justify-between border-t border-white/10 pt-8 mt-12 text-sm text-white/50">
            <div className="flex items-center mb-4 md:mb-0">
              <Image
                src="/logo-white.svg"
                alt="TAPAUU Logo"
                width={300}
                height={300}
                className="h-20 md:h-24 w-auto opacity-90"
              />
            </div>

            <p>© 2026 TAPAUU · All rights reserved · tapauu.com</p>

            <div className="flex gap-6 mt-4 md:mt-0 font-semibold">
              <a href="https://www.instagram.com/tapauu_my/" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">Instagram</a>
              <a href="https://www.linkedin.com/company/tapauu/posts/?feedView=all" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">LinkedIn</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
