import React from 'react';
import Song from '../Song';
import './Library.css';

const Library = (props) => {
    // Recibimos la biblioteca como props desde App.js
    const { songs } = props;

    return (
        <div className="library">
            <h2>Mi Biblioteca ({songs.length})</h2>
            <div className="library-container">
                {songs.length === 0 ? (
                    <p className="empty-message">Tu biblioteca está vacía. Agrega canciones desde los resultados de búsqueda.</p>
                ) : (
                    songs.map((song) => (
                        <div key={song.id} className="song-item">
                            <Song
                                image={song.image}
                                title={song.title}
                                artist={song.artist}
                                duration={song.duration}
                            />
                        </div>
                    ))
                )}
            </div>
        </div>
    );
};

export default Library;
