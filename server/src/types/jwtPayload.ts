// src/types/jwtPayload.ts
import { JwtPayload } from "jsonwebtoken";

export interface CustomJwtPayload extends JwtPayload {
  id: string;
  email?: string;
}
