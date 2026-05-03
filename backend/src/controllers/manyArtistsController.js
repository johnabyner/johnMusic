import FetchArtist from "../services/FetchArtist.js";

async function manyArtistController(req, res){
    try{
        const JohnMusic = new FetchArtist();

        const artist = req.params.name;
        const data = await JohnMusic.fetchManyArtists(artist);
    
        res.json(data);
    }catch(e){
        console.log("ERROR IN MANY ARTISTS CONTROLLER ", e);
        res.status(500).json({ error: e.message})
    }

}


export default manyArtistController;