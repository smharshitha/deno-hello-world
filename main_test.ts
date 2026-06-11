import { assertEquals } from "https://deno.land/std@0.224.0/assert/mod.ts";
import { app } from "./main.ts";

Deno.test("GET / returns status 200 and welcome message", async () => {
  const res = await app.request("http://localhost/");
  assertEquals(res.status, 200);
  const json = await res.json();
  assertEquals(json.status, "Healthy");
});

Deno.test("GET /greet/Harshu returns status 200 and greeting", async () => {
  const res = await app.request("http://localhost/greet/Harshu");
  assertEquals(res.status, 200);
  const json = await res.json();
  assertEquals(json.message, "Hello, Harshu! Your server is running live! ✨");
});