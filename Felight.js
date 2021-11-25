import React from "react";
import Courses from "./Courses";


function Felight() {
    return (
        <div className="Container">
            <h1>Felight Courses</h1>
            <h3>Learn More earn More!!</h3>
            <div className="course-offered">
            <Courses name="Javascript" image="https://miro.medium.com/max/1400/1*5eV1xmJs2-sJ4DdejfdnQA.png" ratings="4.2/5"/>
            <Courses name="HTML" image="https://miro.medium.com/max/1400/1*5eV1xmJs2-sJ4DdejfdnQA.png" ratings="4.2/5"/>
            <Courses name="CSS-Bootstrap" image="https://miro.medium.com/max/1400/1*5eV1xmJs2-sJ4DdejfdnQA.png" ratings="4.2/5"/>
            </div>
        </div>
    )
}

export default Felight