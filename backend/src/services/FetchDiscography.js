import InfoNormalize from "./InfoNormalize.js";

class FetchDiscography{
    constructor(){
        this.BASE_URL = "https://api.deezer.com";
    }

    //https://api.deezer.com/artist/ID/albums
    async fetchDiscography(idArtist){
        const url = (`${this.BASE_URL}/artist/${idArtist}/albums`)

        try{
            const response = await fetch(url);

            if(!response.ok){
                throw new error('HTTP', response.status);
            }
            const data = await response.json();
            const dataFiltered = InfoNormalize.filterDiscography(data);

            return dataFiltered;
        }catch(e){
            console.log("ERROR IN FETCH DISCOGRAPHY", e);
            throw e;
        }
    }
}

export default FetchDiscography; 

//if i need in future, a new font for covers
//https://coverartarchive.org/release-group/ID_DO_ALBUM

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


