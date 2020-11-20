import React from 'react';
import Menu from '../templates/basic/Menu';
import { MenuData } from "../../data/initial_data.js";
import FormCreate from "../../components/forms/pharmacy/FormCreate";


function Home() {


  return (
    <div>
      <Menu MenuData={MenuData} />
      <FormCreate />
    </div>
  );
}

export default Home;
