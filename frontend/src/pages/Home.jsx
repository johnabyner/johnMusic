import ArtistGrid from "../components/artist/ArtistGrid.jsx";
import Welcome from "../components/home/Welcome.jsx";

import { useSearchStore } from "../context/searchContext.jsx";

function Home() {
    const artists = useSearchStore((state) => state.artists);

    return (
        <>
            {artists.length === 0 && <Welcome />}

            <ArtistGrid artists={artists} />
        </>
    );
}

export default Home;

// import ArtistGrid from '../components/artist/ArtistGrid.jsx';

// import { useSearchStore } from '../context/searchContext.jsx';

// function Home(){
//     const artists = useSearchStore((state) => (state.artists));
    
//     return(
//         <>
//             <ArtistGrid artists={artists}/>
//         </>
//     )
// }

// export default Home;
