import { stateOneMarkup } from "./utils/rsvp-markup";

const triggerButtons = document.querySelectorAll(".button--rsvp-trigger");
const page = document.querySelector(".page");

let formState = {
  stage: 0,
  failedValidation: false,
  name: "",
  email: "",
  attend: null,
  comments: "",
  attendeesNum: 0,
  requiresAccomodation: null,
  guestFood1: {
    starter: null,
    main: null,
    dessert: null,
    dietaryRequirements: "",
  },
  guestFood2: {
    starter: null,
    main: null,
    dessert: null,
    dietaryRequirements: "",
  },
};

const FORM_STRING = `<div class="modal">
    <div class="rsvp">
        <h3 class="rsvp__heading">Celebrate with us</h3>
        <p>Fill in the form below to RSVP</p>
        <p>(Please respond before 07/07/2022)</p>
        <form  class="rsvp-form">
            ${stateOneMarkup}
            <button class="button rsvp-form__button">Next</button>
        </form>
    </div>
</div>`;

triggerButtons.forEach((button) =>
  button.addEventListener("click", handleTriggerButtonClick)
);

function handleTriggerButtonClick(e) {
  addFormToDOM();
  updateFormState({ stage: 1 });
  addInputListeners();
  addActionButtonListener();
}

function addFormToDOM() {
  page.innerHTML += FORM_STRING;
}

function addActionButtonListener() {
  const actionButton = document.querySelector(".rsvp-form__button");
  actionButton.addEventListener("click", handleActionButtonClick);
}

function handleActionButtonClick(e) {
  e.preventDefault();
  validateFields();
}

function updateFormState(newValues) {
  formState = { ...formState, ...newValues };
}

function getForm() {
  return document.querySelector(".rsvp-form");
}

function addInputListeners() {
  const form = getForm();
  const inputs = Array.from(form.querySelectorAll("input"));
  const textAreas = Array.from(form.querySelectorAll("textarea"));
  const combinedInputs = [...inputs, ...textAreas];

  combinedInputs.forEach((input) =>
    input.addEventListener("focus", handleFocusOnInput)
  );
}

function handleFocusOnInput() {
  clearValidationErrors();
}

function getValidationErrorNodes() {
  const form = getForm();
  return Array.from(form.querySelectorAll(".rsvp-form__validation-error"));
}

function clearValidationErrors() {
  const form = getForm();
  const validationErrorNodes = getValidationErrorNodes();

  if (validationErrorNodes.length < 1) return;

  validationErrorNodes.forEach((node) => {
    const parent = node.parentElement;
    parent.removeChild(node);
  });

  updateFormState({ failedValidation: false });
}

function validateFields() {
  const form = getForm();
  const inputs = Array.from(form.querySelectorAll("input"));
  const textAreas = Array.from(form.querySelectorAll("textarea"));

  validateInputs(inputs);
}

function hasValidationErrors() {
  return formState.failedValidation;
}

function validateInputs(inputs) {
  const textInputs = inputs.filter((input) => input.type === "text");
  const emailInput = inputs.find((input) => input.type === "email");
  const radioInputs = inputs.filter((input) => input.type === "radio");

  // errors already showing - must be cleared first
  if (hasValidationErrors()) return;

  validateTextInputs(textInputs);
  validateEmailInput(emailInput);
  validateRadioInputs(radioInputs);
}

function validateTextInputs(textInputs) {
  if (textInputs.length < 1) return;
  textInputs.forEach((input) => validateTextInput(input));
}

function validateRadioInputs(inputs) {}

function validateTextInput(input) {
  const { required, value, name } = input;

  if (required && value.length < 1) {
    updateFormState({ failedValidation: true });
    displayValidationError(input, "This field is required");
    return;
  }

  if (name === "name" && !isValidNameInput(input)) {
    updateFormState({ failedValidation: true });
    displayValidationError(input, "Please input a valid name");
    return;
  }
}

function isValidNameInput(input) {
  const { value } = input;
  const isValidLength = value.length > 5;
  const hasValidChars = value.match(/^[A-Za-z\s&']+$/);

  if (!isValidLength || !hasValidChars) return false;
  return true;
}

function validateEmailInput(input) {
  const { required, value } = input;
  const hasValidChars = value.match(
    /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
  );

  if (required && value.length < 1) {
    updateFormState({ failedValidation: true });
    displayValidationError(input, "This field is required");
    return;
  }

  if (!hasValidChars) {
    updateFormState({ failedValidation: true });
    displayValidationError(input, "Please input a valid email");
  }
}

function createValidationErrorElement(message) {
  const element = document.createElement("span");
  element.classList.add("rsvp-form__validation-error");
  element.innerText = message;
  return element;
}

function displayValidationError(node, message) {
  const parent = node.parentElement;
  const validationElement = createValidationErrorElement(message);
  parent.appendChild(validationElement);
}
