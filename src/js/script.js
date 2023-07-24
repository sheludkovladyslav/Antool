document.getElementById('loadMore').addEventListener("click", function () {
  document.getElementById("card-hidden").style.display = "flex";
  document.getElementById("hideMore").style.display = "flex";
  document.getElementById("card-hidden-notepad").style.display = "flex";
  document.getElementById("card-hidden-atom").style.display = "flex";

  this.style.display = "none";
});

document.getElementById('hideMore').addEventListener("click", function () {
  document.getElementById("card-hidden").style.display = "none";
  document.getElementById("card-hidden-notepad").style.display = "none";
  document.getElementById("card-hidden-atom").style.display = "none";
  document.getElementById("loadMore").style.display = "flex";

  this.style.display = "none";
});
