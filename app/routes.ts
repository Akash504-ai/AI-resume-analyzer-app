import { type RouteConfig, index, route } from "@react-router/dev/routes";

export default [
  index("routes/home.tsx"),
  route("/auth", "routes/auth.tsx"),
  route("/upload", "routes/upload.tsx"),
  route("/resume/:id", "routes/resume.tsx"),
  route("/wipe", "routes/wipe.tsx"),

  // 👇 Dummy route to handle Chrome's request
  route("/.well-known/*", "routes/wellKnown.tsx"),
] satisfies RouteConfig;
