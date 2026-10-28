import { useRef, useState } from "react";
import { Play, Pause } from "lucide-react";
import styles from "@/css/musicInformation/MusicInformationCard.module.css";

function formatDuration(seconds) {
    if (typeof seconds !== "number") return "--:--";

    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;

    return `${minutes}:${String(remainingSeconds).padStart(2, "0")}`;
}

function MusicInformationCard({ track, index }) {
    const audioRef = useRef(null);
    const [isPlaying, setIsPlaying] = useState(false);

    async function togglePreview() {
        const audio = audioRef.current;

        if (!audio || !track.preview) return;

        if (!audio.paused) {
            audio.pause();
            setIsPlaying(false);
            return;
        }

        try {
            await audio.play();
            setIsPlaying(true);
        } catch (error) {
            console.error("Error playing track preview:", error);
        }
    }

    return (
        <article className={styles.trackRow}>
            <span className={styles.position}>
                {index + 1}
            </span>

            <div className={styles.trackInformation}>
                {/* <button
                    className={styles.playButton}
                    onClick={togglePreview}
                    disabled={!track.preview}
                    aria-label={`${isPlaying ? "Pause" : "Play"} ${track.title}`}
                    title={track.preview ? "Play preview" : "Preview unavailable"}
                >
                    {isPlaying ? <Pause size={18} /> : <Play size={18} />}
                </button> */}
                {track.preview ? (
                    <a
                        className={styles.downloadButton}
                        href={track.preview}
                        download={`${track.title}.mp3`}
                    >
                        Download music
                    </a>
                ) : (
                    <span className={styles.unavailable}>Unavailable</span>
                )}

                <div className={styles.trackText}>
                    <p className={styles.trackTitle}>{track.title}</p>

                    {track.explicit_lyrics && (
                        <span className={styles.explicit}>E</span>
                    )}
                </div>
            </div>

            <span className={styles.duration}>
                {formatDuration(track.duration)}
            </span>

            <audio
                ref={audioRef}
                src={track.preview || undefined}
                preload="none"
                onEnded={() => setIsPlaying(false)}
                onPause={() => setIsPlaying(false)}
                onPlay={() => setIsPlaying(true)}
            />
        </article>
    );
}

export default MusicInformationCard;