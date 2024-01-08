import { useState } from "react"
import styles from './page.module.css'
import PlayerComponent from "./PlayerComponent"

export type Coordinate = {
    x: number,
    y: number,
}

interface GridComponentProps {
    coordinate: Coordinate,
    spritePosition: Coordinate
}

const GridComponent = ({coordinate, spritePosition} : GridComponentProps) => {
    let isSelected: Boolean = false;

    if(JSON.stringify(spritePosition) == JSON.stringify(coordinate)){
        isSelected = true;
    }

    return(
        <>
        <div id={`${coordinate}`} className={styles.gridComponent}>
        {isSelected &&
            <PlayerComponent/>}
        </div>
        </>

    )
}

export default GridComponent;