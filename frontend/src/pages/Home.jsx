import ArtistGrid from '../components/ArtistGrid.jsx';

import { useSearchContext } from '../context/searchContext.jsx';

function Home(){
    const { artists } = useSearchContext();
    
    return(
        <>
            <ArtistGrid artists={artists}/>
        </>
    )
}

export default Home;