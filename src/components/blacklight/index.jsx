import React from 'react';
import { useEffect,useState } from 'react';
import './index.css';

function App() {
  
  const[darkmode, setDarkmode] = useState(false); //
  const[escuro, setEscuro] = useState('Claro');
  
  return (
    <div className="App">
      <div className={darkmode ? 'App-bg': 'App-bg-white'}>
        
        <button className='btn' onClick={function teste(){

          setDarkmode(!darkmode);
          
          if(!darkmode){
            setEscuro('Escuro');
          }
          else 
          {
            setEscuro('Claro');
          }
        }}> {escuro}</button>
      </div>
    
    </div>
  );
}

export default App;