// Objeto con la información de las secciones del menú
const menuItems = [
  { text: "portada", href: "index.html" },
  { text: "inicio", href: "index1.html" },
  { text: "proyectos", href: "proyects.html" },
  { text: "estudios", href: "studies.html" },
  { text: "trabajos", href: "jobs.html" },
  { text: "juego", href: "game.html" },
];

// Obtén el elemento <ul> del menú
const menu = document.getElementById("menu");

// Itera sobre el objeto y crea las etiquetas <li>
menuItems.forEach(item => {
  const listItem = document.createElement("li");
  listItem.classList.add("navbar-item", "me-5");

  const link = document.createElement("a");
  link.textContent = item.text;
  link.href = item.href;
  link.classList.add("text-menu", "text-decoration-none");

  listItem.appendChild(link);
  menu.appendChild(listItem);
});


// FECHA
function obtenerFechaActual() {
    const dias = [
      "domingo",
      "lunes",
      "martes",
      "miércoles",
      "jueves",
      "viernes",
      "sábado",
    ];
    const meses = [
      "enero",
      "febrero",
      "marzo",
      "abril",
      "mayo",
      "junio",
      "julio",
      "agosto",
      "septiembre",
      "octubre",
      "noviembre",
      "diciembre",
    ];
    const fecha = new Date();
    const diaSemana = dias[fecha.getDay()];
    const dia = fecha.getDate();
    const mes = meses[fecha.getMonth()];
    const anio = fecha.getFullYear();
    return `${diaSemana}, ${dia} de ${mes} de ${anio}`;
  }
  function actualizarFechaActual() {
    const elementoFecha = document.getElementById("fecha-actual");
    elementoFecha.textContent = obtenerFechaActual();
  }
  actualizarFechaActual();
  setInterval(actualizarFechaActual, 1000);
  
  // TOOLTIPS
  var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'));
  var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
      return new bootstrap.Tooltip(tooltipTriggerEl);
  });
