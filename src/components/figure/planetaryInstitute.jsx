import React from 'react';
import PropTypes from 'prop-types';

class PlanetaryInstitute extends React.Component {
    render() {
        return (
            <div className={"figure planetary-institute " + this.props.className}/>
        );
    }
}

PlanetaryInstitute.propTypes = {
    className: PropTypes.string
}

export default PlanetaryInstitute;