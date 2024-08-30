import handleModal from '../../handlers/handleModal.js'
import generateImgCardUI from './generateImgCardUI.js'

function createImageCard(images) {
  const imagesContainer = document.querySelector('.cards-container')

  const imagesCards = images.map((image) => generateImgCardUI(image)).join('')

  imagesContainer.innerHTML = ''
  imagesContainer.insertAdjacentHTML('afterbegin', imagesCards)

  handleModal(images)
}
export default createImageCard
