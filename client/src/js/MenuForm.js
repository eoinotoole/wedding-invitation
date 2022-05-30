import RsvpForm from "./RsvpForm";

class MenuForm extends RsvpForm {
  bindClickOnSubmitButton(handler) {
    this._getActionButton().addEventListener("click", (e) => {
      e.preventDefault();
      this._clearValidationErrors();
      this._validateFields();
      if (this._getHasValidationErrors()) return;
      this._handleActionButtonClick();
      const currentGuest = this._getCurrentGuest();
      const chosenMenu = currentGuest.getMenu();

      if (chosenMenu === "vegan" || chosenMenu === "children") {
        handler(7);
        return;
      }
      handler();
    });
  }

  _getSubHeadingMarkup() {
    return ` <p>Please choose a menu for this guest</p>`;
  }

  _getBodyMarkup(answers) {
    return ` 
    <div class="rsvp-form__separation-wrap">
        <div class="rsvp-form__element">
            <div class="rsvp-form__checkers rsvp-form__checkers--vertical">
                <div class="rsvp-form__checker">
                    <input id="rsvp-menu-standard" type="radio" name="menu" value="standard" class="rsvp-form__radio">
                    <label for="rsvp-menu-standard">Standard (multi choice)</label>
                </div>
                <div class="rsvp-form__checker">
                    <input id="rsvp-menu-vegan" type="radio" name="menu" value="vegan" class="rsvp-form__radio">
                    <label for="rsvp-menu-vegan">Vegan/Vegetarian (set choice)</label>
                </div>  
                <div class="rsvp-form__checker">
                    <input id="rsvp-menu-children" type="radio" name="menu" value="children" class="rsvp-form__radio">
                    <label for="rsvp-menu-children">Children's (set choice)</label>
                </div>    
            </div>
        </div>
    </div>
    <div class="rsvp-form__separation-wrap">
      <div class="rsvp-form__element">
        <h5>Other dietary requirements</h5>
        <p>Please let us know any dietary requirements you have. The chefs at Ashley Park House are happy to substitute ingredients to fit your needs</p>
        <textarea name="dietary" rows="5" placeholder="Gluten free, lactose intolerant etc. (optional)"></textarea>
      </div>
    </div>
      `;
  }

  _saveAnswers() {
    const form = this._getForm();
    const menuValue = Array.from(
      form.querySelectorAll("input[name='menu']")
    ).find((input) => input.checked).value;
    const dietaryValue = form.querySelector("textarea[name='dietary']").value;

    const currentGuest = this._getCurrentGuest();
    currentGuest.setMenu(menuValue);
    currentGuest.setDietaryRequirements(dietaryValue);
  }
}

export default MenuForm;
