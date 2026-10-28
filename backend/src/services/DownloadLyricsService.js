import fs from 'node:fs/promises';
import path from 'node:path';
import FetchLrclib from "./FetchLrclib.js";

class DownloadLyricsService{
    async writeLyrics(artist, title, lyrics, output){
        try{
            const fileName = `${title}-${artist}.lrc`;
            const filePath = path.join(output, fileName);

            await fs.mkdir(output, {recursive: true});
            await fs.writeFile(filePath, lyrics, "utf-8");
        }catch(err){
            throw new Error('Error writing lyrics', { cause: err });
        }
    }

    async download(title, artist, output){
        try{
            const data = await FetchLrclib.getTrackLyrics(title, artist)
            if (!data?.length) {
                console.log(`No lyrics found: ${title} - ${artist}`);
                return;
            }

            const lyrics = data[0].syncedLyrics || data[0].plainLyrics;
            if(lyrics){
                console.log(`No lyrics available: ${title}-${artist}`);
            }

            await this.writeLyrics(artist,title,lyrics, output)
        }catch(err){
            console.error('Error downloading lyrics', err.message);
        }
    }

    async downloadAll(output){
        const musics = new Map();
        const files = await fs.readdir(output);
        
        const mp3Files = files.filter(file => file.toLowerCase().endsWith('.mp3'));
        const lrcFiles = files.filter(file=> file.toLowerCase().endsWith('.lrc'));
        
        for (const file of mp3Files) {
            const name = file.replace(/\.mp3$/i, '');
            musics.set(name, file);
        }

        for (const file of lrcFiles) {
            const name = file.replace(/\.lrc$/i, '');
            musics.delete(name);
        }

        for (const file of musics.values()) {
            const [title, artist] = file
                .replace(/\.mp3$/i, '')
                .split('-')
                .map(part => part.trim());

            console.log(`Searching lyrics: title="${title}", artist="${artist}"`)

            await this.download(title, artist, output);
        }
    }
}

export default new DownloadLyricsService();