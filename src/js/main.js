let MobileMenuButton = document.getElementById("mobile-menu-button")
let MobileMenu = document.getElementById("mobile-menu")
let CloseMenu = document.getElementById("mobile-menu-close")

MobileMenuButton.addEventListener("click", () => {
    MobileMenu.classList.toggle("active")
})
CloseMenu.addEventListener("click", () => {
    MobileMenu.classList.remove("active")
})
