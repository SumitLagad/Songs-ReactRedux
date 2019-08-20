// Action creator
export const selectSong = (song) => {
    // return simple js object that contain action and payload (optional)
    return {
        type: 'SONG_SELECTED',
        payload: song
    }
};