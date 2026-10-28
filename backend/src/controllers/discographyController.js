import FetchDiscography from '../services/FetchDiscography.js';


async function discographyController(req, res){
    try{
        const Discography = new FetchDiscography();
        const musicId = req.params.musicId; //will get the id from url

        const dataDiscography = await Discography.fetchMusicInformation(musicId);
        console.log('discography loaded')
        res.json([dataDiscography[0],dataDiscography[1]]);
    }catch(e){
        console.log("ERROR IN ARTIST CONTROLLER ", e);
        res.status(500).json( { error: e.message} )
    }
}

export default discographyController;

// { ------------------------------------------------------------------
//   "data": [
//     {
//       "id": "660410441",
//       "title": "DUPLA PERSONA",
//       "link": "https://www.deezer.com/album/660410441",
//       "cover": "https://api.deezer.com/album/660410441/image",
//       "cover_small": "https://cdn-images.dzcdn.net/images/cover/04bb51af488845d1448b10a9e7be4631/56x56-000000-80-0-0.jpg",
//       "cover_medium": "https://cdn-images.dzcdn.net/images/cover/04bb51af488845d1448b10a9e7be4631/250x250-000000-80-0-0.jpg",
//       "cover_big": "https://cdn-images.dzcdn.net/images/cover/04bb51af488845d1448b10a9e7be4631/500x500-000000-80-0-0.jpg",
//       "cover_xl": "https://cdn-images.dzcdn.net/images/cover/04bb51af488845d1448b10a9e7be4631/1000x1000-000000-80-0-0.jpg",
//       "md5_image": "04bb51af488845d1448b10a9e7be4631",
//       "genre_id": 116,
//       "fans": 61,
//       "release_date": "2023-04-07",
//       "record_type": "album",
//       "tracklist": "https://api.deezer.com/album/660410441/tracks",
//       "explicit_lyrics": true,
//       "type": "album"
//     },

