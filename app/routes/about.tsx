import { SiHtml5, SiCss3, SiJavascript, SiTypescript, SiReact, SiPython, SiSqlite } from "react-icons/si";
import { Bar, BarChart, CartesianGrid, Cell, XAxis, YAxis } from "recharts";

import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "~/components/ui/chart";
import type { Route } from "./+types/about"

const chartData = [
  { skill: "HTML", value: 1, fill: "#fab387" },
  { skill: "CSS", value: 100, fill: "#89b4fa" },
  { skill: "JavaScript", value: 50, fill: "#f9e2af" },
  { skill: "TypeScript", value: 80, fill: "#89b4fa" },
  { skill: "React", value: 95, fill: "#94e2d5" },
  { skill: "Python", value: 70, fill: "#89b4fa" },
  { skill: "SQLite", value: 60, fill: "#74c7ec" },
]
  
export function meta({}: Route.MetaArgs) {
  return [
    { title: "About Page" },
    { name: "description", content: "Learn more about me" },
  ];
}

export default function AboutPage() {
  return (
    <main className="container mx-auto p-4 md:p-8">
      <h1 className="mb-6 text-3xl font-bold tracking-tight text-white">About Page</h1>
      <div className="grid grid-cols-1 gap-6 lg:grid-cols-5">
        {/* Sticky Left Column */}
        <div className="sticky top-8 hidden h-min flex-col gap-6 lg:col-span-2 lg:flex">
          {/* Block 1: I am Joseph */}
          <div className="flex items-center justify-center rounded-4xl border bg-card p-6 text-card-foreground shadow-sm">
            <div className="flex flex-col items-center gap-6 sm:flex-row sm:text-left">
              <img
                src="/joseph.jpg"
                alt="Joseph's Photo"
                className="h-40 w-32 flex-shrink-0 rounded-lg object-cover"
              />
              <div>
                <h2 className="text-xl font-semibold">I am Joseph</h2>
                <p className="mt-2 text-muted-foreground">
                  I am just a kid who knows how to code, and I am learning more every day.
                </p>
              </div>
            </div>
          </div>

          {/* Block 6: My Skills Chart */}
          <div className="flex flex-col rounded-4xl border bg-card p-6 text-card-foreground shadow-sm">
            <h2 className="text-xl font-semibold">How much i use these</h2>
            <div className="mt-4 flex-1">
              <ChartContainer config={{}} className="h-full w-full">
                <BarChart accessibilityLayer data={chartData} layout="vertical" margin={{ left: 10 }}>
                  <CartesianGrid horizontal={false} />
                  <YAxis
                    dataKey="skill"
                    type="category"
                    tickLine={false}
                    axisLine={false}
                    tickMargin={10}
                    className="fill-muted-foreground"
                  />
                  <XAxis dataKey="value" type="number" hide />
                  <ChartTooltip cursor={false} content={<ChartTooltipContent hideLabel />} />
                  <Bar dataKey="value" radius={5}>
                    {chartData.map((entry) => <Cell key={entry.skill} fill={entry.fill} />)}
                  </Bar>
                </BarChart>
              </ChartContainer>
            </div>
          </div>
        </div>

        {/* Scrollable Right Column */}
        <div className="flex flex-col gap-6 lg:col-span-3">
          {/* Block 5: What I can code with */}
          <div className="flex items-center justify-center rounded-4xl border bg-card p-6 text-card-foreground shadow-sm">
            <div className="text-center">
              <h2 className="text-xl font-semibold">What I can code with</h2>
              <div className="mt-4 flex flex-wrap items-center justify-center gap-4 text-4xl">
                <SiHtml5 className="text-chart-1" title="HTML5" />
                <SiCss3 className="text-chart-3" title="CSS3" />
                <SiJavascript className="text-chart-4" title="JavaScript" />
                <SiTypescript className="text-chart-3" title="TypeScript" />
                <SiReact className="text-chart-2" title="React" />
                <SiPython className="text-chart-3" title="Python" />
                <SiSqlite className="text-chart-2" title="SQLite" />
              </div>
            </div>
          </div>

          {/* Block 2: About Me */}
          <div className="flex flex-col rounded-4xl border bg-card p-6 text-card-foreground shadow-sm">
            <h2 className="text-xl font-semibold">About Me</h2>
            <ul className="mt-2 list-inside list-disc space-y-1 text-muted-foreground">
              <li>I'm a ten-year-old boy who loves to code.</li>
              <li>In 2025, I'm in 5th Grade at Churchville Public School.</li>
              <li>My favorite subjects are Gym, Science, and Math.</li>
              <li>I'm smart, not very athletic, and love to learn new things.</li>
            </ul>
          </div>
        </div>
      </div>
    </main>
  )
}