import React from 'react'

const SignIn = () => {

    return (

        <div style={{marginTop:"7rem"}}>
            <form className="row g-3 needs-validation px-5px" style={{width:"60%", margin:"5px 250px 5px 250px" }} novalidate>
                <div className="col-md-4">
                    <label for="validationCustom01" className="form-label" style={{ color: "white", fontSize: "20px", fontWeight: "400px" }}>First name</label>
                    <input type="text" className="form-control" id="validationCustom01" value="Suraj" required />
                    <div className="valid-feedback">
                        Looks good!
                    </div>
                </div>
                <div className="col-md-4">
                    <label for="validationCustom02" className="form-label" style={{ color: "white", fontSize: "20px", fontWeight: "400px" }}>Last name</label>
                    <input type="text" className="form-control" id="validationCustom02" value="Rao" required />
                    <div className="valid-feedback">
                        Looks good!
                    </div>
                </div>
                <div className="col-md-4">
                    <label for="validationCustomUsername" className="form-label" style={{ color: "white", fontSize: "20px", fontWeight: "400px" }}>Username</label>
                    <div className="input-group has-validation">
                        <span className="input-group-text" id="inputGroupPrepend">@</span>
                        <input type="text" className="form-control" id="validationCustomUsername" aria-describedby="inputGroupPrepend" required />
                        <div className="invalid-feedback">
                            Please choose a username.
                        </div>
                    </div>
                </div>
                <div className="col-md-6">
                    <label for="validationCustom03" className="form-label" style={{ color: "white", fontSize: "20px", fontWeight: "400px" }}>City</label>
                    <input type="text" className="form-control" id="validationCustom03" required />
                    <div className="invalid-feedback">
                        Please provide a valid city.
                    </div>
                </div>
                <div className="col-md-3">
                    <label for="validationCustom04" className="form-label" style={{ color: "white", fontSize: "20px", fontWeight: "400px" }}>Country</label>
                    <select className="form-select" id="validationCustom04" required>
                        <option selected disabled value="">Choose...</option>
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
                    <div className="invalid-feedback">
                        Please select a valid Country.
                    </div>
                </div>
                <div className="col-md-3">
                    <label for="validationCustom05" className="form-label" style={{ color: "white", fontSize: "20px", fontWeight: "400px" }}>Zip</label>
                    <input type="text" className="form-control" id="validationCustom05" required />
                    <div className="invalid-feedback">
                        Please provide a valid zip.
                    </div>
                </div>
                <div className="col-12">
                    <div className="form-check">
                        <input className="form-check-input" style={{marginLeft:"0px"}} type="checkbox" value="" id="invalidCheck" required />
                        <label className="form-check-label"  style={{marginLeft:"5px"}} for="invalidCheck">
                            Agree to terms and conditions
                        </label>
                        <div className="invalid-feedback">
                            You must agree before submitting.
                        </div>
                    </div>
                </div>
                <div className="col-12">
                    <button className="btn btn-primary" type="submit">Submit form</button>
                </div>
            </form>
        </div>
    )
}

export default SignIn