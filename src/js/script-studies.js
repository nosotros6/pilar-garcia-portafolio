document.addEventListener("DOMContentLoaded", function () {
  const skillsData = {
    softSkills: [
      "Creatividad",
      "Comunicación",
      "Aprendizaje continuo",
      "Resiliencia",
      "Resolución de problemas",
      "Trabajo en equipo",
      "Iniciativa",
      "Negociación",
      "Redacción",
      "Capacidad de análisis y síntesis",
    ],
    competences: [
      "CSS 3",
      "HTML 5",
      "Javascript",
      "Vue.Js",
      "Vuetify",
      "Bootstrap",
      "Sass",
      "Visual Studio Code",
      "Figma",
      // "Adobe XD",
      "Git y Github",
      "Optimal Workshop",
      "Canva",
      "Trello",
      "Salesforce",
      "Google Drive",
      "S.O. Mac y Windows",
    ],
    hobbies: [
      "Trekking",
      "Art Nails",
      "Acuarela",
      "Pintura al óleo",
      "Escritura",
      "Lectura de Tarot",
      "Costura de Pachtwork",
      "Bisutería",
      "Jardinería y Permacultura",
    ],
  };

  // Función para agregar elementos <li> al DOM
  function populateList(listId, items) {
    const list = document.getElementById(listId);

    items.forEach((item) => {
      const listItem = document.createElement("li");
      listItem.classList.add("skill-item");
      listItem.classList.add("my-3");
      listItem.textContent = item;
      list.appendChild(listItem);
    });
  }

  // Llamar a la función para agregar los elementos a las listas
  populateList("softSkillsList", skillsData.softSkills);
  populateList("competencesList", skillsData.competences);
  populateList("hobbiesList", skillsData.hobbies);

  // HEADER

  // Datos de las imágenes y enlaces
  const herramientas = [
    {
      enlace: "https://www.w3schools.com/css/",
      imagenSrc: "./assets/Img/icon-css.png",
      alt: "CSS",
      tooltip: "CSS",
    },
    {
      enlace: "https://www.w3schools.com/js/default.asp",
      imagenSrc: "./assets/Img/icon-html.png",
      alt: "HTML",
      tooltip: "HTML",
    },
    {
      enlace: "https://www.w3schools.com/html/default.asp",
      imagenSrc: "./assets/Img/icon-javascript.png",
      alt: "Javascript",
      tooltip: "Javascript",
    },
    {
      enlace: "https://vuejs.org/",
      imagenSrc: "./assets/Img/icon-vue.png",
      alt: "Vue",
      tooltip: "Vue.Js",
    },
    {
      enlace: "https://vuetifyjs.com/en/",
      imagenSrc: "./assets/Img/icon-vuetifyjs.png",
      alt: "Vuetify",
      tooltip: "Vuetify",
    },
    {
      enlace: "https://www.w3schools.com/sass/default.asp",
      imagenSrc: "./assets/Img/icon-sass.png",
      alt: "Sass",
      tooltip: "Sass",
    },
    {
      enlace: "https://getbootstrap.com/",
      imagenSrc: "./assets/Img/icon-bootstrap.png",
      alt: "Bootstrap",
      tooltip: "Bootstrap",
    },
    {
      enlace: "https://code.visualstudio.com/",
      imagenSrc: "./assets/Img/icon-vsc.png",
      alt: "Visual Studio Code",
      tooltip: "Visual Studio Code",
    },
    {
      enlace: "https://support.apple.com/es-cl/HT201260",
      imagenSrc: "./assets/Img/icon-mac.png",
      alt: "S.O. Mac",
      tooltip: "Mac",
    },
    {
      enlace: "https://www.microsoft.com/es-es/windows?r=1",
      imagenSrc: "./assets/Img/icon-windows.png",
      alt: "S.O. Windows",
      tooltip: "Windows",
    },
    {
      enlace: "https://es.babbel.com/pages/es-es/evergreen-multilanguage?bsc=gg_br_srh_spa_all&btp=default&gclid=Cj0KCQjwpompBhDZARIsAFD_Fp9UpL-sBOHc03710tittFKAbCT-EM5XEWVzBdSSy4EaLEWXHA8piHkaAgxnEALw_wcB&utm_content=20211926282_148348704934_kwd-96813789_660194858092&utm_medium=cpc&utm_source=google",
      imagenSrc: "./assets/Img/icon-babel.png",
      alt: "Babel",
      tooltip: "Babel",
    },
    {
      enlace: "https://www.figma.com/",
      imagenSrc: "./assets/Img/icon-figma.png",
      alt: "Figma",
      tooltip: "Figma",
    },
    // {
    //   enlace: "https://www.adobe.com/",
    //   imagenSrc: "./assets/Img/icon-xd.png",
    //   alt: "Adobe XD",
    //   tooltip: "Adobe XD",
    // },
    {
      enlace: "https://www.w3schools.com/git/default.asp",
      imagenSrc: "./assets/Img/icon-git.png",
      alt: "Git",
      tooltip: "Git",
    },
    {
      enlace: "https://github.com/",
      imagenSrc: "./assets/Img/icon-github.png",
      alt: "Github",
      tooltip: "Github",
    },
    {
      enlace: "https://firebase.google.com/?hl=es",
      imagenSrc: "./assets/Img/icon-firebase.png",
      alt: "Firebase",
      tooltip: "Firebase",
    },
    {
      enlace: "https://docs.prestashop-project.org/1.7-documentation/v/spanish/guia-usuario",
      imagenSrc: "./assets/Img/icon-prestashop.png",
      alt: "Prestashop",
      tooltip: "Prestashop",
    },
    {
      enlace: "https://www.salesforce.com/es/",
      imagenSrc: "./assets/Img/icon-salesforce.png",
      alt: "Salesforce",
      tooltip: "Salesforce",
    },
    {
      enlace: "https://www.optimalworkshop.com/",
      imagenSrc: "./assets/Img/icon-optimal.png",
      alt: "Optimal Workshop",
      tooltip: "Optimal Workshop",
    },
    {
      enlace: "https://trello.com/es",
      imagenSrc: "./assets/Img/icon-trello.png",
      alt: "Trello",
      tooltip: "Trello",
    },
    {
      enlace: "https://www.canva.com/",
      imagenSrc: "./assets/Img/icon-canva.png",
      alt: "Canva",
      tooltip: "Canva",
    },
    {
      enlace: "https://www.google.com/intl/es/drive/",
      imagenSrc: "./assets/Img/icon-drive.png",
      alt: "Google Drive",
      tooltip: "Google Drive",
    },
    // Agrega más elementos según sea necesario
  ];

  // Obtener el contenedor por su ID
  const toolsContainer = document.getElementById("toolsContainer");

  // Iterar sobre los datos y crear elementos <a> e <img> dinámicamente
  herramientas.forEach((herramienta) => {
    // Crear un elemento <a>
    const enlace = document.createElement("a");
    enlace.href = herramienta.enlace;
    enlace.target = "_blank";
    enlace.rel = "noopener noreferrer";

    // Crear un elemento <img> dentro del <a>
    const imagen = document.createElement("img");
    imagen.src = herramienta.imagenSrc;
    imagen.alt = herramienta.alt;
    imagen.dataset.bsToggle = "tooltip";
    imagen.dataset.bsPlacement = "top";
    imagen.title = herramienta.tooltip;

    // Agregar la imagen al enlace
    enlace.appendChild(imagen);

    // Agregar el enlace al contenedor
    toolsContainer.appendChild(enlace);
  });

  // Inicializar los tooltips
  const tooltipTriggerList = [].slice.call(
    toolsContainer.querySelectorAll('[data-bs-toggle="tooltip"]')
  );
  const tooltipList = tooltipTriggerList.map((tooltipTriggerEl) => {
    return new bootstrap.Tooltip(tooltipTriggerEl);
  });
});

