const btMenu = document.getElementById("bt-menu");

function toggleMenu()
{
    const nav = document.getElementById("nav-menu");
    nav.classList.toggle('active');
}

btMenu.addEventListener('click', toggleMenu);