import { useEffect } from "react";
import { useParams } from "react-router-dom";
import MusicInformationHead from "@/components/musicInformation/MusicInformationHead";
import MusicInformationGrid from "@/components/musicInformation/MusicInformationGrid";
import MusicInformationCard from "@/components/musicInformation/MusicInformationCard";
import { useMusicContext } from "@/context/musicContext";

function MusicInformation(){
    const {discographyId} = useParams();

    const searchDiscographyInformation = useMusicContext((state) => state.searchMusicInformation);
    const musicInformation = useMusicContext((state) => state.musicInformation)

    useEffect(() => {
        if(discographyId){
            searchDiscographyInformation(discographyId);
        }
    },[searchDiscographyInformation])

    if(!discographyId){
        return <h2>Invalid artist or discography</h2>
    }

    const headInformation = musicInformation?.[0];
    const discographyList = musicInformation?.[1];

    const artistName = headInformation?.artist?.name
    return <>
        <section>
            <MusicInformationHead headInformation={headInformation} discographyList={discographyList}/>
        </section>

        <section>
            <MusicInformationGrid discographyList={discographyList} artistName={artistName}/>            
        </section>
    </>
}

export default MusicInformation;

//foto
//nome
//abaixar tudo

//tabela
//musica informaçoes
//se clicar vai abaixar, vai ter um botao tb

