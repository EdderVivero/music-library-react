import React from "react";
import Song from "../Song";
import "./SearchResults.css";

const SearchResults = (props) => {
  return (
    <div className="search-results">
      <h2>Resultados de búsqueda</h2>
      <div className="results-container">
        {props.songs.map((song) => (
          <div key={song.id} className="song-item">
            <Song
              image={song.image}
              title={song.title}
              artist={song.artist}
              duration={song.duration}
            />
            <button className="add-btn" onClick={() => props.onAddToLib(song)}>
              ➕ Agregar a mi biblioteca
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SearchResults;
