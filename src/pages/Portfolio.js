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
               <br/>
               <Row>
                   <Col size = "md-12">
                   <h3 text-align = "center">Portfolio</h3>
                   </Col>
               </Row>
               <hr/>
               <Row>
                   <Col size = "md-6">
                    <Project src = {process.env.PUBLIC_URL +"/assets/images/Papyromancy.png"} 
                    alt ="papyromancy_project" 
                    deployed = "https://dylandewey.github.io/Papyromancy/"
                    linkone = "Papyromancy"
                    repo = "https://github.com/dylandewey/Papyromancy.git"
                    linktwo = "Papyromancy Repository" />
                   </Col>
                   <Col size = "md-6">
                    <Project src = {process.env.PUBLIC_URL +"/assets/images/Exodus.png"} 
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
                    <Project src = {process.env.PUBLIC_URL +"/assets/images/Weather_Dashboard.png"} 
                    alt ="weather-dashboard" 
                    deployed = "https://admjeffery.github.io/Weather_Dashboard/"
                    linkone = "Weather Dashboard"
                    repo = "https://github.com/AdmJeffery/Weather_Dashboard"
                    linktwo = "Weather Dashboard Repository" />
                   </Col>
                   <Col size = "md-6">
                    <Project src = {process.env.PUBLIC_URL +"/assets/images/Scheduler.png"} 
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
                    <Project src = {process.env.PUBLIC_URL +"/assets/images/Burger-Logger.png"}  
                    alt ="burger-logger" 
                    deployed = "https://hidden-bastion-85662.herokuapp.com/"
                    linkone = "Burger Logger"
                    repo = "https://github.com/AdmJeffery/Burger-Logger"
                    linktwo = "Burger Logger Repository" />
                   </Col>
                   <Col size = "md-6">
                    <Project src = {process.env.PUBLIC_URL +"/assets/images/Password.png"}  
                    alt ="password-generator" 
                    deployed = "https://admjeffery.github.io/Random_Password_Generator/"
                    linkone = "Password Generator"
                    repo = "https://github.com/AdmJeffery/Random_Password_Generator"
                    linktwo = "Password Generator Repository" />
                   </Col>
               </Row>
               <hr/>
               <Row>
                   <Col size = "md-6">
                    <Project src = {process.env.PUBLIC_URL +"/assets/images/Tracker.png"}  
                    alt ="Tracker" 
                    deployed = "https://aqueous-badlands-09216.herokuapp.com/"
                    linkone = "PWA Budget Tracker"
                    repo = "https://github.com/AdmJeffery/PWA-Budget-Tracker"
                    linktwo = "Budget Tracker Repository" />
                   </Col>
                   <Col size = "md-6">
                    <Project src = {process.env.PUBLIC_URL +"/assets/images/Fitness-Tracker.png"}  
                    alt ="password-generator" 
                    deployed = "https://polar-brushlands-06617.herokuapp.com/?id=5f6d3929ba72df0017e6c1cf"
                    linkone = "Workout Tracker"
                    repo = "https://github.com/AdmJeffery/Workout-Tracker"
                    linktwo = "Workout Tracker Repository" />
                   </Col>
               </Row>
           </Container>
       </div>
   )
}

export default Portfolio