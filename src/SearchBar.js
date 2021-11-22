import App from "./App.js";

function Searchbar(props){
    return(
        <div>
            <form action="submit">
                <label htmlFor="tuneSearch">Search Here:</label>
                <input type="text" name="search" id="search" value={props.term}/>
                <button>Search</button>
            </form>
        </div>
    )
}

export default 'SearchBar';