function flipLeft() {
  document.getElementById("3d-cube").style.transform = "rotateY(0.5turn)";
  document.getElementById("Left").style.visibility = "hidden";
  document.getElementById("Front").style.visibility = "visiable";
  setTimeout(() => {
    reverse("Front");
    reverse("Left");
  }, 999);
}

function flipRight() {
  document.getElementById("3d-cube").style.transform = "rotateY(0.0turn)";
  document.getElementById("Left").style.visibility = "visiable";
  document.getElementById("Front").style.visibility = "hidden";
  setTimeout(() => {
    reverse("Front");
    reverse("Left");
  }, 999);
}
function reverse(id) {
  const elm = document.getElementById(id);
  if (elm === "Front") {
    elm.style.visibility = "hidden";
  } else {
    elm.style.visibility = "visiable";
  }
}
