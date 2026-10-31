import { useMusicContext } from "@/context/musicContext.jsx";
import { fetchDownloadMusic } from "./fetchJohnMusic.js";
import {toast} from "sonner";

class DownloadService{
    async downloadMusic(title,artist){
        return toast.promise(
            fetchDownloadMusic(title, artist),
            {
                loading: "Downloading music...",
                success: `Sucess in download music: ${title}`,
                error: `Failed in download music: ${title}`
            }
        )
    }

    async downloadAlbum(discographyList, artist){
        // for(const music of discographyList){
        //     await this.downloadMusic(music.title, artist)
        // }
        const total = discographyList.length;
        const completed = 0;
        const failed = 0;

        const toastId = toast.loading(`Downloading album: 0/${total}`);

        for(const music of discographyList){
            try{
                await fetchDownloadMusic(music.title, artist);
                completed++;
            }catch(err){
                failed++;
                console.error(`Failed to download ${music.title}:`, err);
            }

            toast.loading(`Downloading album: ${completed+failed}/${total}`, {id: toastId})
        }

        if(failed === 0){
            toast.success(`Album downloaded! ${completed}/${total} tracks.`, {id: toastId});
        }else{
            toast.warning(`Download finished: ${completed} completed, ${failed} failed.`, {id:toastId})
        }
    }
}

export default new DownloadService();