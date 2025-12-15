import { useNavigate } from "react-router-dom";
import type { Route } from "./+types/home";
import { Button } from "~/components/ui/button";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Home Page" },
    { name: "description", content: "Welcome to my website" },
  ];
}

export default function Home() {
  const navigate = useNavigate();
  return (
    <div className="flex flex-col text-center text-white items-center justify-center">
      <h1 className="text-4xl">Hello Welcome to my Website</h1>
      <Button variant="outline" onClick={() => navigate("/about")}>About</Button>
    </div>   
  );
}
