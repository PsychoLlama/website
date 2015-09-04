document.querySelector('.fa-bars').addEventListener('click', function() {
  var div = document.getElementsByClassName('all-content')[0];
  if (div.className.indexOf('sidebar-reveal') > -1) {
    div.className = div.className.replace(/\s+sidebar-reveal/, "");
  } else {
    div.className = div.className + " sidebar-reveal";
  }
});
