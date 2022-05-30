import Answers from "./Answers";
import InitForm from "./InitForm";
import GuestsForm from "./GuestsForm";
import MenuForm from "./MenuForm";
import EntreesForm from "./EntreesForm";
import MainsForm from "./MainsForm";
import DessertsForm from "./DessertsForm";

const STAGE_CLASS_MAP = {
  1: InitForm,
  2: GuestsForm,
  3: MenuForm,
  4: EntreesForm,
  5: MainsForm,
  6: DessertsForm,
};

class Rsvp {
  _form = null;
  _stage = 1;
  answers;

  constructor() {
    this.answers = new Answers();
    this._setForm();
  }

  getForm() {
    return this._form;
  }

  _setForm() {
    this._form = new STAGE_CLASS_MAP[this._stage](this.answers);
    this._form.bindClickOnSubmitButton(this.handleActionButtonClick.bind(this));
  }

  handleActionButtonClick() {
    const oldAnswers = this.answers.getAnswers();
    const newAnswers = this._form.getAnswers();
    this.answers.setAnswers({ ...oldAnswers, ...newAnswers });
    this._nextStage();
  }

  _nextStage() {
    this._form.destroy();
    this._stage += 1;
    this._setForm();
  }
}

export default Rsvp;
