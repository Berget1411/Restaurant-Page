import "./styles/main.scss";
import makeHeader from "./header";
import makeHome from "./home";
const content = document.querySelector(".content");

content.append(makeHeader(), makeHome());
