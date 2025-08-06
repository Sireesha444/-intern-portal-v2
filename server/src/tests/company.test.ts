import request from "supertest";
import app from "../app"; // Ensure this is correct
import mongoose from "mongoose";
import Company from "../models/Company"; // Adjust the path if needed

beforeAll(async () => {
  await mongoose.connect(process.env.MONGODB_URI as string);
});

afterAll(async () => {
  await mongoose.disconnect();
});

describe("Company API", () => {
  const newCompany = {
    name: "Test Company",
    email: "testcompany@example.com",
    password: "Test@1234",
    phone: "1234567890",
  };

  it("should register a new company", async () => {
    const res = await request(app)
      .post("/api/company/register")
      .send(newCompany);

    expect(res.status).toBe(201);
    expect(res.body).toHaveProperty("message", "Company registered successfully");
  });

  it("should not allow duplicate company email", async () => {
    const res = await request(app)
      .post("/api/company/register")
      .send(newCompany);

    expect(res.status).toBe(400);
    expect(res.body).toHaveProperty("error");
  });

  it("should login with correct credentials", async () => {
    const res = await request(app)
      .post("/api/company/login")
      .send({
        email: newCompany.email,
        password: newCompany.password,
      });

    expect(res.status).toBe(200);
    expect(res.body).toHaveProperty("message", "Login successful");
  });

  it("should reject login with wrong password", async () => {
    const res = await request(app)
      .post("/api/company/login")
      .send({
        email: newCompany.email,
        password: "WrongPassword",
      });

    expect(res.status).toBe(401);
    expect(res.body).toHaveProperty("message", "Invalid credentials");
  });
});
