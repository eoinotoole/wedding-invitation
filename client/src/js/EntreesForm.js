import RsvpForm from "./RsvpForm";

class EntreesForm extends RsvpForm {
  _getSubHeadingMarkup() {
    return "Please make a selection for each guest attending";
  }

  _getBodyMarkup() {
    return "";
  }
}

export default EntreesForm;
