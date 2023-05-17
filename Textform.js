
import React, {useState} from 'react';  



export default function Textform(props) {
      const [text, settext] = useState('enter your text');
   const handleupClick=()=>{
    const newText=text.toUpperCase();
    settext(newText);
     
    }
    const handleOnChange=(event)=>{
        settext(event.target.value);
        
      }
      const handleloClick=()=>{
        const newText=text.toLowerCase();
        settext(newText);
         
        }

    

  return (
   <>
   
    <div>

            <h3>{props.heading}</h3>
  
<div className="mb-3">


  
  <textarea className="form-control" id="exampleFormControlTextarea1" value={text} onChange={handleOnChange} rows="8"></textarea>
  
</div>
<button className="btn btn-primary mx-3" onClick={handleupClick}>convert to Uppercase</button>
<button className="btn btn-primary mx-3" onClick={handleloClick}>convert to Lowercase</button>

    </div>
    <div className='container my-3'>
        <h2>Your Text Summary</h2>
        <p>{text.split(" ").length} words and {text.length} characters</p>
        <p>{0.008*text.split(" ").length} Minutes</p>
        <h2>Preview</h2>
        <p>{text}</p>

    </div>
    </>
  )
}



