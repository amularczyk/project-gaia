import React from 'react';
import Planet from './planet';
import black from '../../images/board/planet-black.png';
import brown from '../../images/board/planet-brown.png';
import empty from '../../images/board/planet-empty.png';
import gaja from '../../images/board/planet-gaja.png';
import green from '../../images/board/planet-green.png';
import orange from '../../images/board/planet-orange.png';
import white from '../../images/board/planet-white.png';


class Tile09 extends React.Component {
    render() {
        return (
            <div className="tile tile-09">
                <div>
                    <Planet planet={empty} row={8} column={3} className="planet planet-v-3 planet-h-1"/>
                </div>
                <div>
                    <Planet planet={orange} row={9} column={2} className="planet planet-v-2 planet-h-2"/>
                    <Planet planet={gaja} row={9} column={4} className="planet planet-v-4 planet-h-2"/>
                </div>
                <div>
                    <Planet planet={empty} row={10} column={1} className="planet planet-v-1 planet-h-3"/>
                    <Planet planet={empty} row={10} column={3} className="planet planet-v-3 planet-h-3"/>
                    <Planet planet={white} row={10} column={5} className="planet planet-v-5 planet-h-3"/>
                </div>
                <div>
                    <Planet planet={empty} row={11} column={2} className="planet planet-v-2 planet-h-4"/>
                    <Planet planet={empty} row={11} column={4} className="planet planet-v-4 planet-h-4"/>
                </div>
                <div>
                    <Planet planet={empty} row={12} column={1} className="planet planet-v-1 planet-h-5"/>
                    <Planet planet={empty} row={12} column={3} className="planet planet-v-3 planet-h-5"/>
                    <Planet planet={empty} row={12} column={5} className="planet planet-v-5 planet-h-5"/>
                </div>
                <div>
                    <Planet planet={black} row={13} column={2} className="planet planet-v-2 planet-h-6"/>
                    <Planet planet={green} row={13} column={4} className="planet planet-v-4 planet-h-6"/>
                </div>
                <div>
                    <Planet planet={brown} row={14} column={1} className="planet planet-v-1 planet-h-7"/>
                    <Planet planet={empty} row={14} column={3} className="planet planet-v-3 planet-h-7"/>
                    <Planet planet={empty} row={14} column={5} className="planet planet-v-5 planet-h-7"/>
                </div>
                <div>
                    <Planet planet={empty} row={15} column={2} className="planet planet-v-2 planet-h-8"/>
                    <Planet planet={empty} row={15} column={4} className="planet planet-v-4 planet-h-8"/>
                </div>
                <div>
                    <Planet planet={empty} row={16} column={3} className="planet planet-v-3 planet-h-9"/>
                </div>
            </div>
        );
    }
}

export default Tile09;