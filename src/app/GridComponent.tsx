import { useState } from "react"
import styles from './page.module.css'

export type Coordinate = {
    x: number,
    y: number,
}

interface GridComponentProps {
    coordinate: Coordinate,
    isSelected?: boolean,
}

const GridComponent = ({coordinate, isSelected} : GridComponentProps) => {
    const position: Coordinate = coordinate;

    return(
        <div id="grid" className={styles.gridComponent}>
        </div>
    )
}

export default GridComponent;