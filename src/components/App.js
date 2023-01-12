import React from 'react'
import '../styles/App.css';

class App extends React.Component {
  constructor(props){
  super(props);
      this.handleClick = this.handleClick.bind(this);
    
  }
  handleClick(){
      let a =document.getElementById("age").innerHTML;
      document.getElementById("age").innerHTML+1;
  }
  render (){
  return {
    <div>
       Hello my name is <h1> {this.props.name}</h1> and I am <span id="age"> {this.props.age} </span> years old and my enrollment no is <p>{this.props.enrollmentNo} </p>
         <button onclick={this.handleClick}>Increase Age</button>
    </div>
  }
  }
  
}


export default App;
