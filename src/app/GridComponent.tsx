import { useState } from "react"
import styles from './page.module.css'

export type Coordinate = {
    x: number,
    y: number,
}

interface GridComponentProps {
    id: string;
    coordinate: Coordinate,
    isSelected?: boolean,
}

const GridComponent = ({id, coordinate, isSelected} : GridComponentProps) => {
    const position: Coordinate = coordinate;

    return(
        <div id={`${id}`} className={styles.gridComponent}>
        </div>
    )
}

export default GridComponent;