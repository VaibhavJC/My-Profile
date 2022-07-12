import logo from './logo.svg';
import './App.css';
import React from 'react';
import "./style.css"
import Topbar from "./topbar"
import Content from './content';

class App extends React.Component{

  changeState= () =>{
    
  }

  render(){
    return(
      <div >
        <Topbar/>
        <Content/>
      </div>
    )
  }
}

export default App;
