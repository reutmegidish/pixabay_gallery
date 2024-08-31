import { incrementPageState } from '../state.js'
import { handleSearch } from './searchHandlers.js'

async function handleMoreImages() {
  incrementPageState()
  await handleSearch()
}

export default handleMoreImages
