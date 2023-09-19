import "./styles/main.scss";
import makeHeader from "./header";
import makeHome from "./home";
import makeFooter from "./footer";

const content = document.querySelector(".content");

content.append(makeHeader(), makeHome(), makeFooter());
