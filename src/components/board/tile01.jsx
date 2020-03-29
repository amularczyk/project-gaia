import React from 'react';
import Planet from './planet';
import blue from '../../images/board/planet-blue.png';
import brown from '../../images/board/planet-brown.png';
import empty from '../../images/board/planet-empty.png';
import gaja from '../../images/board/planet-gaja.png';
import orange from '../../images/board/planet-orange.png';
import red from '../../images/board/planet-red.png';
import yellow from '../../images/board/planet-yellow.png';


class Tile01 extends React.Component {
    render() {
        return (
            <div className="tile tile-01">
                <div>
                    <Planet planet={empty} row={2} column={11} className="planet planet-v-3 planet-h-1"/>
                </div>
                <div>
                    <Planet planet={empty} row={3} column={10} className="planet planet-v-2 planet-h-2"/>
                    <Planet planet={empty} row={3} column={12} className="planet planet-v-4 planet-h-2"/>
                </div>
                <div>
                    <Planet planet={empty} row={4} column={9} className="planet planet-v-1 planet-h-3"/>
                    <Planet planet={empty} row={4} column={11} className="planet planet-v-3 planet-h-3"/>
                    <Planet planet={empty} row={4} column={13} className="planet planet-v-5 planet-h-3"/>
                </div>
                <div>
                    <Planet planet={brown} row={5} column={10} className="planet planet-v-2 planet-h-4"/>
                    <Planet planet={blue} row={5} column={12} className="planet planet-v-4 planet-h-4"/>
                </div>
                <div>
                    <Planet planet={yellow} row={6} column={9} className="planet planet-v-1 planet-h-5"/>
                    <Planet planet={empty} row={6} column={11} className="planet planet-v-3 planet-h-5"/>
                    <Planet planet={gaja} row={6} column={13} className="planet planet-v-5 planet-h-5"/>
                </div>
                <div>
                    <Planet planet={empty} row={7} column={10} className="planet planet-v-2 planet-h-6"/>
                    <Planet planet={empty} row={7} column={12} className="planet planet-v-4 planet-h-6"/>
                </div>
                <div>
                    <Planet planet={empty} row={8} column={9} className="planet planet-v-1 planet-h-7"/>
                    <Planet planet={empty} row={8} column={11} className="planet planet-v-3 planet-h-7"/>
                    <Planet planet={empty} row={8} column={13} className="planet planet-v-5 planet-h-7"/>
                </div>
                <div>
                    <Planet planet={empty} row={9} column={10} className="planet planet-v-2 planet-h-8"/>
                    <Planet planet={orange} row={9} column={12} className="planet planet-v-4 planet-h-8"/>
                </div>
                <div>
                    <Planet planet={red} row={10} column={11} className="planet planet-v-3 planet-h-9"/>
                </div>
            </div>
        );
    }
}

export default Tile01;