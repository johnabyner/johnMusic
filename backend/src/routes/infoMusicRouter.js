import express from "express";
const router = express.Router();

import manyArtistController from '../controllers/manyArtistsController.js';
import artistController from "../controllers/artistController.js";
import discographyController from "../controllers/discographyController.js";
import downloadController from "../controllers/downloadControler.js";



//ARTIST
router.get('/artists/:name', manyArtistController); //many artists
router.get('/artist/:id', artistController); //informations of a unique artists

//DISCOGRAPHY
router.get('/music/:musicId', discographyController);

//DOWNLOAD
router.post('/downloadMusic', downloadController);

export default router;

