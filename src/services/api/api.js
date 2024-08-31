import { API_KEY, BASE_URL } from '../../config/config.js'
import { getCurrentQuery, getPageState, getSelectedTag } from '../../state.js'

const fetchImages = async function (perPage = 20) {
  const query = getCurrentQuery()
  const currentPage = getPageState()
  const tag = getSelectedTag()

  const url = `${BASE_URL}?key=${API_KEY}&q=${encodeURIComponent(
    query
  )}&page=${currentPage}&per_page=${perPage}&image_type=photo&category=${tag}`

  try {
    const res = await fetch(url)

    if (!res.ok) {
      const errorText = await res.text()
      throw new Error(`Error fetching data: ${errorText}`)
    }

    const result = await res.json()

    if (!result.hits || result.hits.length === 0) {
      console.log('No images found.')
      return []
    }

    const images = result.hits.map(
      ({ id, tags, previewURL, webformatURL }) => ({
        id,
        tags,
        previewURL,
        webformatURL,
      })
    )

    return images
  } catch (err) {
    console.error('Error fetching images:', err)
    throw err
  }
}
export { fetchImages }
