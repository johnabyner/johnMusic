import DiscographyGrid from "../discography/DiscographyGrid.jsx";
import styles from "../../css/discography/Discography.module.css";
import { Link, useParams } from "react-router-dom";

function Discography({ discographyInformation }) {
    const {artistId} = useParams();

    return (
        <section className={styles.discography}>
            <header className={styles.pageHeader}>
                <div>
                    <span className={styles.eyebrow}>ARTIST PROFILE</span>
                    <h2>Discography</h2>
                </div>

                <p className={styles.description}>Explore albums, EPs and singles</p>
            </header>

            <div className={styles.content}>
                <section className={styles.gridSection}>
                    <Link to={`/artist/${artistId}/fullDiscography/album`} className={styles.showMore} aria-label="Show more albums">
                        Show more <span aria-hidden="true">↗</span>
                    </Link>

                    <DiscographyGrid discographyList={discographyInformation?.album}title="Albuns"/>
                </section>

                <section className={styles.gridSection}>
                    <Link to={`/artist/${artistId}/fullDiscography/ep`} className={styles.showMore} aria-label="Show more EPs">
                        Show more <span aria-hidden="true">↗</span>
                    </Link>

                    <DiscographyGrid discographyList={discographyInformation?.ep} title="Eps"/>
                </section>

                <section className={styles.gridSection}>
                    <Link to={`/artist/${artistId}/fullDiscography/single`} className={styles.showMore} aria-label="Show more singles">
                        Show more <span aria-hidden="true">↗</span>
                    </Link>

                    <DiscographyGrid discographyList={discographyInformation?.single}title="Singles"/>
                </section>
            </div>
        </section>
    );
}

export default Discography;