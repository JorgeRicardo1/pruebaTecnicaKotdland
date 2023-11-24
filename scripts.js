let headerMovileBtn = document.querySelector(".header__movile__button")
let headerMovilSideMenu = document.querySelector(".header__movile__sideMenu")

let headerMovilSideMenuBtn = document.querySelector(".header__movile__sideMenu__button")

headerMovileBtn.onclick = function(){
    headerMovilSideMenu.classList.toggle('active')
}

headerMovilSideMenuBtn.onclick = function(){
    headerMovilSideMenu.classList.toggle('active')
}