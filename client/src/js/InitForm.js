import RsvpForm from "./RsvpForm";
import Guest from "./Guest";

const plusIcon = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 52 52" style="enable-background:new 0 0 52 52" xml:space="preserve"><path d="M26 0C11.664 0 0 11.663 0 26s11.664 26 26 26 26-11.663 26-26S40.336 0 26 0zm0 50C12.767 50 2 39.233 2 26S12.767 2 26 2s24 10.767 24 24-10.767 24-24 24z"/><path d="M38.5 25H27V14a1 1 0 1 0-2 0v11H13.5a1 1 0 1 0 0 2H25v12a1 1 0 1 0 2 0V27h11.5a1 1 0 1 0 0-2z"/></svg>`;
const minusIcon = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 52 52" style="enable-background:new 0 0 52 52" xml:space="preserve"><path d="M26 0C11.664 0 0 11.663 0 26s11.664 26 26 26 26-11.663 26-26S40.336 0 26 0zm0 50C12.767 50 2 39.233 2 26S12.767 2 26 2s24 10.767 24 24-10.767 24-24 24z"/><path d="M39 25H13a1 1 0 1 0 0 2h26a1 1 0 1 0 0-2z"/></svg>`;

class InitForm extends RsvpForm {
  _addEventListeners() {
    super._addEventListeners();

    const form = this._getForm();
    const inputs = Array.from(form.querySelectorAll("input"));
    const textAreas = Array.from(form.querySelectorAll("textarea"));
    const combinedInputs = [...inputs, ...textAreas];
    const addTrigger = form.querySelector(".rsvp-form-add__content");
    combinedInputs.forEach((input) =>
      input.addEventListener("focus", this._handleFocusOnInput.bind(this))
    );
    addTrigger.addEventListener(
      "click",
      this._handleAddTriggerClick.bind(this)
    );
  }

  _handleAddTriggerClick(e) {
    e.preventDefault();

    const container = document.querySelector(".rsvp-form-guests-container");
    const newField = this._createNewGuestField();
    container.innerHTML += newField;
  }

  _createNewGuestField() {
    return `
        <div class="rsvp-form__element">
            <div class="rsvp-form-minus">
                <button class="rsvp-form__icon">${minusIcon}</button>
                <input class="rsvp-form__guest-input" type="text" placeholder="Guest name">
            </div>
        </div>
    `;
  }

  getAnswers() {
    const form = this._getForm();
    const guests = Array.from(
      form.querySelectorAll(".rsvp-form__guest-input")
    ).map((guestInput) => new Guest(guestInput.value));
    const emailValue = form.querySelector("input[name='email']").value;
    const isAttendingValue = Array.from(
      form.querySelectorAll("input[name='attend']")
    ).find((input) => input.checked).value;
    const isStayingTheNightValue = Array.from(
      form.querySelectorAll("input[name='accommodation']")
    ).find((input) => input.checked).value;
    const commentsValue = form.querySelector("textarea[name='comments']").value;

    return {
      guests,
      email: emailValue,
      isAttending: isAttendingValue,
      isStayingTheNight: isStayingTheNightValue,
      comments: commentsValue,
    };
  }

  _getHeadingMarkup() {
    return `<h3 class="rsvp__heading">Celebrate with us</h3>`;
  }

  _getSubHeadingMarkup() {
    return ` <p>Fill in the form below to RSVP</p>
      <p>(Please respond before 07/07/2022)</p>`;
  }

  _getAddMarkup() {
    return `
    <div class="rsvp-form-add">
        <div class="rsvp-form-add__content">
            <button class="rsvp-form__icon">${plusIcon}</button>
            <span>Add additional guest</span>
        </div>
    </div>
    `;
  }

  _getBodyMarkup(answers) {
    return `
      <div class="rsvp-form__separation-wrap">
          <div class="rsvp-form__element">
            <input class="rsvp-form__guest-input" type="text" name="name" placeholder="Guest name">
          </div>  
          <div class="rsvp-form-guests-container"></div>      
          <div class="rsvp-form__element">
                ${this._getAddMarkup()}
            </div>


          <div class="rsvp-form__element">
              <input type="email" name="email" placeholder="Email address" value="${answers.getEmail()}">
          </div>
      </div>
      
      <div class="rsvp-form__separation-wrap">
          <div class="rsvp-form__element">
              <p>Will you be attending the wedding?</p>
              <div class="rsvp-form__checkers">
                  <div class="rsvp-form__checker">
                      <input id="rsvp-attend-accept" type="radio" name="attend" value="accept" class="rsvp-form__radio" ${
                        answers.getIsAttending() ? "checked" : ""
                      }>
                      <label for="rsvp-attend-accept">Joyfully accept</label>
                  </div>
                  <div class="rsvp-form__checker">
                      <input id="rsvp-attend-decline" type="radio" name="attend" value="decline" class="rsvp-form__radio" ${
                        answers.getIsAttending() === false ? "checked" : ""
                      }>
                      <label for="rsvp-attend-decline">Regretfully decline</label>
                  </div>        
              </div>
          </div>
      </div>
      
      <div class="rsvp-form__separation-wrap">
          <div class="rsvp-form__element">
              <p>Will you be spending the night at Ashley Park House?</p>
              <div class="rsvp-form__checkers">
                  <div class="rsvp-form__checker">
                      <input id="rsvp-accommodation-yes" type="radio" name="accommodation" value="yes" class="rsvp-form__radio" ${
                        answers.getIsStayingTheNight() ? "checked" : ""
                      }>
                      <label for="rsvp-accommodation-yes">Yes</label>
                  </div>
                  <div class="rsvp-form__checker">
                      <input id="rsvp-accommodation-no" type="radio" name="accommodation" value="no" class="rsvp-form__radio" ${
                        answers.getIsStayingTheNight() === false
                          ? "checked"
                          : ""
                      }>
                      <label for="rsvp-accommodation-no">No</label>
                  </div>        
              </div>
          </div>
      </div>
      
      <div class="rsvp-form__separation-wrap">
          <div class="rsvp-form__element">
              <h5>Any other comments</h5>
              <textarea name="comments" rows="4" placeholder="Your message (optional)">${answers.getComments()}</textarea>
          </div>
      </div>
      `;
  }
}

export default InitForm;
