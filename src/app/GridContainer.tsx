import GridComponent from "./GridComponent";
import { Coordinate } from "./GridComponent";
import styles from './page.module.css'

const GridContainer = () => {
    const coordinates: Array<Coordinate> = [{x: 0, y: 0}, {x: 0, y: 1}, {x: 0, y: 2}, 
        {x: 1, y: 0}, {x: 1, y: 1}, {x: 1, y: 2}, 
        {x: 2, y: 0}, {x: 2, y: 1}, {x: 2, y: 2}]

    return(
        <>
            <div className={styles.gridContainer}>
            {coordinates.map((coordinate, i) => {
                return <GridComponent key={`box-${i}`} id={`box-${i}`} 
                    coordinate={coordinate}/>})}
            </div>
        </>
    )
}

export default GridContainer;