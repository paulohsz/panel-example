import React, { useState } from "react";
import PropTypes from "prop-types";
import { MenuBasic, BtnHamburger } from "./styles";
import { Hidden } from "@material-ui/core";

function Menu({ MenuData }) {
  const [checked, setChecked] = useState(false);

  return (
    <>
      <Hidden smUp>
        <BtnHamburger>
          <input
            type="checkbox"
            id="btn-hamburguer"
            onClick={(event) => {
              setChecked(!checked);
            }}
          />
          <label htmlFor="btn-hamburguer">
            <span></span>
            <span></span>
            <span></span>
          </label>
        </BtnHamburger>
      </Hidden>

      <MenuBasic role="navigation" checked={checked}>
        <ul>
          {MenuData.map((item, key) => {
            if ((item.sub === undefined) || (item.sub.length === 0) )
              return (
                <li key={key}>
                  <a href={item.url}>{item.title}</a>
                </li>
              );
            else {
              return (
                <li key={key}>
                  <a href={item.url}>{item.title}</a>
                  <ul>
                    {item.sub.map((subitem, subkey) => {
                      return (
                        <li key={subkey}>
                          <a href={subitem.url}>{subitem.title}</a>
                        </li>
                      );
                    })}
                  </ul>
                </li>
              );
            }
          })}
        </ul>
      </MenuBasic>
    </>
  );
}

Menu.defaultProps = {
  MenuData: [
    {
      title: "Default Menu",
      url: "/P404",
      sub: [],
    },
  ],
};

Menu.propTypes = {
  MenuData: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      url: PropTypes.string.isRequired,
      sub: PropTypes.array.isRequired,
    })
  ).isRequired,
};

export default Menu;
