function normalizeManyArtists(artistsAPI){
    return {
        id: artistsAPI[0].id,
        name: artistsAPI[0].name
    };
}
//id, name, picture, small, medium, big, nb_album, nb_fan,

function normalizeTrack(trackAPI) {
    return {
        id: track.trackId,
        title: track.trackName,
        artist: track.artistName,
        album: track.collectionName,
        cover: track.artworkUrl100.replace("100x100", "500x500"),
        preview: track.previewUrl
    };
}
export { normalizeManyArtists,normalizeTrack};