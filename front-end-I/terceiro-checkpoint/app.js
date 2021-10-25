const btMenu = document.getElementById('bt-menu');
const nav = document.getElementById('menu');

function toggleMenu()
{
    return nav.classList.toggle('active');
}

btMenu.addEventListener('click', toggleMenu);