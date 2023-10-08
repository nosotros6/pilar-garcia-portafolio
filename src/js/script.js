// Array con los nombres de las secciones y sus rutas HTML
const secciones = [
    { texto: 'Inicio', enlace: 'index.html' },
    { texto: 'Proyectos', enlace: 'proyects.html' },
    { texto: 'Estudios', enlace: 'studies.html' },
    { texto: 'Trabajos', enlace: 'jobs.html' },
    { texto: 'Galería', enlace: 'gallery.html' }
];

// Obtener la referencia a la lista <ul> por su ID
const navbarList = document.getElementById('navbarList');

// Crear las etiquetas <li> y <a> dinámicamente
secciones.forEach(item => {
    const listItem = document.createElement('li');
    const link = document.createElement('a');

    link.href = item.enlace;
    link.textContent = item.texto;

    listItem.classList.add('navbar-item'); // Aplicar clase CSS para los estilos
    listItem.style.marginRight = '20px'; // Aplicar margen derecho
    if (item === secciones[secciones.length - 1]) {
        listItem.style.marginRight = '0'; // Eliminar margen derecho del último elemento
    }

    link.classList.add('navbar-link'); // Agregar clase a los enlaces si es necesario

    listItem.appendChild(link);
    navbarList.appendChild(listItem);
});
// CARRUSEL
// Define un array con las rutas de las imágenes
const imagenes = [
    "./assets/img/carrusel1.png",
    "./assets/img/carrusel2.png",
    "./assets/img/carrusel3.png",
    "./assets/img/carrusel4.png",
    "./assets/img/carrusel5.png",
    "./assets/img/carrusel6.png",
    "./assets/img/carrusel7.png",
    "./assets/img/carrusel8.png"
];

// Obtén la referencia al elemento del carrusel interior por su ID
const carouselInner = document.getElementById('carouselInner');

// Itera a través del array de imágenes y crea dinámicamente los elementos del carrusel
imagenes.forEach((imagen, index) => {
    const carouselItem = document.createElement('div');
    carouselItem.classList.add('carousel-item');
    if (index === 0) {
        carouselItem.classList.add('active');
    }

    const img = document.createElement('img');
    img.src = imagen;
    img.className = 'd-block w-100';
    img.alt = `Diapo ${index + 1}`;

    carouselItem.appendChild(img);
    carouselInner.appendChild(carouselItem);
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
  