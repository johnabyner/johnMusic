import styles from '../css/components/NavBar.module.css';
import {Link} from 'react-router-dom'
import { House } from 'lucide-react';
import SearchBar from './SearchBar.jsx';
import { useSearchStore } from "../context/searchContext.jsx";

function NavBar(){
    const clearSearch = useSearchStore((state) => state.clearSearch);
    return (
        <>
            <nav className={styles.navBar}>
                <div className={styles.navBarLeft}>
                    <Link to="/" className={styles.link} onClick={clearSearch}>
                        <House className={styles.homeIcon}/> JohnMusic
                    </Link>
                </div>

                <div className={styles.navBarCenter}>
                    <SearchBar/> 
                </div>

                <div className={styles.navBarRight}>
                </div>
            </nav>

        </>
    )
}

export default NavBar;