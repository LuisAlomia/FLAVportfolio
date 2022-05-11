const btnInicioUne = document.getElementById("btnInicioUne");
const inicioActive = document.getElementById("inicioActive");
const btnProjectUne = document.getElementById("btnProjectUne");
const projectActive = document.getElementById("projectActive");
const btnAboutUne = document.getElementById("btnAboutUne");
const aboutActive = document.getElementById("aboutActive");
const btnMenu = document.getElementById("btnMenu");
const menuHidden = document.getElementById("menuHidden");
const btnInicio = document.getElementById("btnInicio");
const inicioActiveHamb = document.getElementById("inicioActiveHamb");
const btnProject = document.getElementById("btnProject");
const projectActiveHamb = document.getElementById("projectActiveHamb");
const btnAbout = document.getElementById("btnAbout");
const aboutActiveHamb = document.getElementById("aboutActiveHamb");
const btnContactHeader = document.getElementById("btnContactHeader");
const hiddenBtnHeader = document.getElementById("hiddenBtnHeader");
const btnContactAbout = document.getElementById("btnContactAbout");
const hiddenBtnAbout = document.getElementById("hiddenBtnAbout");

/* Navegacion boton activo */

btnInicioUne.addEventListener("click", () => {
  inicioActive.classList.add("active");
  projectActive.classList.remove("active");
  aboutActive.classList.remove("active");
});

btnProjectUne.addEventListener("click", () => {
  projectActive.classList.add("active");
  inicioActive.classList.remove("active");
  aboutActive.classList.remove("active");
});

btnAboutUne.addEventListener("click", () => {
  aboutActive.classList.add("active");
  projectActive.classList.remove("active");
  inicioActive.classList.remove("active");
});

/* Menu hamburguesa */
let buttomHamburguesa = true;
btnMenu.addEventListener("click", () => {
  if (buttomHamburguesa) {
    btnMenu.src = "./assets/img/close.svg";
    buttomHamburguesa = false;
  } else {
    btnMenu.src = "./assets/img/menu.svg";
    buttomHamburguesa = true;
  }

  menuHidden.classList.toggle("hidden");
});

btnInicio.addEventListener("click", () => {
  inicioActiveHamb.classList.add("active");
  projectActiveHamb.classList.remove("active");
  aboutActiveHamb.classList.remove("active");

  if (buttomHamburguesa) {
    btnMenu.src = "./assets/img/close.svg";
    buttomHamburguesa = false;
  } else {
    btnMenu.src = "./assets/img/menu.svg";
    buttomHamburguesa = true;
  }

  menuHidden.classList.toggle("hidden");
});

btnProject.addEventListener("click", () => {
  projectActiveHamb.classList.add("active");
  inicioActiveHamb.classList.remove("active");
  aboutActiveHamb.classList.remove("active");

  if (buttomHamburguesa) {
    btnMenu.src = "./assets/img/close.svg";
    buttomHamburguesa = false;
  } else {
    btnMenu.src = "./assets/img/menu.svg";
    buttomHamburguesa = true;
  }

  menuHidden.classList.toggle("hidden");
});

btnAbout.addEventListener("click", () => {
  aboutActiveHamb.classList.add("active");
  projectActiveHamb.classList.remove("active");
  inicioActiveHamb.classList.remove("active");

  if (buttomHamburguesa) {
    btnMenu.src = "./assets/img/close.svg";
    buttomHamburguesa = false;
  } else {
    btnMenu.src = "./assets/img/menu.svg";
    buttomHamburguesa = true;
  }

  menuHidden.classList.toggle("hidden");
});

/* Botones de contacto */

btnContactHeader.addEventListener("click", () => {
  hiddenBtnHeader.classList.toggle("hidden");
});

btnContactAbout.addEventListener("click", () => {
  hiddenBtnAbout.classList.toggle("hidden");
});
