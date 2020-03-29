import React from 'react';
import Planet from './planet';
import empty from '../../images/board/planet-empty.png';
import gaja from '../../images/board/planet-gaja.png';
import green from '../../images/board/planet-green.png';
import orange from '../../images/board/planet-orange.png';
import red from '../../images/board/planet-red.png';
import white from '../../images/board/planet-white.png';
import yellow from '../../images/board/planet-yellow.png';


class Tile05 extends React.Component {
    render() {
        return (
            <div className="tile tile-05">
                <div>
                    <Planet planet={white} row={3} column={16} className="planet planet-v-3 planet-h-1"/>
                </div>
                <div>
                    <Planet planet={empty} row={4} column={15} className="planet planet-v-2 planet-h-2"/>
                    <Planet planet={empty} row={4} column={17} className="planet planet-v-4 planet-h-2"/>
                </div>
                <div>
                    <Planet planet={empty} row={5} column={14} className="planet planet-v-1 planet-h-3"/>
                    <Planet planet={empty} row={5} column={16} className="planet planet-v-3 planet-h-3"/>
                    <Planet planet={gaja} row={5} column={18} className="planet planet-v-5 planet-h-3"/>
                </div>
                <div>
                    <Planet planet={green} row={6} column={15} className="planet planet-v-2 planet-h-4"/>
                    <Planet planet={empty} row={6} column={17} className="planet planet-v-4 planet-h-4"/>
                </div>
                <div>
                    <Planet planet={empty} row={7} column={14} className="planet planet-v-1 planet-h-5"/>
                    <Planet planet={empty} row={7} column={16} className="planet planet-v-3 planet-h-5"/>
                    <Planet planet={red} row={7} column={18} className="planet planet-v-5 planet-h-5"/>
                </div>
                <div>
                    <Planet planet={empty} row={8} column={15} className="planet planet-v-2 planet-h-6"/>
                    <Planet planet={empty} row={8} column={17} className="planet planet-v-4 planet-h-6"/>
                </div>
                <div>
                    <Planet planet={empty} row={9} column={14} className="planet planet-v-1 planet-h-7"/>
                    <Planet planet={yellow} row={9} column={16} className="planet planet-v-3 planet-h-7"/>
                    <Planet planet={empty} row={9} column={18} className="planet planet-v-5 planet-h-7"/>
                </div>
                <div>
                    <Planet planet={orange} row={10} column={15} className="planet planet-v-2 planet-h-8"/>
                    <Planet planet={empty} row={10} column={17} className="planet planet-v-4 planet-h-8"/>
                </div>
                <div>
                    <Planet planet={empty} row={11} column={16} className="planet planet-v-3 planet-h-9"/>
                </div>
            </div>
        );
    }
}

export default Tile05;