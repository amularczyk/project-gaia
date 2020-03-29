import React from 'react';
import PropTypes from 'prop-types';

class Academy extends React.Component {
    render() {
        return (
            <div className={"figure academy " + this.props.className}/>
        );
    }
}

Academy.propTypes = {
    className: PropTypes.string
}

export default Academy;