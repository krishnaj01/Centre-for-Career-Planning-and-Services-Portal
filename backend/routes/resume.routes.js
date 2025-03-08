import express from "express";
import {generateResume} from "../controllers/resume.controllers.js";

const router = express.Router();

router.post('/generate', generateResume);

export default router;