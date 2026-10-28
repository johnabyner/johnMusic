import MusicInformationCard from "./MusicInformationCard";
import styles from "@/css/musicInformation/MusicInformationGrid.module.css";

function MusicInformationGrid({ discographyList }) {
    if (!discographyList) {
        return <p className={styles.message}>Loading tracks...</p>;
    }

    if (discographyList.length === 0) {
        return <p className={styles.message}>No tracks found.</p>;
    }

    return (
        <section className={styles.trackSection}>
            <h2 className={styles.heading}>Tracks</h2>

            <div className={styles.tableHeader}>
                <span>#</span>
                <span>Title</span>
                <span className={styles.durationHeading}>Duration</span>
            </div>

            <div className={styles.trackList}>
                {discographyList.map((track, index) => (
                    <MusicInformationCard
                        key={track.id}
                        track={track}
                        index={index}
                    />
                ))}
            </div>
        </section>
    );
}

export default MusicInformationGrid;