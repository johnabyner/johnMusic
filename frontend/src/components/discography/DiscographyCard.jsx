import { Link, Navigate, useParams } from 'react-router-dom';
import styles from '../../css/discography/DiscographyCard.module.css';
import {Card, CardContent} from "@/components/ui/card"

function DiscographyCard({key, discography}){
    const {artistId} = useParams();

    return <>
        <Card className={styles.discographyCard}>
            <CardContent>
                <Link to={`/artist/${artistId}/${discography.type}/${discography.id}`}>
                   <img src={discography.cover_medium} alt="" />
                    <p>{discography.title}</p>
                </Link>
            </CardContent>
        </Card>
    </>
}

export default DiscographyCard;