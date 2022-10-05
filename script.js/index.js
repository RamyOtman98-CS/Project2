function flipLeft() {
  document.getElementById("3d-cube").style.transform = "rotateY(0.5turn)";

  document.getElementById("Front").style.visibility = "visible";
  document.getElementById("Left").style.visibility = "hidden";

  setTimeout(() => {
    reverse("Front");
    reverse("Left");
  }, 999);
}

function flipRight() {
  document.getElementById("3d-cube").style.transform = "rotateY(0.0turn)";
  document.getElementById("Left").style.visibility = "visible";
  document.getElementById("Front").style.visibility = "hidden";
  setTimeout(() => {
    reverse("Front");
    reverse("Left");
  }, 999);
}

function reverse(id) {
  const elm = document.getElementById(id);
  if (elm.style.visibility === "visible") {
    elm.style.visibility = "hidden";
  } else {
    elm.style.visibility = "visible";
  }
}
