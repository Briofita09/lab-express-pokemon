import supertest from "supertest";

import { app } from "./app.js";

describe("GET /pokemons", () => {
  it("should return an array of pokemons", async () => {
    const response = await supertest(app).get("/pokemon");

    expect(response.body).toBeInstanceOf(Array);
  });
});

describe("GET /pokemon/:id", () => {
  it("should return an object of 1 pokemon", async () => {
    const response = await supertest(app).get("/pokemon/1");

    expect(response.status).toBe(200);
    expect(response.body).toBeInstanceOf(Object);
  });
});

describe("SEARCH by NAME /search", () => {
  it("should return an object of 1 pokemon", async () => {
    const response = await supertest(app).get("/search?name=bulbasaur");
    expect(response.status).toBe(200);
    expect(response.body).toBeInstanceOf(Object);
  });
});

describe("SEARCH by TYPE /search", () => {
  it("should return an array of pokemons", async () => {
    const response = await supertest(app).get("/search?type=grass");
    expect(response.status).toBe(200);
    expect(response.body).toBeInstanceOf(Array);
  });
});
