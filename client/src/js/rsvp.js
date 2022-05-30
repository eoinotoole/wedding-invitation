import Answers from "./Answers";
import InitForm from "./InitForm";
import GuestsForm from "./GuestsForm";
import MenuForm from "./MenuForm";
import EntreesForm from "./EntreesForm";
import MainsForm from "./MainsForm";
import DessertsForm from "./DessertsForm";
import ConfirmForm from "./ConfirmForm";

const STAGE_CLASS_MAP = {
  1: InitForm,
  2: GuestsForm,
  3: MenuForm,
  4: EntreesForm,
  5: MainsForm,
  6: DessertsForm,
  7: ConfirmForm,
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
    this._nextStage(stageNumber);
  }

  _nextStage(stageNumber) {
    this._form.destroy();
    this._stage = stageNumber ?? this._stage + 1;
    this._setForm();
  }
}

export default Rsvp;
