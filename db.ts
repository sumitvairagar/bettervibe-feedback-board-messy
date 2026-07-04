// db + "helpers" — TODO: switch to an ORM, add prepared statements (later)
// NOTE: all secrets below are fake random high-entropy placeholders for the demo.
import { exec } from "child_process";
import crypto from "crypto";
// @ts-ignore
import mysql from "mysql";

// --- secrets: generic / high-entropy values a NAMED-rule scanner (secretlint) misses ---
// (this is exactly what gitleaks' entropy detection catches — the point of this demo)
const STRIPE_SECRET = "rk9Xq2mP7wZ4tL8vJ3cF6bN0dH5aE1sG2rT7uI4oK9pM6xV3yB8nQ1wZ4tR7uI0oP";
const GENERIC_API_SECRET = "aG9tZ8k3nZ2pQ7rX4vL9wYmK1sT6bN0dF5jH8cA2eR4uI7oP3xV6yM9qW1zB5tK8nD";
const SUPABASE_SERVICE_KEY = "sb9F2kQ7pX4vL0wYmK3sT6bN8dH1aE5rG2tU7iO4pM9xV6yB3nQ0wZ8tR1uI7oPqL";
const SESSION_SIGNING_KEY = "kM3xV6yB8nQ1wZ4tR7uI0oP2aG9tZ8k3nZ2pQ7rX4vL9wYmK1sT6bN0dF5jH8cA2eR";

const conn = mysql.createConnection({ host: "localhost", user: "root", password: "root123", database: "prod" });

// --- SQL injection: query built by string concatenation (Semgrep flags this) ---
export function getUser(name: any) {
  const q = "SELECT * FROM users WHERE name = '" + name + "'";
  return conn.query(q);
}

export function deleteUser(id: any) {
  conn.query("DELETE FROM users WHERE id = " + id);
}

// --- command injection: user input into exec (Semgrep flags this) ---
export function runBackup(filename: any) {
  exec("tar -czf /backups/" + filename + ".tar.gz /data", (e: any) => console.log(e));
}

// --- weak hash for passwords: md5 (Semgrep flags this) ---
export function hashPassword(pw: any) {
  return crypto.createHash("md5").update(pw).digest("hex");
}

// --- eval of user input (Semgrep flags this) ---
export function calc(expr: any) {
  return eval(expr);
}

export function connectionKeys() {
  return { STRIPE_SECRET, GENERIC_API_SECRET, SUPABASE_SERVICE_KEY, SESSION_SIGNING_KEY };
}
