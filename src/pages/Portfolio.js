import React from "react";
import Container from "../components/Container";
import Row from "../components/Row";
import Col from "../components/Col";
import Navbar from "../components/Navbar/index.js"
import Footer from "../components/Footer/index.js"
import Project from "../components/Project/index.js"

function Portfolio(){
   return(
       <div>
           
           <Container>
               <Row>
                   <Col size = "md-8">
                   <h3>Portfolio</h3>
                   </Col>
               </Row>
               <hr/>
               <Row>
                   <Col size = "md-6">
                    <Project src = "./assets/images/Papyromancy.png" 
                    alt ="papyromancy_project" 
                    deployed = "https://dylandewey.github.io/Papyromancy/"
                    linkone = "Papyromancy"
                    repo = "https://github.com/dylandewey/Papyromancy.git"
                    linktwo = "Papyromancy Repository" />
                   </Col>
                   <Col size = "md-6">
                    <Project src = "./assets/images/Exodus.png" 
                    alt ="exodus" 
                    deployed = "http://exodus-escape.herokuapp.com/"
                    linkone = "Exodus"
                    repo = "https://github.com/corvus-cyber/Project_Exodus"
                    linktwo = "Exodus Repository" />
                   </Col>
               </Row>
               <hr/>
               <Row>
                   <Col size = "md-6">
                    <Project src = "./assets/images/Weather_Dashboard.png" 
                    alt ="weather-dashboard" 
                    deployed = "https://admjeffery.github.io/Weather_Dashboard/"
                    linkone = "Weather Dashboard"
                    repo = "https://github.com/AdmJeffery/Weather_Dashboard"
                    linktwo = "Weather Dashboard Repository" />
                   </Col>
                   <Col size = "md-6">
                    <Project src = "./assets/images/Scheduler.png" 
                    alt ="work-scheduler" 
                    deployed = "https://admjeffery.github.io/Work_Day_Scheduler/"
                    linkone = "Work Scheduler"
                    repo = "https://github.com/AdmJeffery/Work_Day_Scheduler"
                    linktwo = "Scheduler Repository" />
                   </Col>
               </Row>
               <hr/>
               <Row>
                   <Col size = "md-6">
                    <Project src = "./assets/images/Burger-Logger.png" 
                    alt ="burger-logger" 
                    deployed = "https://hidden-bastion-85662.herokuapp.com/"
                    linkone = "Burger Logger"
                    repo = "https://github.com/AdmJeffery/Burger-Logger"
                    linktwo = "Burger Logger Repository" />
                   </Col>
                   <Col size = "md-6">
                    <Project src = "./assets/images/Password.png" 
                    alt ="password-generator" 
                    deployed = "https://admjeffery.github.io/Random_Password_Generator/"
                    linkone = "Password Generator"
                    repo = "https://github.com/AdmJeffery/Random_Password_Generator"
                    linktwo = "Password Generator Repository" />
                   </Col>
               </Row>
           </Container>
       </div>
   )
}

export default Portfolio