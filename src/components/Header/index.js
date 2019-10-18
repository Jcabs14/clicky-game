import React from 'react';
import "./style.css"

function Header(props) {
  return <header><img className="imgHeader" alt="header" src="/images/header.jpg"></img>
  <div className="score">Score: {props.score}</div><div className="hiScore">Hi Score: {props.hiScore}</div></header>;
}

export default Header;
