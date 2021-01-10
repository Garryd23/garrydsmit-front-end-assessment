var bgIndex = 0;

startTransitions();

function startTransitions() {
  var i;
  var images = document.querySelectorAll(".bg");
  document.querySelector(".bg-container").style.display = "none";
  for (i = 0; i < images.length; i++) {
    images[i].classList.add("hide");
  }
  document.querySelector(".bg-container").style.display = "block";
  bgIndex++;
  if (bgIndex > images.length) {
    bgIndex = 1;
  }

  images[bgIndex - 1].classList.remove("hide");
  timer();
}

function timer() {
  setTimeout(startTransitions, 10000);
}
