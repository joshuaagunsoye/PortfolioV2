import React from "react";
import { AiFillGithub, AiFillLinkedin, AiFillInstagram } from "react-icons/ai";
import "../Pages/Homepage.scss";

const HomePage = () => {
  return (
    <div className="homepg-contents">
      <h1 className="header">Hi, I'm Agunsoye Joshua Oluwamuyiwa</h1>
      <div className="about">
        <p>
          Experienced Full-Stack Software Engineer | Proven Track Record in
          Project Delivery | Front-End Specialist | Ready for Impactful Roles
        </p>
        <p>
          With 2 years of hands-on professional experience, I excel in
          delivering high-quality software projects on time. My forte lies in
          front-end development, where I've demonstrated exceptional skills in
          creating intuitive and visually appealing user interfaces.
        </p>
        <p>
          Currently, I'm a valuable member of the Cllctve Inc. team, working as
          a Full-Stack Developer. Our mission is clear: to elevate user
          experiences by revamping our webpage. My role spans both front-end and
          back-end development, allowing me to drive the entire web development
          process and ensure a seamless, feature-rich platform.
        </p>
        <p>
          I've also successfully contributed to client satisfaction as part of
          the front-end team at Aqua-Advantage, where I led the proposal and
          development of a brand-new website.
        </p>
        <p>
          My commitment to excellence and my passion for staying ahead in the
          tech world make me an ideal candidate for your team. Let's connect and
          discuss how I can bring my skills to drive innovation and success in
          your organization.
        </p>
      </div>

      <div className="link-icons">
        <a href="https://github.com/joshuaagunsoye" target="_blank">
          <AiFillGithub />
        </a>
        <a
          href="https://www.linkedin.com/in/joshua-agunsoye-87a652144/"
          target="_blank"
        >
          {" "}
          <AiFillLinkedin />
        </a>
        <a href="https://www.instagram.com/_currryy/" target="_blank">
          <AiFillInstagram />
        </a>
      </div>
    </div>
  );
};

export default HomePage;
