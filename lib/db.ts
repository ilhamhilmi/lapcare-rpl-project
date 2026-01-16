import mysql from "mysql2/promise";

export const db = mysql.createPool({
  host: "yamanote.proxy.rlwy.net",
  port: 51698,
  user: "root",
  password: "OXcFFYOhsiXCYBxHEAMHrTztviBjEGrh",
  database: "railway",
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0,
});