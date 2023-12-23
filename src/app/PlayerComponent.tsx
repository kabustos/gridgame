
import styles from './page.module.css'
import { Coordinate } from "./GridComponent";

const PlayerComponent = ({position}) => {


    return(
        <div className={styles.selectedGrid}>
            {">.<"}
        </div>
    )
}

export default PlayerComponent;