import RsvpForm from "./RsvpForm";
import { modalCloseEvent } from "./utils/global-events";

class SuccessForm extends RsvpForm {
  bindClickOnSubmitButton(_handler) {
    this._getActionButton().addEventListener("click", (e) => {
      e.preventDefault();
      window.dispatchEvent(modalCloseEvent);
    });
  }

  _getHeadingMarkup() {
    return `<h3 class="rsvp__heading">RSVP sent</h3>`;
  }

  _getSubHeadingMarkup() {
    return `<p>Success! Thank you for your submission.`;
  }

  _getBodyMarkup() {
    const isAttending = this._answers.getIsAttending();

    console.log("HERE", isAttending);

    if (!isAttending) return this._getNotAttendingMarkup();

    return `
    <div class="rsvp-form__separation-wrap">
        <div class="rsvp-form__element">
            <p>We've sent a confirmation email to ${this._answers.getEmail()} 
            and your choices are on their way to Will, Maeve and the Ashley Park team right now!</p>
        </div>
    </div>
    <div class="rsvp-form__separation-wrap">
        <div class="rsvp-form__element">
            <p>If you have any additional questions please send them to us via the <a href="/contact">contact form</a>.</p>
        </div>
    </div>
    <div class="rsvp-form__separation-wrap">
        <div class="rsvp-form__element">
        <p>We look forward to seeing you on the day!</p>
        <p>Will & Maeve</p>
        </div>
    </div>
    `;
  }

  _getNotAttendingMarkup() {
    return `
    <div class="rsvp-form__separation-wrap">
        <div class="rsvp-form__element">
            <p>We've sent a confirmation email to ${this._answers.getEmail()} 
            and your response is on the way to Will, Maeve and the Ashley Park team right now.</p>
        </div>
    </div>
    <div class="rsvp-form__separation-wrap">
        <div class="rsvp-form__element">
            <p>It's a shame that you won't be joining us on the day but we hope to see you soon!</p>
        </div>
    </div>
    <div class="rsvp-form__separation-wrap">
        <div class="rsvp-form__element">
            <p>If you have any additional questions please send them to us via the <a href="/contact">contact form</a>.</p>
        </div>
    </div>
    <div class="rsvp-form__separation-wrap">
        <div class="rsvp-form__element">
            <p>All the best</p>
            <p>Will & Maeve</p>
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
            <form class="rsvp-form">
                <div class="rsvp-form__content">
                  ${formContent}
                </div>
                <div class="rsvp-form-button-container">
                    <button class="button rsvp-form__button">Close</button>
                </div>
            </form>
        </div>`;
  }
}

export default SuccessForm;
