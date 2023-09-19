import React from 'react';
import '../css/index.css';
import Navbar from '../components/navbar';
import Navlist from '../components/navlist';
import MainContainer from '../components/mainContainer';


const HomeContainer = () => {
  return (
    <div>
      <div className="header w100">
        <Navbar />
        <Navlist />
      </div>
        <MainContainer />
    </div>
  )
}

export default HomeContainer;