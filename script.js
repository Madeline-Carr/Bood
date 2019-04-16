var bood = document.getElementById("bood");
var boodWeight = 5;

function showBood() {
  if (boodWeight > 6) {
    bood.src = "Images/skellyPug.jpg";
  } else if (boodWeight > 5) {
    bood.src = "Images/fatPug.jpg";
  } else if (boodWeight > 4) {
    bood.src = "Images/normalPug.jpg";
  } else if (boodWeight > 3) {
    bood.src = "Images/skinnyPug.jpg";
  } else if (boodWeight > 2) {
    bood.src = "Images/skellyPug.jpg";
  }
}
function feedBood() {
  boodWeight++;
  showBood();
  console.log(boodWeight);
}

function starveBood() {
  boodWeight--;
  showBood();
  console.log(boodWeight);
}
