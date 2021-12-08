import React, { Component } from 'react'


class Home extends Component {
    constructor(props) {
        super(props)

        this.state = {

        }
    }

    render() {
        return (
            <div>
                <div id="carouselExampleIndicators" className="carousel slide" style={{marginTop:"7rem"}} data-bs-ride="carousel">
                    <div className="carousel-indicators">
                        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
                    </div>
                    <div className="carousel-inner" style={{height:"20rem", marginTop:"10px"}}>
                        <div className="carousel-item active" >
                            <img src="./IMAGES/offer3.png" className="d-block w-60"  style={{ margin:"auto"}} alt="..."/>
                        </div>
                        <div className="carousel-item">
                            <img src="./IMAGES/jac22.png" className="d-block w-60" style={{ margin:"auto"}} alt="..."/>
                        </div>
                        <div className="carousel-item">
                            <img src="./IMAGES/jac23.png" className="d-block w-60" style={{ margin:"auto"}} alt="..."/>
                        </div>
                    </div>
                    <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Previous</span>
                    </button>
                    <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Next</span>
                    </button>
                </div>
                <a href="http://localhost:3000/MensJacket" style={{ color:"white", fontWeight:"600", marginTop:"7px"}}>MenjsJackets</a>
            </div>
        )
    }
}

export default Home
