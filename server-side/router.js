import { Router } from "express";
import { Home} from "./requestHandler.js";

const router=Router();
router.route("/adddonor").post(Home)

export default router;