// Загрузка страницы
document.addEventListener("DOMContentLoaded", async function () {
  console.log("Страница загружена");
  getResponse().then((data) => {
    render(data);
    console.log(data);
  });
});

// Получить всех клиентов
async function getResponse() {
  const response = await fetch("http://localhost:3000/api/clients/", {
    method: "GET",
    headers: { "Content-Type": "application/json" },
  });
  let data = await response.json();
  return data;
}

// Удалить клиента
async function deleteClient(id) {
  let response = await fetch("http://localhost:3000/api/clients/" + id, {
    method: "DELETE",
  });
  let data = await response.json();
  getResponse().then((data) => {
    let arrSt = [];
    arrSt = [...data];
    render(arrSt);
  });
  return data;
}

const tbody = document.querySelector(".clients__list");
const btnArrow1 = document.getElementById("btnArrow1");

const btnArrow2 = document.getElementById("btnArrow2");
const btnArrow3 = document.getElementById("btnArrow3");
const btnArrow4 = document.getElementById("btnArrow4");
const formAdd = document.getElementById("formAdd");

// Отрисовка таблицы
function render(obj) {
  let table = document.querySelector(".table");

  for (let i = 0; i < obj.length; i++) {
    let newclient = document.createElement("tr");
    newclient.classList.add("newclient");
    let tablecolumn1 = document.createElement("td");
    let tablecolumn2 = document.createElement("td");
    let tablecolumn3 = document.createElement("td");
    let tablecolumn3_1 = document.createElement("td");
    let tablecolumn3_2 = document.createElement("td");
    let tablecolumn4 = document.createElement("td");
    let tablecolumn4_1 = document.createElement("td");
    let tablecolumn4_2 = document.createElement("td");
    let tablecolumn5 = document.createElement("td");
    let tablecolumn6 = document.createElement("td");
    let tablecolumn6_1 = document.createElement("div");
    let tablecolumn6_2 = document.createElement("div");
    let buttonChange = document.createElement("button");
    let buttonDel = document.createElement("button");
    let iconbuttonChange = document.createElement("div");
    let iconbuttonDel = document.createElement("div");
    let boxCol5 = document.createElement("td");
    let boxCol6 = document.createElement("div");

    tablecolumn1.classList.add("tablecolumn", "tablecolumn1");
    tablecolumn2.classList.add("tablecolumn", "tablecolumn2");
    tablecolumn3.classList.add("tablecolumn", "tablecolumn3");
    tablecolumn4.classList.add("tablecolumn", "tablecolumn4");
    tablecolumn5.classList.add("tablecolumn", "tablecolumn5");
    tablecolumn6.classList.add("tablecolumn", "tablecolumn6");
    tablecolumn3_1.classList.add("tablecolumn3_1");
    tablecolumn3_2.classList.add("tablecolumn3_2");
    tablecolumn4_1.classList.add("tablecolumn4_1");
    tablecolumn4_2.classList.add("tablecolumn4_2");
    tablecolumn6_1.classList.add("tablecolumn6_1");
    tablecolumn6_2.classList.add("tablecolumn6_2");
    buttonChange.classList.add("buttonChange");
    buttonChange.setAttribute("data-id", obj[i].id);
    buttonDel.classList.add("buttonDel");
    buttonDel.setAttribute("data-id", obj[i].id);
    iconbuttonChange.classList.add("iconbuttonChange");
    iconbuttonDel.classList.add("iconbuttonDel");
    boxCol5.classList.add("boxCol5");
    boxCol6.classList.add("boxCol6");

    tablecolumn1.innerHTML = obj[i].id;
    tablecolumn2.innerHTML =
      obj[i].surname + " " + obj[i].name + " " + obj[i].lastName;
    tablecolumn3_1.innerHTML = moment(obj[i].createdAt).format("DD.MM.YYYY");
    tablecolumn3_2.innerHTML = moment(obj[i].createdAt).format("h:mm");
    tablecolumn4_1.innerHTML = moment(obj[i].updatedAt).format("DD.MM.YYYY");
    tablecolumn4_2.innerHTML = moment(obj[i].updatedAt).format("h:mm");
    buttonChange.innerHTML = "Изменить";
    buttonDel.innerHTML = "Удалить";

    tbody.append(newclient);
    newclient.append(tablecolumn1);
    newclient.append(tablecolumn2);
    newclient.append(tablecolumn3);
    newclient.append(tablecolumn4);
    newclient.append(tablecolumn5);
    newclient.append(tablecolumn6);
    tablecolumn3.append(tablecolumn3_1);
    tablecolumn3.append(tablecolumn3_2);
    tablecolumn4.append(tablecolumn4_1);
    tablecolumn4.append(tablecolumn4_2);
    boxCol6.append(tablecolumn6_1);
    boxCol6.append(tablecolumn6_2);
    tablecolumn6_1.append(buttonChange);
    tablecolumn6_2.append(buttonDel);
    buttonChange.append(iconbuttonChange);
    buttonDel.append(iconbuttonDel);
    tablecolumn5.append(boxCol5);
    tablecolumn6.append(boxCol6);

    let array = Object.values(obj[i]);

    for (let i = 0; i < array[3].length; i++) {
      if (i === 4) {
        if (array[3].length > 4) {
          let iconBox1 = document.createElement("div");
          iconBox1.classList.add("icon-box1");
          let number = array[3].length - 4;
          iconBox1.textContent = "+" + number;
          iconBox1.setAttribute(
            "style",
            "margin-right:0px; padding-top: 1px; padding-left: 1px; border: 1px solid #9873FF; border-radius: 50%; font-size: 10px;text-align: left; width:16px; height:16px; cursor:pointer"
          );

          boxCol5.append(iconBox1);
        }
        break;
      }
      // телефон-box
      if (array[3][i].type === "Телефон") {
        let iconBox = document.createElement("div");
        let icon = document.createElement("svg");
        iconBox.classList.add("icon-box");
        icon.classList.add("icon");
        iconBox.setAttribute("style", "margin-right: 7px");
        iconBox.setAttribute(
          "data-tippy-content",
          "Телефон: " + array[3][i].value
        );
        icon.innerHTML = `<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
    <g opacity="0.7">
    <circle cx="8" cy="8" r="8" fill="#9873FF"/>
    <path d="M11.56 9.50222C11.0133 9.50222 10.4844 9.41333 9.99111 9.25333C9.83556 9.2 9.66222 9.24 9.54222 9.36L8.84444 10.2356C7.58667 9.63556 6.40889 8.50222 5.78222 7.2L6.64889 6.46222C6.76889 6.33778 6.80444 6.16444 6.75556 6.00889C6.59111 5.51556 6.50667 4.98667 6.50667 4.44C6.50667 4.2 6.30667 4 6.06667 4H4.52889C4.28889 4 4 4.10667 4 4.44C4 8.56889 7.43556 12 11.56 12C11.8756 12 12 11.72 12 11.4756V9.94222C12 9.70222 11.8 9.50222 11.56 9.50222Z" fill="white"/>
    </g></svg>`;
        iconBox.append(icon);
        boxCol5.append(iconBox);
      }

      // доп-телефон-box
      if (array[3][i].type === "Доп.телефон") {
        let iconBox = document.createElement("div");
        let icon = document.createElement("svg");
        iconBox.classList.add("icon-box");
        icon.classList.add("icon");
        iconBox.setAttribute("style", "margin-right: 7px");
        iconBox.setAttribute(
          "data-tippy-content",
          "Доп.телефон: " + array[3][i].value
        );
        icon.innerHTML = `<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g opacity="0.7">
        <circle cx="8" cy="8" r="8" fill="#9873FF"/>
        <path d="M11.56 9.50222C11.0133 9.50222 10.4844 9.41333 9.99111 9.25333C9.83556 9.2 9.66222 9.24 9.54222 9.36L8.84444 10.2356C7.58667 9.63556 6.40889 8.50222 5.78222 7.2L6.64889 6.46222C6.76889 6.33778 6.80444 6.16444 6.75556 6.00889C6.59111 5.51556 6.50667 4.98667 6.50667 4.44C6.50667 4.2 6.30667 4 6.06667 4H4.52889C4.28889 4 4 4.10667 4 4.44C4 8.56889 7.43556 12 11.56 12C11.8756 12 12 11.72 12 11.4756V9.94222C12 9.70222 11.8 9.50222 11.56 9.50222Z" fill="white"/>
        </g></svg>`;
        iconBox.append(icon);
        boxCol5.append(iconBox);
      }

      // Email-box
      if (array[3][i].type === "Email") {
        let iconBox = document.createElement("div");
        let icon = document.createElement("svg");
        iconBox.classList.add("icon-box");
        icon.classList.add("icon");
        iconBox.setAttribute("style", "margin-right: 7px");
        iconBox.setAttribute(
          "data-tippy-content",
          "Email: " + array[3][i].value
        );
        icon.innerHTML = `<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path opacity="0.7" fill-rule="evenodd" clip-rule="evenodd" d="M8 16C12.4183 16 16 12.4183 16 8C16 3.58172 12.4183 0 8 0C3.58172 0 0 3.58172 0 8C0 12.4183 3.58172 16 8 16ZM4 5.75C4 5.3375 4.36 5 4.8 5H11.2C11.64 5 12 5.3375 12 5.75V10.25C12 10.6625 11.64 11 11.2 11H4.8C4.36 11 4 10.6625 4 10.25V5.75ZM8.424 8.1275L11.04 6.59375C11.14 6.53375 11.2 6.4325 11.2 6.32375C11.2 6.0725 10.908 5.9225 10.68 6.05375L8 7.625L5.32 6.05375C5.092 5.9225 4.8 6.0725 4.8 6.32375C4.8 6.4325 4.86 6.53375 4.96 6.59375L7.576 8.1275C7.836 8.28125 8.164 8.28125 8.424 8.1275Z" fill="#9873FF"/>
        </svg>`;
        iconBox.append(icon);
        boxCol5.append(iconBox);
      }
      // ВКонтакте-box
      if (array[3][i].type === "ВКонтакте") {
        let iconBox = document.createElement("div");
        let icon = document.createElement("svg");
        iconBox.classList.add("icon-box");
        icon.classList.add("icon");
        iconBox.setAttribute("style", "margin-right: 7px");
        iconBox.setAttribute(
          "data-tippy-content",
          "ВКонтакте: " + array[3][i].value
        );
        icon.innerHTML = `<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g opacity="0.7">
        <path d="M8 0C3.58187 0 0 3.58171 0 8C0 12.4183 3.58187 16 8 16C12.4181 16 16 12.4183 16 8C16 3.58171 12.4181 0 8 0ZM12.058 8.86523C12.4309 9.22942 12.8254 9.57217 13.1601 9.97402C13.3084 10.1518 13.4482 10.3356 13.5546 10.5423C13.7065 10.8371 13.5693 11.1604 13.3055 11.1779L11.6665 11.1776C11.2432 11.2126 10.9064 11.0419 10.6224 10.7525C10.3957 10.5219 10.1853 10.2755 9.96698 10.037C9.87777 9.93915 9.78382 9.847 9.67186 9.77449C9.44843 9.62914 9.2543 9.67366 9.1263 9.90707C8.99585 10.1446 8.96606 10.4078 8.95362 10.6721C8.93577 11.0586 8.81923 11.1596 8.43147 11.1777C7.60291 11.2165 6.81674 11.0908 6.08606 10.6731C5.44147 10.3047 4.94257 9.78463 4.50783 9.19587C3.66126 8.04812 3.01291 6.78842 2.43036 5.49254C2.29925 5.2007 2.39517 5.04454 2.71714 5.03849C3.25205 5.02817 3.78697 5.02948 4.32188 5.03799C4.53958 5.04143 4.68362 5.166 4.76726 5.37142C5.05633 6.08262 5.4107 6.75928 5.85477 7.38684C5.97311 7.55396 6.09391 7.72059 6.26594 7.83861C6.45582 7.9689 6.60051 7.92585 6.69005 7.71388C6.74734 7.57917 6.77205 7.43513 6.78449 7.29076C6.82705 6.79628 6.83212 6.30195 6.75847 5.80943C6.71263 5.50122 6.53929 5.30218 6.23206 5.24391C6.07558 5.21428 6.0985 5.15634 6.17461 5.06697C6.3067 4.91245 6.43045 4.81686 6.67777 4.81686L8.52951 4.81653C8.82136 4.87382 8.88683 5.00477 8.92645 5.29874L8.92808 7.35656C8.92464 7.47032 8.98521 7.80751 9.18948 7.88198C9.35317 7.936 9.4612 7.80473 9.55908 7.70112C10.0032 7.22987 10.3195 6.67368 10.6029 6.09801C10.7279 5.84413 10.8358 5.58142 10.9406 5.31822C11.0185 5.1236 11.1396 5.02785 11.3593 5.03112L13.1424 5.03325C13.195 5.03325 13.2483 5.03374 13.3004 5.04274C13.6009 5.09414 13.6832 5.22345 13.5903 5.5166C13.4439 5.97721 13.1596 6.36088 12.8817 6.74553C12.5838 7.15736 12.2661 7.55478 11.9711 7.96841C11.7001 8.34652 11.7215 8.53688 12.058 8.86523Z" fill="#9873FF"/>
        </g>
        </svg>
        `;
        iconBox.append(icon);
        boxCol5.append(iconBox);
      }
      // Facebook-box
      if (array[3][i].type === "Facebook") {
        let iconBox = document.createElement("div");
        let icon = document.createElement("svg");
        iconBox.classList.add("icon-box");
        icon.classList.add("icon");
        iconBox.setAttribute("style", "margin-right: 7px");
        iconBox.setAttribute(
          "data-tippy-content",
          "ВКонтакте: " + array[3][i].value
        );
        icon.innerHTML = `<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g opacity="0.7">
        <path d="M7.99999 0C3.6 0 0 3.60643 0 8.04819C0 12.0643 2.928 15.3976 6.75199 16V10.3775H4.71999V8.04819H6.75199V6.27309C6.75199 4.25703 7.94399 3.14859 9.77599 3.14859C10.648 3.14859 11.56 3.30121 11.56 3.30121V5.28514H10.552C9.55999 5.28514 9.24799 5.90362 9.24799 6.53815V8.04819H11.472L11.112 10.3775H9.24799V16C11.1331 15.7011 12.8497 14.7354 14.0879 13.2772C15.3261 11.819 16.0043 9.96437 16 8.04819C16 3.60643 12.4 0 7.99999 0Z" fill="#9873FF"/>
        </g>
        </svg>

        `;
        iconBox.append(icon);
        boxCol5.append(iconBox);
      }
    }

    // ПОПАП УДАЛИТЬ
    //Прослушивание попап кнопка "удалить клиента"
    let popupDeleteClient = document.getElementById("popupDeleteClient");
    buttonDel.addEventListener("click", function (e) {
      console.log("попап удалить открыт");
      popupDeleteClient.classList.add("fpopup__deleteClient-1");
      addLayer();
      let eventTarget = e.target;
      console.log(buttonDel);
      console.log(eventTarget.dataset.id);
      console.log(buttonDel.dataset.id);
      popupDeleteDell.setAttribute("data-id", eventTarget.dataset.id);
      console.log(popupDeleteDell);
    });

    //Кнопка X попап "удалить"
    let popupDeleteClientClose = document.getElementById(
      "popupDeleteClientClose"
    );
    popupDeleteClientClose.addEventListener("click", function (e) {
      console.log("popup Удалить закрыт Х");
      popupDeleteClient.classList.remove("fpopup__deleteClient-1");
      removeLayer();
    });

    //Кнопка "Отмена" попап удалить
    const popupdeletelink = document.getElementById("popupdeletelink");
    popupdeletelink.addEventListener("click", function (e) {
      console.log("popup удалить закрыт кнопка отмена");
      popupDeleteClient.classList.remove("fpopup__deleteClient-1");
      removeLayer();
    });

    //Прослушивание кнопки "Изменить"
    let formChangePopup = document.getElementById("formChange_popup");
    buttonChange.addEventListener("click", function (e) {
      console.log("изменить открыто");
      formChangePopup.classList.add("formChange_popup-1");
      addLayer();

      //Ищем ID
      let evTargetChange = e.target;

      //Присваиваем ID для titlle
      let formChangeSpan = document.getElementById("formChangeSpan");
      let ChangeSpan = document.createElement("span");
      ChangeSpan.classList.add("ChangeSpan");
      ChangeSpan.innerHTML = evTargetChange.dataset.id;
      formChangeSpan.append(ChangeSpan);

      getResponse().then((data) => {
        let arrSt = [];
        arrSt = [...data];
        let buttonCancelChange = document.getElementById("buttonCancelChange");
        buttonCancelChange.addEventListener("click", async function (e) {
          console.log("popup Удалить клиента попап");
          deleteClient(ChangeSpan.innerHTML);
          tbody.replaceChildren();
          clearFormChange();
          removeLayer();
        });
      });

      //Заполняем поля
      getResponse().then((data) => {
        let arrSt = [];
        arrSt = [...data];

        for (let i = 0; i < arrSt.length; i++) {
          if (evTargetChange.dataset.id === arrSt[i].id) {
            let inputSurname = document.getElementById("formChangeSurname");
            inputSurname.value = arrSt[i].surname;
            let inputName = document.getElementById("formChangeName");
            inputName.value = arrSt[i].name;
            let inputlastName = document.getElementById("formChangeLastName");
            inputlastName.value = arrSt[i].lastName;

            for (let j = 0; j < arrSt[i].contacts.length; j++) {
              let contact = arrSt[i].contacts[j].type;

              let inputChContacts = document.getElementById("inputChContacts");

              let inputBox = document.createElement("div");
              inputBox.classList.add("inputBox");

              let inputChInfo = document.createElement("input");
              inputChInfo.classList.add("inputInfo");
              inputChInfo.setAttribute("value", arrSt[i].contacts[j].value);
              inputChInfo.setAttribute("required", "");

              let inputInfoChClosed = document.createElement("input");
              inputInfoChClosed.classList.add("inputInfoClosed");
              inputInfoChClosed.setAttribute("id", "inputInfoChClosed");

              inputBox.append(inputChInfo);
              inputBox.append(inputInfoChClosed);

              inputChContacts.append(inputBox);

              function generateSelectCh1(inputBox, contact) {
                const generateSelect = `
             <select class="selectContacts" id ='selectContacts' value="${contact}" selected = "${contact}" >
              <option class="option" id="tel" value="Телефон" selected>Телефон</option>
              <option class="option" id="dopTel" value="Доп.телефон" >Доп.телефон</option>
              <option class="option" id="Email" value="Email" >Email</option>
              <option class="option" id="fb" value="Facebook" >Facebook</option>
              <option class="option" id="vk" value="ВКонтакте" >ВКонтакте</option
             </select>
                `;
                inputBox.insertAdjacentHTML("afterBegin", generateSelect);
              }
              function generateSelectCh2(inputBox, contact) {
                const generateSelect = `
             <select class="selectContacts" id ='selectContacts' value="${contact}" selected = "${contact}" >
              <option class="option" id="tel" value="Телефон" >Телефон</option>
              <option class="option" id="dopTel" value="Доп.телефон" selected>Доп.телефон</option>
              <option class="option" id="Email" value="Email" >Email</option>
              <option class="option" id="fb" value="Facebook" >Facebook</option>
              <option class="option" id="vk" value="ВКонтакте" >ВКонтакте</option
             </select>
                `;
                inputBox.insertAdjacentHTML("afterBegin", generateSelect);
              }
              function generateSelectCh3(inputBox, contact) {
                const generateSelect = `
             <select class="selectContacts" id ='selectContacts' value="${contact}" selected = "${contact}" >
              <option class="option" id="tel" value="Телефон" >Телефон</option>
              <option class="option" id="dopTel" value="Доп.телефон" >Доп.телефон</option>
              <option class="option" id="Email" value="Email" selected>Email</option>
              <option class="option" id="fb" value="Facebook" >Facebook</option>
              <option class="option" id="vk" value="ВКонтакте" >ВКонтакте</option
             </select>
                `;
                inputBox.insertAdjacentHTML("afterBegin", generateSelect);
              }
              function generateSelectCh4(inputBox, contact) {
                const generateSelect = `
             <select class="selectContacts" id ='selectContacts' value="${contact}" selected = "${contact}" >
              <option class="option" id="tel" value="Телефон" >Телефон</option>
              <option class="option" id="dopTel" value="Доп.телефон" >Доп.телефон</option>
              <option class="option" id="Email" value="Email" >Email</option>
              <option class="option" id="fb" value="Facebook" selected >Facebook</option>
              <option class="option" id="vk" value="ВКонтакте" >ВКонтакте</option
             </select>
                `;
                inputBox.insertAdjacentHTML("afterBegin", generateSelect);
              }
              function generateSelectCh5(inputBox, contact) {
                const generateSelect = `
             <select class="selectContacts" id ='selectContacts' value="${contact}" selected = "${contact}" >
              <option class="option" id="tel" value="Телефон" >Телефон</option>
              <option class="option" id="dopTel" value="Доп.телефон" >Доп.телефон</option>
              <option class="option" id="Email" value="Email" >Email</option>
              <option class="option" id="fb" value="Facebook"  >Facebook</option>
              <option class="option" id="vk" value="ВКонтакте" selected>ВКонтакте</option
             </select>
                `;
                inputBox.insertAdjacentHTML("afterBegin", generateSelect);
              }

              if (contact === "Телефон") {
                generateSelectCh1(inputBox, contact);
                console.log("совпадение тел");
              }
              if (contact === "Доп.телефон") {
                generateSelectCh2(inputBox, contact);
                console.log("совпадение Доп.телефо");
              }
              if (contact === "Email") {
                generateSelectCh3(inputBox, contact);
                console.log("совпадение Email");
              }
              if (contact === "Facebook") {
                generateSelectCh4(inputBox, contact);
                console.log("совпадение Facebook");
              }
              if (contact === "ВКонтакте") {
                generateSelectCh5(inputBox, contact);
                console.log("совпадение ВКонтакте");
              }

              inputBox.children[0].addEventListener("click", function (e) {
                console.log("изменене стрелки");
                if (e.target.classList.contains("selectContacts")) {
                  e.target.parentNode.children[0].classList.toggle(
                    "change-arrow"
                  );
                }
                if (e.target.value === "Телефон") {
                  inputChInfo.setAttribute(
                    "placeholder",
                    "Введите номер телефона"
                  );
                  inputChInfo.setAttribute("type", "number");
                }
                if (e.target.value === "Доп.телефон") {
                  inputChInfo.setAttribute(
                    "placeholder",
                    "Введите доп. номер телефона"
                  );
                  inputChInfo.setAttribute("type", "number");
                }
                if (e.target.value === "Email") {
                  inputChInfo.setAttribute("placeholder", "Введите Email");
                  inputChInfo.setAttribute("type", "text");
                }
                if (e.target.value === "Facebook") {
                  inputChInfo.setAttribute("placeholder", "Введите Facebook");
                  inputChInfo.setAttribute("type", "text");
                }
                if (e.target.value === "ВКонтакте") {
                  inputChInfo.setAttribute("placeholder", "Введите ВКонтакте");
                  inputChInfo.setAttribute("type", "text");
                }
              });

              inputInfoChClosed.addEventListener("click", function (e) {
                console.log("контакт удален");
                let evTarget = e.target;
                console.log(evTarget);
                evTarget.parentNode.remove();
              });
            }
          }
        }
      });

      // Добавляем контакт (форма Change)
      const buttonAddCh = document.getElementById("buttonChange-1");
      buttonAddCh.addEventListener("click", function (e) {
        console.log("Добавляем контакт (форма Change)");

        let inputBoxes2 = document.querySelectorAll(".inputBox");
        console.log(inputBoxes2.length);

        if (inputBoxes2.length < 10) {
          let inputBox = document.createElement("div");
          let selectContacts = document.createElement("div");

          let inputChInfo = document.createElement("input");
          let inputInfoChClosed = document.createElement("div");
          buttonAdd.classList.add("buttonAdd-1");
          inputBox.classList.add("inputBox");
          selectContacts.classList.add("selectContacts");

          let inputChContacts = document.getElementById("inputChContacts");

          inputChInfo.classList.add("inputInfo");

          inputChInfo.setAttribute("placeholder", "Введите контактные данные");
          inputChInfo.setAttribute("type", "Tell");
          inputChInfo.setAttribute("name", "Телефон");

          inputInfoChClosed.classList.add("inputInfoClosed");
          inputInfoChClosed.setAttribute("id", "inputInfoClosed");
          inputChContacts.append(inputBox);

          inputBox.append(inputChInfo);
          inputBox.append(inputInfoChClosed);
          generateSelect(inputBox);
        }
        inputInfoChClosed.addEventListener("click", function (e) {
          console.log("контакт удален");
          let evTarget = e.target;
          console.log(evTarget);
          evTarget.parentNode.remove();
        });
      });
    });

    //Очищаем попап "Изменить данные"
    function clearFormChange() {
      formChangePopup.classList.remove("formChange_popup-1");
      buttonChange.classList.remove("buttonAdd-1");
      formChangeName.value = "";
      formChangeSurname.value = "";
      formChangeLastName.value = "";
      formChangeSpan.replaceChildren();
      inputChContacts.replaceChildren();
    }

    let wrapper = document.getElementById("wrapper");
    wrapper.addEventListener("click", function (e) {
      clearFormAdd();
      clearFormChange();
      wrapper.classList.remove("wrapper");
    });

    //Кнопка X "Изменить"
    let formChangeClose = document.getElementById("formChangeClose");
    formChangeClose.addEventListener("click", function (e) {
      console.log("popup Изменить закрыт Х");
      clearFormChange();
      removeLayer();
    });
  }
  tippy("[data-tippy-content]");

  return table, obj;
}

