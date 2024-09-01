import handleSubmit from './handlers/handleSubmit.js'
import createTags from './components/createTags/createTags.js'
import handleFavoriteBtn from './handlers/handleFavoriteBtn.js'

const initializeApp = () => {
  const searchForm = document.getElementById('search-form')
  const favoritesButton = document.getElementById('favorites-button')
  const tagSelect = document.querySelector('.tag-select')

  searchForm.addEventListener('submit', handleSubmit)
  favoritesButton.addEventListener('click', handleFavoriteBtn)

  createTags(tagSelect)
}

document.addEventListener('DOMContentLoaded', initializeApp)
