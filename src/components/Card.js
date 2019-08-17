import React from 'react';

const Card = (props) => {
  
    const addNewItem = (item) =>{
       
    } 
   const { href,
    ingredients,
    thumbnail,
    title} = props;

    const recipe = ingredients.split(',')
 
    return(
        <div className="cards">
        <div className="card">
            <img className="image" src={thumbnail} alt="img"/>
            <p className="title">{title}</p>
            <ul className="ul">
                {
                    recipe.map(item=>(
                        <button
                       onClick={addNewItem(item)}
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