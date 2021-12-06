import React, { Component } from 'react'

 class HerbalMed extends Component {
     constructor(props) {
         super(props)
     
         this.state = {
              product: [       
            ]};
     };
     
     componentDidMount() {
         fetch('https://herbalmed-7fab1.web.app/stock.json')
         .then(response => response.json())
         .then(items => this.setState({product:items}));
     }

    render() {
        return (
            <div className="herbal_lists">
                <div className="herbal_product">
                    {this.state.product.map(product => (
                        <div key={product.id}>
                            <h1>{product.name}</h1>
                            <h2>{product.price}</h2>     
                        </div>
                    ))}
                </div>
            </div>
        )
    }
}

export default HerbalMed
