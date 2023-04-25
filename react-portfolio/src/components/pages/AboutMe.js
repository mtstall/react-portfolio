import React from "react";
import selfie from '../../public/images/selfie.png';
import '../../styles/AboutMe.css';

export default function AboutMe() {
  return (
    <div>
      <section class="content-header">
        <h2>About Me</h2>
        <img src={selfie} alt="taylor stallings" />
      </section>
      <section class="content-body">
        {" "}
        <p>My name is Taylor.</p>
      </section>
    </div>
  );
}
