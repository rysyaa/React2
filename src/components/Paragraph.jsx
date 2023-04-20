import React, { useState } from 'react'

const Paragraph = (props) => {
    const [text, setText] = useState("")
    const textValue = (e) => {
        setText(e.target.value)
    } 
    const createInput = () => {
        if(!text){
            alert("Заполните поле!")
            return;
        }
        const newInput = {
            paragraph: text,
            id: Date.now()
        }
        props.inputText(newInput)
        setText("")
    }
  return (
    <div>
        <input type="text" value={text} onChange={textValue}/>
        <button onClick={() => createInput()}>Готово</button>
        <div>{props.text.map((elem) => (
            <h3 key={elem.id}>{elem.paragraph}</h3>
        ))}</div>
    </div>
  )
}

export default Paragraph