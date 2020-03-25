import React from 'react';
import Planet from './planet';
import black from '../images/planet-black.png';
import blue from '../images/planet-blue.png';
import brown from '../images/planet-brown.png';
import empty from '../images/planet-empty.png';
import gaja from '../images/planet-gaja.png';
import green from '../images/planet-green.png';
import orange from '../images/planet-orange.png';
import red from '../images/planet-red.png';
import white from '../images/planet-white.png';
import yellow from '../images/planet-yellow.png';


class Tile07 extends React.Component {
    render() {
        return (
            <div className="tile tile-07">
                <div>
                    <Planet planet={empty} className="planet planet-v-3 planet-h-1"/>
                </div>
                <div>
                    <Planet planet={empty} className="planet planet-v-2 planet-h-2"/>
                    <Planet planet={brown} className="planet planet-v-4 planet-h-2"/>
                </div>
                <div>
                    <Planet planet={gaja} className="planet planet-v-1 planet-h-3"/>
                    <Planet planet={red} className="planet planet-v-3 planet-h-3"/>
                    <Planet planet={empty} className="planet planet-v-5 planet-h-3"/>
                </div>
                <div>
                    <Planet planet={empty} className="planet planet-v-2 planet-h-4"/>
                    <Planet planet={empty} className="planet planet-v-4 planet-h-4"/>
                </div>
                <div>
                    <Planet planet={empty} className="planet planet-v-1 planet-h-5"/>
                    <Planet planet={empty} className="planet planet-v-3 planet-h-5"/>
                    <Planet planet={empty} className="planet planet-v-5 planet-h-5"/>
                </div>
                <div>
                    <Planet planet={green} className="planet planet-v-2 planet-h-6"/>
                    <Planet planet={green} className="planet planet-v-4 planet-h-6"/>
                </div>
                <div>
                    <Planet planet={empty} className="planet planet-v-1 planet-h-7"/>
                    <Planet planet={empty} className="planet planet-v-3 planet-h-7"/>
                    <Planet planet={empty} className="planet planet-v-5 planet-h-7"/>
                </div>
                <div>
                    <Planet planet={empty} className="planet planet-v-2 planet-h-8"/>
                    <Planet planet={empty} className="planet planet-v-4 planet-h-8"/>
                </div>
                <div>
                    <Planet planet={black} className="planet planet-v-3 planet-h-9"/>
                </div>
            </div>
        );
    }
}

export default Tile07;