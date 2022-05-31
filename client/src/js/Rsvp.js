import Answers from "./Answers";
import InitForm from "./InitForm";
import GuestsForm from "./GuestsForm";
import MenuForm from "./MenuForm";
import EntreesForm from "./EntreesForm";
import MainsForm from "./MainsForm";
import DessertsForm from "./DessertsForm";
import ConfirmForm from "./ConfirmForm";
import SuccessForm from "./SuccessForm";
import ErrorForm from "./ErrorForm";

const STAGE_CLASS_MAP = {
  1: InitForm,
  2: GuestsForm,
  3: MenuForm,
  4: EntreesForm,
  5: MainsForm,
  6: DessertsForm,
  7: ConfirmForm,
  8: SuccessForm,
  9: ErrorForm,
};

class Rsvp {
  _form = null;
  _stage = 1;
  _currentGuestName = "";
  answers;

  constructor() {
    this.answers = new Answers();
    this._setForm();
  }

  getForm() {
    return this._form;
  }

  _setForm() {
    this._form = new STAGE_CLASS_MAP[this._stage](
      this._currentGuestName,
      this.answers
    );
    this._form.bindClickOnSubmitButton(this.handleActionButtonClick.bind(this));

    if (this._stage === 2) {
      this._form.bindClickOnStartSelection(
        this.handleGuestSelectionClick.bind(this)
      );
    }
  }

  handleGuestSelectionClick(guestName) {
    this._currentGuestName = guestName;
    this._nextStage();
  }

  handleActionButtonClick(stageNumber) {
    const isAttending = this.answers.getIsAttending();
    const isSubmission = this._stage === 2;

    if (isSubmission || !isAttending) {
      this._handleSubmission();
      return;
    }

    this._nextStage(stageNumber);
  }

  _handleSubmission() {
    const jsonAnswers = JSON.stringify(this.answers.getAnswers());
    console.log("HERE", jsonAnswers);
    fetch("/api/rsvps", {
      method: "POST",
      body: jsonAnswers,
    })
      .then((res) => {
        if (res.ok) {
          this._handleSuccessfulSubmission();
          return;
        }
        throw new Error("Something went wrong!");
      })
      .catch(this._handleFailedSubmission.bind(this));
  }

  _handleSuccessfulSubmission() {
    this._nextStage(8);
  }

  _handleFailedSubmission() {
    this._nextStage(9);
  }

  // Hack updating modal from down here =(
  _scrollBackToTop() {
    const modalContent = document.querySelector(".modal__content");
    modalContent.scrollTop = 0;
  }

  _nextStage(stageNumber) {
    this._form.destroy();
    this._stage = stageNumber ?? this._stage + 1;
    console.log(this._stage);
    this._setForm();
    this._scrollBackToTop();
  }
}

export default Rsvp;
