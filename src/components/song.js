import React, { Component } from 'react';

class Song extends Component {
    state = {
        hover: false
    }

    onHover(song) {
        this.setState({ hover: true });
    }

    onHoverLeave(song) {
        this.setState({ hover: false });
    }

    formatTime(time) {
        const minutes = Math.floor(time / 60);
        const seconds = parseInt(time % 60, 10);
        const str = isFinite(time) ? (String(minutes) + ":" + (seconds < 10 ? "0" : "") + String(seconds)) : "-:--";
        return str;
    }

    render() {
        return (
            <tr onMouseOver={e => this.onHover(e)} onMouseLeave={e => this.onHoverLeave(e)} onClick={() => this.props.handleSongClick(this.props.song)} >
                {this.state.hover ? (this.props.playing ? <td className="icon ion-md-pause" /> : <td className="icon ion-md-play-circle" />) : <td>{this.props.index + 1}</td>}
                <td>{this.props.song.title}</td>
                <td>{this.formatTime(this.props.song.duration)}</td>
            </tr>
        );
    }
}

export default Song;