const inputSearch = document.querySelector(".header__input"); //поле поиска

async function searchClient(inputSearchValue) {
  const response = await fetch(
    inputSearchValue`http://localhost:3000/api/clients?search=${inputSearchValue}`,
    {
      method: "GET",
      headers: { "Content-Type": "application/json" },
    }
  );
  let data = await response.json();
  return data;
}

inputSearch.addEventListener("input", async function (e) {
  let inputSearchValue = inputSearch.value;
  console.log(inputSearchValue);

  function addSearch() {
    searchClient(inputSearchValue).then((arr1) => {
      tbody.replaceChildren();
      console.log(arr1);
      render(arr1);
    });
  }
  setTimeout(addSearch, 300);
});

let dir;
//Функция сортировки
function sorting(arrObj, prop, dir = false) {
  let result = arrObj.sort(function (a, b) {
    let dirIf = a[prop] < b[prop];
    if (dir == true) dirIf = a[prop] > b[prop];
    if (dirIf == true) return -1;
  });

  return result;
}

//Сортировка по "id"
getResponse().then((data) => {
  let arrSt = [];
  arrSt = [...data];
  btnArrow1.addEventListener("click", function () {
    btnArrow1.classList.toggle("clients__arrow");
    btnArrow1.classList.toggle("clients__arrow-up");
    tbody.replaceChildren();
    console.log("фильтр id");
    dir = !dir;
    sorting(arrSt, "id", dir);
    render(arrSt);
  });
});

