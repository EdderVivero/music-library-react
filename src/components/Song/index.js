import React from "react";
import "./Song.css";

const Song = (props) => {
    return (
        <div className="song">
            <img src={props.image} alt={props.title} className="album-cover" />
            <div className="song-content">
                <h2>{props.title}</h2>
                <p className="song-artist">🎤 {props.artist}</p>
                <p className="song-duration">⏱ {props.duration}</p>
            </div>
            <button className="play-btn">▶</button>
        </div>
    );
}

export default Song;