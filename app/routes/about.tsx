import { useEffect, useRef } from "react";
import {
  SiCss3,
  SiHtml5,
  SiJavascript,
  SiPython,
  SiReact,
  SiSqlite,
  SiTypescript,
} from "react-icons/si";
import { Bar, BarChart, CartesianGrid, Cell, XAxis, YAxis } from "recharts";
import { Brain, Rocket, Sparkles, Star, WandSparkles } from "lucide-react";

import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "~/components/ui/chart";
import type { Route } from "./+types/about";

type MotionApi = {
  animate: (
    target: Element | Element[] | NodeListOf<Element> | string,
    keyframes: Record<string, unknown>,
    options?: Record<string, unknown>,
  ) => unknown;
  stagger?: (duration: number, options?: Record<string, unknown>) => unknown;
};

const chartData = [
  { skill: "HTML", value: 72, fill: "#fb923c" },
  { skill: "CSS", value: 92, fill: "#60a5fa" },
  { skill: "JavaScript", value: 78, fill: "#facc15" },
  { skill: "TypeScript", value: 84, fill: "#38bdf8" },
  { skill: "React", value: 95, fill: "#5eead4" },
  { skill: "Python", value: 76, fill: "#818cf8" },
  { skill: "SQLite", value: 68, fill: "#7dd3fc" },
];

const storyCards = [
  {
    title: "Curious builder",
    copy: "I love experimenting with code, testing ideas, and seeing how tiny changes can make a page feel magical.",
    icon: Sparkles,
  },
  {
    title: "Always learning",
    copy: "Every project teaches me something new, whether it is design, logic, motion, or a better way to organize code.",
    icon: Brain,
  },
  {
    title: "Future dreamer",
    copy: "I enjoy thinking big and imagining games, tools, and websites that feel exciting the moment they load.",
    icon: Rocket,
  },
];

const highlights = [
  "5th grade student with a big interest in coding and technology.",
  "Favorite subjects include Science, Math, and Gym.",
  "Enjoys mixing creativity, problem solving, and playful design.",
  "Likes building projects that feel fun, polished, and memorable.",
];

const toolkit = [
  { label: "HTML5", icon: SiHtml5, className: "text-orange-300" },
  { label: "CSS3", icon: SiCss3, className: "text-sky-300" },
  { label: "JavaScript", icon: SiJavascript, className: "text-yellow-200" },
  { label: "TypeScript", icon: SiTypescript, className: "text-cyan-300" },
  { label: "React", icon: SiReact, className: "text-teal-200" },
  { label: "Python", icon: SiPython, className: "text-indigo-200" },
  { label: "SQLite", icon: SiSqlite, className: "text-blue-200" },
];

export function meta({}: Route.MetaArgs) {
  return [
    { title: "About Page" },
    { name: "description", content: "Learn more about me" },
  ];
}

