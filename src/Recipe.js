import React from 'react';
import style from './recipe.module.css';
import uuidv4 from 'uuid/v4';

const Recipe = ({ title, calories, image, ingredients }) => {
    return (
        <div key={uuidv4()} className={style.recipe}>
            <h1 key={uuidv4()}>{title}</h1>
            <p key={uuidv4()}>Calories: {calories}</p>
            <img className={style.image} src={image} alt="recipe_image" key={uuidv4()} />
            <ol key={uuidv4()}>
                {ingredients.map(ingredient => (
                    <li key={uuidv4()}>{ingredient.text}</li>
                ))}
            </ol>
        </div>
    );
}

export default Recipe;