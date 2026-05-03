

function ArtistCard ({ artist }) { 
    return ( 
        <div className="artistName">
            <img src={artist.picture_medium} alt="artistPicture" />
            <p>{artist.name}</p>
        </div>
    );

}

export default ArtistCard;