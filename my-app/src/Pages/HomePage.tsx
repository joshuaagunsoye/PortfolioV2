import React from "react";
import { AiFillGithub, AiFillLinkedin, AiFillInstagram } from "react-icons/ai";
import "../Pages/Homepage.scss";

const HomePage = () => {
  return (
    <div className="homepg-contents">
      <h1 className="header">Hi, I'm Agunsoye Joshua Oluwamuyiwa</h1>
      <div className="about">
        <p>
          I'm a full-stack software engineer with 2 years of hands-on
          professional experience in software development, process improvement,
          on-time delivery of projects, with strong front-end
          development experience. Self-motivated & committed individual who
          loves challenges, quick to learn, and appreciates feedback.
        </p>
        <p>
          I'm currently at CohabiLity, working on the frontend team that's
          building the new webpage to enable a more efficient, objective webpage to make it easier and faster for users.
        </p>
        <p>
          I previously worked on a project for Aqua-Advantage, where I worked as part of the front-end team 
          to propose a new design and build from scratch a new website for the client.
        </p>
        <p>If you ever want to chat about or play basketball, or discuss an interesting project, 
          please feel free to hit me up.</p>
      </div>

      <div className="link-icons">
        <a href="https://github.com/joshuaagunsoye" target="_blank"><AiFillGithub /></a>
        <a href="https://www.linkedin.com/in/joshua-agunsoye-87a652144/" target="_blank"> <AiFillLinkedin /></a>
        <a href="https://www.instagram.com/_currryy/" target="_blank"><AiFillInstagram /></a>
      </div>
    </div>
  );
};

export default HomePage;
