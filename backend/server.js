import { Express } from "express";
import { DotenvConfigOptions } from "dotenv";

const app = express();

// config
dotenv.config({ path: "backend/config/config.env" });

app.get("/", (req, res) => {
  res.send("API is running...");
});

app.listen(process.env.PORT, () => {
  console.log(`Server is listening on http://localhost:${process.env.PORT}`);
});
