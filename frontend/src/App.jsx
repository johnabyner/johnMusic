import { Routes, Route } from 'react-router-dom';

import './css/Global.css';

import { Toaster } from 'sonner';
import NavBar from './components/NavBar.jsx';

import Home from './pages/Home.jsx';
import Artist from './pages/Artist.jsx';
import ArtistDiscography from './pages/ArtistDiscography';
import MusicInformation from './pages/MusicInformation';


function App() {

  return (
    <>
        <Toaster position="bottom-right" richColors theme="dark"/>

        <NavBar/>

        <main className='main-content'>
          <Routes>
              <Route path='/' element={<Home/>} />

              <Route path='/artist/:artistId' element={<Artist/>} />
              <Route path='/artist/:artistId/fullDiscography/:type' element={<ArtistDiscography/>} />
              <Route path='/artist/:artistId/:discographyType/:discographyId' element={<MusicInformation/>}/>
          </Routes>
        </main>
    </>
  )
}

export default App;

