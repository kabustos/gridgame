'use client'

import { useState } from 'react';
import GridComponent from "./GridComponent";
import { Coordinate } from "./GridComponent";
import styles from './page.module.css'
import SelectedGrid from './SelectedGrid'

const GridContainer = () => {
    const [position, setPosition] = useState<Coordinate>({x: 0, y: 0});
    const coordinates: Array<Coordinate> = [{x: 0, y: 0}, {x: 0, y: 1}, {x: 0, y: 2}, 
        {x: 1, y: 0}, {x: 1, y: 1}, {x: 1, y: 2}, 
        {x: 2, y: 0}, {x: 2, y: 1}, {x: 2, y: 2}]
    return(
        <>
            <div className={styles.gridContainer}>
            {coordinates.map((coordinate, i) => {
                return <GridComponent key={`${i}-${coordinate.x}-${coordinate.y}`} 
                    coordinate={coordinate}/>})}
            </div>
            <SelectedGrid position={position}/>
        </>
    )
}

export default GridContainer;