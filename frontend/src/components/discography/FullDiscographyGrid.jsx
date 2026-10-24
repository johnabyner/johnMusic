import DiscographyCard from "./DiscographyCard";
import styles from "../../css/discography/DiscographyGrid.module.css"

function FullDiscographyGrid({discographyList, type}){
    if(!discographyList){
        return <p>Loading {type}...</p>
    }

    if(discographyList.length === 0){
        return <>
            <div className={styles.sectionDiscography}>
                <div className={styles.grid}>
                    <h1 className={styles.sectionDiscography}>{type} discography</h1>

                    <p className={styles.sectionDiscography}>No results</p>
                </div>
            </div>
        </>
    }

    return <>
        <div className={styles.sectionDiscography}>
            <h1 className={styles.sectionDiscography}>{type} discography</h1>

            <div className={styles.grid}>
                {discographyList?.map((discography) => 
                    <DiscographyCard key={discography.id} discography={discography}/>
                )}
            </div>
        </div>
    </>
}

export default FullDiscographyGrid;