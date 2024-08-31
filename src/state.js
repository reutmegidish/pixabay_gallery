export const state = {
  currentPage: 0,
  currentQuery: '',
}

export function initPageState() {
  state.currentPage = 1
}

export function incrementPageState() {
  state.currentPage += 1
}

export function updateCurrentQueryState(query) {
  state.currentQuery = query
}

export function getPageState() {
  return state.currentPage
}

export function getCurrentQuery() {
  return state.currentQuery
}
