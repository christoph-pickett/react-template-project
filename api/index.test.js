const request = require("supertest");
const { app } = require("./index");

describe("API Tests", () => {
  it("should return 'Hello World!' when GET request is made to '/'", async () => {
    const response = await request(app.listen()).get("/");
    expect(response.status).toBe(200);
    expect(response.text).toBe("Hello World!");
  });
});
