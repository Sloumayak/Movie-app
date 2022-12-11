import MovieCard from "./components/MovieCard";
import Header from "./components/Header";
import { useState } from "react";
import { films } from "./Data";
//import ProductionSilder from "./components/ProductionSilder";
function App() {
  const [movies, setMovies] = useState(films);
  const [search, setSearch] = useState("");
  const [rate, setRate] = useState(0);
  const searchForFIlm = (l) => {
    setSearch(l);
  };
  const addFilm = (a) => {
    let newFilms = [...movies, a];
    setMovies(newFilms);
    console.log(movies);
  };
  return (
    <div className="container">
      <Header
        searchForFIlm={searchForFIlm}
        setRate={setRate}
        addFilm={addFilm}
      />
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          flexWrap: "wrap",
          justifyContent: "space-around",
          margin: "auto",
        }}
      >
        {movies.filter((elt) =>
          elt.title.toUpperCase().includes(search.toUpperCase())
        && elt.rate>=rate)
        .map((elt)=>(
        <MovieCard key={elt.id} movies={elt} />
        ))}
      </div>
    </div>
  );
}

export default App;
