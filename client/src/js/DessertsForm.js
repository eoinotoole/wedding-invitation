import RsvpForm from "./RsvpForm";
import { getAvailableDishesFromFieldMap } from "./utils/field-menu-item-map";

class DessertsForm extends RsvpForm {
  _getSubHeadingMarkup() {
    return `
    <h4>Desserts</h4>
    <button class="rsvp-form-allergy-button">View allergy guide</button>
    `;
  }

  _getBodyMarkup() {
    const menu = this._getCurrentGuest().getMenu();
    const desserts = getAvailableDishesFromFieldMap(menu, "dessert");
    let dessertsMarkup = "";

    desserts.forEach(({ name, heading, description }) => {
      dessertsMarkup += `
        <div class="rsvp-form__checker rsvp-form__checker--menu">
          <input id="rsvp-dessert-${name}" type="radio" name="dessert" value="${name}" class="rsvp-form__radio" ${
        this._isMenuInputChecked("dessert", name) ? "checked" : ""
      }>
          <label for="rsvp-dessert-${name}">
            <span class="rsvp-label-heading">${heading}</span>
            <span class="rsvp-label-description">${description}</span>
          </label>
        </div>
    `;
    });

    return `
    <div class="rsvp-form__separation-wrap">
      <div class="rsvp-form__element">
        <div class="rsvp-form__checkers rsvp-form__checkers--vertical">
          ${dessertsMarkup}
        </div>
      </div>
    </div>
    `;
  }

  _saveAnswers() {
    const form = this._getForm();
    const dessertValue = Array.from(
      form.querySelectorAll("input[name='dessert']")
    ).find((input) => input.checked).value;

    const currentGuest = this._getCurrentGuest();
    currentGuest.setDessert(dessertValue);
  }
}

export default DessertsForm;
