class PhotographerCard {
  constructor(photographer) {
    this._photographer = photographer;
  }

  createPhotographerCard() {
    const article = document.createElement("article");

    const photographerCard = `
      <div class="photographer-portrait">
        <img 
          alt="${this._photographer.name}"
          src="${this._photographer.portrait}"/>
      </div>
      <h2>${this._photographer.name}</h2>
      <div>
        <p class="location">${
          this._photographer.city + ", " + this._photographer.country
        }</p>
        <p class="tagline">${this._photographer.tagline}</p>
        <p class="price">${this._photographer.price}€/jour</p>      
      </div>      
      `;
    article.innerHTML = photographerCard;
    return article;
  }
}