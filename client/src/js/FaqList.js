class FaqList {
  _list;

  constructor() {
    this._list = document.querySelector(".faq-list");
    if (!this._list) return;
  }
}

export default FaqList;
