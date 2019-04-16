let boodElement = document.getElementById("boodElement");

let bood = {
  weight: 5,
  showBood: function() {
    if (this.weight > 7) {
      boodElement.src = "Images/skellyPug.jpg";
    } else if (this.weight > 5) {
      boodElement.src = "Images/fatPug.jpg";
    } else if (this.weight > 4) {
      boodElement.src = "Images/normalPug.jpg";
    } else if (this.weight > 3) {
      boodElement.src = "Images/skinnyPug.jpg";
    } else if (this.weight > 1) {
      boodElement.src = "Images/skellyPug.jpg";
    }
  }
};

function feedBood() {
  bood.weight++;
  bood.showBood();
  console.log(bood.weight);
}

function starveBood() {
  bood.weight--;
  bood.showBood();
  console.log(bood.weight);
}
