  // car options
  const cardArray = [
    {
      name: "avatar",
      img: "./assets/img-game/avatar.png",
    },
    {
      name: "avatar",
      img: "./assets/img-game/avatar.png",
    },
    {
      name: "biobio",
      img: "./assets/img-game/biobio.png",
    },
    {
      name: "biobio",
      img: "./assets/img-game/biobio.png",
    },
    {
      name: "camara",
      img: "./assets/img-game/camara.png",
    },
    {
      name: "camara",
      img: "./assets/img-game/camara.png",
    },
    {
      name: "caqui",
      img: "./assets/img-game/caqui.png",
    },
    {
      name: "caqui",
      img: "./assets/img-game/caqui.png",
    },
    {
      name: "fall",
      img: "./assets/img-game/fall.png",
    },
    {
      name: "fall",
      img: "./assets/img-game/fall.png",
    },
    {
      name: "flor",
      img: "./assets/img-game/flor.png",
    },
    {
      name: "flor",
      img: "./assets/img-game/flor.png",
    },
    {
      name: "gato",
      img: "./assets/img-game/gato.png",
    },
    {
      name: "gato",
      img: "./assets/img-game/gato.png",
    },
    {
      name: "girl",
      img: "./assets/img-game/girl.png",
    },
    {
      name: "girl",
      img: "./assets/img-game/girl.png",
    },
    {
      name: "mariposa",
      img: "./assets/img-game/mariposa.png",
    },
    {
      name: "mariposa",
      img: "./assets/img-game/mariposa.png",
    },
    {
      name: "pizza",
      img: "./assets/img-game/pizza.png",
    },
    {
      name: "pizza",
      img: "./assets/img-game/pizza.png",
    },
    {
      name: "postre",
      img: "./assets/img-game/postre.png",
    },
    {
      name: "postre",
      img: "./assets/img-game/postre.png",
    },
    {
      name: "seed",
      img: "./assets/img-game/seed.png",
    },
    {
      name: "seed",
      img: "./assets/img-game/seed.png",
    },
    {
      name: "tarde",
      img: "./assets/img-game/tarde.png",
    },
    {
      name: "tarde",
      img: "./assets/img-game/tarde.png",
    },
    {
      name: "web",
      img: "./assets/img-game/web.png",
    },
    {
      name: "web",
      img: "./assets/img-game/web.png",
    },
  ];

  cardArray.sort(() => 0.5 - Math.random());

  const grid = document.querySelector(".grid");
  const resultDisplay = document.querySelector("#result");
  var cardsChosen = [];
  var cardsChosenId = [];
  var cardsWon = [];

  // create your board
  function createBoard() {
    for (let i = 0; i < cardArray.length; i++) {
      var card = document.createElement("img");
      card.setAttribute("src", "./assets/img-game/blank.png");
      card.setAttribute("data-id", i);
      card.addEventListener("click", flipCard);
      grid.appendChild(card);
    }
  }

  // check for matches
  function checkForMatch() {
    var cards = document.querySelectorAll("img");
    const optionOneId = cardsChosenId[0];
    const optionTwoId = cardsChosenId[1];
    if (cardsChosen[0] === cardsChosen[1]) {
      alert("Bien!");
      cards[optionOneId].setAttribute("src", "./assets/img-game/white.jpg");
      cards[optionTwoId].setAttribute("src", "./assets/img-game/white.jpg");
      cardsWon.push(cardsChosen);
    } else {
      cards[optionOneId].setAttribute("src", "./assets/img-game/blank.png");
      cards[optionTwoId].setAttribute("src", "./assets/img-game/blank.png");
      alert("Intenta de nuevo");
    }
    cardsChosen = [];
    cardsChosenId = [];
    resultDisplay.textContent = cardsWon.length;
    if (cardsWon.length === cardArray.length / 2) {
      resultDisplay.textContent = " ¡Ganaste! ¡Felicidades!";
    }
  }

  // flip your card
  function flipCard() {
    var cardId = this.getAttribute("data-id");
    cardsChosen.push(cardArray[cardId].name);
    cardsChosenId.push(cardId);
    this.setAttribute("src", cardArray[cardId].img);
    if (cardsChosen.length === 2) {
      setTimeout(() => checkForMatch(), 500);
    }
  }

  createBoard();

  function resetBoard() {
    cardsChosen = [];
    cardsChosenId = [];
    cardsWon = [];

    // Cambiar todas las imágenes a blanco nuevamente
    var cards = document.querySelectorAll("img");
    cards.forEach((card) => {
      card.setAttribute("src", "./assets/img-game/blank.png");
    });

    // Restablecer el marcador a 0
    // resultDisplay.textContent = "0";

    // Restablecer el marcador a 0
    if (resultDisplay) {
      resultDisplay.textContent = "0";
    }
  }

  resetBoard();

