document.querySelectorAll("a[href^='#']").forEach( function(anchor) {
  anchor.addEventListener("click", function(e) {
      if (window.scrollTo) {
        var target = document.getElementById(
          this.getAttribute("href").substring(1)
        );
        e.preventDefault();
        window.scrollTo({ behavior: "smooth", top: target.offsetTop });
      }
    }.bind(anchor)
  );
});
