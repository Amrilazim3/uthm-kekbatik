const navbar = document.querySelector('.navbar')

async function fetchComponent() {
    await fetch('./partials/navbar.html')
        .then(res => res.text())
        .then(data => {
            navbar.innerHTML = data;
        })

    const footer = document.querySelector('.footer')

    await fetch('./partials/footer.html')
        .then(res => res.text())
        .then(data => {
            footer.innerHTML = data;
        })

    const menuBtn = document.getElementById('menu-btn')
    const menu = document.getElementById('menu')

    menuBtn.addEventListener('click', () => {
        menuBtn.classList.toggle('open')
        menu.classList.toggle('flex')
        menu.classList.toggle('hidden')
    })
}

fetchComponent();