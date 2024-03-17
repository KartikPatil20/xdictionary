import React,{useState} from 'react';
import './App.css';

const Dictionary = 
[

    { word: "React", meaning: "A JavaScript library for building user interfaces." },

    { word: "Component", meaning: "A reusable building block in React." },

    { word: "State", meaning: "An object that stores data for a component." }

]


function App() {

  const [Definition, setDefinition] = useState(null);
  const [InputText, setInputText] = useState("");

  const handleInput = (text) => {
    setInputText(text);
  }


  const SearchDefinition = () => {
    for(let i=0; i<Dictionary.length; i++){
      if(Dictionary[i].word.toLowerCase() === InputText.toLowerCase()){
        setDefinition(Dictionary[i].meaning);
        return;
      }
    }
    setDefinition("Word not found in the dictionary.");
  }


  return (
    <div className="App">
     <h1>Dictionary App</h1>
      <div>
        <input placeholder='Search for a word...' type='text' value={InputText} onChange={(e)=> handleInput(e.target.value)} />
        <button onClick={()=>SearchDefinition()} >Search</button>
      </div>
      <div>
      <h3>Definition:</h3>
      { Definition &&  <p>{Definition}</p>}
      </div>

    </div>
  );
}

export default App;
