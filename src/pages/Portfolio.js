import React from "react";
import { Col, Row, Container } from "../components/Grid";
import pwgen from "../images/pwgen.jpg";
import planner from "../images/planner.png";
import book from "../images/book.jpeg";
import weather from "../images/weather.png";
import wine from "../images/wine.jpg";
import coffee from "../images/coffee.gif"


function Portfolio() {
    return (

    <Container fluid>    
    <Row>
    <Col size="md-6">
        <h2>PW Generator App</h2>
        <a href="https://jerger1470.github.io/homework3/"><img src={pwgen} alt="pwgen" width="300px" height="300px"/>
        </a>    
        <h2>Day Planner App</h2>
        <a href="https://jerger1470.github.io/homework5/"><img src={planner} alt="planner" width="300px" height="300px"/>
        </a>
        <h2>Link Library(Heroku Deployed)</h2>
        <a href="https://ancient-wave-03804.herokuapp.com/"><img src={book} alt="book" width="300px" height="300px"/>
        </a>
        
        </Col>
        

    <Col size="md-6">
        <h2>Weather App</h2>                    
        <a href="https://jerger1470.github.io/homework6/"><img src= {weather} alt="weather" width="300px" height="300px"/>
        </a>
        <h2>Wine Pairing App</h2>
        <a href="https://jerger1470.github.io/BCEJ-Project01/"><img src= {wine} alt="wine" width="300px" height="300px"/>
        </a>
      
      <h2>Dev Team Generator</h2>
        <a href="https://github.com/jerger1470/Job-Generator"><img src= {coffee} alt="coffee" width="300px" height="300px"/>
        </a>
    </Col>
    </Row>
    </Container>   
    );
    }
    
    export default Portfolio;