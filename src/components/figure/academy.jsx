import React from 'react';

class Academy extends React.Component {
    render() {
        return (
            <div className={"figure academy " + this.props.className}/>
        );
    }
}

export default Academy;