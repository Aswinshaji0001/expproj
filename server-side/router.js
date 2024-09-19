import { Router } from "express";
import { Home,getData } from "./requestHandler.js";

const router=Router();
router.route("/adddonor").post(Home)

export default router;