import './App.css';
import React, { Component } from "react";

class App extends Component {

  state = {
    person: {
      fullName: 'Herrati Ayoub',
      bio: 'front and back-end developer',
      imgSrc: './glory/mypicture.png',
      profession: 'Web-Developer <3'
    },
    show: false,
    time: null
  }

  componentDidMount() {
    this.setState({ time: new Date() });
    this.interval = setInterval(() => {
      this.setState({ time: new Date() });
    }, 1000);
  }
  componentWillUnmount() {
    clearInterval(this.interval);
  }
  toggleShow = () => {
    this.setState(prevState => ({ show: !prevState.show }));
  }

  render() {
    const { person, show, time } = this.state;
    return (
      <div className='App'>
        <button onClick={this.toggleShow}>toggleShow</button>
        {show && (
          <div>
            <h1>{person.fullName}</h1>
            <p>{person.bio}</p>
            <img src={person.imgSrc} alt={person.fullName} style={{height:'300px', width:'200px'}} />
            <p>{person.profession}</p>
          </div>
        )}
        <p>Time since last mount: {time && time.toLocaleTimeString()}</p>
      </div>
    );
  }
}

export default App;
