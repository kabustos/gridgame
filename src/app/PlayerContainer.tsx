'use client'

import { useState } from 'react';
import styles from './page.module.css'
import { Coordinate } from './GridComponent';
import PlayerComponent from './PlayerComponent'
import ControlButtons from './ControlButtons'

const PlayerContainer = () => {
    const [position, setPosition] = useState<Coordinate>({x: 0, y: 0});

    const move = (direction: string,location: Coordinate) => {
        let newLocation: Coordinate = location;
        let x = location.x;
        let y = location.y;
        switch(direction){
            case "left":
                console.log("left")
                x = x-1;
                newLocation = { x, y }; 
                break;
            case "up":
                console.log("up")
                y = y+1;
                newLocation = { x, y }; 
                break;
            case "down":
                console.log("down")
                y = y-1;
                newLocation = { x, y }; 
                break;
            case "right":
                console.log("right")
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

        setPosition(newLocation);
        console.log(`newLocation: ${newLocation.x}, ${newLocation.y}`)
    };

    return(
        <>
            <PlayerComponent position={position}/>
            <ControlButtons move={move} position={position}/>
        </>
    )
}

export default PlayerContainer;
