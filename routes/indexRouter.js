import { Router } from "express";
import { logAvailableUsernames, userCreateGet, userCreatePost } from "../controllers/indexController.js";
const indexRouter = Router();

indexRouter.get("/", logAvailableUsernames);
indexRouter.get("/new", userCreateGet);
indexRouter.post("/new", userCreatePost);

export default indexRouter;
