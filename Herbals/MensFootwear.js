import React, { Component } from 'react'

class MensFootwear extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             products:[

             ]
        };
    };
    
    componentDidMount() {
        fetch('https://herbalmed-7fab1.web.app/stockFootWear.json')
        .then(response => response.json())
        .then(items => this.setState({products:items}));
    }

    render() {
        return (
            <div className="FootWears">
                {this.state.products.map(product => (
                    <div key={product.id}>
                        <div>{product.image_url}</div>
                        <h1>{product.name}</h1>
                        <h2>{product.price}</h2>
                    </div>
                ))}
            </div>
        )
    }
}

export default MensFootwear
