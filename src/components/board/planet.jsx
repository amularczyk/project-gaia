import React from 'react';

class Planet extends React.Component {
    render() {
        return <img className={this.props.className} src={this.props.planet} alt="planet-empty" />;
    }
}

export default Planet;