import styles from '../css/SearchBar.module.css';
import { Search } from 'lucide-react';
import {useState} from 'react';
import { useNavigate } from 'react-router-dom';
import {useSearchContext} from '../context/searchContext.jsx'


function SearchBar(){
    const { searchArtist } = useSearchContext();
    const [value, setValue ] = useState('');
    const Navigate = useNavigate();

    const handleSubmit = (e) => { //will handle the input
        e.preventDefault(); 

        searchArtist(value)
        Navigate('/');
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
            <Search className={styles.searchIcon}/>
        </form>
    )
}

export default SearchBar;