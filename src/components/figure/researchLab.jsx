import React from 'react';

class ResearchLab extends React.Component {
    render() {
        return (
            <div className={"figure research-lab " + this.props.className}/>
        );
    }
}

export default ResearchLab;