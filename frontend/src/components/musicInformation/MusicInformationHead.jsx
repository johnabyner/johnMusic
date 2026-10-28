import styles from "@/css/musicInformation/MusicInformationHead.module.css";

function MusicInformationHead({ headInformation }) {
    if (!headInformation) {
        return <p className={styles.loading}>Loading album...</p>;
    }

    const releaseDate = headInformation.release_date
        ? new Date(`${headInformation.release_date}T12:00:00`).toLocaleDateString(
              "en-US",
              {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
              }
          )
        : null;

    const type = {
        album: "Album",
        ep: "EP",
        single: "Single",
    };

    return (
        <header className={styles.hero}>
            <img
                className={styles.cover}
                src={headInformation.cover_big}
                alt={`${headInformation.title} cover`}
            />

            <div className={styles.information}>
                <h1 className={styles.title}>
                    {headInformation.title}
                </h1>

                <div className={styles.metadata}>
                    <span className={styles.type}>
                        {type[headInformation.record_type] || "Release"}
                    </span>

                    <span className={styles.dot}>•</span>

                    {headInformation.artist?.picture_medium && (
                        <img
                            className={styles.artistImage}
                            src={headInformation.artist.picture_medium}
                            alt=""
                        />
                    )}

                    <strong>{headInformation.artist?.name}</strong>

                    {releaseDate && (
                        <>
                            <span className={styles.dot}>•</span>
                            <span>{releaseDate}</span>
                        </>
                    )}

                    {headInformation.nb_tracks != null && (
                        <>
                            <span className={styles.dot}>•</span>
                            <span>{headInformation.nb_tracks} tracks</span>
                        </>
                    )}
                </div>

                <button
                    className={styles.albumButton}
                    type="button"
                >
                    Download album
                </button>
            </div>
        </header>
    );
}

export default MusicInformationHead;