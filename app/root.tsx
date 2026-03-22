import {
  isRouteErrorResponse,
  Links,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "react-router";

import { SidebarProvider, SidebarTrigger } from "./components/ui/sidebar";
import { AppSidebar } from "./components/app-sidebar";
import { CustomCursor } from "./components/custom-cursor";

import type { Route } from "./+types/root";
import "./app.css";

export const links: Route.LinksFunction = () => [
  { rel: "preconnect", href: "https://fonts.googleapis.com" },
  {
    rel: "preconnect",
    href: "https://fonts.gstatic.com",
    crossOrigin: "anonymous",
  },
  {
    rel: "stylesheet",
    href: "https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&display=swap",
  },
];

export function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <Meta />
        <Links />
        <script src="https://cdn.jsdelivr.net/npm/motion@latest/dist/motion.js" defer></script>
      </head>
      <body>
        <SidebarProvider>
          <CustomCursor />
          <AppSidebar />
          <div className="relative m-2 min-h-[calc(100vh-1rem)] overflow-hidden rounded-[2rem] border border-white/20 bg-[url('/lightwall.jpg')] bg-cover bg-center shadow-[0_30px_120px_rgba(15,23,42,0.25)] glass-panel dark:bg-[url('/darkwall.jpg')] md:m-4">
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-white/28 via-white/10 to-transparent dark:from-white/10 dark:via-slate-900/15 dark:to-slate-950/40" />
            <div className="pointer-events-none absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-white/20 to-transparent dark:from-white/8" />
            <main className="relative z-10 min-h-[calc(100vh-1rem)]">
              <SidebarTrigger className="m-4 border border-white/25 bg-white/10 text-white shadow-lg backdrop-blur-xl hover:bg-white/20" />
              {children}
            </main>
          </div>
        </SidebarProvider>
        <ScrollRestoration />
        <Scripts />
      </body>
    </html>
  );
}

export default function App() {
  return <Outlet />;
}

export function ErrorBoundary({ error }: Route.ErrorBoundaryProps) {
  let message = "Oops!";
  let details = "An unexpected error occurred.";
  let stack: string | undefined;

  if (isRouteErrorResponse(error)) {
    message = error.status === 404 ? "404" : "Error";
    details =
      error.status === 404
        ? "The requested page could not be found."
        : error.statusText || details;
  } else if (import.meta.env.DEV && error && error instanceof Error) {
    details = error.message;
    stack = error.stack;
  }

  return (
    <main className="mx-auto max-w-3xl px-6 py-16">
      <div className="glass-panel liquid-border rounded-[2rem] p-8 text-white">
        <h1 className="text-4xl font-black">{message}</h1>
        <p className="mt-3 text-white/75">{details}</p>
        {stack && (
          <pre className="mt-6 overflow-x-auto rounded-2xl bg-slate-950/60 p-4 text-sm text-slate-100">
            <code>{stack}</code>
          </pre>
        )}
      </div>
    </main>
  );
}
