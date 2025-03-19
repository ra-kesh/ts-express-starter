import express from "express";
import cors from "cors";

require("dotenv").config();

const app = express();

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.json({ message: "Hello World" });
});

export default app;
