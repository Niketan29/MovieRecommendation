import "../css/Fav.css";
import { useMovieContext } from "../contexts/MovieContext";
import Moviecard from "../Component/MovieCard";

function Favorite() {
  const { favorites } = useMovieContext();

  if (favorites) {
    return (
      <div className="favorites">
        <h2>Your Favorites</h2>
        <div className="favorites">
          <div className="movies-grid">
            {favorites.map((movie) => (
              <Moviecard movie={movie} key={movie.id} />
            ))}
          </div>
        </div>
      </div>
    );
  } else {
    return (
      <div className="fav-empty">
        <h2>No Favorite Movies yet</h2>
        <p>Add movies to Favorite.....</p>
      </div>
    );
  }
}

export default Favorite;
