const boxes = document.querySelectorAll(".box");

boxes.forEach((box) => {
  box.addEventListener("mouseenter", () => {
    box.classList.add("expand");
  });
  box.addEventListener("mouseleave", () => {
    box.classList.remove("expand");
  });
});
