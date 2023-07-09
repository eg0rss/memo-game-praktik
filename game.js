
  let firstCard = null;
  let remainCards=3;

const btn = document.querySelector("#btn");
const modal = document.querySelector("#modal");

function onCardClick(event) {
  const card = event.currentTarget;
  const img = card.querySelector("img");

  if (card.classList.contains("opened")) {
    return; //карточка уже открыта
  }

  card.classList.add("opened");//добавим к названию класса opened 
  if (firstCard === null ) {
    firstCard = card;
  } else {
    const firstCardImg = firstCard.querySelector("img");

    if (card.dataset.fruit === firstCard.dataset.fruit  ) {
      firstCard = null; // совпало, держи открытой
      remainCards--;
    } else {
      setTimeout(() => {
        //убираем из названия класса слово opened, чтобы карточки перевернулись обратно
        card.classList.remove("opened");
        firstCard.classList.remove("opened");
        firstCard = null;
      }, 1000);

    }
  }

  //если все карточки открыты, откроется модальное окно с задержкой
  setTimeout(() => {        
    if (remainCards===0){
      modal.style.display="flex";
  }
  }, 2000);
}

const cards = document.querySelectorAll(".card");
(function shuffle() {
  cards.forEach((card) => {
    let randomPos = Math.floor(Math.random() * 3);//генерация случайного расположения
    card.style.order = randomPos;
  });
})();
cards.forEach((card) => {
  card.addEventListener("click", onCardClick);
});

