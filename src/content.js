import React from "react";

class Content extends React.Component {
    render() {
        return (
            <div>
                <div id="main-div">
                    <div id="leftDiv">
                        <img id="profilePic" src="https://edyodalms.s3.amazonaws.com/media/profilepictures/1640962254753_TqFXQh0.jpg" />

                        <div id="profile-info">
                            <p className="info-text">Name : Vaibhav Jaidev Chaudhari<br />
                                Contact : 7796225276<br />
                                Email-Id : vjchaudhari121@gmail.com<br />
                                LinkedIn : <a href="https:/linkedin.com/in/vaibhav-chaudhari-717782218" target="blank">Click Here</a><br />
                                DOB : 13/21/2000
                            </p>
                            <p className="info-text">
                                Address : At post Pimpalgaon/Sadak, Tah. Lakhani, Dist. Bhandara, 441804
                            </p>
                        </div>
                    </div>

                    <div className="rightDiv">
                        <h1 id="details">Educational Details:</h1>
                        <div className="card">
                            <p className="card-details">
                            <h3 className="card-title ">Graduation</h3>
                                <b>College</b>: <i>JD College Of Engineering And Management, Nagpur</i><br/>
                                <b>Start Date</b>: 09/2018<br/>
                                <b>End Date</b>: 07/2022<br/>
                                <b>CGPA</b>: 8.56/10
                            </p>
                        </div>
                        <div className="card">
                        <p className="card-details">
                            <h3 className="card-title ">HSC</h3>
                                <b>School</b>: <i>Samarth Mahavidyalaya Lakhani</i><br/>
                                <b>Start Date</b>: 07/2017<br/>
                                <b>End Date</b>: 02/2018<br/>
                                <b>Percentage</b>: 54.15%
                            </p>
                        </div>
                        <div className="card">
                        <p className="card-details">
                            <h3 className="card-title ">SSC</h3>
                                <b>School</b>: <i>Samarth Vidyalaya Lakhani</i><br/>
                                <b>Start Date</b>: 08/2015<br/>
                                <b>End Date</b>: 03/2016<br/>
                                <b>Percentage</b>: 68.80%
                            </p>
                        </div>
                        <div className="card1 card">
                        <p className="card-details">
                            <h3 className="card-title ">Certificates</h3>
                                NPTEL: Certificate for Software Engineering <br/>
                                NPTEL: Certificate for Introduction TO IOT<br/>
                                Certificate for 3D Game Development with Unity - Instructor: Ben Timsten(Udemy) <br/>
                                Certificate for MagicaVoxel 3D Art - Instructor: Bin Timsten(Udemy)
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Content;