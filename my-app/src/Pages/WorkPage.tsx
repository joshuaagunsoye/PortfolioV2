import React from "react";
import "../Pages/WorkPage.scss"
const WorkPage = () => {
  return (
    <div className="workpg-contents">
      <div>
        <p className="workplace">CohabiLity</p>
        <p className="role">Front-End Developer (Contract through Mitacs), June 2022 - October 2022</p>
        <p className="text">I work as a Frontend engineer on an internship basis to build quickly and cost-effectively.</p>
        <p className="text">Technologies used: Javascript, React, SCSS, Redux.</p>
      </div>
      <div>
        <p className="workplace">Aqua-Advantage</p>
        <p className="role">Front-End Developer (Full time),  May 2022 - June 2022</p>
        <p className="text">I work as a Frontend engineer on a team to build rebuild customer webpage</p>
        <p className="text">Technologies used: Javascript, React, CSS.</p>
      </div>
      <div>
        <p className="workplace">Freelance</p>
        <p className="role"> Full Stack Developer, November 2021 - Till date</p>
        <p className="text">Technologies used: Javascript, React, SCSS, Redux, MongoDB, Typescript, MySQL, Git, Jest, Firebase, Express.</p>
      </div>
    </div>
  );
};

export default WorkPage;