//Сортировка по "ФИО"
getResponse().then((data) => {
  let arrSt = [];
  arrSt = [...data];
  btnArrow2.addEventListener("click", function () {
    btnArrow2.classList.toggle("clients__arrow-2");
    btnArrow2.classList.toggle("clients__arrow-up2");
    tbody.replaceChildren();
    console.log("фильтр ФИО");
    dir = !dir;
    sorting(arrSt, "name", dir);
    render(arrSt);
  });
});

//Сортировка по "Дате создания"
getResponse().then((data) => {
  let arrSt = [];
  arrSt = [...data];
  btnArrow3.addEventListener("click", function () {
    btnArrow3.classList.toggle("clients__arrow");
    btnArrow3.classList.toggle("clients__arrow-up3");
    tbody.replaceChildren();
    console.log("фильтр Дата создания");
    dir = !dir;
    sorting(arrSt, "createdAt", dir);
    render(arrSt);
  });
});

//Сортировка по "Дате изменения"
getResponse().then((data) => {
  let arrSt = [];
  arrSt = [...data];
  btnArrow4.addEventListener("click", function () {
    btnArrow4.classList.toggle("clients__arrow");
    btnArrow4.classList.toggle("clients__arrow-up4");
    tbody.replaceChildren();
    console.log("фильтр Дата создания");
    dir = !dir;
    sorting(arrSt, "updatedAt", dir);
    render(arrSt);
  });
});

