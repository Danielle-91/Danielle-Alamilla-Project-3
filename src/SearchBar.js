function SearchBar(props){
    return(
        <div>
            <form action="submit" onSubmit={props.searchMusician} {...props.tapeSongs}>
                <label htmlFor="tuneSearch">Search Here:</label>
                <input type="text" name="search" id="search" value={props.term} onChange={props.updateTerm} />
                <div className="inputBtns">
                    <button>Search</button>
                    <button class="clearBtn" onClick={props.reset}>Clear</button>
                </div>
            </form>
            
        </div>
    )}
export default SearchBar;