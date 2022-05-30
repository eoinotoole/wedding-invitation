import RsvpForm from "./RsvpForm";

class MainsForm extends RsvpForm {
  _getSubHeadingMarkup() {
    return `
    <h4>Mains</h4>
    <button class="rsvp-form-allergy-button">View allergy guide</button>
    `;
  }

  _getBodyMarkup() {
    return `
    <div class="rsvp-form__separation-wrap">
      <div class="rsvp-form__element">
        <div class="rsvp-form__checkers rsvp-form__checkers--vertical">
          <div class="rsvp-form__checker rsvp-form__checker--menu">
            <input id="rsvp-main-bass" type="radio" name="main" value="bass" class="rsvp-form__radio">
            <label for="rsvp-main-bass">
              <span class="rsvp-label-heading">Pan fried seabass</span>
              <span class="rsvp-label-description">With a red pepper and sun dried tomato sauce (3,4,9)</span>
            </label>
          </div>
          <div class="rsvp-form__checker rsvp-form__checker--menu">
            <input id="rsvp-main-lamb" type="radio" name="main" value="lamb" class="rsvp-form__radio">
            <label for="rsvp-main-lamb">
              <span class="rsvp-label-heading">Roast lamb</span>
              <span class="rsvp-label-description">With garlic and rosemary jus (13)</span>
            </label>
          </div>  
        </div>
      </div>
    </div>
    `;
  }

  _saveAnswers() {
    const form = this._getForm();
    const main = Array.from(form.querySelectorAll("input[name='main']")).find(
      (input) => input.checked
    ).value;

    const currentGuest = this._getCurrentGuest();
    currentGuest.setMain(main);
  }
}

export default MainsForm;
