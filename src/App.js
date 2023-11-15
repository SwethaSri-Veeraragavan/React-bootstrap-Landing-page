import React from 'react';
import './App.css';
import Navbarpage from './components/Navbar';
import Heropage from './components/Heropage';
import Threebox from './components/page3';
import Flyingbird from './components/page4';
import Features from './components/page5';
import Threecards from './components/page6';
import Footer from './components/Footer';
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  return (
    <div className="App">
      <Navbarpage />
      <Heropage />
      <Threebox />
      <Features />
      <Flyingbird />
      <Threecards />
      <Footer />
      
    </div>
  );
}

export default App;
