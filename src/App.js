import React, { Component } from "react";
import "./App.css";
import Header from "./components/Header";
import Song from "./components/Song";

class App extends Component {

  componentDidMount() {
    console.log("Music Library App loaded successfully");
  }

  render() {
    return (
      <div className="App">
        <Header />
        <div className="songs-container">
          <Song 
            image="https://images.genius.com/3b8e092b30e3d30acb3a79a09f79f88e.1000x1000x1.jpg"
            title="Bohemian Rhapsody" 
            artist="Queen" 
            duration="5:55" 
          />

          <Song 
            image="https://images.genius.com/5e411c6a50bcc22e6de1cf4fb56d1c42.1000x1000x1.jpg"
            title="Billie Jean" 
            artist="Michael Jackson" 
            duration="3:03" 
          />

          <Song 
            image="https://images.genius.com/c2e2a6bab17485e7e9a3e5f0c3e3e3e3.1000x1000x1.jpg"
            title="Stairway to Heaven" 
            artist="Led Zeppelin" 
            duration="8:02" 
          />
        </div>
      </div>
    );
  }
}

export default App;