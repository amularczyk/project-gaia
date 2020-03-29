import React from 'react';
import PropTypes from 'prop-types';

class ResearchLab extends React.Component {
    render() {
        return (
            <div className={"figure research-lab " + this.props.className}/>
        );
    }
}

ResearchLab.propTypes = {
    className: PropTypes.string
}

export default ResearchLab;