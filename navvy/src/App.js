import Form from './components/form';
import './App.css';
import { userName } from './components/wrapper';
import { useState } from 'react';
import NavBar from './components/navBar';

function App() {
  const [user, setUSer] = useState('')


  return (
    <div className="App">
      <userName.Provider value={{user, setUSer}}>
        <NavBar/>
        <Form/>
      </userName.Provider>
    </div>
  );
}

export default App;
