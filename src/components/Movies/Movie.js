import React from 'react'

const Movie = (props) => {
    return (
      <React.Fragment>
          <table>
              <tbody>
                  <td>
                      <img src={props.poster_path} alt={props.original_title} />
                  </td>
                  <td>
                    <h3>{props.title}</h3>
                    <p>{props.overview}</p>  
                  </td>
              </tbody>
          </table>
      </React.Fragment>
    ) 
}

export default Movie;