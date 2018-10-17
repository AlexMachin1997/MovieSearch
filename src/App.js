import React, { Component } from 'react';
import './App.css';
import MovieRow from './MovieRow.js'
import Header from "./UI/Header";

class App extends Component {

  constructor(props) {
    super(props)
    this.state = {
      movies : [],
    }
  }

  performSearch(searchTerm) {
    console.log("Perform search using moviedb")

    fetch(`https://api.themoviedb.org/3/search/movie?api_key=1b5adf76a72a13bad99b8fc0c68cb085&query=${searchTerm}`)
      
      .then(response => {
        return response.json();
      })
      
      .then(response => {

        let movies = response.results.map((movie)=> {
          return (       
          <MovieRow key={movie.id} movie={movie}/>
          )
        });

        console.log(movies)      

        this.setState({movies: movies});
      })
      
      .catch(error => {
        console.log("Something went wrong. Woops.")
        console.error(error);
      });
  }

  searchChangeHandler(event) {
    this.performSearch(event.target.value)
  }

  render() {
    return (
      <div>

        <Header />
 
        <input style={{
          fontSize: 24,
          display: 'block',
          width: "97.7%",
          paddingTop: 8,
          paddingBottom: 8,
          paddingLeft: 16
        }} onChange={this.searchChangeHandler.bind(this)} placeholder="Search for your favourite movie "/>

        {this.state.movies}

      </div>
    );
  }
}

export default App;
