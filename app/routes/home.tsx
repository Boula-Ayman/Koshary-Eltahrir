import type { Route } from "./+types/home";
import Button from "../components/Button";
import Cover from "~/components/Cover";
import Hero from "~/components/Hero";
import Layout from "~/components/Layout";
import { DISHES } from "~/utils/data";
import { Additions } from "~/utils/data";
import { Drinks } from "~/utils/data";
export function meta({}: Route.MetaArgs) {
  return [
    { title: "New React Router App" },
    { name: "description", content: "Welcome to React Router!" },
  ];
}

export default function Home() {
  return (
    <Layout>
      <Cover />
      <Hero products={DISHES} title=" Koshary" cardsPerView={3} />
      <Hero products={Additions} title="   Additions" cardsPerView={3} />
      <Hero products={Drinks} title="   Drinks" cardsPerView={3} />
    </Layout>
  );
}
