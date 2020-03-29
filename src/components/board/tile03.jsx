import React from 'react';
import Planet from './planet';
import black from '../../images/board/planet-black.png';
import blue from '../../images/board/planet-blue.png';
import empty from '../../images/board/planet-empty.png';
import gaja from '../../images/board/planet-gaja.png';
import green from '../../images/board/planet-green.png';
import white from '../../images/board/planet-white.png';
import yellow from '../../images/board/planet-yellow.png';


class Tile03 extends React.Component {
    render() {
        return (
            <div className="tile tile-03">
                <div>
                    <Planet planet={gaja} row={10} column={13} className="planet planet-v-3 planet-h-1"/>
                </div>
                <div>
                    <Planet planet={empty} row={11} column={12} className="planet planet-v-2 planet-h-2"/>
                    <Planet planet={empty} row={11} column={14} className="planet planet-v-4 planet-h-2"/>
                </div>
                <div>
                    <Planet planet={empty} row={12} column={11} className="planet planet-v-1 planet-h-3"/>
                    <Planet planet={empty} row={12} column={13} className="planet planet-v-3 planet-h-3"/>
                    <Planet planet={empty} row={12} column={15} className="planet planet-v-5 planet-h-3"/>
                </div>
                <div>
                    <Planet planet={green} row={13} column={12} className="planet planet-v-2 planet-h-4"/>
                    <Planet planet={empty} row={13} column={14} className="planet planet-v-4 planet-h-4"/>
                </div>
                <div>
                    <Planet planet={empty} row={14} column={11} className="planet planet-v-1 planet-h-5"/>
                    <Planet planet={empty} row={14} column={13} className="planet planet-v-3 planet-h-5"/>
                    <Planet planet={black} row={14} column={15} className="planet planet-v-5 planet-h-5"/>
                </div>
                <div>
                    <Planet planet={empty} row={15} column={12} className="planet planet-v-2 planet-h-6"/>
                    <Planet planet={white} row={15} column={14} className="planet planet-v-4 planet-h-6"/>
                </div>
                <div>
                    <Planet planet={empty} row={16} column={11} className="planet planet-v-1 planet-h-7"/>
                    <Planet planet={empty} row={16} column={13} className="planet planet-v-3 planet-h-7"/>
                    <Planet planet={empty} row={16} column={15} className="planet planet-v-5 planet-h-7"/>
                </div>
                <div>
                    <Planet planet={blue} row={17} column={12} className="planet planet-v-2 planet-h-8"/>
                    <Planet planet={empty} row={17} column={14} className="planet planet-v-4 planet-h-8"/>
                </div>
                <div>
                    <Planet planet={yellow} row={18} column={13} className="planet planet-v-3 planet-h-9"/>
                </div>
            </div>
        );
    }
}

export default Tile03;