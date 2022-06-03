import Form from "./Form";

class ContactForm extends Form {
  _addEventListeners() {
    super._addEventListeners();

    this._getActionButton().addEventListener("click", (e) => {
      e.preventDefault();
      this._clearValidationErrors();
      this._validateFields();
      if (this._getHasValidationErrors()) return;
      this._handleActionButtonClick();
    });
  }

  _getData() {
    const nameValue = this._form.querySelector('input[name="name"]').value;
    const emailValue = this._form.querySelector('input[name="email"]').value;
    const messageValue = this._form.querySelector("textArea").value;
    return { name: nameValue, email: emailValue, message: messageValue };
  }

  _handleActionButtonClick() {
    const data = this._getData();
    fetch("/api/forms", {
      method: "POST",
      body: JSON.stringify({ type: "contact", ...data }),
    })
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
  }
}

export default ContactForm;
