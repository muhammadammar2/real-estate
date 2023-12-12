import express from "express";
import {
  createListing,
  deleteListing,
  updateListing,
  getListing,
  getListings,
  addToCart,
} from "../controllers/listing.controller.js";
import { verifyToken } from "../utils/verifyUser.js";
const router = express.Router();
//verifytoken from utils(verify user.js) to authenticate userr
router.post("/create", verifyToken, createListing);
router.delete("/delete/:id", verifyToken, deleteListing);
router.post("/update/:id", verifyToken, updateListing);
router.get("/get/:id", getListing);
//for searching
router.get("/get", getListings);
//add to cart
router.post("/add-to-cart/:id", verifyToken, addToCart);

export default router;
