import RsvpForm from "./RsvpForm";

class MainsForm extends RsvpForm {
  _getSubHeadingMarkup() {
    return "Please make a selection for each guest attending";
  }

  _getBodyMarkup() {
    return "";
  }
}

export default MainsForm;
