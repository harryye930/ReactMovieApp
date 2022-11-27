import React, {useEffect, useState} from "react";

const API_URL = "http://www.omdbapi.com/?apikey=c2e77c02";

const MovieCard = ({ movie }) => {
    const [plot, setPlot] = useState('');

    useEffect(()=>{async function searchPlot (imdbID){

            const response = await fetch(`${API_URL}&i=${imdbID}`);
            const data = await response.json();
            setPlot(data.Plot)
    }searchPlot(movie.imdbID);
    }, []);

    return(
        <div className="movie">
            <div className="plot">
                <h3>Summary:</h3>
                <p>{plot}</p>
            </div>
            <div>
                <img src={movie.Poster !== 'N/A' ? movie.Poster : "./logo192.png"} alt={movie.Title}/>
            </div>
            <div>
                <span>{movie.Year} {movie.Type} </span>
                <h3>{movie.Title}</h3>
            </div>
        </div>
    )



}



export default MovieCard;
