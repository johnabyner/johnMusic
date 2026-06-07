import {create} from 'zustand';
import { fetchArtists } from "../services/fetchJohnMusic";


const useSearchStore = create((set)=> ({
    artists: [],

    searchArtist: async (input) => {
        if(input.trim !== ''){
            try{
                const information = await fetchArtists(input);

                set({ artists: information});
            }catch(err){
                console.error('Error in search artists', err);
            }
        }
    }
}));

export {useSearchStore};