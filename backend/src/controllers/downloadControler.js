import DownloadMusic from '../services/DownloadMusic.js'
import path from "node:path";
import os from 'node:os'

async function downloadController(req, res) {
    const {title, artist} = req.body;

    try {
        const musicDir = path.join(os.homedir(), 'johnmusic');
        const filePath = await DownloadMusic.download(title, artist, musicDir);

        res.status(200).json({message: 'sucesseful in download music'})
    } catch (err) {
        console.log("Error in download music", err);
        res.status(500).json({error: err.message})
    }
}

export default downloadController;