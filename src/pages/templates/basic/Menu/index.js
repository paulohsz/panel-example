import React, {useState} from "react";
import { MenuBasic, BtnHamburger } from "./styles";
import { Hidden } from "@material-ui/core";

function Menu() {
  const [checked, setChecked] = useState(false);
  return (
    <>
    <Hidden smUp>
    <BtnHamburger>
    <input type="checkbox" id="btn-hamburguer" onClick={(event) => {setChecked(!checked);}} />
    <label htmlFor="btn-hamburguer">
      <span></span>
      <span></span>
      <span></span>
    </label>
    </BtnHamburger>
    </Hidden>
    
    <MenuBasic role="navigation" checked={checked}>
      <ul>
    	  <li><a href="#">Home</a></li>
        <li>
          <a href="#">Serviços</a>
        	<ul>
            	<li><a href="#">Criação de Sites</a></li>
              <li><a href="#">Arte Visual</a></li>
            </ul>
        </li>
        <li><a href="#">Cursos</a>
        	<ul>
            	<li><a href="#">Java</a></li>
                <li><a href="#">Photoshop</a></li>
                <li><a href="#">HTML/CSS</a></li>
            </ul>
        </li>
      
        <li><a href="#">Contato</a></li>
    </ul>

    </MenuBasic>
    </>
  );
}

export default Menu;
