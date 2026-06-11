import { Hono } from "hono";

export const app = new Hono();

app.get("/", (c) => {
  return c.json({
    message: "Welcome to your permanent Deno Deploy web server! 🚀",
    status: "Healthy",
    timestamp: new Date().toISOString()
  });
});

app.get("/greet/:name", (c) => {
  const name = c.req.param("name");
  return c.json({
    message: `Hello, ${name}! Your server is running live! ✨`
  });
});

Deno.serve(app.fetch);
