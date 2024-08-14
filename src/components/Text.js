import React, { useState } from 'react';


export default function Text({ name = 'default name', heading = 'default heading',mode,showAlert,mode1,mode2}) {
  // const [text, setText] = useState("Enter Text Here");

  const handleupClick = () => {
    let newtext = text.toUpperCase();
    setText(newtext);
  }
  const handleLowerCase = () => {
    let newtext = text.toLowerCase();
    setText(newtext);
  }
  const handleChange = (event) => {
    setText(event.target.value);
  }
  const cleartext = () => {
    let newtext = '';
    setText(newtext);
  }
  const capitalizetext = () => {
    setText(text.replace(/\b\w/g, char => char.toUpperCase()));
  }
  // const handleHeadingForm = () => {
  //   setText(text.replace(/\b\w/g, char => char.toUpperCase()).replace(/\s+/g, '-'));
  // };
  const handleSentenceCase = () => {
    setText(text.toLowerCase().replace(/(^\s*\w|[.!?]\s*\w)/g, char => char.toUpperCase()));
    // showAlert('Text is copied','success');
  };
  const handleTitleCase = () => {
    setText(text.replace(/\w\S*/g, char => char.charAt(0).toUpperCase() + char.slice(1).toLowerCase()));
  };
  const handleCopy = () => {
    navigator.clipboard.writeText(text);
    showAlert('Text copied to clipboard','success');
  };

  const [text, setText] = useState("");
  return (
    <>
      <div className='container'>
        <h1 className={`mt-5 text-${mode === 'dark'?'light':mode1==='blue'? 'white':mode2==='green'?'white':'black'}` }> {heading}</h1>
        <div className="mb-3">
          <textarea className={`form-control text-${mode === 'dark'?'white':mode1==='blue'? 'white':mode2==='green'?'white':'black'} `} value={text} placeholder='Enter text here......' onChange={handleChange} style={{ backgroundColor: mode === 'dark' ? '#758694':mode1==='blue'?'#667BC6':mode2==='green'?'#508D4E':'white'}} id="mybox" rows="8"></textarea>
        </div>
        <button  className="btn btn-success mx-2" onClick={handleupClick}>{name = "To Upper Case"}</button>
        <button  className="btn btn-success my-2 mx-2" onClick={handleLowerCase}>{name = "To Lower Case"}</button>
        {/* <button className="btn btn-success my-2 mx-2" onClick={handleHeadingForm}>{name = "Heading Form"}</button> */}
        <button  className="btn btn-success my-2 mx-2" onClick={handleSentenceCase}>{name = "Sentence Form"}</button>
        <button className="btn btn-success my-2 mx-2" onClick={handleTitleCase}>{name = "Title Case"}</button>
        <button  className='btn btn-success my-2 mx-2' onClick={capitalizetext}>{name = "Capitalize Text"}</button>
        <button  className='btn btn-success my-2 mx-2'  onClick={handleCopy}>{name = "Copy Text"}</button>
        <button  className='btn btn-success my-2 mx-2' onClick={cleartext}>{name = "Clear"}</button>
      </div>

      <div className={`container text-${mode === 'dark'?'light':mode1==='blue'? 'white':mode2==='green'?'white':'black'}`}>
        <h2>Your text Summary</h2>
        <p><b>{  text.split(/\s+/).filter((element)=>{return element.length!==0}).length }</b> words and <b>{text.replace(/\s/g, '').length}</b> characters</p>
        <p>Read time(in minutes): <b>{0.008 * text.split(" ").length}</b></p>
        <p>Read time(in seconds): <b>{0.48 * text.split(" ").length}</b> </p>
        <h2>Preview</h2>
        <p>{text.length>0?text:"There is nothing to preview......."} </p>
        
      </div>
  

    </>
  )
}