let wrapper = document.getElementById("wrapper");
wrapper.addEventListener("click", function (e) {
  clearFormAdd();
  wrapper.classList.remove("wrapper");
});

function addLayer() {
  wrapper.classList.add("wrapper");
}

function removeLayer() {
  wrapper.classList.remove("wrapper");
}

//Добавляем клиента
const popupButtonAdd = document.getElementById("clients__button");
const formAddPopup = document.getElementById("formAdd_popup");
popupButtonAdd.addEventListener("click", function (e) {
  console.log("popup открыт");
  formAddPopup.classList.add("formAdd_popup-1");
  addLayer();
});

//Очищаем попап
function clearFormAdd() {
  formAddPopup.classList.remove("formAdd_popup-1");
  buttonAdd.classList.remove("buttonAdd-1");
  formAddName.value = "";
  formAddSurname.value = "";
  formAddLastName.value = "";
  inputContacts.replaceChildren();
}

//Кнопка Отмена
const buttonCancel = document.getElementById("buttonCancel");
const formAdd_popup = document.getElementById("formAdd_popup");
buttonCancel.addEventListener("click", function (e) {
  console.log("popup закрыт");
  clearFormAdd();
  removeLayer();
});

//Кнопка X
const formAddpopupBoxclose = document.getElementById("formAddpopupBoxclose");
formAddpopupBoxclose.addEventListener("click", function (e) {
  console.log("popup закрыт Х");
  clearFormAdd();
  removeLayer();
});

