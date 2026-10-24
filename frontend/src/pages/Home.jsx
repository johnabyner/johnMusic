import ArtistGrid from '../components/artist/ArtistGrid.jsx';

import { useSearchStore } from '../context/searchContext.jsx';

function Home(){
    const artists = useSearchStore((state) => (state.artists));
    
    return(
        <>
            <ArtistGrid artists={artists}/>
        </>
    )
}

export default Home;