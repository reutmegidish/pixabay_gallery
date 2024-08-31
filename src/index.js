import handleSubmit from './handlers/handleSubmit.js'
import createTags from './components/createTags/createTags.js'

const searchForm = document.getElementById('search-form')

searchForm.addEventListener('submit', handleSubmit)

document.addEventListener('DOMContentLoaded', () => {
  const tagSelect = document.querySelector('.tag-select')
  createTags(tagSelect)
})
