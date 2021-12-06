import React, { Component } from 'react'


class IPLretentions extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            players:[
        ]};
    };
    
    componentDidMount() {
        //fetch('https://herbalmed-7fab1.web.app/stockPlayers.json')
        fetch('http://localhost:3000/stockPlayers.json')
        .then(response => response.json())
        .then(items => this.setState({players:items}));
    }

    render() {
        return (
            <div className="Players_Retained">
                <div className="Players_List">
                    {this.state.players.map(player => (
                        <div key={player.id} className="card" >
                           <div><img src={player.image_url} width="200px"/></div>
                            <h1>{player.name}</h1>
                            <h2>{player.price}</h2>
                            <button type="button" class="btn btn-primary">Read More</button>
                        </div>
                    ))}
                </div>
                
            </div>
        )
    }
}

export default IPLretentions
