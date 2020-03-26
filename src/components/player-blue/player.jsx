import React from 'react';
import './player.css';

class PlayerBlue extends React.Component {
    render() {
        return (
            <div className="player">
                <div className="row-1">
                    <div className="Figure Planetary-Institute" />

                    <div className="Figure Academy Academy-1" />
                    <div className="Figure Academy Academy-2" />
                </div>
                <div className="row-2">
                    <div className="Figure Trading-Station Trading-Station-1" />
                    <div className="Figure Trading-Station Trading-Station-2" />
                    <div className="Figure Trading-Station Trading-Station-3" />
                    <div className="Figure Trading-Station Trading-Station-4" />

                    <div className="Figure Research-Lab Research-Lab-1" />
                    <div className="Figure Research-Lab Research-Lab-2" />
                    <div className="Figure Research-Lab Research-Lab-3" />
                </div>
                <div className="row-3">
                    <div className="Figure Mine Mine-1" />
                    <div className="Figure Mine Mine-2" />
                    <div className="Figure Mine Mine-3" />
                    <div className="Figure Mine Mine-4" />
                    <div className="Figure Mine Mine-5" />
                    <div className="Figure Mine Mine-6" />
                    <div className="Figure Mine Mine-7" />
                    <div className="Figure Mine Mine-8" />
                </div>
            </div>
        );
    }
}

export default PlayerBlue;

// Figure Mine, Trading Station, Planetary Institute, Research Lab, Academy