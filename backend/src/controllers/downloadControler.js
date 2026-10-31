import DownloadMusic from '../services/DownloadMusic.js'
import path from "node:path";
import os from 'node:os'

async function downloadController(req, res) {
    const {title, artist} = req.body;

    try {
        const musicDir = path.join(os.homedir(), 'johnmusic');
        const filePath = await DownloadMusic.download(title, artist, musicDir);
        
        return res.status(200).json({message: 'Music downloaded successfully'});
    } catch (err) {
        console.log("Error in download music", err);
        res.status(500).json({error: 'Error in download music'})
    }
}

export default downloadController;