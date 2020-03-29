import React from 'react';
import PlanetaryInstitute from '../../figure/planetaryInstitute';
import Academy from '../../figure/academy';
import TradingStation from '../../figure/tradingStation';
import ResearchLab from '../../figure/researchLab';
import Mine from '../../figure/mine';
import './player-blue.scss';

class PlayerBlue extends React.Component {
    render() {
        return (
            <div className="player player-blue">
                <div className="row-1">
                    <PlanetaryInstitute className="planetary-institute-1" />

                    <Academy className="academy-1" />
                    <Academy className="academy-2" />
                </div>
                <div className="row-2">
                    <TradingStation className="trading-station-1" />
                    <TradingStation className="trading-station-2" />
                    <TradingStation className="trading-station-3" />
                    <TradingStation className="trading-station-4" />

                    <ResearchLab className="research-lab-1" />
                    <ResearchLab className="research-lab-2" />
                    <ResearchLab className="research-lab-3" />
                </div>
                <div className="row-3">
                    <Mine className="mine-1" />
                    <Mine className="mine-2" />
                    <Mine className="mine-3" />
                    <Mine className="mine-4" />
                    <Mine className="mine-5" />
                    <Mine className="mine-6" />
                    <Mine className="mine-7" />
                    <Mine className="mine-8" />
                </div>
            </div>
        );
    }
}

export default PlayerBlue;