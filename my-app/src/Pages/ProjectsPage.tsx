import React from "react";
import "../Pages/WorkPage.scss";

const ProjectsPage = () => {
  return (
    <div className="projects">
      <div>
        <p className="name">Feedback App</p>
        <div className="text">
          <p>
            This is project will put your JavaScript skills to the test. We
            provide a JSON file to pull the data, but it's also a perfect
            project to build as a full-stack CRUD app!
          </p>
          <p>Technology Used: This was built using React,MongoDB,Javascript</p>
          <div className="links">
            <p>Github: <a href="https://github.com/joshuaagunsoye/Feedback-App">https://github.com/joshuaagunsoye/Feedback-App</a> </p>
          </div>
        </div>
      </div>

      <div>
        <p className="name">Transit App</p>
        <div className="text">
          <p>
            This is a LeafletJS-based prototype of a real time map for various
            transit systems, including Halifax Transit.
          </p>
          <p>Technology Used: This was built using Javascript,Leaflet</p>
          <div className="links">
            <p>Github: <a href="https://github.com/joshuaagunsoye/Transit-App">https://github.com/joshuaagunsoye/Transit-App</a></p>
          </div>
        </div>
      </div>

      <div>
        <p className="name">Food Tracker App</p>
        <div className="text">
          <p>
            App provides powerful tools that make it easier for everyone to live
            a healthier life by tracking meals
          </p>
          <p>Technology Used: This was built using React,Firebase,MongoDB</p>
          <div className="links">
          </div>
        </div>
      </div>

      <div>
        <p className="name">Aqua-Advantage App</p>
        <div className="text">
          <p>Clients product page</p>
          <p>Technology Used: This was built using React, Bootstrap</p>
          <div className="links">
          </div>
        </div>
      </div>

      <div>
        <p className="name">E-commerce App</p>
        <div className="text">
          <p>
            In this challenge, you'll build a beautiful product page. We'll be
            putting your JS skills to the test with a lightbox product gallery
            and cart functionality!
          </p>
          <p>Technology Used: This was built using React</p>
          <div className="links">
            <p>Github: <a href="https://github.com/joshuaagunsoye/E-commerce/tree/main/e-comm">https://github.com/joshuaagunsoye/E-commerce/tree/main/e-comm</a></p>
          </div>
        </div>
      </div>

      <div>
        <p className="name">Advice App</p>
        <div className="text">
          <p>
            The perfect project if you're learning how to interact with
            3rd-party APIs. This challenge uses the Advice Slip API to generate
            random quotes of advice.
          </p>
          <p>Technology Used: This was built using React, Restful API</p>
        </div>

        <div className="links">
          <p>Github: <a href="https://github.com/joshuaagunsoye/Advice-App-">https://github.com/joshuaagunsoye/Advice-App-</a></p>
        </div>
      </div>

      <div>
        <p className="name">My Portfolio Site</p>
        <div className="text">
          <p>My beautiful portfolio site you are currently looking at.</p>
          <p>Technology Used: This was built using React</p>
          <div className="links">
            <p>Github:</p>
            <p>Link:</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectsPage;
