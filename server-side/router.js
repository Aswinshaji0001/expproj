import { Router } from "express";
import { Home,getDonors} from "./requestHandler.js";

const router=Router();
router.route("/adddonor").post(Home)
router.route("/getDonors").get(getDonors)

export default router;