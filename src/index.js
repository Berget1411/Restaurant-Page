import "./styles/main.scss";
import makeHome from "./home";
import makeMenu from "./menu";
import icon from "./assets/github-mark.svg";

const content = document.querySelector(".content");

const home = makeHome();
const menu = makeMenu();

const makeHeader = () => {
  let header = document.createElement("header");
  let h1 = document.createElement("h1");
  h1.textContent = "Sakura Sushi";

  let nav = document.createElement("nav");
  let ul = document.createElement("ul");
  let listItems = ["Home", "Menu", "Contact"];
  for (const item of listItems) {
    let li = document.createElement("li");
    li.textContent = item;
    li.addEventListener("click", (e) => {
      if (e.target.textContent == "Home") {
        home.classList.remove("not-active");
      } else if (e.target.textContent == "Menu") {
        home.classList.add("not-active");
        menu.classList.remove("not-active");
      } else {
        home.classList.add("not-active");
      }
    });

    ul.append(li);
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

container.append(home, menu);

content.append(makeHeader(), container, makeFooter());
