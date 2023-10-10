const header = document.querySelector('header');
const footer = document.querySelector('footer');

header.innerHTML = `<div id="nav">
<ul class="navbar">
    <li><a href="index.html"><img class="logo" src="../src/assets/imgs/logo.jpeg" alt="LOGO"></a></li>
    <li><a class="items" href="index.html">Inicio</a></li>
    <li><a class="items" href="recetas.html">Recetas</a></li>
    <li><a class="items" href="about.html">Acerca de mi</a></li>
    <li class="search-container"><a href=""><img class="search" id="buscar" src="../src/assets/imgs/search.svg" alt=""></li>
</ul>
</div>`

footer.innerHTML = `<div class="foot">
<span id="adm">adm</span>
<a href="https://github.com/DySHITal"><img class="social" src="../src/assets/imgs/github.svg" alt=""></a>
<a href="about.html"><img class="social" src="../src/assets/imgs/email.svg" alt=""></a>
</div>`