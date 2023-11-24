document.addEventListener("DOMContentLoaded", function() {
    window.onscroll = function() {fixarCabeçalho()};
  
    var header = document.querySelector(".cabecalho");
    var sticky = header.offsetTop;
  
    function fixarCabeçalho() {
      if (window.scrollY > sticky) {
        header.classList.add("sticky");
      } else {
        header.classList.remove("sticky");
      }
    }
  });
  