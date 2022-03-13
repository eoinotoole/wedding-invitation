window.addEventListener("load", handleWindowLoaded);

function handleWindowLoaded() {
  const svgs = Array.from(document.querySelectorAll("svg"));
  svgs.forEach((svg) => (svg.style.display = "block"));
}
