import FetchArtist from "../services/FetchArtist.js";
import FetchDiscography from '../services/FetchDiscography.js';


async function artistController(req, res){
    try{
        const Artist = new FetchArtist(); //instance the object
        const Discography = new FetchDiscography();

        const idArtist = req.params.id; //will get the id from url
        const dataArtist = await Artist.fetchProfileArtist(idArtist); //will do the fetch of profile
        const dataDiscography = await Discography.fetchDiscography(idArtist);

        res.json([dataArtist, dataDiscography]);
    }catch(e){
        console.log("ERROR IN ARTIST CONTROLLER ", e);
        res.status(500).json( { error: e.message} )
    }
}

export default artistController;