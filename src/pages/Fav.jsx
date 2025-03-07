import "../css/Favourites.css"
import { useMovieContext } from "../contexts/MovieContext";
import MovieCard from "../components/MovieCard";

function Fav(){
    const { fav } = useMovieContext();

  if (fav) {
    return (
      <div className="favorites">
        <h2>Your Favorites</h2>
        <div className="movies-grid">
          {fav.map((movie) => (
            <MovieCard movie={movie} key={movie.id} />
          ))}
        </div>
      </div>
    );
  }



    return <div className="favorites-empty">
        <h2>No fav movie yet</h2>
        <p>Start adding movies and they will appear here</p>
    </div>
}

export default Fav;