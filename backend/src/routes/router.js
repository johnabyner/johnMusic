import express from "express";
const router = express.Router();

router.use(express.urlencoded({ extended: true }));
router.use(express.json());

import infoMusicRouter from './infoMusicRouter.js';
router.use('/johnMusic', infoMusicRouter);

//add route for invalid routes

export default router;