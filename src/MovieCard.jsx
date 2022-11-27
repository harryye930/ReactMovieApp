import React, {useEffect, useState} from "react";

const API_URL = "http://www.omdbapi.com/?apikey=c2e77c02";
const BASE_IMDB_MOVIE = "https://www.imdb.com/title/"

const MovieCard = ({ movie }) => {
    const [plot, setPlot] = useState('');
    const [actors, setActors] = useState('');
    const [rating, setRating] = useState('');
    useEffect(()=>{async function searchPlot (imdbID){

            const response = await fetch(`${API_URL}&i=${imdbID}`);
            const data = await response.json();
            setPlot(data.Plot)
    }searchPlot(movie.imdbID);
    }, []);

    useEffect(()=>{async function searchRating (imdbID){

        const response = await fetch(`${API_URL}&i=${imdbID}`);
        const data = await response.json();
        setRating(data.imdbRating)
    }searchRating(movie.imdbID);
    }, []);

    useEffect(()=>{async function searchActors (imdbID){

        const response = await fetch(`${API_URL}&i=${imdbID}`);
        const data = await response.json();
        setActors(data.Actors)
    }searchActors(movie.imdbID);
    }, []);

    return(
        <div className="movie">
            <div className="plot">
                <h3>Actors</h3>
                <p>{actors}</p>
                <br></br>
                <h3>Summary:</h3>
                <p>{plot}</p>
            </div>
            <div>
                <a href={BASE_IMDB_MOVIE + movie.imdbID} target="_blank" rel="noreferrer noopener">
                <img src={movie.Poster !== 'N/A' ? movie.Poster : "./logo192.png"} alt={movie.Title}/>
                </a>

            </div>
            <div>
                <span>{movie.Year}, {movie.Type}, {rating}/10</span>
                <h3>{movie.Title}</h3>
            </div>
        </div>
    )

}



export default MovieCard;
