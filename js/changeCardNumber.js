const swLeftReviews = document.getElementById("reviews__switch--left");
const swRightReviews = document.getElementById("reviews__switch--right");
const swLeftProperties = document.getElementById("properties__switch--left");
const swRightProperties = document.getElementById("properties__switch--right");
const propertiesCardRow = document.querySelector(".properties__card-row");
const reviewsCardRow = document.querySelector(".reviews__card-row");

let state = {
  curFirstCardRev: 0,
  curFirstCardProp: 0,
};

function changeCardNum(button, cardRow, stateKey) {
  if (!button.classList.contains("switch--disabled")) {
    const rightRegex = /\bright\b/;
    const leftRegex = /\bleft\b/;

    if (rightRegex.test(button.id)) {
      state[stateKey] += 1;
    } else if (leftRegex.test(button.id)) {
      state[stateKey] -= 1;
    }

    if (state[stateKey] === 0) {
      swLeftReviews.classList.add("switch--disabled");
      swLeftProperties.classList.add("switch--disabled");
    } else {
      swLeftReviews.classList.remove("switch--disabled");
      swLeftProperties.classList.remove("switch--disabled");
    }

    if (state[stateKey] === cardRow.length - 3) {
      swRightReviews.classList.add("switch--disabled");
      swRightProperties.classList.add("switch--disabled");
    } else {
      swRightReviews.classList.remove("switch--disabled");
      swRightProperties.classList.remove("switch--disabled");
    }

    console.log(state[stateKey]);
  }
}

if (state.curFirstCardRev === 0) {
  swLeftReviews.classList.add("switch--disabled");
}

if (state.curFirstCardProp === 0) {
  swLeftProperties.classList.add("switch--disabled");
}

const propertiesCards = Array.from(
  document.querySelectorAll(".properties__card")
);

propertiesCards.slice(3).forEach((element) => {
  element.classList.toggle("none");
});

const reviewsCards = Array.from(document.querySelectorAll(".reviews__card"));

reviewsCards.slice(3).forEach((element) => {
  element.classList.toggle("none");
});
