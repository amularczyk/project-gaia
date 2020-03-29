import React from 'react';
import Tile01 from './tile01';
import Tile02 from './tile02';
import Tile03 from './tile03';
import Tile04 from './tile04';
import Tile05 from './tile05';
import Tile06 from './tile06';
import Tile07 from './tile07';
import Tile08 from './tile08';
import Tile09 from './tile09';
import Tile10 from './tile10';
import './board.scss';

class Board extends React.Component {   
    render() {
        return (
            <div className="board">
                <div>
                    <Tile10 />
                    <Tile01 />
                    <Tile05 />
                </div>
                <div>
                    <Tile09 />
                    <Tile02 />
                    <Tile03 />
                    <Tile06 />
                </div>
                <div>
                    <Tile08 />
                    <Tile04 />
                    <Tile07 />
                </div>
            </div>
        )
    }
}

export default Board;
