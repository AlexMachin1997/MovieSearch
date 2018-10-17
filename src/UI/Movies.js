import React from 'react'
import Movie from "../UI/Movies";

class Movies extends React.Component {
  render() {

    return (
      <div>
        {this.props.movies.map((movie,index) => {
          return <Movie key={index} movie={movie}/>
        })}
      </div>
    ) 
  }
}

export default Movies;