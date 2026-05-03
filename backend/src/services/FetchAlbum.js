class FetchAlbum{
    constructor(){
        this.BASE_URL = "https://api.deezer.com";
    }

    //https://api.deezer.com/search/album?q=eminem
    //pesquisar por albuns


    //https://api.deezer.com/artist/ID/albums
    // async  fetchIDAlbum(idAlbum){
    //     const album = await fetch(`${this.BASE_URL}/lookup?id=${idAlbum}&entity=album`);
    //     const data = await album.json();
    //     return data.results;
    // }
}

export { InformationMusic }; 

//if i need in future, a new font for covers
//https://coverartarchive.org/release-group/ID_DO_ALBUM




