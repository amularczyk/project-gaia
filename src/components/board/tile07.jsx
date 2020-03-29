import React from 'react';
import Planet from './planet';
import black from '../../images/board/planet-black.png';
import brown from '../../images/board/planet-brown.png';
import empty from '../../images/board/planet-empty.png';
import gaja from '../../images/board/planet-gaja.png';
import green from '../../images/board/planet-green.png';
import red from '../../images/board/planet-red.png';


class Tile07 extends React.Component {
    render() {
        return (
            <div className="tile tile-07">
                <div>
                    <Planet planet={empty} row={18} column={15} className="planet planet-v-3 planet-h-1"/>
                </div>
                <div>
                    <Planet planet={empty} row={19} column={14} className="planet planet-v-2 planet-h-2"/>
                    <Planet planet={brown} row={19} column={16} className="planet planet-v-4 planet-h-2"/>
                </div>
                <div>
                    <Planet planet={gaja} row={20} column={13} className="planet planet-v-1 planet-h-3"/>
                    <Planet planet={red} row={20} column={15} className="planet planet-v-3 planet-h-3"/>
                    <Planet planet={empty} row={20} column={17} className="planet planet-v-5 planet-h-3"/>
                </div>
                <div>
                    <Planet planet={empty} row={21} column={14} className="planet planet-v-2 planet-h-4"/>
                    <Planet planet={empty} row={21} column={16} className="planet planet-v-4 planet-h-4"/>
                </div>
                <div>
                    <Planet planet={empty} row={22} column={13} className="planet planet-v-1 planet-h-5"/>
                    <Planet planet={empty} row={22} column={15} className="planet planet-v-3 planet-h-5"/>
                    <Planet planet={empty} row={22} column={17} className="planet planet-v-5 planet-h-5"/>
                </div>
                <div>
                    <Planet planet={green} row={23} column={14} className="planet planet-v-2 planet-h-6"/>
                    <Planet planet={green} row={23} column={16} className="planet planet-v-4 planet-h-6"/>
                </div>
                <div>
                    <Planet planet={empty} row={24} column={13} className="planet planet-v-1 planet-h-7"/>
                    <Planet planet={empty} row={24} column={15} className="planet planet-v-3 planet-h-7"/>
                    <Planet planet={empty} row={24} column={17} className="planet planet-v-5 planet-h-7"/>
                </div>
                <div>
                    <Planet planet={empty} row={25} column={14} className="planet planet-v-2 planet-h-8"/>
                    <Planet planet={empty} row={25} column={16} className="planet planet-v-4 planet-h-8"/>
                </div>
                <div>
                    <Planet planet={black} row={26} column={15} className="planet planet-v-3 planet-h-9"/>
                </div>
            </div>
        );
    }
}

export default Tile07;