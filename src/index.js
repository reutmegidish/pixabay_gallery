import { handleSearch } from './handlers/searchHandlers.js'

const searchForm = document.getElementById('search-form')

searchForm.addEventListener('submit', handleSearch)
