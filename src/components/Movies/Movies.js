import React from 'react'
import Movie from "./Movie";

class Movies extends React.Component {
  render() {
    return (
      <React.Fragment>
        {this.props.movies
          ? this.props.movies.map((movie, index) => {
              return <Movie key={index} movie={movie} />;
            })
          : console.log("not yet")
        }
      </React.Fragment>
    ) 
  }
}

export default Movies;