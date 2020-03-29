import React from 'react';
import PropTypes from 'prop-types';

class Mine extends React.Component {
    constructor(props) {
        super(props);
        this.state = {state: ''};   
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        if (this.state.state === '') {
            this.setState({state: 'choosen'});
        }
        else {
            this.setState({state: ''});
        }
    }

    render() {
        return (
            <div 
                className={"figure mine " + this.props.className + " " + this.state.state} 
                onClick = {this.handleClick}
            />
        );
    }
}

Mine.propTypes = {
    className: PropTypes.string
}

export default Mine;