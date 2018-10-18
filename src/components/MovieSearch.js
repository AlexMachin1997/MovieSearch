import React, { Component } from 'react';
import Movies from "./Movies/Movies";

class MovieSearch extends Component {

  constructor(props) {
    super(props)
    this.state = {
        movies : [],
        type: 'movie'
      }
  }

  performSearch (searchTerm) {
  
    console.log("Perform search using moviedb")

    fetch(`https://api.themoviedb.org/3/search/${this.state.type}?api_key=1b5adf76a72a13bad99b8fc0c68cb085&query=${searchTerm}`, {        mode: "cors", // no-cors, cors, *same-origin
  })
    
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

  changeType(event) {
    this.setState({type: event.target.value})
  }

  render() {

    const inputFields = {
      padding: '15px'
    }

    const movieSearchWrapper = {
      paddingLeft: '0px',
      paddingRight: '0px'
    }


    return (

      <div className="container-fluid" style={movieSearchWrapper}>
      
        <div className="row">
          <div className="col-9">
            <input className="width-100" style={inputFields} onChange={e => this.searchChangeHandler(e)} placeholder="Search for your favourite movie "/>
          </div>
        
          <div className="col-3">       
            <select className="width-100" style={inputFields} onChange={e => this.changeType(e)}>
              <option value="movie">Movies</option>
              <option value="tv">TV</option>
            </select>
          </div>
        
        </div>
        <Movies movies={this.state.movies}/>

      </div>
    );
  }
}

export default MovieSearch;
