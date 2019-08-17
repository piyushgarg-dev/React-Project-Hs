import React,{useState} from "react";
import { tsPropertySignature } from "@babel/types";

const Input = (props) => {
    const [text,setText] = useState('');
    

    const handelOnChange = (e) =>{
        setText(e.target.value);
    }
    const handelClick= () =>{
        props.onButtonClick(text);
    }

  return (
    <div className="input-div">
      
      <input className="input"
       value={text}
       onChange={handelOnChange}
       placeholder="Sepreate By Comma ,"
       type="text" />
      <button
      onClick={handelClick}
      className="button">Search</button>
      
    </div>
  );
};
export default Input;