// Создание select
function generateSelect(inputBox) {
  const generateSelect = `
  <select class="selectContacts"  name="selectName" >
    <option class="option" id="tel" value="Телефон">Телефон</option>
    <option class="option" id="dopTel" value="Доп.телефон">Доп.телефон</option>
    <option class="option" id="Email" value="Email">Email</option>
    <option class="option" id="fb" value="Facebook">Facebook</option>
    <option class="option" id="vk" value="ВКонтакте">ВКонтакте</option>
  </select>
`;
  inputBox.insertAdjacentHTML("afterBegin", generateSelect);
}

//Добовляем контакт
const buttonAdd = document.getElementById("buttonAdd");
const inputContacts = document.getElementById("inputContacts");
buttonAdd.addEventListener("click", function (e) {
  console.log("добавление контакта");

  let inputBoxes1 = document.querySelectorAll(".inputBox");
  console.log(inputBoxes1.length);

  if (inputBoxes1.length < 10) {
    let inputBox = document.createElement("div");
    let selectContacts = document.createElement("div");

    let inputInfo = document.createElement("input");
    let inputInfoClosed = document.createElement("div");
    buttonAdd.classList.add("buttonAdd-1");
    inputBox.classList.add("inputBox");
    selectContacts.classList.add("selectContacts");

    inputInfo.classList.add("inputInfo");

    inputInfo.setAttribute("placeholder", "Введите контактные данные");
    inputInfo.setAttribute("type", "Tell");
    inputInfo.setAttribute("name", "Телефон");
    inputInfo.setAttribute("required", "");

    inputInfoClosed.classList.add("inputInfoClosed");
    inputInfoClosed.setAttribute("id", "inputInfoClosed");
    inputContacts.append(inputBox);

    inputBox.append(inputInfo);
    inputBox.append(inputInfoClosed);
    generateSelect(inputBox);

    inputBox.children[0].addEventListener("click", function (e) {
      console.log("изменене стрелки");
      if (e.target.classList.contains("selectContacts")) {
        e.target.parentNode.children[0].classList.toggle("change-arrow");
      }
      if (e.target.value === "Телефон") {
        inputInfo.setAttribute("placeholder", "Введите номер телефона");
        inputInfo.setAttribute("type", "number");
      }
      if (e.target.value === "Доп.телефон") {
        inputInfo.setAttribute("placeholder", "Введите доп. номер телефона");
        inputInfo.setAttribute("type", "number");
      }
      if (e.target.value === "Email") {
        inputInfo.setAttribute("placeholder", "Введите Email");
        inputInfo.setAttribute("type", "text");
      }
      if (e.target.value === "Facebook") {
        inputInfo.setAttribute("placeholder", "Введите Facebook");
        inputInfo.setAttribute("type", "text");
      }
      if (e.target.value === "ВКонтакте") {
        inputInfo.setAttribute("placeholder", "Введите ВКонтакте");
        inputInfo.setAttribute("type", "text");
      }
    });
    inputInfoClosed.addEventListener("click", function (e) {
      console.log("контакт удален");
      let evTarget = e.target;
      console.log(evTarget);
      evTarget.parentNode.remove();
    });
  } else {
    console.log("контактов больше 12");
  }
});

