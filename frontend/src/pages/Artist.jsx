//will capture the params in the url
import { useParams } from "react-router-dom";

function Artist(){
    const {artistId} = useParams();   

    //in case of dont have a valid id
    if(!artistId){
        return <h2>Invalid Artist</h2>
    }

    return(
        <>
            <h1>{artistId}</h1>

            

            <h1>Artista: Cleiton</h1>
            <p>Top Musicas</p>
            <ul>
                <li>
                    cleiton never ends
                    passinho do romano
                    trending 
                </li>
            </ul>

            <p>albuns</p>
            <ul>
                <li>
                    three cheers
                    minato e bom
                </li>
            </ul>
        </>
    )
}

export default Artist;