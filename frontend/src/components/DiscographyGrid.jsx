import DiscographyCard from "./DiscographyCard";
import styles from "../css/DiscographyGrid.module.css";

function DiscographyGrid({discographyList,title}){
    if(!discographyList){
        return <p>Loading {title}...</p>
    }
    console.log(discographyList);

    return <>
    <div className={styles.sectionDiscography}>
        <h1>{title}</h1>

        <div className={styles.grid}>
            {discographyList?.slice(0,4).map((discography)=>
                <DiscographyCard key={discography.id} discography={discography}/>
            )}
        </div>

    </div>

    </>
}

export default DiscographyGrid;