import express from "express";
const router = express.Router();


//GET
import manyArtistController from '../controllers/manyArtistsController.js';
import artistController from "../controllers/artistController.js";

//import discographyController from '../controllers/discographyController.js';

//ARTIST
router.get('/artists/:name', manyArtistController); //many artists
router.get('/artist/:id', artistController); //informations of a unique artists

//DISCOGRAPHY

export default router;

