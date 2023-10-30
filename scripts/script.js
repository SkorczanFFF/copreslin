document.addEventListener("DOMContentLoaded", function () {
  const menuBtn = document.getElementById("menu");
  const menuItems = document.getElementById("menu-items");

  // Function to close the menu
  function closeMenu() {
    menuItems.classList.add("hidden");
    menuItems.classList.remove("flex");
    menuItems.classList.remove("lg:static");
    menuItems.classList.add("absolute");
  }

  // Event listener for the menu button
  menuBtn.addEventListener("click", function () {
    menuItems.classList.toggle("hidden");
    menuItems.classList.toggle("flex");
    menuItems.classList.toggle("lg:static");
    menuItems.classList.toggle("absolute");
  });

  // Event listener to close the menu when clicking outside of it
  document.addEventListener("click", function (event) {
    if (!menuItems.contains(event.target) && event.target !== menuBtn) {
      closeMenu();
    }
  });
});

window.addEventListener("resize", function () {
  const element = document.getElementById("hero-header");
  const windowWidth = window.innerWidth;

  if (windowWidth <= 640) {
    element.style.webkitTextStroke = "1px black";
  } else {
    element.style.webkitTextStroke = "initial"; // Reset to default if viewport width is greater than 640px
  }
});
