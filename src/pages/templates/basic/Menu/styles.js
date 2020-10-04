import styled from "styled-components";
//https://coolors.co/4f6d7a-c0d6df-dbe9ee-4a6fa5-166088

export const MenuBasic = styled.nav`
  width: 100%;
  height: 50px;
  background-color: #dbe9ee;

  > ul {
    list-style: none;
    position: relative;
    padding: 0px;
    margin: 0px;
  }
  ul li {
    width: 150px;
    float: left;
  }

  a {
    padding: 15px;
    display: block;
    text-decoration: none;
    background-color: #dbe9ee;
    text-align: center;
    color: #4f6d7a;
  }
  ul li:hover > ul,
  ul li:focus-within > ul,
  ul li ul:hover {
    visibility: visible;
    opacity: 1;
    display: block;
  }

  ul ul {
    list-style: none;
    position: absolute;
    visibility: hidden;
    padding: 0px;
    margin: 0px;
  }
  ul li:hover ul {
    visibility: visible;
  }

  a:hover {
    background-color: #C0D6DF;
  }

  ul ul li {
    float: none;
  }
  ul ul li a {
    background-color: #CEE0E7;
  }
  #bt_menu {
    display: none;
  }

  @media (max-width: 600px) {
    margin-left: ${(props) => (props.checked ? 0 : "-100%")};
    height: auto;
    transition: all 0.5s;

    > ul {
      margin-left: 0;
    }

    ul li {
      width: 100%;
      float: none;
    }
    ul ul {
      position: static;
      overflow: hidden;
      max-height: 0;
      transition:  0.5s;
    }

    ul li:hover > ul,
    ul li:focus-within > ul,
    ul li ul:hover {
      height: auto;
      max-height: 200px;
      transition:  0.5s;
    }
  }
`;

export const BtnHamburger = styled.div`
  position: relative;
  display: block;
  background-color: #dbe9ee;
  padding: 15px;

  #btn-hamburguer {
    position: absolute;
    opacity: 0;
  }

  label {
    position: relative;
    display: block;
    cursor: pointer;
    height: 23px;
    width: 33px;
  }

  label span {
    position: absolute;
    display: block;
    height: 2px;
    width: 100%;
    border-radius: 30px;
    background: #4f6d7a;
    transition: 0.25s ease-in-out;
  }

  label span:nth-child(1) {
    top: 0;
  }

  label span:nth-child(2) {
    top: 11px;
  }

  label span:nth-child(3) {
    top: 22px;
  }

  #btn-hamburguer:checked + label span:nth-child(1) {
    transform: rotate(45deg);
    top: 12px;
  }

  #btn-hamburguer:checked + label span:nth-child(2) {
    opacity: 0;
  }

  #btn-hamburguer:checked + label span:nth-child(3) {
    transform: rotate(-45deg);
    top: 12px;
  }
`;
