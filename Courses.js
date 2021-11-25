import React from 'React';

let Courses = props => {
    return (
        <div className="_courses">
            <div className="_course-box">
                <img src={props.image} alt="" />
                <div className="_course-name">
                    {props.name}
                </div>
                <div className="_ratings">
                    {this.ratings}
                </div>

            </div>
        </div>
    )
}

export default Courses