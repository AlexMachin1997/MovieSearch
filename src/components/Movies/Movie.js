import React from 'react'

const Movie = (props) => {


    let moviePoster = props.movie.poster_path; //Stores the movie props

    let image = `https://image.tmdb.org/t/p/w185/${moviePoster}`; //Image locarion

    //If the source doesnt contain a poster path then use the placeholder
    if(moviePoster === null||undefined) {
      image = "https://via.placeholder.com/185x250";
    }
    
    return (
      <React.Fragment>
          <table>
              <tbody>
                  <td>
                      <img src={image} alt={props.movie.original_title} />
                  </td>
                  <td>
                    <h3>{props.movie.title}</h3>
                    <p>{props.movie.overview}</p>  
                  </td>
              </tbody>
          </table>
      </React.Fragment>
    ) 
}

export default Movie;