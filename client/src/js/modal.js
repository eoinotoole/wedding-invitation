export function enableModal() {
  const page = getPage();
  if (!page) return;

  const modal = document.createElement("div");
  modal.classList.add("modal");
  modal.addEventListener("click", handleActiveModalClick);

  document.body.classList.add("modal-active");
  page.appendChild(modal);
}

export function disableModal() {
  const page = getPage();
  const modal = getModal();
  page.removeChild(modal);
  document.body.classList.remove("modal-active");
}

export function getModal() {
  return document.querySelector(".modal");
}

function getPage() {
  return document.querySelector(".page");
}

function handleActiveModalClick(e) {
  const isClickOutsideContent = e.target === this;

  if (isClickOutsideContent) {
    disableModal();
  }
}
