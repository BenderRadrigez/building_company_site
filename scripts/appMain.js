// functions
const createElementAndClass = (tagName, className) => {
  let element = document.createElement(tagName);
  element.classList.add(className);

  return element;
};

const createNewDiv = () => {
  const newDiv = createElementAndClass("div", "card-about-us");
  const newIcon = createElementAndClass("i", "fa-solid");
  newIcon.classList.add("fa-city");
  const newP = document.createElement("p");
  newP.textContent = "СТРОИТЕЛЬСТВО ОФИСНЫХ ЗДАНИЙ";

  newDiv.appendChild(newIcon);
  newDiv.appendChild(newP);
  return newDiv;
};

// works block

const big = document.querySelector(".big");
const small = document.querySelector(".small");

for (let i = 0; i < 3; i++) {
  small.appendChild(createNewDiv());
  big.appendChild(createNewDiv());
  big.appendChild(createNewDiv());
}