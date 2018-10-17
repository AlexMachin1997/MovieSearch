import React, { Component } from 'react';
import Header from "./components/UI/Header";
import Movies from "./components/Movies/Movies";

class App extends Component {

  constructor(props) {
    super(props)
    this.state = {
        movies : [],
      }
  }

  performSearch (searchTerm) {
  
    console.log("Perform search using moviedb")

    fetch(`https://api.themoviedb.org/3/search/movie?api_key=1b5adf76a72a13bad99b8fc0c68cb085&query=${searchTerm}`)
    
      //Return JSON Data
      .then(response => {
        return response.json();
      })
      
      //Log the response and set the state to the response which is an array of objects 
      .then(response => {
          console.log(response);      
          this.setState({movies: response.results});
          console.log(this.state.movies);
      })

      
      .catch(error => {
          console.log("Something went wrong. Woops.")
          console.error(error);
      });
  }

  searchChangeHandler(event) {
    this.performSearch(event.target.value);
  }

  render() {
    return (

      <React.Fragment>

        <Header />

        <input style={{
          fontSize: 24,
          display: 'block',
          width: "97.7%",
          paddingTop: 8,
          paddingBottom: 8,
          paddingLeft: 16
        }} onChange={this.searchChangeHandler.bind(this)} placeholder="Search for your favourite movie "/>


        <Movies movies={this.state.movies}/>


      </React.Fragment>
    );
  }
}

export default App;
