import React, {useEffect, useState} from "react";
import './App.css';
import SearchIcon from "./search.svg";
import MovieCard from "./MovieCard";

const API_URL = "http://www.omdbapi.com/?apikey=c2e77c02";

const App=() => {
    const [movies, setMovies] = useState([]);
    const [searchTerm, setSearchTerm] = useState([]);
    const searchMovies = async(title)=>{
        if (title === ""){
            alert("Please enter a valid name!")
        }
        else{
            const response = await fetch(`${API_URL}&s=${title}`);
            const data = await response.json();
            setMovies(data.Search)
        }

    }
    const handleKeyPress = (event) => {
        if(event.key === 'Enter'){
            searchMovies(searchTerm);
        }
    }
    useEffect(() =>{
        searchMovies("Spider man");
    }, [])
    return (
        <div className="app">
            <h1>Movie Wiki</h1>
            <div className="search">
            <input placeholder="Search for movies..."
                   value={searchTerm}
                   onChange={(e) => setSearchTerm(e.target.value)}
                   onKeyDown={handleKeyPress}/>
                <img src={SearchIcon}
                     alt="Search"
                     onClick={() => searchMovies(searchTerm)}/>
            </div>

            {
                movies?.length > 0
                    ? (
                    <div className="container">
                        {movies.map((movie) => (
                            <MovieCard movie={movie} />
                        ))}
                    </div>
                    ):(
                        <div className="empty">
                            <h2>No movies found</h2>
                        </div>
                    )
            }
        </div>
    );
}
export default App;