import { useState } from 'react'
import AddGifForm from './components/AddGifForm'
import StoredGifCard from './components/StoredGifCard'
import SearchGifForm from './components/SearchGifForm'

const App = () => {
  const [gifState, setGifState] = useState({
    title: '',
    still: '',
    animated: '',
    storedGifs: []
  })

  const handleInputChange = ({ target }) => {
    setGifState({ ...gifState, [target.name]: target.value })
  }

  const handleAddGif = event => {
    event.preventDefault()
    const storedGifs = JSON.parse(JSON.stringify(gifState.storedGifs))
    storedGifs.push({
      title: gifState.title,
      still: gifState.still,
      animated: gifState.animated,
      active: gifState.still
    })
    setGifState({ ...gifState, storedGifs, title: '', still: '', animated: '' })
  }

  return (
    <div className="container">
      <div class="row bg-light p-5 rounded-lg mb-3">
        <h1 class="display-4">Gif Collector</h1>
        <p class="lead">This is a simple app to collect gifs you want to save and view at a later date. It also allows you to pause/play the gifs at your own discretion.</p>
        <hr class="my-4" />
        <SearchGifForm />
      </div>
      <div className="row">
        <div className="col-sm-6">
          <h3>Store A Gif</h3>
          <hr />
          <AddGifForm
            title={gifState.title}
            still={gifState.still}
            animated={gifState.animated}
            handleInputChange={handleInputChange}
            handleAddGif={handleAddGif} />
        </div>
        <div className="col-sm-6">
          <h3>View Stored Gifs</h3>
          <hr />
          {
            gifState.storedGifs.map(gif => <StoredGifCard />)
          }
        </div>
      </div>
    </div>
  )
}

export default App
