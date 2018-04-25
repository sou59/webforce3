document.addEventListener('DOMContentLoaded', _ => {
  const photos = document.querySelectorAll(".photo-list li");

  photos.forEach(element => {
    element.addEventListener("mouseenter", () => {
      element.classList.add("highlight");
    });
    element.addEventListener("mouseleave", () => {
      element.classList.remove("highlight");
    });
    element.addEventListener("click", () => {
      element.classList.toggle("selected");
      const total = document.querySelectorAll(".photo-list li.selected").length;
      document.querySelector("em").innerHTML = total;
    });
  });
  
});
