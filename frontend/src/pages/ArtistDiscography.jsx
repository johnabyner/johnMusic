import DiscographyCard from "@/components/discography/DiscographyCard";
import { useProfileArtistContext } from "@/context/profileContext";
import { useParams } from "react-router-dom";
import FullDiscographyGrid from "@/components/discography/FullDiscographyGrid";
import { useEffect } from "react";

function ArtistDiscography(){
    const {artistId, type} = useParams(); 

    //if do this way, picking the list of context, when we reload the page the information will gone
    // const artistInformation = useProfileArtistContext((state)=> (state.artistInformation));
    
    const searchArtistProfile = useProfileArtistContext((state) => (state.searchArtistInformation));
    const artistInformation = useProfileArtistContext((state) => (state.artistInformation));

    useEffect(()=>{
        if(artistId){
            searchArtistProfile(artistId);
        }
    },[artistId, searchArtistProfile])

    if(!artistId){
        return <h2>Invalid artist</h2>
    }

    const discographyList = artistInformation?.[1]?.[type];

    return <>
        <section>
            <div>
                <FullDiscographyGrid discographyList={discographyList} type={type}/>
            </div>
        </section>
    </>
}

export default ArtistDiscography;
