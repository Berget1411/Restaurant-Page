const images = require.context("./assets/sushi_dishes", true);

const imageList = images.keys().map((image) => images(image));

const makeMenu = () => {
  const dishes = [
    {
      title: "Sashimi platter",
      desc: "Assorted slices of the freshest raw fish, served with soy sauce and wasabi",
      imgSrc: imageList[5],
    },
    {
      title: "Salmon Nigiri",
      desc: "Slices of fresh salmon atop hand-pressed vinegared rice.",
      imgSrc: imageList[3],
    },
    {
      title: "Tuna Nigiri",
      desc: "Tender, raw tuna on bite-sized rice beds",
      imgSrc: imageList[7],
    },
    {
      title: "California Roll",
      desc: "Avocado, crab, and cucumber rolled in nori and rice, with sesame seeds.",
      imgSrc: imageList[0],
    },
    {
      title: "Spicy Tuna Roll",
      desc: "Spicy tuna, cucumber, and mayonnaise, rolled in nori and rice.",
      imgSrc: imageList[6],
    },
    {
      title: "Salmon Temaki",
      desc: "Fresh salmon, avocado, and rice wrapped in a crispy nori cone.",
      imgSrc: imageList[4],
    },
    {
      title: "Eel Temaki",
      desc: "Grilled eel, cucumber, and rice in a hand-rolled seaweed cone.",
      imgSrc: imageList[2],
    },
    {
      title: "Chirashi Bowl",
      desc: "A colorful bowl of sushi rice topped with sashimi, vegetables, and pickles.",
      imgSrc: imageList[1],
    },
  ];

  const menu = document.createElement("div");
  menu.classList.add("menu-container", "not-active");
  const menuTitle = document.createElement("h2");

  for (const dish of dishes) {
    const newDish = document.createElement("div");
    newDish.classList.add("dish");
    for (const [key, value] of Object.entries(dish)) {
      if (key == "imgSrc") {
        const img = document.createElement("img");
        img.src = value;
        newDish.append(img);
      } else if (key == "title") {
        const title = document.createElement("h3");
        title.textContent = value;
        newDish.append(title);
      } else {
        const desc = document.createElement("p");
        desc.textContent = value;
        newDish.append(desc);
      }

      menu.append(newDish);
    }
  }

  return menu;
};

export default makeMenu;
