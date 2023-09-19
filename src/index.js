import "./styles/main.scss";

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

content.append(makeHeader());
