import './css/App.css';

import {useMusic} from './hooks/useMusic.js';

import MusicInput from './components/MusicInput.jsx';
import MusicList  from './components/MusicList.jsx';


//pesquisar
//enviar para spotifyAPI
//enviar para ytSearch

function App() {
  const { musics, addMusic} = useMusic();

  return (
    <>
      <h1>JohnMusic</h1>
      <MusicInput onSend={addMusic}/>
      <MusicList musics={musics}/>
    </>
  )
}

export default App;
