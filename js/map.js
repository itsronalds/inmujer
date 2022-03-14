const screenWidth = this.window.innerWidth;

if (screenWidth >= 768) {
  console.log(this.document.querySelector('.mapouter'));
  this.document.querySelector('.mapouter').style.height = '500px';
  this.document.querySelector('.gmap_canvas').style.height = '500px';
}

window.addEventListener('resize', function () {
  const screenWidth = this.window.innerWidth;

  if (screenWidth >= 768) {
    this.document.querySelector('.mapouter').style.height = '500px';
    this.document.querySelector('.gmap_canvas').style.height = '500px';
  } else {
    this.document.querySelector('.mapouter').style.height = '350px';
    this.document.querySelector('.gmap_canvas').style.height = '350px';
  }
});
