function SearchBar(props){
    return(
        <div>
            <form action="submit" onSubmit={props.searchMusician} {...props.tapeSongs}>
                <label htmlFor="tuneSearch">Search Here:</label>
                <input type="text" name="search" id="search" value={props.term} onChange={props.updateTerm} />
                <button>Search</button>
            </form>
            
        </div>
    )}
export default SearchBar;