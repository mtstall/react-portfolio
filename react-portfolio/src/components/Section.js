import React from "react";

export default function Section({ sections }) {
  return (
    <div className="container">
      {sections.map((section) => (
        <section key={section.id} id={section.tag}>
            <h2>{section.header}</h2>
          {`${section.content}`}
        </section>
      ))}
    </div>
  );
}
