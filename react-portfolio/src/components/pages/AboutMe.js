import React from "react";
import selfie from "../../public/images/selfie.png";
import "../../styles/AboutMe.css";

export default function AboutMe() {
  return (
    <div className="about-me">
      <section className="content-header">
        <h2>About Me</h2>
        <img src={selfie} alt="taylor stallings" />
      </section>
      <section className="content-body">
        {" "}
        <p>
          Hi, my name is Taylor Stallings, and I'm a full stack web developer.
          I've had an interest in coding ever since I had my own MySpace page
          circa 2005 - you'd really be surprised the amount of HTML a middle
          schooler could learn by updating their MySpace profile page every
          other day - and I started to realize I really liked coding when I took
          a few courses in college using JavaScript, R, and Excel. Although I
          didn't major in computer science in college, I took enough classes to
          get a basic understanding of the logic behind coding, and I knew it
          was something I was interested in. I've almost completed the UNC
          Coding Bootcamp, which has been an exciting experience- I've learned
          many new programs, including React, MongoDB, mySQL, and Node.js. Go to
          the Portfolio tab to see a few projects I've worked on that showcase
          these skills.
        </p>
      </section>
    </div>
  );
}
