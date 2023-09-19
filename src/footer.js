import icon from "./assets/github-mark.svg";

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