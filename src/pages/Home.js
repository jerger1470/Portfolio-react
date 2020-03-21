import React from "react";
import { Col, Row, Container } from "../components/Grid";
import Profile from "../images/profile.jpg"

function Home (){
    return (
        
        <Container>
            <Row>
                <Col size="md-6">
            

            <div className="card" style={{"width": "350px"}}>
                <img src={Profile} className="card-img-top" alt="profile pic" width="250px;"height="250px;"/>
                <div className="card-body">
                  <h5 className="card-title" style={{"text-align": "center"}}>Technical Skills</h5>  
                  <p className="card-text"></p>
                  </div>
                  <ul className="list-group list-group-flush">
                    <li className="list-group-item">HTML/CSS</li>
                    <li className="list-group-item">Javascript</li>
                    <li className="list-group-item">Jquery</li>
                    <li className="list-group-item">Bootstrap/CSS Frameworks</li>
                    <li className="list-group-item">JS.Node</li>
                    <li className="list-group-item">MySQL</li>
                    <li className="list-group-item">MongoDB</li>
                    <li className="list-group-item">React</li>
                  </ul>
                  <div className="card-body">
                  <a href="https://www.linkedin.com/in/bryanmjerger/" className="card-link">Click here for Linkedin Profile</a>
                  <a href="https://github.com/jerger1470" className="card-link">Click here for Git Hub</a>
                  <a href="./assets/images/resume v 2.pdf" className="card-link">Click here for resume</a>
                </div>
            </div>  
                </Col>
                <Col size="md-6">           

                 <div className="card" style={{"width": "400px"}}>
                    <div className="card-body">
                      <h1 className="card-title" style= {{"text-align": "center"}}>Full Stack Web Developer</h1>
                      
                      <p className="card-text">
                        Hello! I am Bryan Jerger a Full Stack Web Developer. I recently completed my 
                        bootcamp at Northwestern University. I was born and live in Chicago, IL.
                        I love to travel, play games, and meet new people. 
                        I have worked in the hobby gaming industry for almost 10 years and
                        am looking to tackle my next challenge in the tech industry.
                     
                      </p>
                      <p className="card-text">
                        I have been interested in technology for as long as I can remember. I originally went
                        to Depaul University for IT, but life sometimes doesn't lead you down the short path.
                        Due to unforseen issues, I decided to take a break and work in retail for a hobby gaming store.
                        After several years, I worked my way to manager as well as the in-house IT specialist. I now control the store's
                        website as well as all the IT needs.  

                      </p>
                      <p className="card-text">

                        It took several years, but now I want to work my way back into the technology field. I always like challenges
                        and I feel this is the next step! 
                     </p>
                     </div>
                     </div> 
                    </Col>
                    </Row>
                    </Container>
    );
}

export default Home;