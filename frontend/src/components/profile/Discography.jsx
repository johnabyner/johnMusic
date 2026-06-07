import DiscographyGrid from "../DiscographyGrid.jsx";
import styles from '../../css/Discography.module.css';
import {Link} from 'react-router-dom'


function Discography({discographyInformation}){    
    //album,ep,single
    return <>
        <section className={styles.head}>
        <div>
                <h2>Discography</h2>
                <Link to="" className={styles.link}>show more</Link>
        </div>
            <div>
                <DiscographyGrid discographyList={discographyInformation?.album} title='albuns'/>
                <DiscographyGrid discographyList={discographyInformation?.ep} title='eps'/>
                <DiscographyGrid discographyList={discographyInformation?.single} title='singles'/>  
            </div>
        </section>

    </>
}

export default Discography;