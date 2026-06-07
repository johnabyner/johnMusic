import styles from '../../css/ProfileHead.module.css';

function ProfileHead({profileHeadInformation}){
    return <>
        <div className={styles.ProfileHead}>           
            <img src={profileHeadInformation?.picture_medium} alt="artist" />
            <h1>{profileHeadInformation?.name}</h1>
        </div>

    </>
}

export default ProfileHead;