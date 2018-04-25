// once the tree DOM has loaded
document.addEventListener('DOMContentLoaded', _ => {

  const btn = document.querySelector('#toggle-rectangle');
  const rectangle = document.querySelector('.rectangle');


  btn.addEventListener("click", e => {
    if (rectangle.style.display === 'block') {
      rectangle.style.display = 'none';
    } else {
      rectangle.style.display = 'block';
    }
  });

  rectangle.addEventListener("mouseover", function () {
    rectangle.classList.toggle("important");
  });

  rectangle.addEventListener("mouseout", function () {
    rectangle.classList.toggle("important");
  });

  rectangle.addEventListener("dblclick", function () {
    rectangle.classList.toggle("good");
  });

  
  
});
