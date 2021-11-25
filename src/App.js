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

  // Function to return search results based on user's query; also stops page from refreshing when search is submitted
  const handleSearchMusician = (event) => {
    event.preventDefault();
    getTape(query)
  }

  
  // Updates results when a different artist is searched
  const handleUpdateQuery = (event) => {
    setQuery(event.target.value);
  }
  
  // Clears search input for a new search
  const newSearch = () => {
    setQuery("");
  }
  
  // Function to fetch API Data and return it in JSON form
  const getTape = (artist) => {
    axios({
      url: `https://itunes.apple.com/search?`,
      method: "GET",
      dataResponse: "JSON",
      params: {
        term: artist,
        limit: 10,
        attribute: "allArtistTerm"
      }
    }).then(results => {
      setTracks(results.data.results)
    })
  }

  // Main layout of app
  return (
    <div className="App">
      <header>
        <h1>Record + Play</h1>
      </header>

      <main>
        <section className="howTo">
          <p>Need workout motivation? Cooking music? Something to play on a boombox outside your crush’s window in the middle of the night? We’ve got you covered.  
          <span>Search any artist (using capitalization e.g. Britney Spears, ABBA) and we’ll provide 10 songs to turn into your very own mixtape:</span>
          </p>
          <SearchBar
          term={query} 
          updateTerm={handleUpdateQuery} 
          searchMusician={handleSearchMusician}
          tapeSongs={tracks.trackTitle}
          reset={newSearch}
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