import type { Route } from "./+types/home";
import Navbar from "../components/Navbar";
import Button from "../components/Button";
import Cover from "~/components/Cover";
export function meta({}: Route.MetaArgs) {
  return [
    { title: "New React Router App" },
    { name: "description", content: "Welcome to React Router!" },
  ];
}

export default function Home() {
  return (
    <>
      <Navbar />
      <Cover />
    </>
  );
}
