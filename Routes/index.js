import express from "express";
import { createEvent, getEvents } from "../Controller/index.js";
import { isAuthenticated } from "../middlewares/authmiddleware.js";

const router = express.Router();

router.post("/", isAuthenticated, createEvent);
router.get("/", isAuthenticated, getEvents);

export default router;