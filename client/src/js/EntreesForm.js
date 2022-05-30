import RsvpForm from "./RsvpForm";

class EntreesForm extends RsvpForm {
  _getSubHeadingMarkup() {
    return `
    <h4>Entrees</h4>
    <button class="rsvp-form-allergy-button">View allergy guide</button>
    `;
  }

  _getBodyMarkup() {
    return `
    <div class="rsvp-form__separation-wrap">
      <div class="rsvp-form__element">
        <div class="rsvp-form__checkers rsvp-form__checkers--vertical">
          <div class="rsvp-form__checker rsvp-form__checker--menu">
            <input id="rsvp-entree-pate" type="radio" name="entree" value="pate" class="rsvp-form__radio">
            <label for="rsvp-entree-pate">
              <span class="rsvp-label-heading">Homemade Chicken Liver Pate</span>
              <span class="rsvp-label-description">Served with brioche bread, redcurrant purée and fresh garden salad (1,9,11)</span>
            </label>
          </div>
          <div class="rsvp-form__checker rsvp-form__checker--menu">
            <input id="rsvp-entree-cheese" type="radio" name="entree" value="cheese" class="rsvp-form__radio">
            <label for="rsvp-entree-cheese">
              <span class="rsvp-label-heading">Baked Goat\’s Cheese & Avacado</span>
              <span class="rsvp-label-description">Wrapped in filo pastry & served with basil pesto (1,8,9,11)</span>
            </label>
          </div>  
        </div>
      </div>
    </div>
    `;
  }

  _saveAnswers() {
    const form = this._getForm();
    const entreeValue = Array.from(
      form.querySelectorAll("input[name='entree']")
    ).find((input) => input.checked).value;

    const currentGuest = this._getCurrentGuest();
    currentGuest.setEntree(entreeValue);
  }
}

export default EntreesForm;
