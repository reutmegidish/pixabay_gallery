function generateImgCardUI(image) {
  return `
            <div class="card">
                <img src="${image.webformatURL}" alt="${image.tags}" class="card-image" data-id="${image.id}">
                <div class="card-content">
    
                </div>
            </div>
        `
}

export default generateImgCardUI
