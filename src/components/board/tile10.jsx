import React from 'react';
import Planet from './planet';
import blue from '../../images/board/planet-blue.png';
import empty from '../../images/board/planet-empty.png';
import gaja from '../../images/board/planet-gaja.png';
import green from '../../images/board/planet-green.png';
import red from '../../images/board/planet-red.png';
import yellow from '../../images/board/planet-yellow.png';


class Tile10 extends React.Component {
    render() {
        return (
            <div className="tile tile-10">
                <div>
                    <Planet planet={empty} row={1} column={6} className="planet planet-v-3 planet-h-1"/>
                </div>
                <div>
                    <Planet planet={empty} row={2} column={5} className="planet planet-v-2 planet-h-2"/>
                    <Planet planet={gaja} row={2} column={7} className="planet planet-v-4 planet-h-2"/>
                </div>
                <div>
                    <Planet planet={empty} row={3} column={4} className="planet planet-v-1 planet-h-3"/>
                    <Planet planet={empty} row={3} column={6} className="planet planet-v-3 planet-h-3"/>
                    <Planet planet={gaja} row={3} column={8} className="planet planet-v-5 planet-h-3"/>
                </div>
                <div>
                    <Planet planet={yellow} row={4} column={5} className="planet planet-v-2 planet-h-4"/>
                    <Planet planet={empty} row={4} column={7} className="planet planet-v-4 planet-h-4"/>
                </div>
                <div>
                    <Planet planet={empty} row={5} column={4} className="planet planet-v-1 planet-h-5"/>
                    <Planet planet={empty} row={5} column={6} className="planet planet-v-3 planet-h-5"/>
                    <Planet planet={empty} row={5} column={8} className="planet planet-v-5 planet-h-5"/>
                </div>
                <div>
                    <Planet planet={empty} row={6} column={5} className="planet planet-v-2 planet-h-6"/>
                    <Planet planet={green} row={6} column={7} className="planet planet-v-4 planet-h-6"/>
                </div>
                <div>
                    <Planet planet={blue} row={7} column={4} className="planet planet-v-1 planet-h-7"/>
                    <Planet planet={empty} row={7} column={6} className="planet planet-v-3 planet-h-7"/>
                    <Planet planet={empty} row={7} column={8} className="planet planet-v-5 planet-h-7"/>
                </div>
                <div>
                    <Planet planet={red} row={8} column={5} className="planet planet-v-2 planet-h-8"/>
                    <Planet planet={empty} row={8} column={7} className="planet planet-v-4 planet-h-8"/>
                </div>
                <div>
                    <Planet planet={empty} row={9} column={6} className="planet planet-v-3 planet-h-9"/>
                </div>
            </div>
        );
    }
}

export default Tile10;