import React from "react";
import resume from "../../public/pdfs/Stallings_Resume.pdf";

export default function Resume() {
  return (
    <div className="resume">
      <a href={resume} download="Stallings_Resume.pdf">Click here to download my resume.</a>
      <div class="proficiencies">
        <h3>Proficiencies:</h3>
        <ul>
        <li>HTML</li>
        <li>CSS</li>
        <li>JavaScript</li>
        <li>Node.js</li>
        <li>React</li>
        <li>GraphQL</li>
        <li>MongoDB</li>
      </ul>
        </div>
    </div>
  );
}