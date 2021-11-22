import './App.css';
import {useEffect, useState} from 'react';
import axios from 'axios';
import SearchBar from './SearchBar';
import Mixtape from './Mixtape';

function App() {
  const [tracks, setTracks] = useState([]);
  const [query, setQuery] = useState("");
  useEffect(() =>{
    axios({
      url: `https://itunes.apple.com/search?`,
      method: "GET",
      dataResponse: "JSON",
      params: {
        term: "",
        limit: 10,
        attribute: "allArtistTerm"
      },
    }).then(results=>{
      console.log(results.data.results);
      setTracks(results.data.results)
    }) 
  }, [])
  
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
          term={query} 
          />
          {/* <form action="submit">
            <label htmlFor="tuneSearch">Search Here:</label>
            <input type="text" name="search" id="search"/>
            <button>Search</button>
          </form> */}
        </section>


        <section className="resultPage">
          <h2>Your {tracks.artistName} Mixtape:</h2>
          <div className="results">
            <ul>
                {tracks.map((songs) =>{
                  return(

                    <Mixtape
                    artist={songs.artistName}
                    song={songs.trackTitle} 
                    />
                  )
                })}
            </ul>
          </div>
        </section>
      </main>

      {/* <footer>
        <p>Created at <a href="https://junocollege.com/">Juno College of Technology</a></p>
      </footer> */}
    </div>
    )}

    export default App;