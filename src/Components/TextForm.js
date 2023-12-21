import React ,{useState} from 'react'

export default function TextForm(props) {


    const SetUppercase=() =>{

        let newtext=text.toUpperCase();
        setText(newtext);
    }
    const handleonchnage=(event) =>{

        setText(event.target.value);
    }
    const [text,setText]=useState ("Enter Youir Text");
  return (
    <div>
        <h1 style={{color:props.mode==='dark' ?'red':'green'}}>{props.heading}</h1>
        <div className="mb-3">
  
                <textarea className="form-control" value={text} onChange={handleonchnage} id="txtName" rows="8"></textarea>
        </div>
        <button className="btn btn-primary" onClick={SetUppercase}>Upper</button>
    </div>
  )
}
