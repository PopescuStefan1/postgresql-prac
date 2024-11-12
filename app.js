import express, { urlencoded } from "express";
import "dotenv/config";
const app = express();
import indexRouter from "./routes/indexRouter.js";

app.set("view engine", "ejs");
app.use(urlencoded({ extended: true }));
app.use("/", indexRouter);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Express app listening on port ${PORT}!`));
