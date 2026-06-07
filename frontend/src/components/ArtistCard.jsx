import { useNavigate } from 'react-router-dom';

import styles from '../css/ArtistCard.module.css';

function ArtistCard ({ artist }) { 
    const navigate = useNavigate();
    
    return ( 
        <div className={styles.artistCard}>

            <img 
                src={artist.picture_medium} 
                alt="artistPicture" 
                onClick={() => navigate(`artist/${artist.id}`)}
            />
            <p>{artist.name}</p>

        </div>
    );

}

export default ArtistCard;