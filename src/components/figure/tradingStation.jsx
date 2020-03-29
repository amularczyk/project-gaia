import React from 'react';

class TradingStation extends React.Component {
    render() {
        return (
            <div className={"figure trading-station " + this.props.className}/>
        );
    }
}

export default TradingStation;