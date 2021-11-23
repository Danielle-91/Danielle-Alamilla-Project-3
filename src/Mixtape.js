function Mixtape({tracks}) {
    return(
        <section className="resultPage">
            {tracks.length === 0 ? (
                <h2>Sorry we couldn't find that artist! Please try again</h2>
            ) : (
                <>
                    <h2>Your Mixtape:</h2>
                    <div className="results">
                        <div className="trackContainer">
                            <ul>
                        {tracks.map((track) => {
                            return(
                                <li key={track.trackId}>{track.trackTitle}{track.artistName}</li>
                                );
                            })}
                            </ul>
                            </div>
                    </div>
                </>
            )}
            
        </section>
    );
}

export default Mixtape;