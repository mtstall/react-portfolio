import React from 'react';
// We import our Welcome component from our components folder so that we can eventually return it.
import Nav from './components/Nav';
import Header from './components/Header';
import Section from './components/Section';
import Footer from './components/Footer';

export default function App() {
  const sections = [{
    id: 1, tag: '#about-me', header: 'About Me', content: 'My name is Taylor.'
  },
  {
    id: 2, tag: '#portfolio', header: 'Portfolio', content: 'Here is my portfolio.'
  },
  {
    id: 3, tag: '#contact', header: 'Contact', content: 'Here is my contact information.'
  },
  {
    id: 4, tag: '#resume', header: 'Resume', content: 'Here is my resume.'
  }
]
  return (
    <div>
      <Nav sections={sections}/>
      <Header />
      <Section sections={sections}/>
      <Footer />
    </div>
  );
}
