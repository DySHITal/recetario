const header = document.querySelector('header');

header.innerHTML = `<div id="nav">
<ul class="navbar">
    <li><a href="index.html"><img class="logo" src="../src/assets/imgs/logo.jpeg" alt="LOGO"></a></li>
    <li><a class="items" href="index.html">Inicio</a></li>
    <li><a class="items" href="recetas.html">Recetas</a></li>
    <li><a class="items" href="about.html">Acerca de mi</a></li>
    <li class="search-container"><a href=""><img class="search" id="buscar" src="../src/assets/imgs/search.svg" alt=""></li>
</ul>
</div>`