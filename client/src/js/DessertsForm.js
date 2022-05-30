import RsvpForm from "./RsvpForm";

class DessertsForm extends RsvpForm {
  _getSubHeadingMarkup() {
    return "Please make a selection for each guest attending";
  }

  _getBodyMarkup() {
    return "";
  }
}

export default DessertsForm;
