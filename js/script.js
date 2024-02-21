var isImageShown = false;
document.getElementById('Inspiration').onclick = function() {
  if (isImageShown) {
    this.style.backgroundImage = "";
    isImageShown = false;
  } else {
    this.style.backgroundImage = url('/Images/Ins_Dragon.svg');
    isImageShown = true;
  }
}
