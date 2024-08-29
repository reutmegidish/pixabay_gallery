function generateImgCardUI(image) {
  return `
            <div class="card">
                <img src="${image.webformatURL}" alt="${image.tags}" class="card-image">
                <div class="card-content">
    
                </div>
            </div>
        `
}

export default generateImgCardUI
