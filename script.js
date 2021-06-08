const style = getComputedStyle(document.body);
const timeout =
  (+style.getPropertyValue("--preload-delay").trim().slice(0, -1) +
    +style.getPropertyValue("--preload-duration").trim().slice(0, -1)) *
  1000;
setTimeout(() => {
  document
    .querySelector(".preload svg animateTransform")
    .setAttribute("dur", "0.9259259259259258s");
}, timeout);
