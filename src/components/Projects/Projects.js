import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import pizza from "../../Assets/Projects/pizza.png";
import weather from "../../Assets/Projects/weather.png";
import calc from "../../Assets/Projects/calc.png";
import task from "../../Assets/Projects/task.png";
import school from "../../Assets/Projects/school.png";
import url from "../../Assets/Projects/URLShortener.png";
import ecommerace from "../../Assets/Projects/Ecommerace.png";
import oyo from "../../Assets/Projects/oyo.png";
import pokemon from "../../Assets/Projects/pokemon.png";
import Diet from "../../Assets/Projects/Diet.png";
function Projects() {
  return (
    <Container fluid className="project-section">
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath="https://i.pinimg.com/originals/74/7b/80/747b80153fda10b8d37e79b6ce282b19.png"
              isBlog={false}
              title="Rental Website"
              description="An ecommerce store build with MERN stack, and utilizes third party API's. Implementation of Add to Cart and Delete and Admin access and payment method using Nodejs,Reactjs"
              ghLink="https://github.com/Aravindx/RentalX-Frontend.git"
              demoLink="https://luminous-halva-57f3c3.netlify.app/"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath="https://i.pinimg.com/originals/53/8f/b8/538fb869639b74159ec89fc6c0fbae96.png"
              isBlog={false}
              title="Movie Rating App"
              description="An Oyo-clone XYZ Room booking app build with MERN stack and implementation of features of Booking rooms,cancel Bokking,Adding rooms dat to Database,Edit rooms, Payment access."
              ghLink="https://github.com/triplek24/Oyo-RoomBooking-App"
              demoLink="https://mern-rooms-app.herokuapp.com/"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath="https://tse3.mm.bing.net/th?id=OIP.Tai24BuXPmuSiOsItwzedgHaFj&pid=Api&P=0"
              isBlog={false}
              title="To-Do List-App"
              description="Calorie Counter is a MERN stack application that can help you manage the number of calories you take a day in order to maintain a healthier diet."
              ghLink="https://github.com/triplek24/Diet-Suggestion-Calorie-Calculator"
              demoLink="https://cheery-kitten-fd6449.netlify.app/userlist"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={school}
              isBlog={false}
              title="School Management"
              description="A basic web application supporting all CRUD operations to map students to mentors. Build using MERN stack."
              ghLink="https://github.com/Aravindx/Task-31-LibDash"
              demoLink="https://dashing-phoenix-0ae920.netlify.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath="https://tse4.mm.bing.net/th?id=OIP.QoK8uI509mzvKqpp3f9SDAHaFj&pid=Api&P=0"
              isBlog={false}
              title="AWS Polymer Search"
              description="Weather finder tells us the wind speed, the UV level, humidity levels, and even “feels like” temperature to account for the dreaded wind chill. Build using React Js."
              ghLink="https://github.com/Aravindx/AWS-Polymer-Search-Clone-Frontend"
              demoLink="https://master--awscloneapp.netlify.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={calc}
              isBlog={false}
              title="Calculator"
              description="Basic 4-function calculator able to do simple arithmetic, which includes addition, subtraction, multiplication, and division. Build using React Js."
              ghLink="https://github.com/Aravindx/DAY-15-CALCULATOR"
              demoLink="https://stirring-chebakia-3da631.netlify.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={task}
              isBlog={false}
              title="Data Manager"
              description="Keep an eye across all tasks by using this task manager app. With this app users can note down the tasks and can view it whenever wanted. Build using React Js."
              ghLink="https://github.com/Aravindx/Task-31-LibDash"
              demoLink="https://cheery-kitten-fd6449.netlify.app"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={pokemon}
              isBlog={false}
              title="Pokeman Card"
              description="It is Front end Project using Reactjs fetching the data from the Pokemon Api and make the Pagination of the collection of Pokemon card and Specification "
              ghLink="https://github.com/Aravindx/webcode1.guvi"
              demoLink="https://magnificent-horse-27e84a.netlify.app/"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
