import React from 'react';
import { Link } from 'react-router-dom';

function Header(){
    return(
        <div style={headStyle}>
            <header>
                <h1>Todo List</h1>
                <Link to="/">HOME</Link> | <Link to="/about">ABOUT</Link>
            </header>
        </div>
    )
}
const headStyle={
    background :"black",
    color:"white",
    padding: "10px",
    display:"flex",
    // textAlign:"center",
    alignItems:"center",
    justifyContent:"center"
    // justifyContent:"center"
}
export default Header;