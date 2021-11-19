import './App.css';

function App() {
  return (
    <div className="App">
      <header>
        <h1>Record + Play</h1>
      </header>

      <main>
        <section class="howTo">
          <p>Need workout motivation? Cooking music? Something to play on a boombox outside your crush’s window in the middle of the night? We’ve got you covered.  
          <span>Search any artist or genre and we’ll provide 10 songs to turn into your very own mixtape:</span>
          </p>
          <form action="submit">
            <label for="username">Search Here:</label>
            <input type="text" name="search" id="search"/>
            <button>Search</button>
          </form>
        </section>

        <section className="resultPage">
          <h2>Your (artist/genre) Mixtape:</h2>
        </section>
      </main>
      <footer>
        <p>Created at <a href="https://junocollege.com/">Juno College of Technology</a></p>
      </footer>
    </div>
  );
}

export default App;
