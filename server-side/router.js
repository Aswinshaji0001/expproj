import { Router } from "express";
import { Home,getDonors,getDonor, editDonor} from "./requestHandler.js";

const router=Router();
router.route("/adddonor").post(Home)
router.route("/getDonors").get(getDonors)
router.route("/getdonor/:id").get(getDonor)
router.route("/editdonor/:_id").put(editDonor)



export default router;