class FetchTrack{
    constructor(){
        this.BASE_URL = "https://api.deezer.com";
    }

    // https://api.deezer.com/track/3135556
    // async getIDTrack(idMusic){
    //     const music = await  fetch(`${BASE_URL}/lookup?id=${idMusic}&entity=song`);
    //     const data = await music.json();
    //     return data.results;
    // }

    //top of artist
    //"https://api.deezer.com/artist/275386/top?limit=50"
}
export default FetchTrack;