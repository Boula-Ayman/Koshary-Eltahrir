import { type RouteConfig, index, route } from "@react-router/dev/routes";

export default [
  index("routes/home.tsx"),
  route("/menu", "routes/menu.tsx"),
  route("/about", "routes/About.jsx"),
  route("/contact", "routes/Contact.jsx"),
  route("/cart", "routes/cart.tsx"),
] satisfies RouteConfig;
