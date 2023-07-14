import React, { useState } from 'react'
import Header from '../../components/common/header/header'
import TabOptions from '../../components/common/tabOptions/tabs';
import Footer from '../../components/common/footer/footer';
import Menu from '../../components/menu/menu';
import Restaurants from '../../components/restaurants/restaurants';

const HomePage = () => {

    const [activeTab, setActiveTab] = useState("Menu")

  return (
    <div>
      <Header />
      <TabOptions activeTab={activeTab} setActiveTab={setActiveTab} />
      {getScreen(activeTab)}    
      <Footer />
    </div>
  )
};

const getScreen = (tab) => {
    switch(tab) {
        case "Menu":
            return <Menu />;
        case "Restaurants":
            return <Restaurants />;
        default:
            return <Menu />;   
    }
};

export default HomePage;
