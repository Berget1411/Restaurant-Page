import image from "./assets/cute_sushi.jpeg";

const makeHome = () => {
  const container = document.createElement("section");
  container.classList.add("home");
  const title = document.createElement("h2");
  title.textContent = "Best Sushi in Sweden";
  const subtitle = document.createElement("h3");
  subtitle.textContent = "Deliciously Prepared Daily Since 1923";
  const img = document.createElement("img");
  img.src = image;

  const thirdTitle = document.createElement("h3");
  thirdTitle.textContent = "Order online or visit us!";

  container.append(title, subtitle, img, thirdTitle);

  return container;
};

export default makeHome;
