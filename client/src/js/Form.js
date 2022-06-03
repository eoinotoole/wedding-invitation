class Form {
  _form;
  _hasValidationErrors = false;

  constructor() {}

  init() {
    this._form = document.querySelector(".form");
    this._addEventListeners();
  }

  _addEventListeners() {
    const inputs = Array.from(this._form.querySelectorAll("input"));
    const textAreas = Array.from(this._form.querySelectorAll("textarea"));
    const combinedInputs = [...inputs, ...textAreas];

    combinedInputs.forEach((input) =>
      input.addEventListener("focus", this._handleFocusOnInput.bind(this))
    );
    this._form.addEventListener("submit", (e) => e.preventDefault());
  }

  _getActionButton() {
    return document.querySelector(".form__button");
  }

  _getActionButtons() {
    return Array.from(document.querySelectorAll(".form__button"));
  }

  _handleFocusOnInput() {
    this._clearValidationErrors();
  }

  _clearValidationErrors() {
    const validationErrorNodes = this._getValidationErrorNodes();

    if (validationErrorNodes.length < 1) return;

    validationErrorNodes.forEach((node) => {
      const parent = node.parentElement;
      parent.removeChild(node);
    });

    this._setHasValidationErrors(false);
  }

  _getValidationErrorNodes() {
    return Array.from(this._form.querySelectorAll(".form__validation-error"));
  }

  _getHasValidationErrors() {
    return this._hasValidationErrors;
  }

  _setHasValidationErrors(hasValidationErrors) {
    this._hasValidationErrors = hasValidationErrors;
  }

  _displayValidationError(node, message) {
    const parent = node.parentElement;
    const validationElement = this._createValidationErrorElement(message);
    parent.appendChild(validationElement);
  }

  _createValidationErrorElement(message) {
    const element = document.createElement("span");
    element.classList.add("form__validation-error");
    element.innerText = message;
    return element;
  }

  _validateFields() {
    const inputs = Array.from(this._form.querySelectorAll("input"));
    const textAreas = Array.from(this._form.querySelectorAll("textarea"));
    this._validateInputs(inputs);
  }

  _validateInputs(inputs) {
    const textInputs = inputs.filter((input) => input.type === "text");
    const emailInput = inputs.find((input) => input.type === "email");

    // errors already showing - must be cleared first
    if (this._getHasValidationErrors()) return;

    this._validateTextInputs(textInputs);
    this._validateEmailInput(emailInput);
    this._validateRadioInputs();
  }

  _validateTextInputs(textInputs) {
    if (textInputs.length < 1) return;
    textInputs.forEach((input) => this._validateTextInput(input));
  }

  _validateTextInput(input) {
    const { value, name } = input;
    const validNameAttributes = ["name", "secondaryName"];

    if (value.length < 1) {
      this._setHasValidationErrors(true);
      this._displayValidationError(input, "This field is required");
      return;
    }

    if (validNameAttributes.includes(name) && !this._isValidNameInput(input)) {
      this._setHasValidationErrors(true);
      this._displayValidationError(input, "Please input a valid name");
      return;
    }
  }

  _validateRadioInputs() {
    const radioContainers = Array.from(
      this._form.querySelectorAll(".rsvp-form__checkers")
    );
    radioContainers.forEach((container) => {
      const inputs = Array.from(container.querySelectorAll("input"));
      const hasSelection = inputs.some((input) => input.checked);
      if (!hasSelection) {
        this._setHasValidationErrors(true);
        this._displayValidationError(container, "This field is required");
      }
    });
  }

  _validateEmailInput(input) {
    if (!input) return;
    const hasValidChars = input.value.match(
      /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );

    if (input.value.length < 1) {
      this._setHasValidationErrors(true);
      this._displayValidationError(input, "This field is required");
      return;
    }

    if (!hasValidChars) {
      this._setHasValidationErrors(true);
      this._displayValidationError(input, "Please input a valid email");
    }
  }

  _isValidNameInput(input) {
    const { value } = input;
    const isValidLength = value.length > 5;
    const hasValidChars = value.match(/^[A-Za-z\s&']+$/);

    if (!isValidLength || !hasValidChars) return false;
    return true;
  }
}

export default Form;
