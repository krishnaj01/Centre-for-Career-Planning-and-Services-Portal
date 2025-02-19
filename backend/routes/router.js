//importing all the necessary dependencies 
import express from "express";
import {jobCreate, jobDelete, jobList,jobUpdate,jobRelevanceScoreUpvote,jobRelevanceScoreDownvote} from "../controllers/jobs.controllers.js"
import { ViewRes } from "../controllers/studentview.js";
// import SavedApplications from "../../frontend/src/pages/Savedapplications.jsx";

//using the router
const router = express.Router();

//making the routes
router.route("").get();
router.post("/jobs",jobCreate)
router.put("/jobs/:id",jobUpdate)
router.delete("/jobs/:id",jobDelete)
router.get('/jobs', jobList);
router.get('/jobs/upvote/:id',jobRelevanceScoreUpvote)
router.get('/jobs/downvote/:id',jobRelevanceScoreDownvote)

// getting student view
router.get('/student/:ID', ViewRes);

//exporting the router
export default router;
