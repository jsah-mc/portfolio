import type { Route } from "./+types/home";
import { Welcome } from "../welcome/welcome";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Home Page" },
    { name: "description", content: "Welcome to my website" },
  ];
}

export default function Home() {
  return (
    <div className="flex flex-col text-center items-center justify-center">
      <h1 className="text-4xl">Hello Welcome to my Website</h1>
    </div>   
  );
}
