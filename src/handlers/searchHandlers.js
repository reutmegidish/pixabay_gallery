import createImageCard from '../components/createImageCard/createImageCard.js'
import { fetchImages } from '../services/api/api.js'

export async function handleSearch(e) {
  e.preventDefault()
  const searchInput = document.getElementById('search-input')

  const query = searchInput.value.trim()
  if (query) {
    try {
      const images = await fetchImages(query)
      createImageCard(images)
    } catch (error) {
      console.error('An error occurred:', error.message)
    }
  }
}
