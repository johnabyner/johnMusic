import path from 'node:path';
import fs from 'node:fs/promises';

class LrclibService {
  async getTrackLyrics(trackName, artistName, albumName, duration) {
    try {
      const params = new URLSearchParams({
        track_name: trackName,
        artist_name: artistName,
      });

      const response = await fetch(`https://lrclib.net/api/search?${params}`);
      
      if (!response.ok) return null;
      
      const data = await response.json();
      return data;
    }catch (error) {
      console.error('Error fetching lyrics from lrclib.net:', error);
      return null;
    }
  }  
}

export default new LrclibService();

//   const resultado = await lrclib.getTrackLyrics(
//     'SAILOR SATURNO', 
//     'virgingod'
//   );