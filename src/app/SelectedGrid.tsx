
import styles from './page.module.css'
import { Coordinate } from "./GridComponent";

const SelectedGrid = ({position}) => {


    return(
        <div className={styles.selectedGrid}>
            {">.<"}
        </div>
    )
}

export default SelectedGrid;