import React, { Component } from 'react'
import './styleJacket.css'

class MensJacket extends Component {
    constructor(props) {
        super(props)

        this.state = {
            jackets: []
        }
    }

    componentDidMount() {
        //fetch('https://herbalmed-7fab1.web.app/stockJackets.json')
        fetch('http://localhost:3000/stockJackets.json')
            .then(response => response.json())
            .then(items => this.setState({ jackets: items }));
    }
    
    filterJackets = (e) => {
        this.setState({
          jackets: this.state.jackets.filter(
            el => el.name.toLowerCase().indexOf(e.target.value.toLowerCase()) !== -1)
        })
      }

    render() {
        return (
            <div>
                
                <div className="row row-cols-1 row-cols-md-3 g-5 p-4" style={{marginTop:"2.7rem"}}>
                    {this.state.jackets.map(jacket => (
                        <div className="col" key={jacket.id}>
                            <div className="card">
                                <img src={jacket.image_url} className="card-img-top" alt="..." height="280px" />
                                <div className="card-body">
                                    <h5 className="card-title">{jacket.name}</h5>
                                    <h5>{jacket.price}</h5>
                                    <hr/>
                                    <button className="btn btn-success"><a className="text-decoration-none text-white fw-bold" href="https://pay.google.com/intl/en_in/about/?gclid=CjwKCAiAhreNBhAYEiwAFGGKPJbyPnORDH8dLh_4nvP1jXxXnv5_rmoawK343GOEHmfEPmH-waiVFBoCRJ0QAvD_BwE&gclsrc=aw.ds">Order Now</a></button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        )
    }
}

export default MensJacket
