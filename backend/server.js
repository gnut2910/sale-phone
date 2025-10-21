import app from "./app.js";
import dotenv from "dotenv";

dotenv.config();

const PORT = process.env.PORT;

app.listen(PORT, async () => {
  console.log(`App running at: http://localhost:${PORT}`);
});
