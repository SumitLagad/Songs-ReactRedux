import { combineReducers } from 'redux'

const songsReducer = () => {
    return [
        {title: 'Everybody' , duration: '4:05'},
        {title: 'Rock it' , duration: '3:30'},
        {title: 'She wolf' , duration: '3:00'},
        {title: 'Dangerous' , duration: '4:30'},
        {title: 'Hips dont lie' , duration: '5:30'}
    ];
};

const selectedSongReducer = (selectedSong = null, action) => {
    if (action.type === 'SONG_SELECTED') {
        return action.payload;
    }

    return selectedSong;
}

export default combineReducers({
    songs: songsReducer,
    selectedSong: selectedSongReducer
});