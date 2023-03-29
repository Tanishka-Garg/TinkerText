import React, {useState}  from 'react'

export default function TextForm(props) {
  const handleUpOnClick = () => {
    setText(text.toUpperCase())
  }
  const handleLowOnClick = () => {
    setText(text.toLowerCase())
  }
  const clearOnClick = () => {
    setText("")
  }
  const copyOnClick = () => {
    let copyText = text;
    navigator.clipboard.writeText(copyText);
    alert("Copied to clipboard")
    
  }
  
  const handleExtraSpaces = () => {
    let copyText = text.split(/[ ]+/)
    setText(copyText.join(" "))
  }
  const handleOnChange = (event) => {
    setText(event.target.value)
  }
  const wordCount = (str) => {
    if (str === '') {
      return 0;
    }
    else {
      return str.trim().split(/\s+/).length;
    }
  }
  const [text, setText] = useState("");

  return (
    <>
    
      <div className="container" style={{color: props.mode==='light'?'black':'white'}}>
        <h1>{props.heading}</h1>
        <div className="mb-3">
          <textarea className="form-control" value={text} onChange={handleOnChange} id="Textarea"
            rows="7" style={{backgroundColor: props.mode==='light'?'white':'#121212', color: props.mode==='light'?'black':'white' }}></textarea>
      </div>
        <button className="btn btn-primary mx-2 my-1" onClick={handleUpOnClick}>to uppercase</button>
        <button className="btn btn-primary mx-2 my-1" onClick={handleLowOnClick}>to lowercase</button>
        <button className="btn btn-primary mx-2 my-1" onClick={handleExtraSpaces}>remove extra spaces</button>
        <div>
          <button className="btn btn-primary mx-2 my-2" onClick={clearOnClick}>clear</button>
          <button disabled={text.length===0} className="btn btn-primary mx-2 my-2" onClick={copyOnClick}>copy</button>
        </div>
      </div>
      <div className="container my-2 mx-1" style={{color: props.mode==='light'?'black':'white'}}>
        <h2>Text Summary</h2>
        <p>{wordCount(text)} words  {text.length} characters</p>
        <p> read time: { Math.round(0.006*text.split(" ").length)} minutes</p>
      </div>
    </>
  )
}
