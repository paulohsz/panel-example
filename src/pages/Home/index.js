import React from 'react';
import Menu from '../templates/basic/Menu';
import { MenuData } from "../../data/initial_data.js";
//import FormCreate from "../../components/forms/pharmacy/FormCreate";
import ListMain from "../../components/forms/pharmacy/ListMain";


function Home() {


  return (
    <div>
      <Menu MenuData={MenuData} />
      <ListMain />
    </div>
  );
}

export default Home;
