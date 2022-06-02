const PLUS_ICON =
  "<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 52 52' style='enable-background:new 0 0 52 52' xml:space='preserve'><path d='M26 0C11.664 0 0 11.663 0 26s11.664 26 26 26 26-11.663 26-26S40.336 0 26 0zm0 50C12.767 50 2 39.233 2 26S12.767 2 26 2s24 10.767 24 24-10.767 24-24 24z'/><path d='M38.5 25H27V14a1 1 0 1 0-2 0v11H13.5a1 1 0 1 0 0 2H25v12a1 1 0 1 0 2 0V27h11.5a1 1 0 1 0 0-2z'/></svg>";
const MINUS_ICON =
  "<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 52 52' style='enable-background:new 0 0 52 52' xml:space='preserve'><path d='M26 0C11.664 0 0 11.663 0 26s11.664 26 26 26 26-11.663 26-26S40.336 0 26 0zm0 50C12.767 50 2 39.233 2 26S12.767 2 26 2s24 10.767 24 24-10.767 24-24 24z'/><path d='M39 25H13a1 1 0 1 0 0 2h26a1 1 0 1 0 0-2z'/></svg>";

class FaqList {
  _list;

  constructor() {
    this._list = document.querySelector(".faq-list");
    if (!this._list) return;
    this._setListeners();
  }

  _setListeners() {
    const questions = Array.from(
      this._list.querySelectorAll(".faq-dropdown__q")
    );
    questions.forEach((question) =>
      question.addEventListener("click", this._toggleAnswer.bind(this))
    );
  }

  _toggleAnswer(e) {
    const question = e.currentTarget;
    const icon = question.querySelector(".faq-dropdown__icon");
    const answer = question.nextElementSibling;
    const isActiveAnswer =
      answer.style.maxHeight && answer.style.maxHeight !== "0px";
    const answerHeight = answer.scrollHeight;
    answer.style.maxHeight = isActiveAnswer ? "0px" : `${answerHeight}px`;
    icon.innerHTML = isActiveAnswer ? PLUS_ICON : MINUS_ICON;
  }
}

export default FaqList;
