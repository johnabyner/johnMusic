import styles from "../../css/home/Welcome.module.css";

function Welcome() {
    return (
        <section className={styles.welcome}>
            <div className={styles.content}>
                <span className={styles.eyebrow}>
                    JOHNMUSIC · DISCOVER YOUR SOUND
                </span>

                <h1>
                    Find your next
                    <span> favorite artist.</span>
                </h1>

                <p>
                    Explore artists, discover their discographies,
                    and find new music to enjoy.
                </p>

                <span className={styles.hint}>
                    Start by searching for an artist above.
                </span>
            </div>

            <div className={styles.visual} aria-hidden="true">
                <div className={styles.disc}>
                    <div className={styles.discCenter} />
                </div>

                <div className={styles.soundWave}>
                    {[20, 36, 52, 30, 65, 42, 24, 48, 34, 18].map(
                        (height, index) => (
                            <span
                                key={index}
                                style={{ height: `${height}px` }}
                            />
                        )
                    )}
                </div>
            </div>
        </section>
    );
}

export default Welcome;