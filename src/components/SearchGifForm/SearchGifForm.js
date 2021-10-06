const SearchGifForm = () => {
  return (
    <form>
      <div className="mb-3">
        <label htmlFor="query" className="form-label">Query</label>
        <input
          type="text"
          className="form-control"
          name='query' />
      </div>
      <button
        type="submit"
        className="btn btn-primary"
      >
        Search for a Gif
      </button>
    </form>
  )
}

export default SearchGifForm
