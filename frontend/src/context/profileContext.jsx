//router.get('/artist/:id', artistController);
//data,discography
//id
import {create} from 'zustand';
import { fetchProfileArtist } from "../services/fetchJohnMusic.js";

const useProfileArtistContext = create((set)=>({
    artistInformation: [],

    searchArtistInformation: async(input) =>{
        if(input.trim() !== ''){
            try{
                const information = await fetchProfileArtist(input);
                set({artistInformation: information});
            }catch(err){
                console.error('Error in search artists', err);
            }
        }
    }
}))

export {useProfileArtistContext};
