import "./styles/main.scss";
import makeHome from "./home";
import makeMenu from "./menu";
import makeContact from "./Contact";
import icon from "./assets/github-mark.svg";

const content = document.querySelector(".content");

const home = makeHome();
const menu = makeMenu();
const contact = makeContact();

const changeActiveNav = (id) => {
  let homeNav = document.querySelector(`#nav1`);
  let menuNav = document.querySelector(`#nav2`);
  let contactNav = document.querySelector(`#nav3`);

  if (id == "nav1") {
    homeNav.classList.add("active-color");
    menuNav.classList.remove("active-color");
    contactNav.classList.remove("active-color");
  } else if (id == "nav2") {
    homeNav.classList.remove("active-color");
    menuNav.classList.add("active-color");
    contactNav.classList.remove("active-color");
  } else {
    homeNav.classList.remove("active-color");
    menuNav.classList.remove("active-color");
    contactNav.classList.add("active-color");
  }
};

const makeHeader = () => {
  let header = document.createElement("header");
  let h1 = document.createElement("h1");
  h1.textContent = "Sakura Sushi";

  let nav = document.createElement("nav");
  let ul = document.createElement("ul");
  let listItems = ["Home", "Menu", "Contact"];
  let counter = 1;
  for (const item of listItems) {
    let li = document.createElement("li");
    li.textContent = item;
    li.setAttribute("id", `nav${counter}`);
    li.addEventListener("click", (e) => {
      if (e.target.textContent == "Home") {
        home.classList.remove("not-active");
        menu.classList.add("not-active");
        contact.classList.add("not-active");
      } else if (e.target.textContent == "Menu") {
        home.classList.add("not-active");
        menu.classList.remove("not-active");
        contact.classList.add("not-active");
      } else {
        home.classList.add("not-active");
        menu.classList.add("not-active");
        contact.classList.remove("not-active");
      }
      changeActiveNav(e.target.id);
    });

    ul.append(li);
    counter++;
  }

  header.append(h1, ul);

  return header;
};

const makeFooter = () => {
  const footer = document.createElement("footer");
  const text = document.createElement("p");
  text.textContent = "Copyright © 2023 Berget";
  const link = document.createElement("a");
  link.href = "https://github.com/Berget1411";
  const img = document.createElement("img");
  img.src = icon;

  link.append(img);

  footer.append(text, link);

  return footer;
};

const container = document.createElement("section");
container.classList.add("container");

container.append(home, menu, contact);

content.append(makeHeader(), container, makeFooter());
