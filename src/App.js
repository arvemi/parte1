import React from 'react';
import './App.css';
import Mensaje from './mensaje';



const App = () => {
  return (
    <div className="App">
      
     <Mensaje color='red' message ='Estamos trabajando'/>
     <Mensaje color='green' message ='muy perdidos'/>
     <Mensaje color='yellow' message ='pero muy perdidos'/>
     <h1>Hola Mundo</h1>
    </div>
  )
}

export default App;
