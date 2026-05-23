import {SearchProvider} from './context/searchContext.jsx';
import { Routes, Route } from 'react-router-dom';

import './css/Global.css';

import NavBar from './components/NavBar.jsx';

import Home from './pages/Home.jsx';
import Artist from './pages/Artist.jsx';


function App() {

  return (
    <>
     <SearchProvider>
        <NavBar/>

        <main className='main-content'>
          <Routes>
              <Route path='/' element={<Home/>} />
              <Route path='/artist/:artistId' element={<Artist/>} />
          </Routes>
        </main>
      </SearchProvider>
    </>
  )
}

export default App;

