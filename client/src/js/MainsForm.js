import RsvpForm from "./RsvpForm";
import { getAvailableDishesFromFieldMap } from "./utils/field-menu-item-map";

class MainsForm extends RsvpForm {
  _getSubHeadingMarkup() {
    return `
    <h4>Mains</h4>
    <button class="rsvp-form-allergy-button">View allergy guide</button>
    ${this._getAllergyGuideMarkup()}
    `;
  }

  _getBodyMarkup() {
    const menu = this._getCurrentGuest().getMenu();
    const mains = getAvailableDishesFromFieldMap(menu, "main");
    let mainsMarkup = "";

    mains.forEach(({ name, heading, description }) => {
      mainsMarkup += `
        <div class="rsvp-form__checker rsvp-form__checker--menu">
          <input id="rsvp-main-${name}" type="radio" name="main" value="${name}" class="rsvp-form__radio" ${
        this._isMenuInputChecked("main", name) ? "checked" : ""
      }>
          <label for="rsvp-main-${name}">
            <span class="rsvp-label-heading">${heading}</span>
            <span class="rsvp-label-description">${description}</span>
          </label>
        </div>
    `;
    });

    return `
    <div class="form__separation-wrap">
      <div class="form__element">
        <div class="rsvp-form__checkers rsvp-form__checkers--vertical">
          ${mainsMarkup}
        </div>
      </div>
    </div>
    `;
  }

  _saveAnswers() {
    const main = Array.from(
      this._form.querySelectorAll("input[name='main']")
    ).find((input) => input.checked).value;

    const currentGuest = this._getCurrentGuest();
    currentGuest.setMain(main);
  }
}

export default MainsForm;
