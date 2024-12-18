document.getElementById("home-link").addEventListener("click", function(event) {
    event.preventDefault(); // Prevent default behavior of anchor tag
    window.scrollTo({ top: 0, behavior: 'smooth' }); // Scroll to the top of the page smoothly
  });
  