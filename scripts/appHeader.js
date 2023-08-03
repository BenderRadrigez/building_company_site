// functions
const makeCardOfExp = () => {
  const newDiv = createElementAndAddClass("div", "card-of-exp");

  const newNumber = createElementAndAddClass("span", "number"); 
  newNumber.textContent = "26";
  const newAge = createElementAndAddClass("span", "age"); 
  newAge.textContent = "лет";
  const newMarket = createElementAndAddClass("span", "market"); 
  newMarket.textContent = "на рынке";

  newDiv.append(newNumber, newAge, newMarket);
  return newDiv;
}

const createElementAndAddClass = (tagName, className) => {
  let element = document.createElement(tagName);
  element.classList.add(className);

  return element;
}

// works block

const expInConstr = document.querySelector(".exp-in-construction");
const cardOfExp = document.querySelector(".card-of-exp");

for(let i = 0; i < 4; i++) {
    expInConstr.appendChild(makeCardOfExp());
}