const formAddSurname = document.getElementById("formAddSurname");
const formAddName = document.getElementById("formAddName");
const formAddLastName = document.getElementById("formAddLastName");

//Прослушивание формы отправки
formAdd.addEventListener("submit", function (e) {
  e.preventDefault();
  tbody.replaceChildren();
  console.log("форма отправлена");
  let inputBoxes = document.querySelectorAll(".inputBox");

  let contactsList = [];
  let arrList = [];
  for (let i = 0; i < inputBoxes.length; i++) {
    let input_Box = inputBoxes[i];
    obj = {
      type: input_Box.children[0].value,
      value: input_Box.children[1].value,
    };
    contactsList.push(obj);
  }
  arrList = {
    name: formAddName.value.trim(),
    surname: formAddSurname.value.trim(),
    lastName: formAddLastName.value.trim(),
    contacts: contactsList,
  };

  let TodoItem;
  async function sendServer() {
    const response = await fetch("http://localhost:3000/api/clients/", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        name: formAddName.value.trim(),
        surname: formAddSurname.value.trim(),
        lastName: formAddLastName.value.trim(),
        contacts: contactsList,
      }),
    });
    TodoItem = await response.json();
    console.log(TodoItem);
  }
  sendServer();
  getResponse().then((data) => {
    render(data);
    console.log(data);
  });
  formAddPopup.classList.remove("formAdd_popup-1");

  formAddName.value = "";
  formAddSurname.value = "";
  formAddLastName.value = "";

  console.log(arrList);

  clearFormAdd();
  wrapper.classList.remove("wrapper");
});

