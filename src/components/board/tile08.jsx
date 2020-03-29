import React from 'react';
import Planet from './planet';
import black from '../../images/board/planet-black.png';
import blue from '../../images/board/planet-blue.png';
import empty from '../../images/board/planet-empty.png';
import gaja from '../../images/board/planet-gaja.png';
import orange from '../../images/board/planet-orange.png';
import white from '../../images/board/planet-white.png';


class Tile08 extends React.Component {
    render() {
        return (
            <div className="tile tile-08">
                <div>
                    <Planet planet={blue} row={16} column={5} className="planet planet-v-3 planet-h-1"/>
                </div>
                <div>
                    <Planet planet={empty} row={17} column={4} className="planet planet-v-2 planet-h-2"/>
                    <Planet planet={empty} row={17} column={6} className="planet planet-v-4 planet-h-2"/>
                </div>
                <div>
                    <Planet planet={empty} row={18} column={3} className="planet planet-v-1 planet-h-3"/>
                    <Planet planet={white} row={18} column={5} className="planet planet-v-3 planet-h-3"/>
                    <Planet planet={gaja} row={18} column={7} className="planet planet-v-5 planet-h-3"/>
                </div>
                <div>
                    <Planet planet={empty} row={19} column={4} className="planet planet-v-2 planet-h-4"/>
                    <Planet planet={empty} row={19} column={6} className="planet planet-v-4 planet-h-4"/>
                </div>
                <div>
                    <Planet planet={empty} row={20} column={3} className="planet planet-v-1 planet-h-5"/>
                    <Planet planet={empty} row={20} column={5} className="planet planet-v-3 planet-h-5"/>
                    <Planet planet={empty} row={20} column={7} className="planet planet-v-5 planet-h-5"/>
                </div>
                <div>
                    <Planet planet={orange} row={21} column={4} className="planet planet-v-2 planet-h-6"/>
                    <Planet planet={black} row={21} column={6} className="planet planet-v-4 planet-h-6"/>
                </div>
                <div>
                    <Planet planet={empty} row={22} column={3} className="planet planet-v-1 planet-h-7"/>
                    <Planet planet={empty} row={22} column={5} className="planet planet-v-3 planet-h-7"/>
                    <Planet planet={empty} row={22} column={7} className="planet planet-v-5 planet-h-7"/>
                </div>
                <div>
                    <Planet planet={gaja} row={23} column={4} className="planet planet-v-2 planet-h-8"/>
                    <Planet planet={empty} row={23} column={6} className="planet planet-v-4 planet-h-8"/>
                </div>
                <div>
                    <Planet planet={empty} row={24} column={5} className="planet planet-v-3 planet-h-9"/>
                </div>
            </div>
        );
    }
}

export default Tile08;