import Form from "./Form";

class ContactForm extends Form {
  _container;

  init() {
    this._container = document.querySelector(".contact-container");
    super.init();
  }

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
    this._container.innerHTML = `
    <p>Success! Thank you for your submission. We'll respond as soon as possible 🙂</p>
    `;
  }

  _handleFailedSubmission() {}
}

export default ContactForm;
