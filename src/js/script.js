// Resaltar la página actual en la barra de navegación
const currentPage = window.location.pathname;
const navbarLinks = document.querySelectorAll(".navbar-item a");

navbarLinks.forEach(link => {
    if (link.getAttribute("href") === currentPage) {
        link.classList.add("active");
    }
});

// Evitar que la página actual enlace a sí misma
// const currentLink = document.querySelector(".navbar-item.active");
// if (currentLink) {
//     currentLink.addEventListener("click", (e) => {
//         e.preventDefault();
//     });
// }
document.addEventListener("DOMContentLoaded", function() {
  const currentPage = window.location.pathname;
  const navbarLinks = document.querySelectorAll(".navbar-item a");

  navbarLinks.forEach(link => {
      const linkPath = link.getAttribute("href");
      if (linkPath === currentPage) {
          link.classList.add("active");
          link.addEventListener("click", function(event) {
              event.preventDefault(); // Evita que el enlace redireccione
          });
      } else {
          link.classList.remove("active");
      }
  });
});



// Crear las etiquetas <li> y <a> desde JavaScript
const navbarList = document.querySelector(".navbar-list");

const sections = ["Inicio", "Proyectos", "Estudios", "Trabajos"];
const urls = ["index.html", "proyects.html", "studies.html", "jobs.html"];

for (let i = 0; i < sections.length; i++) {
    const li = document.createElement("li");
    li.classList.add("navbar-item", "me-5");

    const a = document.createElement("a");
    a.setAttribute("href", urls[i]);
    a.textContent = sections[i];
    a.classList.add("text-decoration-none");

    li.appendChild(a);
    navbarList.appendChild(li);
}

// Estilos para el texto de las etiquetas <li>
const liItems = document.querySelectorAll(".navbar-item");

liItems.forEach(item => {
    item.style.marginRight = "16px";
});

// Estilos para hover
liItems.forEach(item => {
    item.addEventListener("mouseenter", () => {
        item.style.color = "#ff4500";
    });
    item.addEventListener("mouseleave", () => {
        item.style.color = "white";
    });
});


// CARRUSEL
// Define un array con las rutas de las imágenes
// const imagenes = [
//     "./assets/img/carrusel-uno.svg",
//     "./assets/img/carrusel-dos.svg",
//     "./assets/img/carrusel-tres.svg",
//     "./assets/img/carrusel-cuatro.svg",
//     "./assets/img/carrusel-cinco.svg",
//     "./assets/img/carrusel-seis.svg",
//     "./assets/img/carrusel-siete.svg",
//     "./assets/img/carrusel-ocho.svg"
// ];
// const carouselInner = document.getElementById('carouselInner');
// imagenes.forEach((imagen, index) => {
//     const carouselItem = document.createElement('div');
//     carouselItem.classList.add('carousel-item');
//     if (index === 0) {
//         carouselItem.classList.add('active');
//     }

//     const img = document.createElement('img');
//     img.src = imagen;
//     img.className = 'd-block w-100';
//     img.alt = `Diapo ${index + 1}`;

//     carouselItem.appendChild(img);
//     carouselInner.appendChild(carouselItem);
// });

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

  // const secciones = [
  //   { texto: 'Inicio', enlace: 'index.html' },
  //   { texto: 'Proyectos', enlace: 'proyects.html' },
  //   { texto: 'Estudios', enlace: 'studies.html' },
  //   { texto: 'Trabajos', enlace: 'jobs.html' },
  // ];
  
  // // Obtener la referencia a la lista <ul> por su ID
  // const navbarList = document.getElementById('navbarList');
  
  // // Obtener la URL actual
  // const urlActual = window.location.href;
  
  // // Crear las etiquetas <li> y <a> dinámicamente
  // secciones.forEach(item => {
  //   const listItem = document.createElement('li');
  //   const link = document.createElement('a');
  
  //   link.href = item.enlace;
  //   link.textContent = item.texto;
  
  //   listItem.classList.add('navbar-item'); // Aplicar clase CSS para los estilos
  //   listItem.style.marginRight = '20px'; // Aplicar margen derecho
  //   if (item === secciones[secciones.length - 1]) {
  //       listItem.style.marginRight = '0'; // Eliminar margen derecho del último elemento
  //   }
  
  //   link.classList.add('navbar-link'); // Agregar clase a los enlaces si es necesario
  
  //   // Verificar si la URL actual coincide con el enlace de la sección actual
  //   if (urlActual.includes(item.enlace)) {
  //       listItem.style.color = '#ffffff'; // Cambiar color del texto
  //       listItem.style.pointerEvents = 'none'; // Bloquear el enlace
  //   }
  
  //   listItem.appendChild(link);
  //   navbarList.appendChild(listItem);
  // });