import MovieCard  from "../components/MovieCard";
import { useState } from "react";
import "../css/Home.css";
function Home(){
const [searchQuery, setSearchQuery] = useState("");

    const movies = [
        {id: 1, title: "Inception", year: 2010},
        {id: 2, title: "The Dark Knight", year: 2008},
        {id: 3, title: "Interstellar", year: 2014},
    ]
    const handleSearch = (e) => {
        e.preventDefault();
        alert(searchQuery); 
        setSearchQuery("");
    };

    return (
        <div className="home">   
            <form onSubmit={handleSearch} className="search-form">
                <input type="text" 
                placeholder="search for movies.." 
                className="search-input"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                />
                <button type="submit" className="search-btn">Search</button>
            </form>
            <div className="movies-grid">
                {movies.map((movie) => movie.title.toLowerCase().startsWith(searchQuery) && (
                    <MovieCard movie={movie} key={movie.id}/>))}
            </div>
        </div>
    )
}

export default Home;