import * as React from "react";
import { Coordinate } from './GridComponent';

interface ControlButtonsProps {
    move: (direction: string, position: Coordinate) => void;
    position: Coordinate;
}

const ControlButtons = ({move, position}: ControlButtonsProps) => {
    const movePlayerDown = () => {
        move("down", position)
    }

    const movePlayerUp = () => {
        move("up", position)
    }

    const movePlayerLeft = () => {
        move("left", position)
    }

    const movePlayerRight = () => {
        move("right", position)
    }

    return(
        <>
            <button onClick={movePlayerDown}>Down</button>
            <button onClick={movePlayerUp}>Up</button>
            <button onClick={movePlayerLeft}>Left</button>
            <button onClick={movePlayerRight}>Right</button>
        </>
    )
}

export default ControlButtons;
