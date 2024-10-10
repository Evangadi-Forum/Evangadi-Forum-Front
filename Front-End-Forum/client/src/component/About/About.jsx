import React from "react";
import classes from "./about.module.css"; // Importing CSS module classes
import background from "../../image/bg-svg.svg";
import newImage from "../../image/discution.jpeg";

const About = () => {
  return (
    <div className={classes.bodyContainer}>
      <img
        src={background}
        alt="Background"
        className={classes.backgroundImage}
      />
      <img src={newImage} alt="Evangadi Image" className={classes.frontImage} />

      <h1 className={classes.title}>
        Evangadi
        <br />
        Forum
      </h1>
      <p className={classes.description}>
        Welcome to Evangadi Forum—your premier tech community for global
        networking and learning. Join us to connect with peers, collaborate on
        projects, and enhance your professional growth. Explore the features
        that can elevate your tech journey today.
      </p>
      <div>
        <button className={classes.joinButton}>Join Now</button>
      </div>
    </div>
  );
};

export default About;
