const StoredGifCard = ({
  title,
  still,
  animated,
  active,
  handleSetActive,
  handleDeleteGif
}) => {
  return (
    <div className="card">
      <img
        src={active}
        className="card-img-top"
        alt={title} />
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        {
          active === still ? (
            <button
              className="btn btn-success"
              onClick={() => handleSetActive(active, animated)} >
              Play
            </button>
          ) : (
            <button
              className="btn btn-secondary"
              onClick={() => handleSetActive(active, still)} >
              Pause
            </button>
          )
        }
        <button
          className="btn btn-danger"
          onClick={() => handleDeleteGif(still)} >
          Delete
        </button>
      </div>
    </div>
  )
}

export default StoredGifCard
