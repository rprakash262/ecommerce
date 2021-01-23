import React, { Component } from 'react';

class OneProduct extends Component {
    render() {
        const id = this.props.match.params.id;;
        console.log({id});
        
        return (
            <div>OneProduct</div>
        );
    }
}

export default OneProduct;
