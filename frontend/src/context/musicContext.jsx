import { fetchDiscographyInformation } from "@/services/fetchJohnMusic"
import { create } from "zustand";

const useMusicContext = create((set) => ({
    musicInformation: [],

    searchMusicInformation: async(musicId) => {
        if(musicId.trim() !== ''){
            try{
                const information = await fetchDiscographyInformation(musicId);
                set({musicInformation:information});
            }catch(err){
                console.error('Error in fetch more information about this music', err);
            }
        }
    }
}))

export {useMusicContext};