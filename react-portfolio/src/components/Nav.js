import React from 'react';

export default function Nav({ sections }) {
  const linkStyle = { border: '1px black', padding: '5px' }; // defining the linkStyle settings

  return (
    <nav className="main-header-menu">
      <section
        style={{
          display: 'flex',
          fontFamily: 'helvetica',
          flexDirection: 'row',
          alignItems: 'flex-start',
          justifyContent: 'flex-start',
        }}
      >
        {sections.map((section) => (
          <div style={linkStyle}>
            <a href={section.tag}>{section.header}</a>
          </div>
        ))
        }
      </section>
    </nav>
  );
}
