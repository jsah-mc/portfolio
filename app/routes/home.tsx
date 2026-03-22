import { useEffect, useRef } from "react";
import { Sparkles, ArrowRight, Waves } from "lucide-react";
import { useNavigate } from "react-router-dom";
import type { Route } from "./+types/home";
import { Button } from "~/components/ui/button";

type MotionApi = {
  animate: (
    target: Element | Element[] | NodeListOf<Element> | string,
    keyframes: Record<string, unknown>,
    options?: Record<string, unknown>,
  ) => unknown;
  stagger?: (duration: number, options?: Record<string, unknown>) => unknown;
};

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Home Page" },
    { name: "description", content: "Welcome to my website" },
  ];
}

const spotlightBadges = ["Liquid glass UI", "Fast learner", "Playful motion", "Big imagination"];
const stats = [
  { label: "Projects dreamed up", value: "12+", note: "Ideas always bubbling" },
  { label: "Favorite stack", value: "React + TypeScript", note: "Design meets code" },
  { label: "Energy level", value: "Maximum sparkle", note: "Always making something" },
];

export default function Home() {
  const navigate = useNavigate();
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const motionApi = (window as Window & { Motion?: MotionApi }).Motion;
    const heroElement = heroRef.current;

    if (!motionApi || !heroElement) {
      return;
    }

    const heading = heroElement.querySelector("[data-hero-heading]");
    const copy = heroElement.querySelector("[data-hero-copy]");
    const ctas = heroElement.querySelectorAll("[data-hero-cta]");
    const cards = heroElement.querySelectorAll("[data-hero-card]");
    const badges = heroElement.querySelectorAll("[data-hero-badge]");
    const featureRows = heroElement.querySelectorAll("[data-hero-feature]");
    const spotlight = heroElement.querySelector("[data-hero-spotlight]");

    if (heading) {
      motionApi.animate(
        heading,
        { opacity: [0, 1], y: [48, 0], scale: [0.96, 1], filter: ["blur(12px)", "blur(0px)"] },
        { duration: 0.9, easing: [0.22, 1, 0.36, 1] },
      );
    }

    if (copy) {
      motionApi.animate(
        copy,
        { opacity: [0, 1], y: [24, 0] },
        { duration: 0.8, delay: 0.2, easing: [0.22, 1, 0.36, 1] },
      );
    }

    if (ctas.length > 0) {
      motionApi.animate(
        ctas,
        { opacity: [0, 1], y: [18, 0], scale: [0.96, 1] },
        {
          duration: 0.55,
          delay: motionApi.stagger?.(0.1, { startDelay: 0.35 }) ?? 0.35,
          easing: [0.22, 1, 0.36, 1],
        },
      );
    }

    if (cards.length > 0) {
      motionApi.animate(
        cards,
        { opacity: [0, 1], y: [28, 0], rotate: [3, 0] },
        {
          duration: 0.7,
          delay: motionApi.stagger?.(0.12, { startDelay: 0.45 }) ?? 0.45,
          easing: [0.22, 1, 0.36, 1],
        },
      );
    }

    if (featureRows.length > 0) {
      motionApi.animate(
        featureRows,
        { opacity: [0, 1], x: [-18, 0] },
        {
          duration: 0.6,
          delay: motionApi.stagger?.(0.1, { startDelay: 0.55 }) ?? 0.55,
          easing: [0.22, 1, 0.36, 1],
        },
      );
    }

    if (badges.length > 0) {
      motionApi.animate(
        badges,
        { y: [0, -10, 0] },
        {
          duration: 2.4,
          delay: motionApi.stagger?.(0.18) ?? 0,
          repeat: Infinity,
          easing: "ease-in-out",
        },
      );
    }

    if (spotlight) {
      motionApi.animate(
        spotlight,
        { rotate: [0, 6, -4, 0], scale: [1, 1.04, 0.98, 1] },
        { duration: 12, repeat: Infinity, easing: "ease-in-out" },
      );
    }
  }, []);

  return (
    <section
      ref={heroRef}
      className="relative isolate overflow-hidden px-6 py-12 text-white md:px-10 md:py-16"
    >
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="hero-orb hero-orb-one" />
        <div className="hero-orb hero-orb-two" />
        <div className="morph-blob morph-blob-one" />
        <div className="morph-blob morph-blob-two" />
        <div className="hero-grid" />
      </div>

      <div className="mx-auto grid min-h-[78vh] max-w-6xl gap-10 lg:grid-cols-[1.15fr_0.85fr] lg:items-center">
        <div className="space-y-8">
          <div className="flex flex-wrap gap-3">
            {spotlightBadges.map((badge) => (
              <span
                key={badge}
                data-hero-badge
                className="glass-panel rounded-full px-4 py-2 text-sm font-medium tracking-wide text-white/88"
              >
                {badge}
              </span>
            ))}
          </div>

          <div className="space-y-5">
            <p className="flex items-center gap-3 text-sm font-semibold uppercase tracking-[0.4em] text-fuchsia-100/90">
              <Sparkles className="h-4 w-4" />
              Welcome to Joseph&apos;s world
            </p>
            <h1
              data-hero-heading
              className="max-w-4xl text-5xl font-black leading-tight md:text-6xl xl:text-7xl"
            >
              A liquid-glass portfolio full of bright ideas, bouncy motion, and creative experiments.
            </h1>
            <p
              data-hero-copy
              className="max-w-3xl text-base leading-8 text-slate-200 md:text-lg"
            >
              I like turning coding practice into something that feels alive. This refreshed site leans
              into glowy glass layers, animated details, and bold storytelling so every section feels
              more like a futuristic playground than a plain static page.
            </p>
          </div>

          <div className="flex flex-col gap-4 sm:flex-row">
            <Button
              data-hero-cta
              size="lg"
              className="glass-panel glass-shine rounded-full px-7 text-white hover:bg-white/20"
              onClick={() => navigate("/about")}
            >
              Explore the story
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
            <Button
              data-hero-cta
              size="lg"
              variant="outline"
              className="rounded-full border-white/30 bg-white/5 px-7 text-white hover:bg-white/10"
              onClick={() => navigate("/about")}
            >
              See the about revamp
            </Button>
          </div>

          <div className="grid gap-3 sm:grid-cols-3">
            {[
              "Glassy layers with blur and reflections",
              "Motion-powered entrances and floating elements",
              "A more story-driven about page experience",
            ].map((feature) => (
              <div
                key={feature}
                data-hero-feature
                className="glass-panel rounded-3xl px-4 py-4 text-sm leading-6 text-white/78"
              >
                {feature}
              </div>
            ))}
          </div>
        </div>

        <div className="relative">
          <div
            data-hero-spotlight
            className="glass-panel liquid-border relative overflow-hidden rounded-[2rem] p-6 md:p-8"
          >
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-white/20 via-transparent to-fuchsia-300/10" />
            <div className="pointer-events-none absolute right-8 top-8 h-24 w-24 rounded-full bg-fuchsia-300/20 blur-2xl" />
            <div className="pointer-events-none absolute bottom-6 left-8 h-20 w-20 rounded-full bg-sky-300/20 blur-2xl" />

            <div className="relative space-y-4">
              <div className="inline-flex rounded-full border border-white/20 bg-white/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.35em] text-white/80">
                <Waves className="mr-2 h-4 w-4" />
                Liquid glass mode
              </div>

              <div className="grid gap-4 md:grid-cols-3 lg:grid-cols-1">
                {stats.map((stat, index) => (
                  <article
                    key={stat.label}
                    data-hero-card
                    className="tilt-card glass-panel glass-shine group relative rounded-[1.75rem] p-6"
                  >
                    <div className="pulse-ring" />
                    <div className="absolute inset-x-6 top-0 h-px bg-gradient-to-r from-transparent via-white/80 to-transparent" />
                    <p className="text-sm uppercase tracking-[0.3em] text-slate-300">0{index + 1}</p>
                    <h2 className="mt-5 text-2xl font-bold text-white">{stat.value}</h2>
                    <p className="mt-2 text-sm leading-6 text-slate-300">{stat.label}</p>
                    <p className="mt-3 text-xs uppercase tracking-[0.24em] text-white/55">{stat.note}</p>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
