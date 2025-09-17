import type { Route } from "./+types/home";
import Button from "../components/Button";
import Cover from "~/components/Cover";
import Hero from "~/components/Hero";
import Layout from "~/components/Layout";
import { DISHES } from "~/utils/data";
import { Additions } from "~/utils/data";
import { Drinks } from "~/utils/data";
import { Desserts } from "~/utils/data";
import { motion } from "framer-motion";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "New React Router App" },
    { name: "description", content: "Welcome to React Router!" },
  ];
}

const pageVariants = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -20 },
};

const pageTransition = {
  duration: 0.5,
};

export default function Home() {
  return (
    <Layout>
      <motion.div
        initial="initial"
        animate="animate"
        exit="exit"
        variants={pageVariants}
        transition={pageTransition}
      >
        <Cover />
        <Hero products={DISHES} title=" Koshary" cardsPerView={3} />
        <Hero products={Additions} title="   Additions" cardsPerView={3} />
        <Hero products={Drinks} title="   Drinks" cardsPerView={3} />
        <Hero products={Desserts} title="   Desserts" cardsPerView={3} />
      </motion.div>
    </Layout>
  );
}
