import React, { Component } from 'react'

class MensJacket extends Component {
    constructor(props) {
        super(props)

        this.state = {
            jackets: []
        }
    }

    componentDidMount() {
        // fetch('https://herbalmed-7fab1.web.app/stockJackets.json')
        fetch('http://localhost:3000/stockJackets.json')
            .then(response => response.json())
            .then(items => this.setState({ jackets: items }));
    }


    render() {
        return (
            <div>
                <div>
                    <form className="d-flex p-5">
                        <input  class="form-control me-2" type="search" placeholder="Search here" aria-label="Search" />
                    </form>
                </div>


                <div className="row row-cols-1 row-cols-md-3 g-5 p-4">
                    {this.state.jackets.map(jacket => (
                        <div className="col" key={jacket.id}>
                            <div className="card">
                                <img src={jacket.image_url} className="card-img-top" alt="..." height="280px" />
                                <div className="card-body">
                                    <h5 className="card-title">{jacket.name}</h5>
                                    <h5>{jacket.price}</h5>
                                    <hr/>
                                    <button className="btn btn-info"><a className="text-decoration-none text-white fw-bold" href="https://pay.google.com/intl/en_in/about/?gclid=CjwKCAiAhreNBhAYEiwAFGGKPJbyPnORDH8dLh_4nvP1jXxXnv5_rmoawK343GOEHmfEPmH-waiVFBoCRJ0QAvD_BwE&gclsrc=aw.ds">Order Now</a></button>
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
