import RsvpForm from "./RsvpForm";
import { getChosenDishFromFieldMap } from "./utils/field-menu-item-map";

class ConfirmForm extends RsvpForm {
  bindClickOnSubmitButton(handler) {
    this._getActionButtons().forEach((button) => {
      button.addEventListener("click", (e) => {
        e.preventDefault();
        const action = e.target.getAttribute("data-action");

        if (action === "edit") {
          handler(3);
          return;
        }
        handler(2);
      });
    });
  }

  _getSubHeadingMarkup() {
    return `<p>Please confirm your choices for ${this._currentGuestName}</p>`;
  }

  _getBodyMarkup() {
    const menu = this._getCurrentGuest().getField("menu");
    const dietary = this._getCurrentGuest().getField("dietaryRequirements");
    const entree = this._getCurrentGuest().getField("entree");
    const main = this._getCurrentGuest().getField("main");
    const dessert = this._getCurrentGuest().getField("dessert");

    const entreeText = getChosenDishFromFieldMap(menu, "entree", entree);
    const mainText = getChosenDishFromFieldMap(menu, "main", main);
    const dessertText = getChosenDishFromFieldMap(menu, "dessert", dessert);

    return `
    <div class="selection-confirm">
      <div class="form__separation-wrap">
        <div class="selection-confirm__container selection-confirm__container--horiz">
          <div class="selection-confirm__menu">
            <h5>Menu</h5>
            <p>${menu.charAt(0).toUpperCase() + menu.slice(1)}</p>
          </div>
          <div class="selection-confirm__menu selection-confirm__menu--dietary">
            <h5>Dietary restrictions</h5>
            <p>${dietary || "None"}</p>
          </div>
        </div>
      </div>
      <div class="form__separation-wrap">
        <div class="selection-confirm__container">
          <div class="selection-confirm__menu">
            <h4>Entree</h4>
            <div class="selection-confirm__dish">
              <h5>${entreeText.heading}</h5>
              <p>${entreeText.description}</p>
            </div>
          </div>
        </div>
      </div>
      <div class="form__separation-wrap">
        <div class="selection-confirm__container">
          <div class="selection-confirm__menu">
            <h4>Main</h4>
            <div class="selection-confirm__dish">
              <h5>${mainText.heading}</h5>
              <p>${mainText.description}</p>
            </div>
          </div>
        </div>
      </div>
      <div class="form__separation-wrap">
        <div class="selection-confirm__container">
          <div class="selection-confirm__menu">
            <h4>Dessert</h4>
            <div class="selection-confirm__dish">
              <h5>${dessertText.heading}</h5>
              <p>${dessertText.description}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
    `;
  }

  _getFormMarkup(formContent) {
    return `
        <div class="rsvp">
            <div class="rsvp__top">
            ${this._getHeadingMarkup()}
            ${this._getSubHeadingMarkup()}
           </div>
            <form class="form form--rsvp">
                <div class="form__content form__content--rsvp">
                  ${formContent}
                </div>
                <div class="form__button-container form__button-container--rsvp">
                    <button class="button button--rsvp button--rsvp-edit form__button" data-action="edit">Edit choices</button>
                    <button class="button button--rsvp form__button" data-action="confirm">Confirm</button>
                </div>
            </form>
        </div>`;
  }
}

export default ConfirmForm;
