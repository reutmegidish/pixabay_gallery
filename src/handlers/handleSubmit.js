import { initPageState, updateCurrentQueryState } from '../state.js'
import { handleSearch } from './searchHandlers.js'

function handleSubmit(e) {
  e.preventDefault()

  const searchInput = document.getElementById('search-input')

  const query = searchInput.value.trim()
  if (query) {
    updateCurrentQueryState(query)
    initPageState()
    handleSearch()
  }
}

export default handleSubmit
