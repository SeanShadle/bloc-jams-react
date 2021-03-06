import React, { Component } from 'react';
import albumData from './../data/albums';
import { Link } from 'react-router-dom';
import "./Library.css";

class Library extends Component {
  constructor(props) {
    super(props);
    this.state = { albums: albumData };
  }

  render() {
    return (
      <section className='library'>
        {
          this.state.albums.map((album, index) =>
            <Link to={`/album/${album.slug}`} key={index}>
              <img className="song-art" src={album.albumCover} alt={album.title} />
              <div className='song-info'>
                <button type="song-info" className="btn btn-dark">
                  <div>{album.title}</div>
                  <div>{album.artist}</div>
                  <div>{album.songs.length} songs</div>
                </button>
              </div>
            </Link>
          )
        }
      </section>
    );
  }
}

export default Library;
