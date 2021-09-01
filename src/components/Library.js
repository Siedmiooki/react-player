import LibrarySong from "./LibrarySong";

const Library = ({ songs, setCurrentSong, audioRef, isPlaying, setSongs, libraryStatus }) => {
    return (
        <div className={`library ${libraryStatus ? "active-library" : ""}`}>
            <h2>My music library</h2>
            <div className="library-songs">
                {songs.map(song => <LibrarySong setSongs={setSongs} isPlaying={isPlaying} audioRef={audioRef} key={song.id} id={song.id} song={song} setCurrentSong={setCurrentSong} songs={songs} />)}
            </div>
        </div>
    );
}

export default Library;