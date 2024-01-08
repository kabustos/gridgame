"use client"

import { useState } from 'react';
import GridComponent from "./GridComponent";
import { Coordinate } from "./GridComponent";
import styles from './page.module.css'
import ControlButtons from './ControlButtons'

const GridContainer = () => {
    const coordinates: Array<Coordinate> = [{x: 0, y: 0}, {x: 0, y: 1}, {x: 0, y: 2}, 
        {x: 1, y: 0}, {x: 1, y: 1}, {x: 1, y: 2}, 
        {x: 2, y: 0}, {x: 2, y: 1}, {x: 2, y: 2}]
    const [spritePosition, setSpritePosition] = useState<Coordinate>({x: 0, y: 0});

    const move = (direction: string,location: Coordinate) => {
        let newLocation: Coordinate = location;
        let x = location.x;
        let y = location.y;
        switch(direction){
            case "up":
                x = x-1;
                newLocation = { x, y }; 
                break;
            case "right":   
                y = y+1;
                newLocation = { x, y }; 
                break;
            case "left":       
                y = y-1;
                newLocation = { x, y }; 
                break;
            case "down": 
                x = x+1;
                newLocation = { x, y };   
                break;
        }
        if(( x > 2 || x < 0)){
            console.log("x direction is out of bounds, staying");
            console.log(`location: ${location.x}, ${location.y}`)
            return;
        }
        if(( y > 2 || y < 0)){
            console.log("y direction is out of bounds, staying");
            console.log(`location: ${location.x}, ${location.y}`)
            return;
        }

        setSpritePosition(newLocation);
        console.log(`newLocation: ${newLocation.x}, ${newLocation.y}`)
    };


    return(
        <>
            <div className={styles.gridContainer}>
              <GridComponent spritePosition={spritePosition} coordinate={coordinates[0]}/>
              <GridComponent spritePosition={spritePosition} coordinate={coordinates[1]}/>
              <GridComponent spritePosition={spritePosition} coordinate={coordinates[2]}/>
              <GridComponent spritePosition={spritePosition} coordinate={coordinates[3]}/>
              <GridComponent spritePosition={spritePosition} coordinate={coordinates[4]}/>
              <GridComponent spritePosition={spritePosition} coordinate={coordinates[5]}/>
              <GridComponent spritePosition={spritePosition} coordinate={coordinates[6]}/>
              <GridComponent spritePosition={spritePosition} coordinate={coordinates[7]}/>
              <GridComponent spritePosition={spritePosition} coordinate={coordinates[8]}/>
              <ControlButtons move={move} position={spritePosition}/>
            </div>
        </>
    )
}

export default GridContainer;