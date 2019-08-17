import React from 'react';

const Card = ({
    href,
    ingredients,
    thumbnail,
    title
}) => {
  
   const recipe = ingredients.split(',');
 
    return(
        <div className="cards">
        <div className="card">
            <img className="image" src={thumbnail} alt="img"/>
            <p className="title">{title}</p>
            <ul className="ul">
                {
                    recipe.map(item=>(
                        <button
                       
                        >
                        <li className="li">{item}</li>
                        </button>
                    ))
                }
            </ul>
            <a href={href}><button>Know More</button></a>
        </div>
        </div>
    )
}

export default Card;