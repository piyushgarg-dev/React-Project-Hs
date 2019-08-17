import React from 'react';

const Card = (props,{
    href,
    ingredients,
    thumbnail,
    title
}) => {
    
    const recipe = ingredients.split(',');
    return(
        <div className="cards">
        <div className="card">
            <img className="image" src={thumbnail}/>
            <p className="title">{title}</p>
            <ul className="ul">
                {
                    recipe.map(item=>(
                        <button
                        onClick={props.addNewItem(item)}
                        >
                        <li className="li">{item}</li>
                        </button>
                    ))
                }
            </ul>
            <a href={href} target="_blank"><button>Know More</button></a>
        </div>
        </div>
    )
}

export default Card;