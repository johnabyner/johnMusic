import path from "node:path";
import { fileURLToPath } from "node:url";
import { dirname } from "node:path";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

import { app, BrowserWindow } from "electron";
function createWindow (){
    const win = new BrowserWindow({
        width: 800,
        height: 600,
    })

    win.loadFile(path.join(__dirname, '../frontend/dist/index.html'));
}

//INIT
app.whenReady().then(() =>{
    createWindow();

    app.on('activate', () => {
        if(BrowserWindow.getAllWindows().length === 0){
            createWindow();
        }
    })
})

//CLOSE
app.on('window-all-closed', () => {
    if(process.platform !== 'darwin'){
        app.quit();
    }
})
