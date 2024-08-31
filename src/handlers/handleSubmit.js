import {
  initPageState,
  updateCurrentQueryState,
  updateSelectedTagState,
} from '../state.js'
import { handleSearch } from './searchHandlers.js'

function handleSubmit(e) {
  e.preventDefault()

  const searchInput = document.getElementById('search-input')
  const tagSelect = document.querySelector('.tag-select')

  let selectedTag = tagSelect.value
  let query = searchInput.value.trim()

  if (query || selectedTag) {
    updateCurrentQueryState(query)
    updateSelectedTagState(selectedTag)

    initPageState()
    handleSearch()

    searchInput.value = ''
    tagSelect.value = ''
  }
}

export default handleSubmit
