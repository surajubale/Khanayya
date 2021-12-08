import React from 'react'

function About() {
    return (
        <div>
            <div>
                <h2 style={{color:"white", fontWeight:"600",marginTop: "7rem"}}>About</h2>
                <p style={{color:"white"}}>
                    Web Application is developed using REACT JS library.
                </p>
            </div>
            <div className="about-section" style={{ display: "flex", flexDirection: "row", justifyContent: "center", marginTop: "2rem",marginTop: "4rem" }}>

                <div class="card" style={{ width: "18rem" }}>
                    <img src="./IMAGES/jordan-walke2.png" class="card-img-top" alt="..." />
                    <div class="card-body">
                        <h5 class="card-title">JORDAN WALKE</h5>
                        <p class="card-text">Jordan Walke was the founder of REACT JS.</p>
                        <a href="#" class="btn btn-primary">Contact</a>
                    </div>
                </div>

                <div class="card" style={{ width: "18rem", marginLeft: "5rem", marginRight: "5rem" }}>
                    <img src="./IMAGES/jordan-walke2.png" class="card-img-top" alt="..." />
                    <div class="card-body">
                        <h5 class="card-title">JORDAN WALKE</h5>
                        <p class="card-text">Jordan Walke was the founder of REACT JS.</p>
                        <a href="#" class="btn btn-primary">Contact</a>
                    </div>
                </div>

                <div class="card" style={{ width: "18rem" }}>
                    <img src="./IMAGES/jordan-walke2.png" class="card-img-top" alt="..." />
                    <div class="card-body">
                        <h5 class="card-title">JORDAN WALKE</h5>
                        <p class="card-text">Jordan Walke was the founder of REACT JS.</p>
                        <a href="#" class="btn btn-primary">Contact</a>
                    </div>
                </div>
            </div>

        </div >
    )
}

export default About
