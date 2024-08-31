import createImageCard from '../components/createImageCard/createImageCard.js'
import { fetchImages } from '../services/api/api.js'

export async function handleSearch() {
  try {
    const images = await fetchImages()
    createImageCard(images)
  } catch (error) {
    console.error('An error occurred:', error.message)
  }
}
