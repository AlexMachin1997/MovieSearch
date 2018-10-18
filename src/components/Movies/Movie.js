import React from 'react'

const Movie = (props) => {


    let moviePoster = props.movie.poster_path; //Stores the movie props

    let image = `https://image.tmdb.org/t/p/w185/${moviePoster}`; //Image locarion

    //If the source doesnt contain a poster path then use the placeholder
    if(moviePoster === null||undefined) {
      image = "https://via.placeholder.com/185x270";
    }

    const cardRow = {
        marginBottom: '10px',
        marginTop: '10px'
    }

    const imageHeight = {
        height: '400px',
        border: '1px solid black',
        borderRadius: '10px'
    }
    
    return (
        <div className="col-3" style={cardRow}>
            <div className="card">
                <img className="width-100" src={image} style={imageHeight} alt={props.movie.original_title} data-toggle="tooltip" title={props.movie.original_title} />
            </div>
        </div>
    ) 
}

export default Movie;