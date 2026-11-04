"use client";

import { useState, type FormEvent } from "react";
import { MotionConfig, motion } from "framer-motion";
import { SiteFooter } from "../components/site-footer";
import { SiteHeader } from "../components/site-header";
import { ProjectSection } from "../components/project-section";
import Image from "next/image";
import myPhoto from "../public/rodney-portrait.webp";

export default function Home() {
  const [projectFilter, setProjectFilter] = useState("all");
  const [submitted, setSubmitted] = useState(false);

  function handleContactSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const subject = encodeURIComponent(
      `Portfolio inquiry from ${formData.get("name")}`,
    );
    const message = encodeURIComponent(
      [
        `Name: ${formData.get("name")}`,
        `Email: ${formData.get("email")}`,
        `Project scope: ${formData.get("project-type")}`,
        `Budget: ${formData.get("budget")}`,
        "",
        String(formData.get("message") ?? ""),
      ].join("\n"),
    );

    window.location.href = `mailto:hello@rodney.dev?subject=${subject}&body=${message}`;
    setSubmitted(true);
    event.currentTarget.reset();
  }

  return (
    <MotionConfig reducedMotion="user">
      <SiteHeader />
      <motion.main
        className="w-full pt-20 bg-surface"
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <div className="flex flex-col w-full relative overflow-clip selection:bg-primary-container selection:text-on-primary-container">
          <div className="absolute -top-32 left-1/2 -translate-x-1/2 w-[700px] h-[500px] bg-primary/10 rounded-full blur-[130px] pointer-events-none -z-10"></div>
          <div className="absolute top-[35%] right-0 w-[550px] h-[550px] bg-secondary-container/15 rounded-full blur-[150px] pointer-events-none -z-10"></div>
          <div className="absolute top-[75%] left-0 w-[500px] h-[500px] bg-tertiary/10 rounded-full blur-[140px] pointer-events-none -z-10"></div>
          {/* Hero Section */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 1 }}
            className="w-full max-w-7xl mx-auto px-6 lg:px-12 py-space-xl lg:py-space-2xl"
            id="home"
          >
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
              <div className="lg:col-span-7 flex flex-col items-start space-y-6">
                <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-surface-container-high/80 backdrop-blur-md shadow-sm">
                  <span className="relative flex h-2.5 w-2.5">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-tertiary opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-tertiary"></span>
                  </span>
                  <span className="font-label-code text-label-code text-on-surface tracking-wide uppercase">
                    Hi, I&apos;m Rodney 👋 — Front-End Developer &amp; SEO
                    Specialist
                  </span>
                </div>

                <h1 className="font-display text-display text-on-surface tracking-tight leading-tight">
                  Let’s build{" "}
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-tertiary">
                    web experiences
                  </span>{" "}
                  that captivate &amp; rank.
                </h1>

                <p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl leading-relaxed">
                  I build pixel-perfect, high-performance websites using React,
                  Next.js, and WordPress, combining modern SEO strategies to
                  boost rankings, speed, and conversions.
                </p>

                <div className="flex flex-wrap items-center gap-4 pt-2 w-full sm:w-auto">
                  <a
                    className="font-bold inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-lg bg-primary-container text-on-primary-container text-lg font-label-lg text-label-lg shadow-lg shadow-primary-container/20 hover:bg-primary hover:text-on-primary transition-all duration-300 transform hover:-translate-y-0.5 md:text-label-2xl text-lg"
                    href="#projects"
                  >
                    <span>View Projects &amp; Impact</span>
                    <span className="material-symbols-outlined text-lg">
                      arrow_forward
                    </span>
                  </a>
                  <a
                    className="font-bold text-lg inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-lg bg-surface-container-high/70 text-on-surface font-label-lg text-label-lg hover:bg-surface-container-highest transition-all duration-300 shadow-sm hover:text-primary"
                    href="#contact"
                  >
                    <span>Discuss a Project</span>
                    <span className="material-symbols-outlined text-lg">
                      forum
                    </span>
                  </a>
                </div>
              </div>

              <div className="lg:col-span-5 relative flex justify-center items-center">
                <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 via-tertiary/10 to-transparent rounded-3xl blur-2xl -z-10 scale-95"></div>
                <div className="relative w-full max-w-[420px] aspect-square rounded-3xl p-3 bg-surface-container-high/40 backdrop-blur-xl shadow-2xl">
                  <div className="relative w-full h-full rounded-2xl overflow-hidden bg-surface-container-lowest">
                    <div
                      role="img"
                      aria-label="Rodney monogram portrait"
                      className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-surface-container-high via-surface-container-low to-surface-container-lowest"
                    >
                      <div className="absolute h-64 w-64 rounded-full bg-primary/10 blur-3xl"></div>
                      <span
                        aria-hidden="true"
                        className="font-display text-[180px] leading-none font-bold text-primary/20 select-none"
                      >
                        <Image
                          src={myPhoto}
                          alt="Rodney R."
                          className="w-full h-full object-cover"
                        />
                      </span>
                    </div>

                    <div className="absolute inset-0 bg-gradient-to-t from-surface-container-lowest/90 via-transparent to-transparent"></div>
                    <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between">
                      <div>
                        <p className="font-headline-sm text-headline-sm text-on-surface tracking-tight">
                          Rodney R.
                        </p>
                        <p className="font-label-code text-label-code text-primary">
                          Senior Frontend &amp; SEO Engineer
                        </p>
                      </div>
                      <div className="w-10 h-10 rounded-full bg-surface-container-highest/90 flex items-center justify-center text-tertiary">
                        <span
                          className="material-symbols-outlined text-xl"
                          style={{ fontVariationSettings: "'FILL' 1" }}
                        >
                          verified
                        </span>
                      </div>
                    </div>
                  </div>

                  <div className="absolute -top-4 -left-4 px-4 py-2 rounded-xl bg-surface-container-high/95 backdrop-blur-xl shadow-xl flex items-center gap-2.5 transform -rotate-2 hover:rotate-0 transition-transform">
                    <span className="w-2.5 h-2.5 rounded-full bg-primary animate-pulse"></span>
                    <span className="font-label-code text-label-code text-on-surface font-semibold">
                      Next.js 14 App Router
                    </span>
                  </div>

                  <div className="absolute top-1/3 -right-6 px-4 py-2.5 rounded-xl bg-surface-container-high/95 backdrop-blur-xl shadow-xl flex items-center gap-2.5 transform rotate-3 hover:rotate-0 transition-transform">
                    <div className="flex items-center justify-center w-6 h-6 rounded-full bg-tertiary/20 text-tertiary">
                      <span className="material-symbols-outlined text-sm font-bold">
                        speed
                      </span>
                    </div>
                    <div>
                      <p className="font-label-code text-label-code text-tertiary font-bold">
                        Top 100%
                      </p>
                      <p className="font-body-sm text-[11px] leading-tight text-on-surface-variant">
                        Core Web Vitals
                      </p>
                    </div>
                  </div>

                  <div className="absolute -bottom-5 -right-3 px-4 py-2.5 rounded-xl bg-surface-container-high/95 backdrop-blur-xl shadow-xl flex items-center gap-2.5 transform -rotate-1 hover:rotate-0 transition-transform">
                    <span className="material-symbols-outlined text-secondary text-lg">
                      troubleshoot
                    </span>
                    <div>
                      <p className="font-label-code text-label-code text-on-surface font-semibold">
                        Technical SEO
                      </p>
                      <p className="font-body-sm text-[11px] leading-tight text-on-surface-variant">
                        Semantic Schema &amp; SSR
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="lg:col-span-12 pt-6 w-full justify-center lg:justify-center lg:items-center hidden lg:flex">
                <div className="flex flex-wrap items-center gap-y-3 gap-x-6 p-4 rounded-xl bg-surface-container-low/90 backdrop-blur-md shadow-md text-on-surface">
                  <div className="flex items-center gap-2">
                    <span className="text-tertiary font-label-code text-base">
                      ⚡
                    </span>
                    <span className="font-label-code text-label-code font-bold text-tertiary">
                      99+
                    </span>
                    <span className="font-body-sm text-body-sm text-on-surface-variant">
                      PageSpeed Score
                    </span>
                  </div>
                  <span className="text-outline-variant hidden sm:inline">
                    •
                  </span>
                  <div className="flex items-center gap-2">
                    <span className="text-primary font-label-code text-base">
                      📈
                    </span>
                    <span className="font-label-code text-label-code font-bold text-primary">
                      +240%
                    </span>
                    <span className="font-body-sm text-body-sm text-on-surface-variant">
                      Organic Traffic Growth
                    </span>
                  </div>
                  <span className="text-outline-variant hidden sm:inline">
                    •
                  </span>
                  <div className="flex items-center gap-2">
                    <span className="text-secondary font-label-code text-base">
                      ★
                    </span>
                    <span className="font-label-code text-label-code font-bold text-secondary">
                      100%
                    </span>
                    <span className="font-body-sm text-body-sm text-on-surface-variant">
                      Client Satisfaction
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </motion.section>

          {/* Trusted By Section */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.5 }}
            className="w-full py-10 bg-surface-container-lowest/80 backdrop-blur-md overflow-hidden shadow-inner"
          >
            <div className="max-w-7xl mx-auto px-6 lg:px-12 text-center mb-6">
              <p className="font-label-code text-label-code text-outline tracking-wider uppercase">
                Trusted by forward-thinking startups and high-growth brands
              </p>
            </div>

            <div className="relative w-full overflow-hidden flex items-center">
              <div className="absolute left-0 inset-y-0 w-24 bg-gradient-to-r from-surface-container-lowest to-transparent z-10 pointer-events-none"></div>
              <div className="absolute right-0 inset-y-0 w-24 bg-gradient-to-l from-surface-container-lowest to-transparent z-10 pointer-events-none"></div>
              <div className="flex space-x-12 shrink-0 animate-[marquee_24s_linear_infinite] hover:[animation-play-state:paused] py-2 items-center">
                <div className="flex items-center gap-2.5 text-on-surface-variant hover:text-primary transition-colors cursor-pointer px-4">
                  <span className="material-symbols-outlined text-2xl text-primary">
                    account_balance
                  </span>
                  <span className="font-headline-sm text-headline-sm font-semibold tracking-tight">
                    FinTech Apex
                  </span>
                </div>
                <div className="flex items-center gap-2.5 text-on-surface-variant hover:text-primary transition-colors cursor-pointer px-4">
                  <span className="material-symbols-outlined text-2xl text-secondary">
                    cloud_done
                  </span>
                  <span className="font-headline-sm text-headline-sm font-semibold tracking-tight">
                    CloudScale
                  </span>
                </div>
                <div className="flex items-center gap-2.5 text-on-surface-variant hover:text-primary transition-colors cursor-pointer px-4">
                  <span className="material-symbols-outlined text-2xl text-tertiary">
                    bolt
                  </span>
                  <span className="font-headline-sm text-headline-sm font-semibold tracking-tight">
                    Veloce eCommerce
                  </span>
                </div>
                <div className="flex items-center gap-2.5 text-on-surface-variant hover:text-primary transition-colors cursor-pointer px-4">
                  <span className="material-symbols-outlined text-2xl text-primary-fixed-dim">
                    health_and_safety
                  </span>
                  <span className="font-headline-sm text-headline-sm font-semibold tracking-tight">
                    Lumina Health
                  </span>
                </div>
                <div className="flex items-center gap-2.5 text-on-surface-variant hover:text-primary transition-colors cursor-pointer px-4">
                  <span className="material-symbols-outlined text-2xl text-secondary-fixed">
                    hub
                  </span>
                  <span className="font-headline-sm text-headline-sm font-semibold tracking-tight">
                    Nexus Media
                  </span>
                </div>
                <div className="flex items-center gap-2.5 text-on-surface-variant hover:text-primary transition-colors cursor-pointer px-4">
                  <span className="material-symbols-outlined text-2xl text-tertiary-fixed">
                    insights
                  </span>
                  <span className="font-headline-sm text-headline-sm font-semibold tracking-tight">
                    Pulse Analytics
                  </span>
                </div>
                <div className="flex items-center gap-2.5 text-on-surface-variant hover:text-primary transition-colors cursor-pointer px-4">
                  <span className="material-symbols-outlined text-2xl text-primary">
                    science
                  </span>
                  <span className="font-headline-sm text-headline-sm font-semibold tracking-tight">
                    Horizon Labs
                  </span>
                </div>

                <div className="flex items-center gap-2.5 text-on-surface-variant hover:text-primary transition-colors cursor-pointer px-4">
                  <span className="material-symbols-outlined text-2xl text-primary">
                    account_balance
                  </span>
                  <span className="font-headline-sm text-headline-sm font-semibold tracking-tight">
                    FinTech Apex
                  </span>
                </div>
                <div className="flex items-center gap-2.5 text-on-surface-variant hover:text-primary transition-colors cursor-pointer px-4">
                  <span className="material-symbols-outlined text-2xl text-secondary">
                    cloud_done
                  </span>
                  <span className="font-headline-sm text-headline-sm font-semibold tracking-tight">
                    CloudScale
                  </span>
                </div>
                <div className="flex items-center gap-2.5 text-on-surface-variant hover:text-primary transition-colors cursor-pointer px-4">
                  <span className="material-symbols-outlined text-2xl text-tertiary">
                    bolt
                  </span>
                  <span className="font-headline-sm text-headline-sm font-semibold tracking-tight">
                    Veloce eCommerce
                  </span>
                </div>
                <div className="flex items-center gap-2.5 text-on-surface-variant hover:text-primary transition-colors cursor-pointer px-4">
                  <span className="material-symbols-outlined text-2xl text-primary-fixed-dim">
                    health_and_safety
                  </span>
                  <span className="font-headline-sm text-headline-sm font-semibold tracking-tight">
                    Lumina Health
                  </span>
                </div>
                <div className="flex items-center gap-2.5 text-on-surface-variant hover:text-primary transition-colors cursor-pointer px-4">
                  <span className="material-symbols-outlined text-2xl text-secondary-fixed">
                    hub
                  </span>
                  <span className="font-headline-sm text-headline-sm font-semibold tracking-tight">
                    Nexus Media
                  </span>
                </div>
                <div className="flex items-center gap-2.5 text-on-surface-variant hover:text-primary transition-colors cursor-pointer px-4">
                  <span className="material-symbols-outlined text-2xl text-tertiary-fixed">
                    insights
                  </span>
                  <span className="font-headline-sm text-headline-sm font-semibold tracking-tight">
                    Pulse Analytics
                  </span>
                </div>
                <div className="flex items-center gap-2.5 text-on-surface-variant hover:text-primary transition-colors cursor-pointer px-4">
                  <span className="material-symbols-outlined text-2xl text-primary">
                    science
                  </span>
                  <span className="font-headline-sm text-headline-sm font-semibold tracking-tight">
                    Horizon Labs
                  </span>
                </div>
              </div>
            </div>
          </motion.section>

          {/* Project Section */}

          <ProjectSection />

          {/* About Section */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.5 }}
            className="w-full max-w-7xl mx-auto px-6 lg:px-12 py-space-2xl"
            id="about"
          >
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
              <div className="max-w-2xl">
                <div className="inline-flex items-center gap-2 text-primary font-label-code text-label-code uppercase tracking-wider mb-2">
                  <span>01 / Philosophy</span>
                </div>
                <h2 className="font-headline-lg text-headline-lg text-on-surface tracking-tight">
                  Engineering Excellence with Growth in Mind
                </h2>
              </div>
              <p className="font-body-md text-body-md text-on-surface-variant max-w-md">
                Clean UI is useless if nobody discovers it. Unbeatable rankings
                are wasted if visitors bounce. I unite both disciplines to
                deliver revenue-generating digital products.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="p-8 rounded-2xl bg-surface-container-low hover:bg-surface-container transition-all duration-300 shadow-md group flex flex-col justify-between">
                <div>
                  <div className="w-12 h-12 rounded-xl bg-tertiary/10 text-tertiary flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                    <span className="material-symbols-outlined text-2xl">
                      speed
                    </span>
                  </div>
                  <h3 className="font-headline-sm text-headline-sm text-on-surface mb-2">
                    Blazing Fast Performance
                  </h3>
                  <p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
                    Sub-second load times engineered with SSR, ISR, and
                    precision asset minification that keep bounce rates under
                    20%.
                  </p>
                </div>
                <div className="mt-6 pt-4 flex items-center justify-between text-tertiary font-label-code text-label-code">
                  <span>&lt; 0.8s LCP</span>
                  <span className="material-symbols-outlined text-sm">
                    trending_up
                  </span>
                </div>
              </div>

              <div className="p-8 rounded-2xl bg-surface-container-low hover:bg-surface-container transition-all duration-300 shadow-md group flex flex-col justify-between">
                <div>
                  <div className="w-12 h-12 rounded-xl bg-primary/10 text-primary flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                    <span className="material-symbols-outlined text-2xl">
                      search_check
                    </span>
                  </div>
                  <h3 className="font-headline-sm text-headline-sm text-on-surface mb-2">
                    Organic Search Dominance
                  </h3>
                  <p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
                    Programmatic SEO, schema markup injection, and crawl-budget
                    optimization to secure top 3 SERP positioning.
                  </p>
                </div>
                <div className="mt-6 pt-4 flex items-center justify-between text-primary font-label-code text-label-code">
                  <span>+240% Inbound Lift</span>
                  <span className="material-symbols-outlined text-sm">
                    north_east
                  </span>
                </div>
              </div>

              <div className="p-8 rounded-2xl bg-surface-container-low hover:bg-surface-container transition-all duration-300 shadow-md group flex flex-col justify-between">
                <div>
                  <div className="w-12 h-12 rounded-xl bg-secondary/10 text-secondary flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                    <span className="material-symbols-outlined text-2xl">
                      architecture
                    </span>
                  </div>
                  <h3 className="font-headline-sm text-headline-sm text-on-surface mb-2">
                    Scalable Clean Architecture
                  </h3>
                  <p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
                    Component-driven design systems in React &amp; Next.js with
                    strictly typed interfaces and high reusability.
                  </p>
                </div>
                <div className="mt-6 pt-4 flex items-center justify-between text-secondary font-label-code text-label-code">
                  <span>100% Strict TypeScript</span>
                  <span className="material-symbols-outlined text-sm">
                    verified
                  </span>
                </div>
              </div>

              <div className="p-8 rounded-2xl bg-surface-container-low hover:bg-surface-container transition-all duration-300 shadow-md group flex flex-col justify-between">
                <div>
                  <div className="w-12 h-12 rounded-xl bg-primary-fixed-dim/10 text-primary-fixed-dim flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                    <span className="material-symbols-outlined text-2xl">
                      ads_click
                    </span>
                  </div>
                  <h3 className="font-headline-sm text-headline-sm text-on-surface mb-2">
                    Conversion-Centric UX
                  </h3>
                  <p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
                    Intuitive, distraction-free user journeys based on cognitive
                    ergonomics that transform passive clicks into signups.
                  </p>
                </div>
                <div className="mt-6 pt-4 flex items-center justify-between text-primary-fixed-dim font-label-code text-label-code">
                  <span>+34% Checkout Rate</span>
                  <span className="material-symbols-outlined text-sm">
                    thumb_up
                  </span>
                </div>
              </div>
            </div>
          </motion.section>

          <motion.section
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.5 }}
            className="w-full max-w-7xl mx-auto px-6 lg:px-12 py-space-2xl"
            id="stack"
          >
            <div className="text-center max-w-3xl mx-auto mb-16">
              <div className="inline-flex items-center gap-2 text-primary font-label-code text-label-code uppercase tracking-wider mb-2">
                <span>02 / Capabilities</span>
              </div>
              <h2 className="font-headline-lg text-headline-lg text-on-surface tracking-tight mb-4">
                Battle-Tested Modern Tech Stack
              </h2>
              <p className="font-body-md text-body-md text-on-surface-variant">
                Carefully curated technologies honed over years of production
                deployment to balance developer velocity, maintainability, and
                end-user speed.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="p-6 rounded-2xl bg-surface-container-low shadow-md hover:bg-surface-container transition-all duration-300">
                <div className="flex items-center justify-between mb-6">
                  <span className="font-label-code text-label-code text-primary uppercase font-bold tracking-wider">
                    Core &amp; Frameworks
                  </span>
                  <span className="material-symbols-outlined text-outline text-xl">
                    code_blocks
                  </span>
                </div>
                <div className="space-y-4">
                  <div className="p-3 rounded-xl bg-surface-container-high/60 flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <span className="material-symbols-outlined text-primary text-xl">
                        deployed_code
                      </span>
                      <span className="font-label-lg text-label-lg text-on-surface">
                        React 18 / 19
                      </span>
                    </div>
                    <span className="font-label-code text-[11px] text-tertiary bg-tertiary/10 px-2 py-0.5 rounded">
                      Senior
                    </span>
                  </div>
                  <div className="p-3 rounded-xl bg-surface-container-high/60 flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <span className="material-symbols-outlined text-primary text-xl">
                        terminal
                      </span>
                      <span className="font-label-lg text-label-lg text-on-surface">
                        Next.js 14 App Router
                      </span>
                    </div>
                    <span className="font-label-code text-[11px] text-tertiary bg-tertiary/10 px-2 py-0.5 rounded">
                      Expert
                    </span>
                  </div>
                  <div className="p-3 rounded-xl bg-surface-container-high/60 flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <span className="material-symbols-outlined text-primary text-xl">
                        data_object
                      </span>
                      <span className="font-label-lg text-label-lg text-on-surface">
                        TypeScript
                      </span>
                    </div>
                    <span className="font-label-code text-[11px] text-tertiary bg-tertiary/10 px-2 py-0.5 rounded">
                      Senior
                    </span>
                  </div>
                  <div className="p-3 rounded-xl bg-surface-container-high/60 flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <span className="material-symbols-outlined text-primary text-xl">
                        javascript
                      </span>
                      <span className="font-label-lg text-label-lg text-on-surface">
                        Modern JS (ES6+)
                      </span>
                    </div>
                    <span className="font-label-code text-[11px] text-tertiary bg-tertiary/10 px-2 py-0.5 rounded">
                      Mastery
                    </span>
                  </div>
                </div>
              </div>

              <div className="p-6 rounded-2xl bg-surface-container-low shadow-md hover:bg-surface-container transition-all duration-300">
                <div className="flex items-center justify-between mb-6">
                  <span className="font-label-code text-label-code text-secondary uppercase font-bold tracking-wider">
                    Styling &amp; UX
                  </span>
                  <span className="material-symbols-outlined text-outline text-xl">
                    palette
                  </span>
                </div>
                <div className="space-y-4">
                  <div className="p-3 rounded-xl bg-surface-container-high/60 flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <span className="material-symbols-outlined text-secondary text-xl">
                        style
                      </span>
                      <span className="font-label-lg text-label-lg text-on-surface">
                        Tailwind CSS
                      </span>
                    </div>
                    <span className="font-label-code text-[11px] text-secondary bg-secondary/10 px-2 py-0.5 rounded">
                      Mastery
                    </span>
                  </div>
                  <div className="p-3 rounded-xl bg-surface-container-high/60 flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <span className="material-symbols-outlined text-secondary text-xl">
                        html
                      </span>
                      <span className="font-label-lg text-label-lg text-on-surface">
                        Semantic HTML5
                      </span>
                    </div>
                    <span className="font-label-code text-[11px] text-secondary bg-secondary/10 px-2 py-0.5 rounded">
                      A11y Valid
                    </span>
                  </div>
                  <div className="p-3 rounded-xl bg-surface-container-high/60 flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <span className="material-symbols-outlined text-secondary text-xl">
                        animation
                      </span>
                      <span className="font-label-lg text-label-lg text-on-surface">
                        Framer Motion
                      </span>
                    </div>
                    <span className="font-label-code text-[11px] text-secondary bg-secondary/10 px-2 py-0.5 rounded">
                      Micro-UX
                    </span>
                  </div>
                  <div className="p-3 rounded-xl bg-surface-container-high/60 flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <span className="material-symbols-outlined text-secondary text-xl">
                        css
                      </span>
                      <span className="font-label-lg text-label-lg text-on-surface">
                        Modern CSS / PostCSS
                      </span>
                    </div>
                    <span className="font-label-code text-[11px] text-secondary bg-secondary/10 px-2 py-0.5 rounded">
                      Advanced
                    </span>
                  </div>
                </div>
              </div>

              <div className="p-6 rounded-2xl bg-surface-container-low shadow-md hover:bg-surface-container transition-all duration-300">
                <div className="flex items-center justify-between mb-6">
                  <span className="font-label-code text-label-code text-tertiary uppercase font-bold tracking-wider">
                    SEO &amp; Performance
                  </span>
                  <span className="material-symbols-outlined text-outline text-xl">
                    troubleshoot
                  </span>
                </div>
                <div className="space-y-4">
                  <div className="p-3 rounded-xl bg-surface-container-high/60 flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <span className="material-symbols-outlined text-tertiary text-xl">
                        flare
                      </span>
                      <span className="font-label-lg text-label-lg text-on-surface">
                        Lighthouse 100
                      </span>
                    </div>
                    <span className="font-label-code text-[11px] text-tertiary bg-tertiary/10 px-2 py-0.5 rounded">
                      Perfect
                    </span>
                  </div>
                  <div className="p-3 rounded-xl bg-surface-container-high/60 flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <span className="material-symbols-outlined text-tertiary text-xl">
                        speed
                      </span>
                      <span className="font-label-lg text-label-lg text-on-surface">
                        Core Web Vitals
                      </span>
                    </div>
                    <span className="font-label-code text-[11px] text-tertiary bg-tertiary/10 px-2 py-0.5 rounded">
                      Sub-1s
                    </span>
                  </div>
                  <div className="p-3 rounded-xl bg-surface-container-high/60 flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <span className="material-symbols-outlined text-tertiary text-xl">
                        schema
                      </span>
                      <span className="font-label-lg text-label-lg text-on-surface">
                        JSON-LD Schema
                      </span>
                    </div>
                    <span className="font-label-code text-[11px] text-tertiary bg-tertiary/10 px-2 py-0.5 rounded">
                      Rich Snippet
                    </span>
                  </div>
                  <div className="p-3 rounded-xl bg-surface-container-high/60 flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <span className="material-symbols-outlined text-tertiary text-xl">
                        analytics
                      </span>
                      <span className="font-label-lg text-label-lg text-on-surface">
                        Search Console &amp; GA4
                      </span>
                    </div>
                    <span className="font-label-code text-[11px] text-tertiary bg-tertiary/10 px-2 py-0.5 rounded">
                      Certified
                    </span>
                  </div>
                </div>
              </div>

              <div className="p-6 rounded-2xl bg-surface-container-low shadow-md hover:bg-surface-container transition-all duration-300">
                <div className="flex items-center justify-between mb-6">
                  <span className="font-label-code text-label-code text-primary-fixed uppercase font-bold tracking-wider">
                    Tooling &amp; Ops
                  </span>
                  <span className="material-symbols-outlined text-outline text-xl">
                    integration_instructions
                  </span>
                </div>
                <div className="space-y-4">
                  <div className="p-3 rounded-xl bg-surface-container-high/60 flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <span className="material-symbols-outlined text-primary-fixed text-xl">
                        cloud_sync
                      </span>
                      <span className="font-label-lg text-label-lg text-on-surface">
                        Vercel &amp; Edge Middleware
                      </span>
                    </div>
                    <span className="font-label-code text-[11px] text-primary-fixed bg-primary-fixed/10 px-2 py-0.5 rounded">
                      CI/CD
                    </span>
                  </div>
                  <div className="p-3 rounded-xl bg-surface-container-high/60 flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <span className="material-symbols-outlined text-primary-fixed text-xl">
                        api
                      </span>
                      <span className="font-label-lg text-label-lg text-on-surface">
                        REST &amp; GraphQL APIs
                      </span>
                    </div>
                    <span className="font-label-code text-[11px] text-primary-fixed bg-primary-fixed/10 px-2 py-0.5 rounded">
                      Dynamic
                    </span>
                  </div>
                  <div className="p-3 rounded-xl bg-surface-container-high/60 flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <span className="material-symbols-outlined text-primary-fixed text-xl">
                        hub
                      </span>
                      <span className="font-label-lg text-label-lg text-on-surface">
                        Git &amp; GitHub Actions
                      </span>
                    </div>
                    <span className="font-label-code text-[11px] text-primary-fixed bg-primary-fixed/10 px-2 py-0.5 rounded">
                      Automated
                    </span>
                  </div>
                  <div className="p-3 rounded-xl bg-surface-container-high/60 flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <span className="material-symbols-outlined text-primary-fixed text-xl">
                        dns
                      </span>
                      <span className="font-label-lg text-label-lg text-on-surface">
                        Headless CMS &amp; Node
                      </span>
                    </div>
                    <span className="font-label-code text-[11px] text-primary-fixed bg-primary-fixed/10 px-2 py-0.5 rounded">
                      Sanity/Strapi
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </motion.section>

          {/* Contact */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.5 }}
            className="w-full max-w-7xl mx-auto px-6 lg:px-12 py-space-2xl"
            id="contact"
          >
            <div className="rounded-3xl bg-surface-container-low p-8 lg:p-16 shadow-2xl relative overflow-hidden">
              <div className="absolute -top-24 -right-24 w-96 h-96 bg-primary/10 rounded-full blur-3xl pointer-events-none"></div>
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start relative z-10">
                <div className="lg:col-span-5 flex flex-col justify-between space-y-8">
                  <div>
                    <div className="inline-flex items-center gap-2 text-primary font-label-code text-label-code uppercase tracking-wider mb-2">
                      <span>05 / Let&apos;s Connect</span>
                    </div>
                    <h2 className="font-headline-lg text-headline-lg text-on-surface tracking-tight mb-4">
                      Ready to scale your web presence?
                    </h2>
                    <p className="font-body-lg text-body-lg text-on-surface-variant leading-relaxed mb-8">
                      Whether you need a high-performance Next.js application,
                      an in-depth technical SEO rebuild, or end-to-end frontend
                      craftsmanship — let’s build something extraordinary.
                    </p>

                    <div className="space-y-4">
                      <a
                        className="flex items-center gap-4 p-4 rounded-xl bg-surface-container-high/60 hover:bg-surface-container-high transition-colors group"
                        href="mailto:rodney_ramos@ymail.com"
                      >
                        <div className="w-12 h-12 rounded-lg bg-primary/10 text-primary flex items-center justify-center group-hover:scale-105 transition-transform">
                          <span className="material-symbols-outlined text-2xl">
                            mail
                          </span>
                        </div>
                        <div>
                          <p className="font-label-code text-xs text-outline uppercase tracking-wider">
                            Direct Email
                          </p>
                          <p className="font-headline-sm text-sm text-on-surface font-semibold group-hover:text-primary transition-colors">
                            rodney_ramos@ymail.com
                          </p>
                        </div>
                      </a>
                      <div className="flex items-center gap-4 p-4 rounded-xl bg-surface-container-high/60">
                        <div className="w-12 h-12 rounded-lg bg-tertiary/10 text-tertiary flex items-center justify-center">
                          <span className="material-symbols-outlined text-2xl">
                            public
                          </span>
                        </div>
                        <div>
                          <p className="font-label-code text-xs text-outline uppercase tracking-wider">
                            Availability
                          </p>
                          <p className="font-headline-sm text-sm text-on-surface font-semibold">
                            Remote • Worldwide (EST / UTC-5 friendly)
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="p-6 rounded-2xl bg-surface-container-high/80 border-0 flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <span className="material-symbols-outlined text-secondary text-3xl">
                        calendar_month
                      </span>
                      <div>
                        <p className="font-label-lg text-label-lg text-on-surface font-semibold">
                          15-Minute Strategy Call
                        </p>
                        <p className="font-body-sm text-body-sm text-on-surface-variant">
                          Instant code &amp; SEO triage
                        </p>
                      </div>
                    </div>
                    <a
                      className="px-4 py-2 rounded-lg bg-surface-container text-on-surface font-label-md text-label-md hover:bg-primary hover:text-on-primary transition-all"
                      href="mailto:hello@rodney.dev?subject=Schedule%20Intro%20Call"
                    >
                      Book Call
                    </a>
                  </div>
                </div>

                <div className="lg:col-span-7 bg-surface-container p-8 lg:p-10 rounded-2xl shadow-xl">
                  <form
                    className="space-y-6"
                    id="contact-form"
                    onSubmit={handleContactSubmit}
                  >
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <label
                          className="font-label-md text-label-md text-on-surface-variant uppercase tracking-wide"
                          htmlFor="name"
                        >
                          Your Name
                        </label>
                        <input
                          className="w-full px-4 py-3.5 rounded-lg bg-surface-container-lowest text-on-surface placeholder:text-outline focus:outline-none focus:ring-2 focus:ring-primary text-body-md"
                          id="name"
                          name="name"
                          placeholder="Alex Vance"
                          required
                          type="text"
                        />
                      </div>

                      <div className="space-y-2">
                        <label
                          className="font-label-md text-label-md text-on-surface-variant uppercase tracking-wide"
                          htmlFor="email"
                        >
                          Business Email
                        </label>
                        <input
                          className="w-full px-4 py-3.5 rounded-lg bg-surface-container-lowest text-on-surface placeholder:text-outline focus:outline-none focus:ring-2 focus:ring-primary text-body-md"
                          id="email"
                          name="email"
                          placeholder="alex@company.com"
                          required
                          type="email"
                        />
                      </div>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <label
                          className="font-label-md text-label-md text-on-surface-variant uppercase tracking-wide"
                          htmlFor="project-type"
                        >
                          Project Scope
                        </label>
                        <select
                          className="w-full px-4 py-3.5 rounded-lg bg-surface-container-lowest text-on-surface focus:outline-none focus:ring-2 focus:ring-primary text-body-md cursor-pointer"
                          id="project-type"
                          name="project-type"
                        >
                          <option value="frontend-seo">
                            Full Frontend Rebuild + SEO Architecture
                          </option>
                          <option value="nextjs">
                            Next.js 14 Web Application
                          </option>
                          <option value="seo-audit">
                            Technical SEO &amp; Core Web Vitals Audit
                          </option>
                          <option value="contract">
                            Monthly Retainer / Senior Frontend Lead
                          </option>
                        </select>
                      </div>

                      <div className="space-y-2">
                        <label
                          className="font-label-md text-label-md text-on-surface-variant uppercase tracking-wide"
                          htmlFor="budget"
                        >
                          Estimated Budget
                        </label>
                        <select
                          className="w-full px-4 py-3.5 rounded-lg bg-surface-container-lowest text-on-surface focus:outline-none focus:ring-2 focus:ring-primary text-body-md cursor-pointer"
                          id="budget"
                          name="budget"
                        >
                          <option value="tier1">$5,000 – $10,000</option>
                          <option value="tier2">$10,000 – $25,000</option>
                          <option value="tier3">$25,000+</option>
                          <option value="advisory">
                            Consulting / Hourly ($150/hr)
                          </option>
                        </select>
                      </div>
                    </div>

                    <div className="space-y-2">
                      <label
                        className="font-label-md text-label-md text-on-surface-variant uppercase tracking-wide"
                        htmlFor="message"
                      >
                        Tell Me About Your Goals
                      </label>
                      <textarea
                        className="w-full px-4 py-3.5 rounded-lg bg-surface-container-lowest text-on-surface placeholder:text-outline focus:outline-none focus:ring-2 focus:ring-primary text-body-md resize-none"
                        id="message"
                        name="message"
                        placeholder="Share your timelines, current tech stack, pain points, or traffic benchmarks..."
                        required
                        rows={4}
                      ></textarea>
                    </div>

                    <button
                      className="w-full py-4 rounded-xl bg-primary-container text-on-primary-container font-label-lg text-label-lg shadow-lg shadow-primary-container/25 hover:bg-primary hover:text-on-primary transition-all duration-300 flex items-center justify-center gap-2 transform hover:-translate-y-0.5"
                      id="submit-btn"
                      type="submit"
                    >
                      <span>Send Message &amp; Get Free SEO Benchmark</span>
                      <span className="material-symbols-outlined text-lg">
                        send
                      </span>
                    </button>

                    <div
                      className={`${submitted ? "flex" : "hidden"} p-4 rounded-xl bg-tertiary/15 text-tertiary font-label-md text-label-md items-center gap-3`}
                      id="form-alert"
                      role="status"
                    >
                      <span className="material-symbols-outlined">
                        check_circle
                      </span>
                      <span>
                        Your email app should open with your message details.
                        You can send it from there.
                      </span>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </motion.section>
        </div>
      </motion.main>
      <SiteFooter />
    </MotionConfig>
  );
}
