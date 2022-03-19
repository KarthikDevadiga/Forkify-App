// import View from './view';
class RenderRecipes {
  //   _parent = document.querySelector('.results');
  //   _message = `Did not find results for your Data`;

  _generateMarkup(recipe) {
    return recipe
      .map((ele) => {
        return `
        <li class="preview">
        <a class="preview__link" href="#${ele.id}">
          <figure class="preview__fig">
            <img src="${ele.imageUrl}" alt="${ele.title}" />
          </figure>
          <div class="preview__data">
            <h4 class="preview__title">${ele.title}.</h4>
            <p class="preview__publisher">${ele.publisher}</p>
          </div>
        </a>
      </li>
        `;
      })
      .join('');
  }
}

export default new RenderRecipes();
