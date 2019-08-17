import React,{useState} from "react";
import "./App.css";

import Head from "./components/Head";
import Input from "./components/Input";
import Card from './components/Card'

const App = () => {
  const [response,setresponse] = useState([]);

  const handelInputClick = text => {
    console.log(text);
    const query = text.split(',');
    console.log(query)
    const URL = `https://recipe-puppy.p.rapidapi.com/?i=${query}&q=omelet`;
    console.log(URL)
    fetch(URL, {
      method: "GET",
      headers:{
        "x-rapidapi-host": "recipe-puppy.p.rapidapi.com",
      	"x-rapidapi-key": "55816bf15emshbef5892f101cc0cp1f2484jsnd49b93aef792"
      }
    })
      .then(res => res.json())
      .then(data => {
        console.log(data.results);
        setresponse(data.results);
        console.log('Response',response)
        
      })
      .catch(err => console.log(err));
      

  };
 

  return (
    <div className="App">
      <Head />
      <Input onButtonClick={handelInputClick} />

     {
       response.map(item=>(
         <Card
           key={item.href}
           href = {item.href}
           ingredients = {item.ingredients}
           thumbnail = {item.thumbnail}
           title = {item.title}
         />
       ))
     }
      
    </div>
  );
}

export default App;
