// lib/mongodb.ts
import mongoose from "mongoose";

if (!process.env.MONGODB_URI) throw new Error("MONGODB_URI not defined");

let cached = (globalThis as any).mongoose;

if (!cached) cached = (globalThis as any).mongoose = { conn: null, promise: null };

async function dbConnect() {
  if (cached.conn) return cached.conn;

  if (!cached.promise) {
    cached.promise = mongoose.connect(process.env.MONGODB_URI).then((m) => m);
  }
  cached.conn = await cached.promise;
  return cached.conn;
}

export default dbConnect;
