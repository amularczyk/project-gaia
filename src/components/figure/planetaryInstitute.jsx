import React from 'react';

class PlanetaryInstitute extends React.Component {
    render() {
        return (
            <div className={"figure planetary-institute " + this.props.className}/>
        );
    }
}

export default PlanetaryInstitute;