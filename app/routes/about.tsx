import { SiHtml5, SiCss3, SiJavascript, SiTypescript, SiReact, SiPython, SiSqlite } from "react-icons/si";
import { Bar, BarChart, CartesianGrid, XAxis } from "recharts"

import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "~/components/ui/chart"
import type { Route } from "./+types/about";

const chartData = [
  { skill: "Solo Projects", value: 100 },
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
      <div className="grid auto-rows-[192px] grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {/* Block 1: Our Mission */}
        <div className="flex items-center justify-center rounded-4xl border bg-card p-6 text-card-foreground shadow-sm sm:col-span-2 lg:col-span-2 lg:row-span-2">
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

        {/* Block 2: Our History */}
        <div className="flex flex-col rounded-4xl border bg-card p-6 text-card-foreground shadow-sm lg:row-span-2">
          <div>
            <h2 className="text-xl font-semibold">About Me</h2>
            <ul className="mt-2 list-inside list-disc space-y-1 text-muted-foreground">
              <li>I'm a ten-year-old boy who loves to code.</li>
              <li>In 2025, I'm in 5th Grade at Churchville Public School.</li>
              <li>My favorite subjects are Gym, Science, and Math.</li>
              <li>I'm smart, not very athletic, and love to learn new things.</li>
            </ul>
          </div>
        </div>

        {/* Block 5: What I can code with */}
        <div className="flex items-center justify-center rounded-4xl border bg-card p-6 text-card-foreground shadow-sm sm:col-span-2 lg:col-span-3">
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
      </div>
    </main>
  )
}