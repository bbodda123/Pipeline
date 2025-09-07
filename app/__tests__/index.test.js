import request from "supertest";
import app from "../index.js";

describe("Express App", () => {
  test("GET / should return Hello,world", async () => {
    const response = await request(app).get("/");
    expect(response.status).toBe(200);
    expect(response.text).toContain("Hello,world");
  });

  test("GET /about should return About Me", async () => {
    const response = await request(app).get("/about");
    expect(response.status).toBe(200);
    expect(response.text).toContain("About Me");
  });

  test("GET /contact should return Contact Me", async () => {
    const response = await request(app).get("/contact");
    expect(response.status).toBe(200);
    expect(response.text).toContain("Contact Me");
  });
});
