import handleModal from '../../handlers/handleModal.js'
import { getPageState, state } from '../../state.js'
import generateImgCardUI from './generateImgCardUI.js'
import handleMoreImages from '../../handlers/handleMoreImages.js'
function createImageCard(images) {
  const page = getPageState()
  const imagesContainer = document.querySelector('.cards-container')
  const moreImgBtn = document.querySelector('.more-img-btn')

  const imagesCards = images.map((image) => generateImgCardUI(image)).join('')

  if (page === 1) {
    imagesContainer.innerHTML = ''
    imagesContainer.insertAdjacentHTML('afterbegin', imagesCards)
  } else {
    imagesContainer.insertAdjacentHTML('beforeend', imagesCards)
  }

  moreImgBtn.classList.remove('hidden')
  moreImgBtn.addEventListener('click', handleMoreImages)

  handleModal(images)
}

export default createImageCard
