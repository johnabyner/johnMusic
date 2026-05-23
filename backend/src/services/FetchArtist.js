import InfoNormalize from "./InfoNormalize.js";

class FetchArtist{
    constructor(){
        this.BASE_URL = "https://api.deezer.com";
    }

    //https://api.deezer.com/search/artist?q=eminem
    async fetchManyArtists(query){ //it will search for all results matching the search
        const url = `${this.BASE_URL}/search/artist?q=${encodeURIComponent(query)}&limit=20`;
        console.log(url);

        try{
            const response = await fetch(url);

            if(!response.ok){
                throw new error('HTTP', response.status);
            }

            const data = await response.json();
            const dataFiltered = InfoNormalize.filterManyProfiles(data);
            return dataFiltered;
        }catch(e){
            console.log("ERROR IN FETCH ARTISTS", e);
            throw e;
        }
    }


    //https://api.deezer.com/artist/51743872
    async fetchProfileArtist(idArtist){ //will search the artist matching with id
        const url = (`${this.BASE_URL}/artist/${idArtist}`);
        console.log(url);

        try{
            const response = await fetch(url);
            
            if(!response.ok){
                throw new error('HTTP', response.status)
            }

            const data = await response.json();
            const dataFiltered = InfoNormalize.filterProfile(data);
            return dataFiltered;
        }catch(e){
            console.log("ERROR IN FETCH ARTIST PROFILE", e);
            throw e;
        }
    }
}
export default FetchArtist;