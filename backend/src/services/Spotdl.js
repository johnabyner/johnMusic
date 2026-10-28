import { spawn } from "node:child_process";
import path from "node:path";
import fs from 'node:fs/promises';

const spotdlPath = path.resolve('.venv/bin/spotdl');

class Spotdl{
    runCommand(args) {
        return new Promise((resolve, reject) => {
            const spotdl = spawn(spotdlPath, args);

            spotdl.stderr.on('data', (data) => {
                console.error(`stderr: ${data.toString()}`);
            });

            spotdl.on('close', (code) => {
                if (code === 0) {
                    console.log('Download completed successfully.');
                    resolve();
                    return;
                }

                const error = new Error(
                    `spotDL exited with error code ${code}`
                );

                console.error(error.message);
                reject(error);
            });

            spotdl.on('error', (error) => {
                reject(error);
            });
        });
    }

    async download(title, artist, outputPath) {
        const query = `${title} ${artist}`
        console.log(`Downloading music: ${title}-${artist}`)

        const spotdlFilePath = path.join(
            outputPath,
            'metadata.spotdl'
        );

        const outputAudio = path.join(
            outputPath,
            '{list-name}',
            '{title}-{artist}'
        );

        try {
            await this.runCommand([
                'download',
                query,
                '--save-file',
                spotdlFilePath,
                '--output',
                outputAudio,
                '--threads',
                '8',
            ]);
        } catch (error) {
            console.error('Failed to download music:', error);
        }
    }
}

export default new Spotdl();