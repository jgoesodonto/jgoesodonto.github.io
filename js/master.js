document.querySelectorAll("a[href^='#']").forEach(function(anchor) {
  anchor.addEventListener(
    "click",
    function(e) {
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

window.addEventListener("scroll", function() {
  var yClinica = document.getElementById("clinicas").offsetTop;
  var yEquipe = document.getElementById("equipe").offsetTop;
  var yContato = document.getElementById("contato").offsetTop;
  console.log(window.pageYOffset, yClinica, yEquipe, yContato);
  if (window.pageYOffset < yClinica - 50) {
    document.getElementById("home_icon").style.backgroundPositionY = '48px';
    document.getElementById("home_icon").style.backgroundPositionY = '48px';
    document.getElementById("place_icon").style.backgroundPositionY = '0';
    document.getElementById("people_icon").style.backgroundPositionY = '0';
    document.getElementById("phone_icon").style.backgroundPositionY = '0';
    document.getElementById("inicio_link").style.color = '#7ba3ce';
    document.getElementById("clinicas_link").style.color = 'gray';
    document.getElementById("equipe_link").style.color = 'gray';
    document.getElementById("contato_link").style.color = 'gray';
  } else if (
    window.pageYOffset > yClinica - 50 &&
    window.pageYOffset < yEquipe - 50
  ) {
    document.getElementById("home_icon").style.backgroundPositionY = '0';
    document.getElementById("place_icon").style.backgroundPositionY = '48px';
    document.getElementById("people_icon").style.backgroundPositionY = '0';
    document.getElementById("phone_icon").style.backgroundPositionY = '0';
    document.getElementById("inicio_link").style.color = 'gray';
    document.getElementById("clinicas_link").style.color = '#7ba3ce';
    document.getElementById("equipe_link").style.color = 'gray';
    document.getElementById("contato_link").style.color = 'gray';
  } else if (
    window.pageYOffset > yEquipe - 50 &&
    window.pageYOffset < yContato - 50
  ) {
    document.getElementById("home_icon").style.backgroundPositionY = '0';
    document.getElementById("place_icon").style.backgroundPositionY = '0';
    document.getElementById("people_icon").style.backgroundPositionY = '48px';
    document.getElementById("phone_icon").style.backgroundPositionY = '0';
    document.getElementById("inicio_link").style.color = 'gray';
    document.getElementById("clinicas_link").style.color = 'gray';
    document.getElementById("equipe_link").style.color = '#7ba3ce';
    document.getElementById("contato_link").style.color = 'gray';
  } else if (window.pageYOffset > yContato - 50) {
    document.getElementById("home_icon").style.backgroundPositionY = '0';
    document.getElementById("place_icon").style.backgroundPositionY = '0';
    document.getElementById("people_icon").style.backgroundPositionY = '0';
    document.getElementById("phone_icon").style.backgroundPositionY = '48px';
    document.getElementById("inicio_link").style.color = 'gray';
    document.getElementById("clinicas_link").style.color = 'gray';
    document.getElementById("equipe_link").style.color = 'gray';
    document.getElementById("contato_link").style.color = '#7ba3ce';
  }
});
