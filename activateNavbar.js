function displayNav() {
    let classNameExists = !!document.getElementById("linkify-me");
    document.getElementById("linkify-me").innerHTML = `<li class="nav-item">
      <a class="nav-link" href="/#about">About</a>
    </li>
    <li class="nav-item">
      <a class="nav-link disabled" href="/work">Work</a>
    </li>
    <li class="nav-item dropdown">
      <a class="nav-link dropdown-toggle" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
        Services
      </a>
      <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
        <li><a class="dropdown-item" href="/services/cloud">The Cesium Cloud</a></li>
        <li><a class="dropdown-item" href="/services/wormhole">Wormhole VPN</a></li>
        <li><a class="dropdown-item" href="/branding">Brand Gallery</a></li>
        <li><hr class="dropdown-divider"></li>
        <li><a class="dropdown-item" href="/services/">All Apps and Services</a></li>
        <li><a class="dropdown-item" href="https://cloud.cesium.gq/index.php/login">Cloud Login</a></li>
      </ul>
    </li>
    <li class="nav-item">
      <a class="nav-link disabled" href="/minecraft/">Minecraft</a>
    </li>
    <li class="nav-item">
    <a class="nav-link" href="/social">Find Me</a>
    </li>`;
    };

    function displayFoot() {
      let classNameExists = !!document.getElementById("footer-links");
      document.getElementById("footer-links").innerHTML = `<ul class="footer-links">
      <li class="footer-links-header">About</li>
      <li><a href="/#about" class="footer-links">This is Cesium</a></li>
      <li><a href="/branding" class="footer-links">Brand</a></li>
      <li><a href="/services/cloud" class="footer-links">The Cesium Cloud</a></li>
      <li><a href="/credits" class="footer-links">Credits</a></li>
    </ul>
    <ul class="footer-links">
      <li class="footer-links-header">More</li>
      <li><a href="https://www.discord.gg/nkrQ6fw" class="footer-links" target="_blank">Discord Server</a></li>
      <li><a href="https://github.com/CStafford-14" class="footer-links" target="_blank">GitHub</a></li>
      <li><a href="https://www.youtube.com/channel/UCR-Tl6__7d7jsjM1scgI6vA" class="footer-links" target="_blank">YouTube</a></li>
      <li><a href="https://odysee.com/@Cesium:e" class="footer-links" target="_blank">LBRY</a></li>
      <li><a href="/rickrolling" class="footer-links">Rickrolling</a></li>
    </ul>`;
      };
  displayNav();
  displayFoot();
