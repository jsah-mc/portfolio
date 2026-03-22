import { useEffect, useRef } from "react";
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

const spotlightBadges = ["Creative builds", "Fast learning", "Playful UI", "Big ideas"];
const stats = [
  { label: "Projects dreamed up", value: "12+" },
  { label: "Favorite stack", value: "React + TypeScript" },
  { label: "Energy level", value: "Maximum spice" },
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

    if (heading) {
      motionApi.animate(
        heading,
        { opacity: [0, 1], y: [48, 0], filter: ["blur(12px)", "blur(0px)"] },
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
  }, []);

  return (
    <section
      ref={heroRef}
      className="relative isolate overflow-hidden px-6 py-12 text-white md:px-10 md:py-16"
    >
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="hero-orb hero-orb-one" />
        <div className="hero-orb hero-orb-two" />
        <div className="hero-grid" />
      </div>

      <div className="mx-auto grid min-h-[78vh] max-w-6xl gap-10 lg:grid-cols-[1.2fr_0.8fr] lg:items-center">
        <div className="space-y-8">
          <div className="flex flex-wrap gap-3">
            {spotlightBadges.map((badge) => (
              <span
                key={badge}
                data-hero-badge
                className="rounded-full border border-white/15 bg-white/10 px-4 py-2 text-sm font-medium tracking-wide text-white/80 backdrop-blur"
              >
                {badge}
              </span>
            ))}
          </div>

          <div className="space-y-5">
            <p className="text-sm font-semibold uppercase tracking-[0.4em] text-fuchsia-200/90">
              Welcome to Joseph&apos;s world
            </p>
            <h1
              data-hero-heading
              className="max-w-4xl text-5xl font-black leading-tight md:text-6xl xl:text-7xl"
            >
              I build bright ideas, fun experiments, and ambitious code with a little extra sparkle.
            </h1>
            <p
              data-hero-copy
              className="max-w-3xl text-base leading-8 text-slate-200 md:text-lg"
            >
              This site is my creative playground where I share what I&apos;m learning, what I&apos;m
              building, and the kind of future projects I want to bring to life. I love mixing
              curiosity, design, and code so every page feels a little more exciting, a little more
              alive, and a lot more memorable than a plain old portfolio.
            </p>
          </div>

          <div className="flex flex-col gap-4 sm:flex-row">
            <Button
              data-hero-cta
              size="lg"
              className="rounded-full bg-white px-7 text-slate-950 hover:bg-fuchsia-100"
              onClick={() => navigate("/about")}
            >
              Explore the story
            </Button>
            <Button
              data-hero-cta
              size="lg"
              variant="outline"
              className="rounded-full border-white/30 bg-white/5 px-7 text-white hover:bg-white/10"
              onClick={() => navigate("/about")}
            >
              See what I build with
            </Button>
          </div>
        </div>

        <div className="grid gap-4 md:grid-cols-3 lg:grid-cols-1">
          {stats.map((stat, index) => (
            <article
              key={stat.label}
              data-hero-card
              className="group relative overflow-hidden rounded-[2rem] border border-white/15 bg-slate-950/45 p-6 shadow-2xl shadow-fuchsia-950/30 backdrop-blur-xl transition-transform duration-300 hover:-translate-y-1"
            >
              <div className="absolute inset-x-6 top-0 h-px bg-gradient-to-r from-transparent via-fuchsia-300/80 to-transparent" />
              <p className="text-sm uppercase tracking-[0.3em] text-slate-300">0{index + 1}</p>
              <h2 className="mt-5 text-2xl font-bold text-white">{stat.value}</h2>
              <p className="mt-2 text-sm leading-6 text-slate-300">{stat.label}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
