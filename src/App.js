import React, { Component } from 'react';
import './App.css';
import MovieRow from './MovieRow.js'
import $ from 'jquery'

class App extends Component {

  constructor(props) {
    super(props)
    this.state = {
      movies : [],
    }
    this.performSearch("ant man")
  }

  performSearch(searchTerm) {
    console.log("Perform search using moviedb")

    fetch(`https://api.themoviedb.org/3/search/movie?api_key=1b5adf76a72a13bad99b8fc0c68cb085&query=${searchTerm}`)
      
      .then(function(response) {
        return response.json();
      })
      
      .then(response => {
        console.log("JSON Response ");
        console.log(response.results);        
      
        let movies = response.results.map((movie)=> {
          return (
            <table key={movie.id}>
              <tbody>
                <tr>
                  <td>
                    <img alt="poster" width="120" src={`https://image.tmdb.org/t/p/w185${movie.poster_path}`}/>
                  </td>
                  <td>
                    <h3>{movie.original_title}</h3>
                    <p>{movie.overview}</p>
                  </td>
                </tr>
              </tbody>
            </table>
          )
        })

        this.setState({movies: movies});
      })
      
      .catch(function(error) {
        console.log("Something went wrong. Woops.")
        console.error(error);
      });
  }

  searchChangeHandler(event) {
    console.log(event.target.value)
    const boundObject = this
    const searchTerm = event.target.value
    boundObject.performSearch(searchTerm)
  }

  render() {
    return (
      <div>
        
        <table className="titleBar">
          <tbody>
            <tr>
              <td>
                <img alt="app icon" width="50" src="green_app_icon.svg"/>
              </td>
              <td width="8"/>
              <td>
                <h1>MoviesDB Search</h1>
              </td>
            </tr>
          </tbody>
        </table>

        <input style={{
          fontSize: 24,
          display: 'block',
          width: "99%",
          paddingTop: 8,
          paddingBottom: 8,
          paddingLeft: 16
        }} onChange={this.searchChangeHandler.bind(this)} placeholder="Enter search term"/>

        {this.state.movies}


      </div>
    );
  }
}

export default App;
