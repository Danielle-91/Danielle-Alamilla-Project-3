import './App.css';
import {useEffect, useState} from 'react';
import axios from 'axios';
import Mixtape from './Mixtape';
import SearchBar from './SearchBar';

function App() {
  const [tracks, setTracks] = useState([]);
  const [query, setQuery] = useState("");

  useEffect(() =>{
    getTape();
  }, [])

  const handleUpdateQuery = (event) => {
    setQuery(event.target.value);
  }

  const handleSearchMusician = (event) => {
    event.preventDefault();
    getTape(query)
  }
  
  const getTape = (artist, song) => {
    axios({
      url: `https://itunes.apple.com/search?`,
      method: "GET",
      dataResponse: "JSON",
      params: {
        term: artist,
        limit: 10,
        kind: "song",
        attribute: "allArtistTerm",
      }
    }).then(results => {
      console.log(results.data.results)
      setTracks(results.data.results)
    })
  }
  return (
    <div className="App">
      <header>
        <h1>Record + Play</h1>
      </header>

      <main>
        <section className="howTo">
          <p>Need workout motivation? Cooking music? Something to play on a boombox outside your crush’s window in the middle of the night? We’ve got you covered.  
          <span>Search any artist or genre and we’ll provide 10 songs to turn into your very own mixtape:</span>
          </p>
          <SearchBar
          term={query.toLowerCase()} 
          updateTerm={handleUpdateQuery} 
          searchMusician={handleSearchMusician}
          tapeSongs={tracks.trackTitle}
          /> 
        </section>

        <Mixtape tracks = {tracks}/>
      </main>

      <footer>
        <p>Created at <a href="https://junocollege.com/">Juno College of Technology</a></p>
      </footer>
    </div>
    )}

    export default App;