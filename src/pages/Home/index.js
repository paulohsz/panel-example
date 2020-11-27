import React from 'react';
import Menu from '../templates/basic/Menu';
import { MenuData } from "../../data/initial_data.js";
import ListMain from "../../components/forms/pharmacy/ListMain";
import { SnackbarProvider } from 'notistack';


function Home() {


  return (
    <SnackbarProvider maxSnack={3}>
      <Menu MenuData={MenuData} />
      <ListMain />
  </SnackbarProvider>
  );
}

export default Home;
