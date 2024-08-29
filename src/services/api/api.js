import { API_KEY, BASE_URL } from '../../config/config.js'

const fetchImages = async function (query) {
  const url = `${BASE_URL}?key=${API_KEY}&q=${encodeURIComponent(
    query
  )}&image_type=photo&pretty=true`

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

    console.log(images)

    return images
  } catch (err) {
    console.error('Error fetching images:', err)
    throw err
  }
}
export { fetchImages }
