import RsvpForm from "./RsvpForm";

class MenuForm extends RsvpForm {
  _getBodyMarkup() {
    return ``;
  }

  _getSubHeadingMarkup() {
    return ` <p>Please choose a menu for this guest</p>`;
  }

  _getBodyMarkup(answers) {
    return ` 
    <div class="rsvp-form__separation-wrap">
        <div class="rsvp-form__element">
            <div class="rsvp-form__checkers">
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
      
      `;
  }
}

export default MenuForm;
