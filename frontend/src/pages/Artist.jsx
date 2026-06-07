//will capture the params in the url
import { useParams } from "react-router-dom";
import { useProfileArtistContext } from "../context/profileContext.jsx";

import ProfileHead from '../components/profile/ProfileHead.jsx';
import Discography from '../components/profile/Discography.jsx';
import { useEffect } from "react";

function Artist(){
    const {artistId} = useParams();   
    const searchArtistProfile = useProfileArtistContext((state) => (state.searchArtistInformation));
    const artistInformation = useProfileArtistContext((state)=>(state.artistInformation));

    useEffect(()=>{
        if(artistId){
            searchArtistProfile(artistId);
        }
    },[artistId, searchArtistProfile]);

    //in case of dont have a valid idsearchArtistInformation
    if(!artistId){
        return <h2>Invalid Artist</h2>
    }

    return(
        <>
            <ProfileHead profileHeadInformation={artistInformation[0]}/>
            <Discography discographyInformation={artistInformation[1]}/>
        </>
    )
}
//
export default Artist;