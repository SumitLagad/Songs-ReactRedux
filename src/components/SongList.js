import React from 'react';
import {connect} from 'react-redux';

class SongList extends React.Component {
    render() {
        return (
            <div>
                SongsList
            </div>
        );
    }
}

export default connect()(SongList);