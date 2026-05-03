import FetchArtist from "../services/FetchArtist.js";

async function artistController(req, res){
    try{
        const JohnMusic = new FetchArtist();

        const idArtist = req.params.name;
        const data = await JohnMusic.fetchIDArtist(idArtist);

        res.json(data);
    }catch(e){
        console.log("ERROR IN ARTIST CONTROLLER ", e);
        res.status(500).json( { error: e.message} )
    }
}

export default artistController;