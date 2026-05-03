import styles from '../css/ArtistGrid.module.css'

import ArtistCard from "./ArtistCard.jsx";

function ArtistGrid( {artists} ){
    return (
        <div className={styles.grid}>
            {artists.map((artist) => 
                <ArtistCard key={artist.id} artist={artist}/>
            )}
        </div>
    );
}

export default ArtistGrid;