import DiscographyCard from "./DiscographyCard";
import styles from "../../css/discography/DiscographyGrid.module.css";

function DiscographyGrid({discographyList,title}){
    if(!discographyList){
        return <p>Loading {title}...</p>
    }
    console.log(discographyList);

    if(discographyList.length === 0){
        return <>
            <div className={styles.sectionDiscography}>
                <h1>{title}</h1>

                <div className={styles.grid} >
                    <p className={styles.sectionDiscography}>No results</p>
                </div>
            </div>
        </>
    }

    return <>
        <div className={styles.sectionDiscography}>
            <h1>{title}</h1>

            <div className={styles.grid}>
                {discographyList?.slice(0,5).map((discography)=>
                    <DiscographyCard key={discography.id} discography={discography}/>
                )}
            </div>

        </div>
    </>
}

export default DiscographyGrid;