import DownloadLyricsService from "./DownloadLyricsService.js";
import FetchLrclib from "./FetchLrclib.js";
import Spotdl from "./Spotdl.js";

class DownloadMusic{
    async download(title, artist, output){
        await Spotdl.download(title, artist, output);
        await DownloadLyricsService.downloadAll(output)    
    }

}

//usar spotdl e lrclib

export default new DownloadMusic();