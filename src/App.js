import React, { Component } from 'react';
import MovieSearch from "./components/MovieSearch";
import Header from "./components/UI/Header";

class App extends Component {
  render() {
    return (
      <div className="container-fluid">
        <Header/>
        <MovieSearch/>
      </div>
    );
  }
}

export default App;
