import React from 'react';

const NavBar = () => {
    return (
        <div className="NavBar" >
            <h1 className="title1" >Fast</h1>
            <h1 className="title2" >Recipes</h1>
            <style jsx>{
        `@import url('https://fonts.googleapis.com/css2?family=Fredoka+One&display=swap');

        .NavBar {
            box-shadow: 0px 2px 5px rgb(37, 37, 37);
            list-style-type: none;
            margin: 0;
            padding: 10px 15px;
            width: 100%;
            background-image: linear-gradient(109.6deg, rgba(44, 83, 131, 1) 18.9%, rgba(95, 175, 201, 1) 91.1%);
            display: inline-flex;
            text-shadow: 0px 0px 5px black;
        }
        
        .title1 {
            color: rgb(0, 158, 145);
            font-family: 'Fredoka One', cursive;
            margin: 0;
            padding: 0 10px;
        }
        
        .title2 {
            color: rgb(0, 158, 145);
            font-family: 'Fredoka One', cursive;
            margin: 0;
            padding: 0;
        }
        
    
    `} </style>
        </div>
    )
}

export default NavBar;