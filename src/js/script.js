document.getElementById("loadMore").addEventListener("click", function () {
  document.getElementById("card-hidden").style.display = "flex";
  document.getElementById("hideMore").style.display = "flex";
  document.getElementById("card-hidden-notepad").style.display = "flex";
  document.getElementById("card-hidden-atom").style.display = "flex";

  this.style.display = "none";
});

document.getElementById("hideMore").addEventListener("click", function () {
  document.getElementById("card-hidden").style.display = "none";
  document.getElementById("card-hidden-notepad").style.display = "none";
  document.getElementById("card-hidden-atom").style.display = "none";
  document.getElementById("loadMore").style.display = "flex";
  this.style.display = "none";
});

document.getElementById("joinUs").addEventListener("click", function () {
  alert("Дякую за те, що ви долучились до спільноти ANTOOL.");
});

document.getElementById("exploreMore").addEventListener("click", function () {
  document.getElementById("hidden-picsArt").style.display = "flex";
  document.getElementById("hidden-illustrator").style.display = "flex";
  document.getElementById("hide-more").style.display = "block";

  this.style.display = "none";
});

document.getElementById("hide-more").addEventListener("click", function () {
  document.getElementById("hidden-picsArt").style.display = "none";
  document.getElementById("hidden-illustrator").style.display = "none";
  document.getElementById("exploreMore").style.display = "block";

  this.style.display = "none"
});
