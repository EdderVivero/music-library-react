import React, { Component } from "react";

class Song extends Component {
    render() {
        return (
            <div className="song">
                <img src={this.props.image} alt={this.props.title} className="album-cover" />
                <div className="song-content">
                    <h2>{this.props.title}</h2>
                    <p className="song-artist">🎤 {this.props.artist}</p>
                    <p className="song-duration">⏱ {this.props.duration}</p>
                </div>
                <button className="play-btn">▶</button>
            </div>
        );
    }
}

export default Song;