import RsvpForm from "./RsvpForm";

class DessertsForm extends RsvpForm {
  _getSubHeadingMarkup() {
    return `
    <h4>Desserts</h4>
    <button class="rsvp-form-allergy-button">View allergy guide</button>
    `;
  }

  _getBodyMarkup() {
    return `
    <div class="rsvp-form__separation-wrap">
      <div class="rsvp-form__element">
        <div class="rsvp-form__checkers rsvp-form__checkers--vertical">
          <div class="rsvp-form__checker rsvp-form__checker--menu">
            <input id="rsvp-dessert-brule" type="radio" name="dessert" value="brule" class="rsvp-form__radio">
            <label for="rsvp-dessert-brule">
              <span class="rsvp-label-heading">Crème Brûlée</span>
              <span class="rsvp-label-description">With a sugar crust & berry compote (3,9)</span>
            </label>
          </div>
          <div class="rsvp-form__checker rsvp-form__checker--menu">
            <input id="rsvp-dessert-torte" type="radio" name="dessert" value="torte" class="rsvp-form__radio">
            <label for="rsvp-dessert-torte">
              <span class="rsvp-label-heading">Pear and almond torte</span>
              <span class="rsvp-label-description">With vanilla bean ice cream (1,3,8,9)</span>
            </label>
          </div>  
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
