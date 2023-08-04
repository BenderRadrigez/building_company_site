const message = document.querySelector(".message-for-call");
const nameUsr = document.querySelector(".name-inpt");
const phoneNumber = document.querySelector(".tel-inpt");
const email = document.querySelector(".email-inpt");
const question = document.querySelector(".theme-for-calling");
const userQuestion = document.querySelector(".questin-inpt");
const saveBtn = document.querySelector(".save-btn");
const waitingText = document.querySelector(".warning-text");

const arrUsers = localStorage.getItem("UserData")
  ? JSON.parse(localStorage.getItem("UserData"))
  : [];

saveBtn.addEventListener("click", () => {
  if (nameUsr.value !== "" && phoneNumber.value !== "" && email.value !== "") {
    let isRegularUser = false;
    for (let i = 0; i < arrUsers.length; i++) {
      if (
        email.value === arrUsers[i]["emailUsr"] &&
        phoneNumber.value === arrUsers[i]["telUsr"]
      ) {
        isRegularUser = true;
      }
    }

    !isRegularUser
      ? arrUsers.push({
          nameUsr: nameUsr.value,
          telUsr: phoneNumber.value,
          emailUsr: email.value,
          // save the last question for operator (save data about users)
          lastQuestionsUsr:
            question.value === "usr-question"
              ? userQuestion.value
              : question.value,
        })
      : null;

    !isRegularUser
      ? localStorage.setItem("UserData", JSON.stringify(arrUsers))
      : null;

    isRegularUser
      ? printMessage(
          `радыы снова видеть ${nameUsr.value}, ожидайте звонка`,
          "green"
        )
      : printMessage(
          `спасибо за обращение ${nameUsr.value}, ожидайте звонка`,
          "green"
        );

    clearInputs();

    waitingText.style.color = "red";
    setTimeout(goBacktoStart, 5000);
  } else {
    printMessage("введите имя, и номер телефона и почту", "red");
  }
});

function printMessage(text, color) {
  message.textContent = text;
  message.style.color = color;
}

function clearInputs() {
  nameUsr.value = "";
  phoneNumber.value = "";
  email.value = "";
  userQuestion.value = "";
}

function goBacktoStart() {
  location.href = "index.html";
}
