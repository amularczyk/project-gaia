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
                    <Planet planet={white} className="planet planet-v-3 planet-h-1"/>
                </div>
                <div>
                    <Planet planet={empty} className="planet planet-v-2 planet-h-2"/>
                    <Planet planet={empty} className="planet planet-v-4 planet-h-2"/>
                </div>
                <div>
                    <Planet planet={empty} className="planet planet-v-1 planet-h-3"/>
                    <Planet planet={empty} className="planet planet-v-3 planet-h-3"/>
                    <Planet planet={gaja} className="planet planet-v-5 planet-h-3"/>
                </div>
                <div>
                    <Planet planet={green} className="planet planet-v-2 planet-h-4"/>
                    <Planet planet={empty} className="planet planet-v-4 planet-h-4"/>
                </div>
                <div>
                    <Planet planet={empty} className="planet planet-v-1 planet-h-5"/>
                    <Planet planet={empty} className="planet planet-v-3 planet-h-5"/>
                    <Planet planet={red} className="planet planet-v-5 planet-h-5"/>
                </div>
                <div>
                    <Planet planet={empty} className="planet planet-v-2 planet-h-6"/>
                    <Planet planet={empty} className="planet planet-v-4 planet-h-6"/>
                </div>
                <div>
                    <Planet planet={empty} className="planet planet-v-1 planet-h-7"/>
                    <Planet planet={yellow} className="planet planet-v-3 planet-h-7"/>
                    <Planet planet={empty} className="planet planet-v-5 planet-h-7"/>
                </div>
                <div>
                    <Planet planet={orange} className="planet planet-v-2 planet-h-8"/>
                    <Planet planet={empty} className="planet planet-v-4 planet-h-8"/>
                </div>
                <div>
                    <Planet planet={empty} className="planet planet-v-3 planet-h-9"/>
                </div>
            </div>
        );
    }
}

export default Tile05;