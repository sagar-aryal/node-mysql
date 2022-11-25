import express from "express";
import bodyParse from "body-parser";
import cors from "cors";

const app = express();

// global middlewares
app.use(cors());
app.use(express.json());
app.use(bodyParse.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  try {
    res.send("Hello Server");
  } catch (error) {
    res.send(error);
  }
});

app.listen(5000, () => {
  console.log("Sever is running on port 5000");
});
