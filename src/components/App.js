import React from 'react'
import '../styles/App.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "john Doe",
      age: 34,
      enrollmentNo: "12345678",
      // year: 1964
    };
    this.handleClick = this.handleClick.bind(this);

  }
  handleClick() {
    document.getElementById("age").innerHTML = parseInt(document.getElementById("age").innerHTML) + 1;

  }
  render() {
    return (
      <>
        <p>
          Hello my name is <h1> {this.state.name}</h1> and I am <span id="age"> {this.state.age} </span> years old and my enrollment no is {this.state.enrollmentNo} </p>
        <button onClick={this.handleClick}>Increase Age</button>
      </>
    );
  }

}


export default App;
