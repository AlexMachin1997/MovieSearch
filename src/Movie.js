import React from 'react'

const Movie = (props) => {
    return (
      <React.Fragment>
          <table>
              <tbody>
                  <td>
                      <img src={props.movie.poster_path} alt={props.movie.original_title} />
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

export default MovieRow