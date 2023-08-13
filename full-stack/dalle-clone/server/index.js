import express from "express";
import * as dotenv from "dotenv";
import cors from "cors";

import connectDB from "./mongodb/connect.js";
import postRoutes from "./routes/postRoutes.js";
import dalleRoutes from "./routes/dalleRoutes.js";

dotenv.config();
const PORT = 8080;
const app = express();

app.use(cors());
app.use(express.json({ limit: "50mb" }));

/* Enabling post route and dalle route */
app.use("/api/v1/post", postRoutes);
app.use("/api/v1/dalle", dalleRoutes);

app.get("/", async (req, res) => {
  res.send("Base API");
});

const startServer = async () => {
  try {
    connectDB(process.env.MONGODB_URL);
    app.listen(PORT, () => {
      console.log("[INFO] Server has started ...");
      console.log(`[INFO] Port: http://localhost:${PORT}`);
    });
  } catch (error) {
    console.log(error);
  }
};

startServer();
