import { Router } from "express";
import { Home,getDonors,getDonor, editDonor, deleteDonor} from "./requestHandler.js";

const router=Router();
router.route("/adddonor").post(Home)
router.route("/getDonors").get(getDonors)
router.route("/getdonor/:id").get(getDonor)
router.route("/editdonor/:_id").put(editDonor)
router.route("/deletedonor/:_id").delete(deleteDonor)

export default router;