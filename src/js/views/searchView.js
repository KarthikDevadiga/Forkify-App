class SearchView {
  _parent = document.querySelector('.search');
  _Field = this._parent.querySelector('.search__field');

  getQuery() {
    const data = this._Field.value;
    this._clearField(this._Field);
    return data;
  }
  _clearField(ele) {
    ele.value = '';
  }

  addHandlearSearch(func) {
    this._parent.addEventListener('submit', function (eve) {
      eve.preventDefault();
      // calling searchResults() function from controoler.js
      func();
    });
  }
}

export default new SearchView();
