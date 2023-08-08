// making mega menu

const showButton = document.getElementById("showButton");
const megaMenu = document.getElementById("megaMenu");

showButton.addEventListener("click", toggleMenu);

function toggleMenu() {
  if (megaMenu.style.display === "none") {
    megaMenu.style.display = "block";
  } else {
    megaMenu.style.display = "none";
  }
}
// end mega menu
// ------------------------------------------------------------------

// icon for the top

window.onscroll = function() {
  scrollFunction();
};

function scrollFunction() {
  var scrollToTopBtn = document.getElementById("scrollToTopBtn");

  if (document.body.scrollTop > 180 || document.documentElement.scrollTop > 180) {
    scrollToTopBtn.classList.add("show");
  } else {
    scrollToTopBtn.classList.remove("show");
  }
}

document.getElementById("scrollToTopBtn").addEventListener("click", function() {
  scrollToTop();
});

function scrollToTop() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}

// end icon for the top
// ----------------------------------------------------------------------------------------------