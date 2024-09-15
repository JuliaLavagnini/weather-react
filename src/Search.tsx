function Search() {
  return (
    <div>
      <form id="search-form" className="d-flex">
        <input
          type="search"
          placeholder="Type a city..."
          className="form-control me-2"
          id="search-text"
        />
      </form>
    </div>
  );
}

export default Search;
