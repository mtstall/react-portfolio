import React from 'react';
// We import our Welcome component from our components folder so that we can eventually return it.
import Nav from './components/Nav';
import Header from './components/Header';
//import Section from './components/Section';

export default function App() {
  return (
    <div>
      <Nav />
      <Header />
    </div>
  );
}
