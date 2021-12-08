import React, { Component } from 'react'
import { AiFillAmazonCircle, FaUser } from "react-icons/ai";
import { ImUser } from "react-icons/im";
import SignIn from './SignIn';
import MensJacket from '../MensJacket'

export class Nav extends Component {
  constructor(props) {
    super(props)

    this.state = {
      jackets: []
    }
  }

  filterJackets = (e) => {
    this.setState({
      jackets: this.state.jackets.filter(
        el => el.name.toLowerCase().indexOf(e.target.value.toLowerCase()) !== -1)
    })
  }

  render() {
    return (
      <div className="navi">
        <nav className="navbar navbar-expand-lg navbar-light bg-light" style={{position:"fixed",top:"0px",width:"100%", zIndex:"9999"}}>
          <div className="container-fluid">
            <a className="navbar-brand" href="http://localhost:3000/Home"><AiFillAmazonCircle className="Logo" style={{ color: "Green", fontSize: "5rem" }} /></a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <a className="nav-link active" aria-current="page" href="http://localhost:3000/Home">Home</a>
                </li>

                <li className="nav-item">
                  <a className="nav-link active" aria-current="page" href="http://localhost:3000/About">About</a>
                </li>

                <li className="nav-item dropdown">
                  <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                    Languages
                  </a>
                  <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                    <input type="radio" value="ಕನ್ನಡ" name="one" />
                    <label htmlFor="ಕನ್ನಡ">ಕನ್ನಡ</label>
                    <br />
                    <input type="radio" value="English" name="one" />
                    <label htmlFor="English">English</label>
                    <br />
                    <input type="radio" value="हिंदी" name="one" />
                    <label htmlFor="हिंदी">हिंदी</label>
                    <br />
                    <input type="radio" value="اردو" name="one" />
                    <label htmlFor="اردو">اردو</label>
                    <br />
                    <input type="radio" value="தமிழ்" name="one" />
                    <label htmlFor="தமிழ்">தமிழ்</label>
                  </ul>
                </li>

                <select class="form-select" style={{width:"6rem", height:"2.20rem"}} aria-label="Default select example">
                  <option selected>Select Your Country</option>
                  <option value="INDIA">INDIA</option>
                  <option value="AUSTRAILIA">AUSTRAILIA</option>
                  <option value="RUSSIA">RUSSIA</option>
                  <option value="NETHERLANDS">NETHERLANDS</option>
                  <option value="SPAIN">SPAIN</option>
                  <option value="USA">USA</option>
                  <option value="GERMANY">GERMANY</option>
                  <option value="SINGAPORE">SINGAPORE</option>
                  <option value="INDONESIA">INDONESIA</option>
                </select>

              </ul>
              <a><ImUser style={{ color: "Green", fontSize: "2rem", marginRight:"4px" }} /></a>

              <form className="d-flex">
                <input onChange={this.filterJackets} className="form-control me-2" type="search" placeholder="Search Here" aria-label="Search" />
              </form>
              <button className="btn btn-success"><a style={{color:"white",textDecoration:"none"}} href="http://localhost:3000/SignIn">Sign In</a></button>
            </div>
          </div>
        </nav>

      </div>
    )
  }
}

export default Nav
