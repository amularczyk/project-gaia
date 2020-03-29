import React from 'react';
import PropTypes from 'prop-types';

class Planet extends React.Component {
    constructor(props) {
        super(props);
        this.state = {state: ''};   
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        console.log("1");
    }

    render() {
        return (
            <img 
                className={this.props.className} 
                src={this.props.planet} 
                alt="planet" 
                onClick = {this.handleClick}
            />
        );
    }
}

Planet.propTypes = {
    className: PropTypes.string,
    planet: PropTypes.string.isRequired,
    row: PropTypes.number.isRequired,
    column: PropTypes.number.isRequired
}

export default Planet;