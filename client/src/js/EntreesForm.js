import RsvpForm from "./RsvpForm";
import { getAvailableDishesFromFieldMap } from "./utils/field-menu-item-map";

class EntreesForm extends RsvpForm {
  _getSubHeadingMarkup() {
    return `
    <h4>Entrees</h4>
    <button class="rsvp-form-allergy-button">View allergy guide</button>
    `;
  }

  _getBodyMarkup() {
    const menu = this._getCurrentGuest().getMenu();
    const entrees = getAvailableDishesFromFieldMap(menu, "entree");
    let entreesMarkup = "";

    entrees.forEach(({ name, heading, description }) => {
      entreesMarkup += `
        <div class="rsvp-form__checker rsvp-form__checker--menu">
          <input id="rsvp-entree-${name}" type="radio" name="entree" value="${name}" class="rsvp-form__radio" ${
        this._isMenuInputChecked("entree", name) ? "checked" : ""
      }>
          <label for="rsvp-entree-${name}">
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
          ${entreesMarkup}
        </div>
      </div>
    </div>
    `;
  }

  _saveAnswers() {
    const entreeValue = Array.from(
      this._form.querySelectorAll("input[name='entree']")
    ).find((input) => input.checked).value;

    const currentGuest = this._getCurrentGuest();
    currentGuest.setEntree(entreeValue);
  }
}

export default EntreesForm;
