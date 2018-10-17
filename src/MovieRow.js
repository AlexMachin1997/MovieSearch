import React from 'react'

class MovieRow extends React.Component {
  viewMovie() {
    // console.log("Trying to view movie")
    // console.log(this.props.movie.title)
    const url = "https://www.themoviedb.org/movie/" + this.props.movie.id
    window.location.href = url
  }

  render() {


    let moviePoster = this.props.movie.poster_path; //Stores the movie props

    let image = `https://image.tmdb.org/t/p/w185/${moviePoster}`;

    if(moviePoster === null||undefined) {
      image = "https://via.placeholder.com/500x500";
    } 


    return <table key={this.props.movie.id}>
    <tbody>
      <tr>
        <td>
          <img alt="poster" width="120" src={image}/>
        </td>
        <td>
          <h3>{this.props.movie.title}</h3>
          <p>{this.props.movie.overview}</p>
          <input type="button" onClick={this.viewMovie.bind(this)} value="View"/>
        </td>
      </tr>
    </tbody>
  </table>
  }
}

export default MovieRow