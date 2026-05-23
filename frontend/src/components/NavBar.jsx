import styles from '../css/NavBar.module.css';
import {Link} from 'react-router-dom'
import { House } from 'lucide-react';
import SearchBar from './SearchBar.jsx';


function NavBar(){

    return (
        <>
            <nav className={styles.navBar}>
                <div className={styles.navBarLeft}>
                    <Link 
                        to="/" 
                        className={styles.link}>
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