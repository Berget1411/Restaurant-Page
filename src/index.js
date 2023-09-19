import "./styles/main.scss";
import makeHeader from "./header";

const content = document.querySelector(".content");

content.append(makeHeader());
