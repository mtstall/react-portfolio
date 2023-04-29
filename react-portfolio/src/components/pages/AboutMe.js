import React from "react";
import selfie from '../../public/images/selfie.png';
import '../../styles/AboutMe.css';

export default function AboutMe() {
  return (
    <div>
      <section className="content-header">
        <h2>About Me</h2>
        <img src={selfie} alt="taylor stallings" />
      </section>
      <section className="content-body">
        {" "}
        <p>My name is Taylor.</p>
      </section>
    </div>
  );
}
