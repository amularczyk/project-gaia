import React from 'react';
import PropTypes from 'prop-types';

class TradingStation extends React.Component {
    render() {
        return (
            <div className={"figure trading-station " + this.props.className}/>
        );
    }
}

TradingStation.propTypes = {
    className: PropTypes.string
}

export default TradingStation;