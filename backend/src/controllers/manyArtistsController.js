import FetchArtist from "../services/FetchArtist.js";

async function manyArtistController(req, res){
    try{
        const JohnMusic = new FetchArtist(); //instancing the object

        const artist = req.params.name; //geting the name from url

        const data = await JohnMusic.fetchManyArtists(artist); //fetching the artists
        res.json(data); //return the info
    }catch(e){
        console.log("ERROR IN MANY ARTISTS CONTROLLER ", e);
        res.status(500).json({ error: e.message})
    }
}

export default manyArtistController;