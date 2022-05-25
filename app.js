// Self-hiding navbar from W3Schools
function navHide() {
    var prevScrollpos = window.pageYOffset;
    window.onscroll = function() {
    var currentScrollPos = window.pageYOffset;
    if (prevScrollpos > currentScrollPos) {
        document.getElementById("navbar").style.top = "0";
       // document.getElementById("navbar").style.opacity = "1";
    } else {
        document.getElementById("navbar").style.top = "-14vh";
       // document.getElementById("navbar").style.opacity = "0";
    }
    prevScrollpos = currentScrollPos;
    } 
}

function scrollButtonActivater() {
    scrollButton = document.getElementById("return");

    window.onscroll = function() {
        if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
            document.getElementById("return").classList.add("showScrollButton");
          } else {
            document.getElementById("return").classList.remove("showScrollButton");
          }
    };

    // When the user clicks on the button, scroll to the top of the document
    function returnToTop() {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
    } 
};

function _calculateViewportWidth() {
    document.documentElement.style.setProperty('--viewport-width', (window.innerWidth));
  }
  // recalculate on resize
  window.addEventListener('resize', _calculateViewportWidth, false);
  // recalculate on dom load
  document.addEventListener('DOMContentLoaded', _calculateViewportWidth, false); 
  // recalculate on load (assets loaded as well)
  window.addEventListener('load', _calculateViewportWidth);

navHide();
scrollButtonActivater();