import express from "express";
import { createListing } from "../controllers/listing.controller.js";
import { verifyToken } from "../utils/verifyUser.js";
const router = express.Router();
//verifytoken from utils(verify user.js) to authenticate userr
router.post("/create", verifyToken, createListing);

export default router;
