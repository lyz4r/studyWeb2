const propCardNumbers = Array.from(
  document.querySelectorAll(".page-sw__cur-page")
);

function switchPages(button, otherButton, cardRow, stateKey, pageNumber) {
  button.addEventListener("click", () => {
    changeCardNum(button, otherButton, cardRow, stateKey);
    cardRow.forEach((element) => {
      element.classList.add("none");
    });
    cardRow.slice(state[stateKey], state[stateKey] + 3).forEach((element) => {
      element.classList.remove("none");
    });
    pageNumber.innerHTML = `0${state[stateKey] + 1}-0${state[stateKey] + 3}`;
  });
}

switchPages(
  swLeftReviews,
  swRightReviews,
  Array.from(reviewsCardRow.children),
  "curFirstCardRev",
  propCardNumbers[1]
);
switchPages(
  swRightReviews,
  swLeftReviews,
  Array.from(reviewsCardRow.children),
  "curFirstCardRev",
  propCardNumbers[1]
);
switchPages(
  swLeftProperties,
  swRightProperties,
  Array.from(propertiesCardRow.children),
  "curFirstCardProp",
  propCardNumbers[0]
);
switchPages(
  swRightProperties,
  swLeftProperties,
  Array.from(propertiesCardRow.children),
  "curFirstCardProp",
  propCardNumbers[0]
);
