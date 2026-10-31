async function fetchArtists(artistName){
    const search = await fetch(`${import.meta.env.VITE_API_URL}/johnMusic/artists/${artistName}`);
    const data = await search.json();

    return data;
}

async function fetchProfileArtist(id){
    const search = await fetch(`${import.meta.env.VITE_API_URL}/johnMusic/artist/${id}`);
    const data = await search.json();

    return data;
};

async function fetchDiscographyInformation(musicId){
    const search = await fetch(`${import.meta.env.VITE_API_URL}/johnMusic/music/${musicId}`);
    const data = await search.json();

    return data;
}

async function fetchDownloadMusic(title, artist){
    const response = await fetch(`${import.meta.env.VITE_API_URL}/johnMusic/downloadMusic`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            title: title,
            artist: artist,
        })
    });
    const data = await response.json();
    
    return data;
}

export {fetchArtists, fetchProfileArtist, fetchDiscographyInformation, fetchDownloadMusic};