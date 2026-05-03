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

            const data = response.json();
            return data;
        }catch(e){
            console.log("ERROR IN FETCH ARTISTS", e);
            throw e;
        }
    }


    //https://api.deezer.com/artist/27
    async fetchIDArtist(idArtist){ //will search the artist matching with id
        const artist = await fetch(`${this.BASE_URL}/lookup?id=${idArtist}&entity=artist`);
        const data = await artist.json();

        try{
            const url = `${this.BASE_URL}/artist/${idArtist}`
            const response = await fetch(url);
            
            if(!response.ok){
                throw new error('HTTP', response.status)
            }

            const data = response.json();
            return data;
        }catch(e){
            console.log("ERROR IN FETCH ARTIST", e);
            throw e;
        }
    }
}
export default FetchArtist;