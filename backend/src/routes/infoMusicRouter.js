import express from "express";
const router = express.Router();


//GET
//ARTIST
import manyArtistController from '../controllers/manyArtistsController.js';
import artistController from "../controllers/artistController.js";

router.get('/artists/:name', manyArtistController); 
router.get('/artist/:id', artistController);

//ALBUM
// router.get('/', ); 

//TRACK
// router.get('/', );
// router.get('/', );

export default router;

