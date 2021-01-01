import React from 'react';


const Recipe = ({title, calories, image, ingredients}) => {

    return (
        <div className="recipe" >
            <h1>{title}</h1>
            <img className="image" src={image} alt="" />
            <ul>
                {ingredients.map(ingredient => (
                    <li>{ingredient.text} </li>
                ))}
            </ul>

            <style jsx>{`
            .li {
                font-size: 17px
            }
            .recipe{
                font-size: 18px;
                border-radius: 15px;
                box-shadow: 0px 5px 8px rgb(37, 37, 37);
                margin: 20px;
                display: flex;
                flex-direction: column;
                justify-content: space-around;
                background: whitesmoke;
                align-items: center;
                min-width: 40%;
            }
            
            .image{
                border-radius: 45px;
                width: 400px;
                height: 400px;
            }
            `} </style>
        </div>
    )
}

export default Recipe;