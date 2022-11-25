import express from "express";
import bodyParse from "body-parser";
import cors from "cors";
import mysql from "mysql2";
import dotenv from "dotenv";

const app = express();
dotenv.config();

// connect to mysql database
const db = mysql.createPool({
  host: process.env.HOST_NAME,
  user: process.env.USER_NAME,
  password: process.env.USER_PASSWORD,
  database: process.env.DATABASE_NAME,
});

// global middlewares
app.use(cors());
app.use(express.json());
app.use(bodyParse.urlencoded({ extended: true }));

// routes
app.get("/api/v1/contacts/get", (req, res) => {
  const sqlGet = "SELECT * FROM contacts";
  db.query(sqlGet, (error, result) => {
    res.send(result);
  });
});

/* app.get("/", (req, res) => {
  try {
    const sqlInsert =
      "INSERT INTO contacts (name, email, contact) VALUES ('dave grey', 'davegrey@gmail.com', 0400333333)";
    db.query(sqlInsert, (err, result) => {
      console.log(err);
      console.log(result);
      res.send("Hello Server");
    });
  } catch (error) {
    res.send(error);
  }
}); */

app.listen(5000, () => {
  console.log("Sever is running on port 5000");
});
