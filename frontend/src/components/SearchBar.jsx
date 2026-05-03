import {useState} from 'react';

import styles from '../css/SearchBar.module.css';

import {useSearchContext} from '../context/searchContext.jsx'

function SearchBar(){
    const { searchArtist } = useSearchContext();
    const [value, setValue ] = useState('');

    const handleSubmit = (e) => { //will handle the input
        e.preventDefault(); 

        searchArtist(value)
        setValue(''); //will reset de camp
    }

    return(
        <form onSubmit={handleSubmit}>
            <input  
                className={styles.searchBar}
                
                value={value} //value of input is equal to the typed

                onChange={(e) => setValue(e.target.value)}
                placeholder='Write the name of a artist'
            />
        </form>
    )
}

export default SearchBar;