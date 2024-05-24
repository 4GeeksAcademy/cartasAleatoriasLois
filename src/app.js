/* los estilos y las imágenes necesarias.*/
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

/* window.onload: evento que se ejecuta cuando todo el contenido esté cargado en el navegador. function()=función anonima */
window.onload = function cargarPagina() {
  // Función para generar una nueva carta
  function generarCarta() {
    const palos = ["corazones", "espadas", "treboles", "diamantes"]; // Pongo const en vez de Let, xke son valores fijos, no se modiican.
    const valores = [
      "A",
      "2",
      "3",
      "4",
      "5",
      "6",
      "7",
      "8",
      "9",
      "10",
      "J",
      "Q",
      "K"
    ];

    // Palo y un valor aleatorio
    const paloAleatorio = palos[Math.floor(Math.random() * palos.length)];
    const valorAleatorio = valores[Math.floor(Math.random() * valores.length)];

    // Actualizo el contenido de la carta
    const baraja = document.getElementById("cartaAleatoria");
    baraja.className = `carta ${paloAleatorio}`;
    baraja.innerHTML = `
          <div class="top-left">${valorAleatorio}</div>
          <div class="center">${
            paloAleatorio === "corazones"
              ? "♥"
              : paloAleatorio === "espadas"
              ? "♠"
              : paloAleatorio === "treboles"
              ? "♣"
              : "♦"
          }</div>
          <div class="bottom-right">${valorAleatorio}</div>
      `;
  }

  // Genero una carta al cargar la página
  generarCarta();
};
