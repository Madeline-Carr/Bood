//Variables
let boodPhoto = document.getElementById("boodPhoto");

//Objects
let bood = {
  weight: 5,
  showBood: function() {
    if (this.weight > 7) {
      boodPhoto.src = "Images/skellyPug.jpg";
    } else if (this.weight > 5) {
      boodPhoto.src = "Images/fatPug.jpg";
    } else if (this.weight > 4) {
      boodPhoto.src = "Images/normalPug.jpg";
    } else if (this.weight > 3) {
      boodPhoto.src = "Images/skinnyPug.jpg";
    } else if (this.weight > 1) {
      boodPhoto.src = "Images/skellyPug.jpg";
    }
  },
  feedBood: function() {
    this.weight++;
    this.showBood();
    // console.log(this.weight);
  },
  starveBood: function() {
    this.weight--;
    this.showBood();
    //console.log(this.weight);
  }
};
