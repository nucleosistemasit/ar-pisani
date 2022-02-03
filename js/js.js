document.addEventListener("click", function () {
  document.querySelector(".sound").setAttribute("display", none);
});

function playing(index) {
  console.log("now playing", index);
  document.querySelector("#player").setAttribute("visible", true);
}
