import "./styles/main.scss";
import makeHeader from "./header";
import makeHome from "./home";
import makeFooter from "./footer";

const content = document.querySelector(".content");

const container = document.createElement("section");
container.classList.add("container");

container.append(makeHome());

content.append(makeHeader(), container, makeFooter());
