import { createContext, useContext, useState } from "react";

import { fetchArtists } from "../services/fetchJohnMusic";

const SearchContext = createContext();

function SearchProvider({ children }){
    const [artists, setArtist] = useState([]); 

    const searchArtist = async  (input) => {
        if(input.trim() !== ''){ //if is diferent of void
            const information = await fetchArtists(input); //will ask the information for the backend
            
            setArtist(information); //will set de input for prev
        }
    };

    return(
        <SearchContext.Provider value={{ artists, searchArtist }}>
            {children}
        </SearchContext.Provider>
    );
}

function useSearchContext(){
    return useContext(SearchContext);
}

export {SearchProvider,useSearchContext}