// Menu Toggle

function openNav() {
  document.getElementById("myNav").style.width = "100%";
}

function closeNav() {
  document.getElementById("myNav").style.width = "0%";
}

document.querySelector(".open").addEventListener("click", openNav);
document.querySelector(".close").addEventListener("click", closeNav);