export default function AboutPage() {
  const pageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const motionApi = (window as Window & { Motion?: MotionApi }).Motion;
    const pageElement = pageRef.current;

    if (!motionApi || !pageElement) {
      return;
    }

    const hero = pageElement.querySelector("[data-about-hero]");
    const cards = pageElement.querySelectorAll("[data-about-card]");
    const timeline = pageElement.querySelectorAll("[data-about-highlight]");
    const chips = pageElement.querySelectorAll("[data-about-chip]");

    if (hero) {
      motionApi.animate(
        hero,
        { opacity: [0, 1], y: [32, 0], scale: [0.98, 1] },
        { duration: 0.75, easing: [0.22, 1, 0.36, 1] },
      );
    }

    if (cards.length > 0) {
      motionApi.animate(
        cards,
        { opacity: [0, 1], y: [24, 0], scale: [0.98, 1] },
        {
          duration: 0.65,
          delay: motionApi.stagger?.(0.12, { startDelay: 0.15 }) ?? 0.15,
          easing: [0.22, 1, 0.36, 1],
        },
      );
    }

    if (timeline.length > 0) {
      motionApi.animate(
        timeline,
        { opacity: [0, 1], x: [-16, 0] },
        {
          duration: 0.55,
          delay: motionApi.stagger?.(0.08, { startDelay: 0.35 }) ?? 0.35,
          easing: [0.22, 1, 0.36, 1],
        },
      );
    }

    if (chips.length > 0) {
      motionApi.animate(
        chips,
        { y: [0, -8, 0] },
        { duration: 2.8, delay: motionApi.stagger?.(0.1) ?? 0, repeat: Infinity, easing: "ease-in-out" },
      );
    }
  }, []);

  return (
    <main ref={pageRef} className="relative overflow-hidden px-4 py-6 md:px-8 md:py-10">
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="morph-blob morph-blob-one opacity-70" />
        <div className="morph-blob morph-blob-two opacity-70" />
      </div>

      <div className="mx-auto max-w-6xl space-y-6">
        <section
          data-about-hero
          className="glass-panel liquid-border rounded-[2rem] px-6 py-8 text-white md:px-10 md:py-10"
        >
          <div className="grid gap-8 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
            <div className="space-y-5">
              <div className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.35em] text-white/80">
                <WandSparkles className="h-4 w-4" />
                About Joseph
              </div>
              <h1 className="max-w-3xl text-4xl font-black leading-tight md:text-6xl">
                A builder with curiosity, creativity, and a growing toolkit.
              </h1>
              <p className="max-w-2xl text-base leading-8 text-slate-200 md:text-lg">
                This page now tells more of a story. Instead of just listing facts, it highlights how
                I learn, what I enjoy making, and the technology I keep reaching for while I grow as a
                creator.
              </p>
              <div className="flex flex-wrap gap-3">
                {[
                  "Creative coder",
                  "Future inventor",
                  "React fan",
                  "Always exploring",
                ].map((chip) => (
                  <span
                    key={chip}
                    data-about-chip
                    className="glass-panel rounded-full px-4 py-2 text-sm text-white/85"
                  >
                    {chip}
                  </span>
                ))}
              </div>
            </div>

            <div className="glass-panel glass-shine rounded-[1.75rem] p-5 md:p-6">
              <div className="grid gap-4 sm:grid-cols-[auto_1fr] sm:items-center">
                <div className="relative mx-auto w-fit">
                  <div className="pulse-ring rounded-[2rem]" />
                  <img
                    src="/joseph.jpg"
                    alt="Joseph's Photo"
                    className="relative h-52 w-40 rounded-[1.75rem] object-cover shadow-2xl shadow-slate-950/30"
                  />
                </div>
                <div className="space-y-3 text-center sm:text-left">
                  <p className="text-sm uppercase tracking-[0.28em] text-white/60">Snapshot</p>
                  <h2 className="text-2xl font-bold">I am Joseph.</h2>
                  <p className="text-sm leading-7 text-slate-200">
                    I am a young coder who enjoys learning new skills, building cool projects, and
                    finding ways to make websites feel more fun and more alive.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="grid gap-6 lg:grid-cols-[0.95fr_1.05fr]">
          <div className="space-y-6">
            {storyCards.map(({ title, copy, icon: Icon }) => (
              <article
                key={title}
                data-about-card
                className="tilt-card glass-panel glass-shine rounded-[1.75rem] p-6 text-white"
              >
                <div className="mb-4 inline-flex rounded-2xl border border-white/20 bg-white/10 p-3">
                  <Icon className="h-5 w-5" />
                </div>
                <h2 className="text-2xl font-bold">{title}</h2>
                <p className="mt-3 text-sm leading-7 text-slate-200">{copy}</p>
              </article>
            ))}
          </div>

          <div className="space-y-6">
            <section
              data-about-card
              className="glass-panel liquid-border rounded-[1.75rem] p-6 text-white md:p-8"
            >
              <div className="flex items-center gap-3">
                <Star className="h-5 w-5 text-yellow-200" />
                <h2 className="text-2xl font-bold">Quick facts</h2>
              </div>
              <div className="mt-5 grid gap-3">
                {highlights.map((item) => (
                  <div
                    key={item}
                    data-about-highlight
                    className="glass-panel rounded-2xl px-4 py-4 text-sm leading-7 text-slate-100"
                  >
                    {item}
                  </div>
                ))}
              </div>
            </section>

            <section
              data-about-card
              className="glass-panel rounded-[1.75rem] p-6 text-white md:p-8"
            >
              <div className="flex items-center gap-3">
                <Sparkles className="h-5 w-5 text-fuchsia-200" />
                <h2 className="text-2xl font-bold">What I code with</h2>
              </div>
              <div className="mt-5 grid grid-cols-2 gap-3 sm:grid-cols-3 xl:grid-cols-4">
                {toolkit.map(({ label, icon: Icon, className }) => (
                  <div
                    key={label}
                    className="glass-panel flex items-center gap-3 rounded-2xl px-4 py-4 text-sm font-medium text-white/90"
                  >
                    <Icon className={`text-2xl ${className}`} title={label} />
                    <span>{label}</span>
                  </div>
                ))}
              </div>
            </section>
          </div>
        </section>

        <section
          data-about-card
          className="glass-panel liquid-border rounded-[2rem] p-6 text-white md:p-8"
        >
          <div className="mb-6 flex items-center gap-3">
            <Brain className="h-5 w-5 text-cyan-200" />
            <div>
              <h2 className="text-2xl font-bold">Skills in rotation</h2>
              <p className="text-sm text-slate-200">
                These are the tools I use the most when I am building and learning.
              </p>
            </div>
          </div>
          <ChartContainer config={{}} className="h-[320px] w-full md:h-[360px]">
            <BarChart
              accessibilityLayer
              data={chartData}
              layout="vertical"
              margin={{ left: 12, right: 20, top: 4, bottom: 4 }}
            >
              <CartesianGrid horizontal={false} stroke="rgba(255,255,255,0.12)" />
              <YAxis
                dataKey="skill"
                type="category"
                tickLine={false}
                axisLine={false}
                tickMargin={12}
                width={88}
                className="fill-white/75 text-sm"
              />
              <XAxis dataKey="value" type="number" hide />
              <ChartTooltip cursor={false} content={<ChartTooltipContent hideLabel />} />
              <Bar dataKey="value" radius={10}>
                {chartData.map((entry) => (
                  <Cell key={entry.skill} fill={entry.fill} />
                ))}
              </Bar>
            </BarChart>
          </ChartContainer>
        </section>
      </div>
    </main>
  );
}
