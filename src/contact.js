import imgSrc from "./assets/location.png";

const makeContact = () => {
  const contactContainer = document.createElement("div");
  contactContainer.classList.add("contact-container", "not-active");

  const contact = document.createElement("div");
  contact.classList.add("contact");
  const contactTitle = document.createElement("h2");
  contactTitle.textContent = "Contact Us!";
  const number = document.createElement("p");
  number.textContent = "+46 12 345 67 89";
  const email = document.createElement("p");
  number.textContent = "sakurasushi@gmail.com";
  contact.append(contactTitle, number, email);

  const location = document.createElement("div");
  location.classList.add("location");
  const locationTitle = document.createElement("h2");
  locationTitle.textContent = "Where to find us";
  const address = document.createElement("div");
  address.textContent = "Sankt Paulsgatan 2, 118 46 Stockholm";
  const openeningHours = document.createElement("p");
  openeningHours.textContent = "10 - 22";
  const locationImage = document.createElement("img");
  locationImage.src = imgSrc;

  location.append(locationTitle, address, openeningHours, locationImage);

  contactContainer.append(contact, location);

  return contactContainer;
};

export default makeContact;
