import image from "./assets/cute_sushi.jpeg";

const makeHome = () => {
  const home = document.createElement("div");

  const title = document.createElement("h2");
  title.textContent = "Best Sushi in Stockholm";
  const subtitle = document.createElement("h3");
  subtitle.textContent = "Deliciously prepared daily since 1923";
  const img = document.createElement("img");
  img.src = image;

  const thirdTitle = document.createElement("h3");
  thirdTitle.textContent = "Order online or visit us!";

  home.append(title, subtitle, img, thirdTitle);

  return home;
};

export default makeHome;
