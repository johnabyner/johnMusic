async function fetchArtist(artistName){
    const search = await fetch(`${import.meta.env.VITE_API_URL}/johnMusic/artists/${artistName}`);
    const data = await search.json();

    return data;
}

export {fetchArtist};