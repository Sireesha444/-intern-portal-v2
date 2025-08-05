import request from "supertest";
import mongoose from "mongoose";
import app from "../app";
import Student from "../models/student.model";

describe("Student API", () => {
  let server: any;
  let savedStudentId: string;

  const testStudent = {
    name: "Test User",
    email: "testuser@example.com",
    password: "testpass123",
  };

  beforeAll(async () => {
    server = app.listen(4000);
    await mongoose.connect(process.env.MONGO_URI!);
  });

  afterAll(async () => {
    await mongoose.connection.dropDatabase();
    await mongoose.connection.close();
    server.close();
  });

  it("should register a new student", async () => {
    const res = await request(app).post("/api/students/register").send(testStudent);
    expect(res.statusCode).toBe(201);
    expect(res.body).toHaveProperty("studentId");
    savedStudentId = res.body.studentId;
  });

  it("should login with correct credentials", async () => {
    const res = await request(app).post("/api/students/login").send({
      studentId: savedStudentId,
      password: testStudent.password,
    });
    expect(res.statusCode).toBe(200);
    expect(res.body).toHaveProperty("studentId");
  });

  it("should reject login with wrong password", async () => {
    const res = await request(app).post("/api/students/login").send({
      studentId: savedStudentId,
      password: "wrongpass",
    });
    expect(res.statusCode).toBe(401);
  });

  it("should fetch student profile by ID", async () => {
    const res = await request(app).get(`/api/students/${savedStudentId}`);
    expect(res.statusCode).toBe(200);
    expect(res.body).toHaveProperty("email", testStudent.email);
  });

  it("should return 404 for non-existent student", async () => {
    const res = await request(app).get(`/api/students/INVALID_ID`);
    expect(res.statusCode).toBe(404);
  });
});