const formChangeSurname = document.getElementById("formChangeSurname");
const formChangeName = document.getElementById("formChangeName");
const formChangeLastName = document.getElementById("formChangeLastName");

// Прослушивание формы отправки Change
const buttonAddChSave = document.getElementById("buttonAddCh_save");

let formChange = document.getElementById("formChange");
formChange.addEventListener("submit", function (e) {
  let ChangeSpan = document.querySelector(".ChangeSpan");
  console.log(ChangeSpan);
  tbody.replaceChildren();
  console.log("сохраняем форму Change");
  let inputBoxes = document.querySelectorAll(".inputBox");
  console.log(inputBoxes);

  let contactsList = [];
  let arrList = [];
  for (let i = 0; i < inputBoxes.length; i++) {
    let input_Box = inputBoxes[i];
    obj = {
      type: input_Box.children[0].value,
      value: input_Box.children[1].value,
    };
    contactsList.push(obj);
  }

  arrList = {
    name: formChangeName.value.trim(),
    surname: formChangeSurname.value.trim(),
    lastName: formChangeLastName.value.trim(),
    id: ChangeSpan.innerHTML,
    contacts: contactsList,
  };
  console.log(arrList);

  async function sendServerChange(id) {
    await fetch("http://localhost:3000/api/clients/" + id, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        surname: formChangeSurname.value.trim(),
        name: formChangeName.value.trim(),
        lastName: formChangeLastName.value.trim(),
        id: ChangeSpan.innerHTML,
        contacts: contactsList,
      }),
    });
  }
  sendServerChange(ChangeSpan.innerHTML);

  getResponse().then((data) => {
    render(data);
    console.log(data);
  });
});

let popupDeleteDell = document.getElementById("popupDeleteDell");
// Кнопка удалить, попап "удалить"
getResponse().then((data) => {
  let arrSt = [];
  arrSt = [...data];
  popupDeleteDell.addEventListener("click", async function (e) {
    let eventTarget1 = e.target;
    console.log(popupDeleteDell);
    console.log(eventTarget1.dataset.id);
    deleteClient(eventTarget1.dataset.id);
    tbody.replaceChildren();

    popupDeleteClient.classList.remove("fpopup__deleteClient-1");
    removeLayer();
  });
});
