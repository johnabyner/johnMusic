//vai retornar uma lista com as musicas

function MusicList({ musics }){ //vai levar como parametro um array de musicas
    return (
        
        <ul> 
            {musics.map((music, index) => (
                <li key={index}> {music} </li>
            ))}
        </ul>
    );
}

export default MusicList