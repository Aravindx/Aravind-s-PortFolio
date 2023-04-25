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
              imgPath={pizza}
              isBlog={false}
              title="Pizza Delivery"
              description="A well-balanced meal is a slice in both hands. Home slice service allows customers to pick from different flavours of pizza from the menu according to their taste, place an order. Build using MERN stack and stripe gateway for payment."
              ghLink="https://github.com/triplek24/Pizza-delivery-frontend"
              demoLink="https://awesome-pizza.herokuapp.com/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={url}
              isBlog={false}
              title="Miniature"
              description="Miniature is a tool that creates a short, unique URL that will redirect to the specific website of your choosing. Build using MERN stack."
              ghLink="https://github.com/triplek24/URl-Shortend-App-Cfrontend"
              demoLink="https://karthi-url-shortend.netlify.app/"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={ecommerace}
              isBlog={false}
              title="Ecommerace Website"
              description="An ecommerce store build with MERN stack, and utilizes third party API's. Implementation of Add to Cart and Delete and Admin access and payment method using Nodejs,Reactjs"
              ghLink="https://github.com/triplek24/Ecommerace-Front"
              demoLink="https://shoppeestop.netlify.app/"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={oyo}
              isBlog={false}
              title="Oyo-Clone-XYZ-Rooms"
              description="An Oyo-clone XYZ Room booking app build with MERN stack and implementation of features of Booking rooms,cancel Bokking,Adding rooms dat to Database,Edit rooms, Payment access."
              ghLink="https://github.com/triplek24/Oyo-RoomBooking-App"
              demoLink="https://mern-rooms-app.herokuapp.com/"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Diet}
              isBlog={false}
              title="Diet-Suggestion-App"
              description="Calorie Counter is a MERN stack application that can help you manage the number of calories you take a day in order to maintain a healthier diet."
              ghLink="https://github.com/triplek24/Diet-Suggestion-Calorie-Calculator"
              demoLink="https://g-calorie-counter.herokuapp.com/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={school}
              isBlog={false}
              title="School Management"
              description="A basic web application supporting all CRUD operations to map students to mentors. Build using MERN stack."
              ghLink="https://github.com/triplek24/School-Managment-Front"
              demoLink="https://school-management-24c466.netlify.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={weather}
              isBlog={false}
              title="Weather Finder"
              description="Weather finder tells us the wind speed, the UV level, humidity levels, and even “feels like” temperature to account for the dreaded wind chill. Build using React Js."
              ghLink="https://github.com/triplek24/Weather-Api-"
              demoLink="https://weatherapi-getforecast-ff2cfa.netlify.app/"
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
              title="Task Manager"
              description="Keep an eye across all tasks by using this task manager app. With this app users can note down the tasks and can view it whenever wanted. Build using React Js."
              ghLink="https://github.com/triplek24/Task-manager-App"
              demoLink="https://ephemeral-kitten-61109f.netlify.app/"
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
