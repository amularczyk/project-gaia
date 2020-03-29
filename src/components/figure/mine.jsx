import React from 'react';

class Mine extends React.Component {
    render() {
        return (
            <div className={"figure mine " + this.props.className}/>
        );
    }
}

export default Mine;