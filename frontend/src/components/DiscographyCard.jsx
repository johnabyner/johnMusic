import styles from '../css/discographyCard.module.css';

function DiscographyCard({key, discography}){
    return <>
        <div className={styles.discographyCard}>
            <img src={discography.cover_medium} alt="" />
            <p>{discography.title}</p>
        </div>
    </>
}

export default DiscographyCard;