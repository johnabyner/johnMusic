import { useNavigate } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { Button } from "./ui/button";
import styles from "../css/components/GoBackButton.module.css"

function GoBackButton(){
    const navigate = useNavigate();

    return <>
        <Button className={styles.goBackButton} onClick={() => navigate(-1)}>
            <ArrowLeft size={18}/>
            Go back
        </Button>
    </>
}
export default GoBackButton;