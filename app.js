function myFunction() {
  var x = document.getElementById("links");
  // var land = document.getElementById("landing");
  var content = document.getElementById("content");
  var footer = document.getElementById("footer");
  var html = document.getElementsByTagName("html");
  if (x.style.display === "block") {
    x.style.display = "none";
    // land.style.display = "block";
    content.style.display = "block";
    footer.style.display = "block";
    document.body.style.backgroundColor = "rgb(250, 250, 250)";
  } else {
    x.style.display = "block";
    // land.style.display = "none";
    content.style.display = "none";
    footer.style.display = "none";
    document.body.style.backgroundColor = "rgb(46, 46, 46)";
  }
}
