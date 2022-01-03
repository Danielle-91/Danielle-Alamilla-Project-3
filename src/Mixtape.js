function Mixtape({tracks}) {
    return(
        <section className="resultPage">
            {tracks.length === 0 ? (
                <>
                <h2>Sorry we couldn't find that artist!</h2>
                </>
            ) : (
                <>
                    <h2>Your Mixtape:</h2>
                    <div className="results">
                        <div className="tapeStyles">
                            <div className="sideA">
                                <p>A</p>
                                <p>Date:</p>
                                <p>N.R [ ] Yes [ ] No</p>

                            </div>
                            <div className="sideB">
                                <p>B</p>
                                <p>Date:</p>
                                <p>N.R [ ] Yes [ ] No</p>
                            </div>
                            
                        </div>
                        <div className="trackContainer">
                            <ul>
                                {tracks.map((track) => {
                                    console.log(track)
                                return(
                                    <li key={track.trackId}>{track.trackName}<span>{track.artistName}</span></li>
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