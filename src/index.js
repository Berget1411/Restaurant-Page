import "./styles/main.scss";
import makeHome from "./home";
import icon from "./assets/github-mark.svg";

const content = document.querySelector(".content");

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

export default makeFooter;

const container = document.createElement("section");
container.classList.add("container");

container.append(makeHome());

content.append(makeHeader(), container, makeFooter());
