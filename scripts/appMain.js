// ----------- functions ----------

// возвращает созданный эллемент с присвоенным классом
const createElementAndClass = (tagName, className) => {
  const element = document.createElement(tagName);
  element.classList.add(className);

  return element;
};

// возвращает карточку "about-us" с уже готовым контентом и классами
const createNewCard = (iconClass1, iconClass2, link, textP) => {
  const newA = createElementAndClass("a", "card-about-us");
  newAttribute = document.createAttribute("href");
  newAttribute.value = link;
  newA.setAttributeNode(newAttribute);
  const newIcon = createElementAndClass("i", "icon");
  newIcon.classList.add(iconClass1, iconClass2);
  const newP = document.createElement("p");
  newP.textContent = textP;

  newA.appendChild(newIcon);
  newA.appendChild(newP);
  return newA;
};

// якобы оправляет запрос на сервер для получения объектов
// возвращает массив объектов для наполнения карточек
const makeArray = (lengthArray) => {
  let array = [];

  for (let i = 0; i < lengthArray; i++) {
    // якобы получение объекта с сервера
    let someObjFromServer = {
      iconClass1: "fa-solid",
      iconClass2: "fa-city",
      link: "#",
      textP: "СТРОИТЕЛЬСТВО ОФИСНЫХ ЗДАНИЙ",
    };
    array[i] = someObjFromServer;
  }
  return array;
};

// создание полей по массиву
const makerCards = (square, array) => {
  for (let i = 0; i < array.length; i++) {
    let obj = array[i];
    square.appendChild(createNewCard(obj.iconClass1, obj.iconClass2, obj.link, obj.textP));
  }
};

// ---------- works block ----------
// получаем поля которые нужно заполнить карточками
const big = document.querySelector(".big");
const small = document.querySelector(".small");
// создаем массивы объектов с заданной длинной
const arrObjsForSmall = makeArray(3);
const arrObjsForBog = makeArray(6);
// создаем карточки по обьектам в нужных полях
makerCards(small, arrObjsForSmall);
makerCards(big, arrObjsForBog);