function Mixtape(props) {
    return(
        <>
        <li className="songTitle">{props.trackName}</li>
        <li className="artist">{props.artistName}</li>
        console.log(props)
        </>
    )
}

export default Mixtape;