import React from 'react';
import Menu from '../templates/basic/Menu';
import { MenuData } from "../../data/initial_data.js";


function Home() {


  return (
    <div>
      <Menu MenuData={MenuData} />
      
    </div>
  );
}

export default Home;
