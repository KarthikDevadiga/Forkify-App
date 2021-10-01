class SearchView {
  #parentEle = document.querySelector(".search");

  #clear() {
    this.#parentEle.querySelector(".search__field").value = "";
  }

  getQuery() {
    const value = this.#parentEle.querySelector(".search__field").value;
    this.#clear();
    return value;
  }

  searchEvent(handlerFunction) {
    this.#parentEle
      .querySelector(".search__btn")
      .addEventListener("click", handlerFunction);
  }
}

export default new SearchView();
