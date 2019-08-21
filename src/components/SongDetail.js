import React from 'react';
import {connect} from 'react-redux';

const SongDetail = (props) => {
    if(!props.song) {
        return <div>Please select song</div>;
    }

    return(
        <div>
            <h4>Songdetails</h4>
            <div>
                <p>Title: {props.song.title}</p>
                <p>Duration: {props.song.duration}</p>
            </div>
        </div>
    );
}

const mapStateToProps = (state) => {
    return {song : state.selectedSong};
}

export default connect(mapStateToProps)(SongDetail);