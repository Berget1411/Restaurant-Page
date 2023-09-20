(self["webpackChunkrestaurant_page"] = self["webpackChunkrestaurant_page"] || []).push([["bundle"],{

/***/ "./src/Contact.js":
/*!************************!*\
  !*** ./src/Contact.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _assets_location_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./assets/location.png */ "./src/assets/location.png");

var makeContact = function makeContact() {
  var contactContainer = document.createElement("div");
  contactContainer.classList.add("contact-container", "not-active");
  var contact = document.createElement("div");
  contact.classList.add("contact");
  var contactTitle = document.createElement("h2");
  contactTitle.textContent = "Contact Us!";
  var number = document.createElement("p");
  number.textContent = "+46 12 345 67 89";
  var email = document.createElement("p");
  email.textContent = "sakurasushi@gmail.com";
  contact.append(contactTitle, number, email);
  var location = document.createElement("div");
  location.classList.add("location");
  var locationTitle = document.createElement("h2");
  locationTitle.textContent = "Where to find us";
  var address = document.createElement("p");
  address.textContent = "Sankt Paulsgatan 2, 118 46 Stockholm";
  var openeningHours = document.createElement("p");
  openeningHours.textContent = "We are open 10 - 22 everyday!";
  var locationImage = document.createElement("img");
  locationImage.src = _assets_location_png__WEBPACK_IMPORTED_MODULE_0__;
  location.append(locationTitle, address, openeningHours, locationImage);
  contactContainer.append(contact, location);
  return contactContainer;
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (makeContact);

/***/ }),

/***/ "./src/home.js":
/*!*********************!*\
  !*** ./src/home.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _assets_cute_sushi_jpeg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./assets/cute_sushi.jpeg */ "./src/assets/cute_sushi.jpeg");

var makeHome = function makeHome() {
  var home = document.createElement("div");
  home.classList.add("home-container");
  var title = document.createElement("h2");
  title.textContent = "Best Sushi in Stockholm";
  var subtitle = document.createElement("h3");
  subtitle.textContent = "Deliciously prepared daily since 1923";
  var img = document.createElement("img");
  img.src = _assets_cute_sushi_jpeg__WEBPACK_IMPORTED_MODULE_0__;
  var thirdTitle = document.createElement("h3");
  thirdTitle.textContent = "Order online or visit us!";
  home.append(title, subtitle, img, thirdTitle);
  return home;
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (makeHome);

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _styles_main_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles/main.scss */ "./src/styles/main.scss");
/* harmony import */ var _home__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./home */ "./src/home.js");
/* harmony import */ var _menu__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./menu */ "./src/menu.js");
/* harmony import */ var _Contact__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Contact */ "./src/Contact.js");
/* harmony import */ var _assets_github_mark_svg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./assets/github-mark.svg */ "./src/assets/github-mark.svg");





var content = document.querySelector(".content");
var container = document.createElement("section");
container.classList.add("container");
var home = (0,_home__WEBPACK_IMPORTED_MODULE_1__["default"])();
var menu = (0,_menu__WEBPACK_IMPORTED_MODULE_2__["default"])();
var contact = (0,_Contact__WEBPACK_IMPORTED_MODULE_3__["default"])();
var changeActiveNav = function changeActiveNav(id) {
  var homeNav = document.querySelector("#nav1");
  var menuNav = document.querySelector("#nav2");
  var contactNav = document.querySelector("#nav3");
  if (id == "nav1") {
    homeNav.classList.add("active-color");
    menuNav.classList.remove("active-color");
    contactNav.classList.remove("active-color");
  } else if (id == "nav2") {
    homeNav.classList.remove("active-color");
    menuNav.classList.add("active-color");
    contactNav.classList.remove("active-color");
  } else {
    homeNav.classList.remove("active-color");
    menuNav.classList.remove("active-color");
    contactNav.classList.add("active-color");
  }
};
var makeHeader = function makeHeader() {
  var header = document.createElement("header");
  var h1 = document.createElement("h1");
  h1.textContent = "Sakura Sushi";
  var nav = document.createElement("nav");
  var ul = document.createElement("ul");
  var listItems = ["Home", "Menu", "Contact"];
  var counter = 1;
  for (var _i = 0, _listItems = listItems; _i < _listItems.length; _i++) {
    var item = _listItems[_i];
    var li = document.createElement("li");
    li.textContent = item;
    if (item == "Home") {
      li.classList.add("active-color");
    }
    li.setAttribute("id", "nav".concat(counter));
    li.addEventListener("click", function (e) {
      if (e.target.textContent == "Home") {
        home.classList.remove("not-active");
        menu.classList.add("not-active");
        contact.classList.add("not-active");
      } else if (e.target.textContent == "Menu") {
        home.classList.add("not-active");
        menu.classList.remove("not-active");
        contact.classList.add("not-active");
      } else {
        home.classList.add("not-active");
        menu.classList.add("not-active");
        contact.classList.remove("not-active");
      }
      changeActiveNav(e.target.id);
    });
    ul.append(li);
    counter++;
  }
  header.append(h1, ul);
  return header;
};
var makeFooter = function makeFooter() {
  var footer = document.createElement("footer");
  var text = document.createElement("p");
  text.textContent = "Copyright © 2023 Berget";
  var link = document.createElement("a");
  link.href = "https://github.com/Berget1411";
  var img = document.createElement("img");
  img.src = _assets_github_mark_svg__WEBPACK_IMPORTED_MODULE_4__;
  link.append(img);
  footer.append(text, link);
  return footer;
};
container.append(home, menu, contact);
content.append(makeHeader(), container, makeFooter());

/***/ }),

/***/ "./src/menu.js":
/*!*********************!*\
  !*** ./src/menu.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
var images = __webpack_require__("./src/assets/sushi_dishes sync recursive ^\\.\\/.*$");
var imageList = images.keys().map(function (image) {
  return images(image);
});
var makeMenu = function makeMenu() {
  var dishes = [{
    title: "Sashimi platter",
    desc: "Assorted slices of the freshest raw fish, served with soy sauce and wasabi",
    imgSrc: imageList[5]
  }, {
    title: "Salmon Nigiri",
    desc: "Slices of fresh salmon atop hand-pressed vinegared rice.",
    imgSrc: imageList[3]
  }, {
    title: "Tuna Nigiri",
    desc: "Tender, raw tuna on bite-sized rice beds",
    imgSrc: imageList[7]
  }, {
    title: "California Roll",
    desc: "Avocado, crab, and cucumber rolled in nori and rice, with sesame seeds.",
    imgSrc: imageList[0]
  }, {
    title: "Spicy Tuna Roll",
    desc: "Spicy tuna, cucumber, and mayonnaise, rolled in nori and rice.",
    imgSrc: imageList[6]
  }, {
    title: "Salmon Temaki",
    desc: "Fresh salmon, avocado, and rice wrapped in a crispy nori cone.",
    imgSrc: imageList[4]
  }, {
    title: "Eel Temaki",
    desc: "Grilled eel, cucumber, and rice in a hand-rolled seaweed cone.",
    imgSrc: imageList[2]
  }, {
    title: "Chirashi Bowl",
    desc: "A colorful bowl of sushi rice topped with sashimi, vegetables, and pickles.",
    imgSrc: imageList[1]
  }];
  var menu = document.createElement("div");
  menu.classList.add("menu-container", "not-active");
  var menuTitle = document.createElement("h2");
  for (var _i = 0, _dishes = dishes; _i < _dishes.length; _i++) {
    var dish = _dishes[_i];
    var newDish = document.createElement("div");
    newDish.classList.add("dish");
    for (var _i2 = 0, _Object$entries = Object.entries(dish); _i2 < _Object$entries.length; _i2++) {
      var _Object$entries$_i = _slicedToArray(_Object$entries[_i2], 2),
        key = _Object$entries$_i[0],
        value = _Object$entries$_i[1];
      if (key == "imgSrc") {
        var img = document.createElement("img");
        img.src = value;
        newDish.append(img);
      } else if (key == "title") {
        var title = document.createElement("h3");
        title.textContent = value;
        newDish.append(title);
      } else {
        var desc = document.createElement("p");
        desc.textContent = value;
        newDish.append(desc);
      }
      menu.append(newDish);
    }
  }
  return menu;
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (makeMenu);

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles/main.scss":
/*!***********************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles/main.scss ***!
  \***********************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ../../../../src/assets/Satisfy-Regular.ttf */ "./src/assets/Satisfy-Regular.ttf"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(/*! ../../../../src/assets/Montserrat-Regular.ttf */ "./src/assets/Montserrat-Regular.ttf"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_2___ = new URL(/* asset import */ __webpack_require__(/*! ../../../../src/assets/sushi_background.jpeg */ "./src/assets/sushi_background.jpeg"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
var ___CSS_LOADER_URL_REPLACEMENT_1___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_1___);
var ___CSS_LOADER_URL_REPLACEMENT_2___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_2___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, `:root {
  --main-color: #fafafa;
  --main-font: montserrat;
  --secondary-color: #fdba74;
}

@font-face {
  font-family: satisfy;
  src: url(${___CSS_LOADER_URL_REPLACEMENT_0___});
}
@font-face {
  font-family: montserrat;
  src: url(${___CSS_LOADER_URL_REPLACEMENT_1___});
}
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

body {
  background: url(${___CSS_LOADER_URL_REPLACEMENT_2___});
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-size: cover;
  font-family: var(--main-font);
}

.content {
  display: grid;
  height: 100vh;
  grid-template-rows: 240px 1fr 60px;
  gap: 60px;
}

header {
  background-color: rgba(0, 0, 0, 0.8);
  color: var(--main-color);
  border-bottom: 2px solid var(--main-color);
  display: grid;
  align-items: center;
  justify-content: center;
}
header h1 {
  font-size: 5em;
  font-family: satisfy, cursive;
}
header ul {
  list-style: none;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 40px;
}
header li {
  font-size: 1.6em;
  cursor: pointer;
  display: inline-block;
  position: relative;
}
header li::after {
  content: "";
  position: absolute;
  width: 100%;
  transform: scaleX(0);
  height: 2px;
  bottom: 0;
  left: 0;
  background-color: var(--main-color);
  transform-origin: bottom right;
  transition: transform 0.25s ease-out;
}
header li:hover::after {
  transform: scaleX(1);
  transform-origin: bottom left;
}
header .active-li {
  color: var(--secondary-color);
}

.not-active {
  display: none !important;
}

.active-color {
  color: var(--secondary-color) !important;
}

.container {
  display: grid;
  justify-content: center;
}

.home-container {
  display: grid;
  justify-items: center;
  gap: 10px;
  padding: 50px 175px;
  background-color: rgba(0, 0, 0, 0.6);
  border: 2px solid var(--secondary-color);
  color: var(--secondary-color);
}
.home-container h2 {
  font-size: 1.8em;
}
.home-container h3 {
  font-size: 1.1em;
}
.home-container img {
  width: 300px;
  border-radius: 50%;
  border: 4px solid var(--secondary-color);
}

.menu-container {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(240px, 1fr));
  gap: 60px;
  padding: 50px 100px;
  background-color: rgba(0, 0, 0, 0.6);
  border: 2px solid var(--secondary-color);
  color: var(--secondary-color);
}
.menu-container .dish {
  height: 340px;
  padding: 20px;
  border-radius: 10px;
  background-color: var();
  border: 2px solid var(--secondary-color);
  display: grid;
  justify-items: center;
  align-items: center;
  grid-template-rows: 50px 1fr 100px;
  grid-template-areas: "title" "img" "desc";
}
.menu-container h3 {
  grid-area: title;
  border-bottom: 1px solid var(--secondary-color);
}
.menu-container img {
  grid-area: img;
  float: left;
  width: 100%;
  height: 150px;
  object-fit: cover;
  border: 2px solid var(--secondary-color);
  border-radius: 10px;
}
.menu-container p {
  grid-area: desc;
}

.contact-container {
  display: grid;
  gap: 20px;
  padding: 30px 60px;
  background-color: rgba(0, 0, 0, 0.6);
  border: 2px solid var(--secondary-color);
  color: var(--secondary-color);
}
.contact-container h2 {
  font-size: 1.8em;
  border-bottom: 1px solid var(--secondary-color);
}
.contact-container p {
  font-size: 1.1em;
  margin-left: 15px;
}
.contact-container .contact {
  display: grid;
  gap: 10px;
}
.contact-container .location {
  display: grid;
  gap: 10px;
}
.contact-container .location img {
  margin-top: 10px;
  width: 500px;
  border: 4px solid var(--secondary-color);
  border-radius: 10px;
}

footer {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 8px;
  color: var(--main-color);
  font-size: 1.2em;
  background-color: rgba(0, 0, 0, 0.6);
  border-top: 2px solid var(--main-color);
}
footer img {
  margin-top: 6px;
  width: 20px;
  filter: invert(93%) sepia(0%) saturate(6%) hue-rotate(181deg) brightness(105%) contrast(108%);
}`, "",{"version":3,"sources":["webpack://./src/styles/main.scss"],"names":[],"mappings":"AAAA;EACE,qBAAA;EACA,uBAAA;EACA,0BAAA;AACF;;AAEA;EACE,oBAAA;EACA,4CAAA;AACF;AACA;EACE,uBAAA;EACA,4CAAA;AACF;AAEA;EACE,sBAAA;EACA,SAAA;EACA,UAAA;AAAF;;AAGA;EACE,mDAAA;EACA,4BAAA;EACA,4BAAA;EACA,sBAAA;EAEA,6BAAA;AADF;;AAIA;EACE,aAAA;EACA,aAAA;EACA,kCAAA;EACA,SAAA;AADF;;AAIA;EACE,oCAAA;EACA,wBAAA;EACA,0CAAA;EAEA,aAAA;EACA,mBAAA;EACA,uBAAA;AAFF;AAIE;EACE,cAAA;EACA,6BAAA;AAFJ;AAIE;EACE,gBAAA;EACA,aAAA;EACA,mBAAA;EACA,uBAAA;EACA,SAAA;AAFJ;AAKE;EACE,gBAAA;EACA,eAAA;EAEA,qBAAA;EACA,kBAAA;AAJJ;AAMI;EACE,WAAA;EACA,kBAAA;EACA,WAAA;EACA,oBAAA;EACA,WAAA;EACA,SAAA;EACA,OAAA;EACA,mCAAA;EACA,8BAAA;EACA,oCAAA;AAJN;AAOI;EACE,oBAAA;EACA,6BAAA;AALN;AAQE;EACE,6BAAA;AANJ;;AAUA;EACE,wBAAA;AAPF;;AAUA;EACE,wCAAA;AAPF;;AAUA;EACE,aAAA;EACA,uBAAA;AAPF;;AAUA;EACE,aAAA;EACA,qBAAA;EACA,SAAA;EACA,mBAAA;EACA,oCAAA;EACA,wCAAA;EACA,6BAAA;AAPF;AASE;EACE,gBAAA;AAPJ;AAUE;EACE,gBAAA;AARJ;AAWE;EACE,YAAA;EACA,kBAAA;EACA,wCAAA;AATJ;;AAaA;EACE,aAAA;EACA,4DAAA;EACA,SAAA;EACA,mBAAA;EACA,oCAAA;EACA,wCAAA;EACA,6BAAA;AAVF;AAYE;EACE,aAAA;EACA,aAAA;EACA,mBAAA;EACA,uBAAA;EACA,wCAAA;EACA,aAAA;EACA,qBAAA;EACA,mBAAA;EACA,kCAAA;EACA,yCACE;AAXN;AAgBE;EACE,gBAAA;EACA,+CAAA;AAdJ;AAiBE;EACE,cAAA;EACA,WAAA;EACA,WAAA;EACA,aAAA;EACA,iBAAA;EACA,wCAAA;EACA,mBAAA;AAfJ;AAiBE;EACE,eAAA;AAfJ;;AAmBA;EACE,aAAA;EAEA,SAAA;EACA,kBAAA;EACA,oCAAA;EACA,wCAAA;EACA,6BAAA;AAjBF;AAmBE;EACE,gBAAA;EACA,+CAAA;AAjBJ;AAoBE;EACE,gBAAA;EACA,iBAAA;AAlBJ;AAqBE;EACE,aAAA;EACA,SAAA;AAnBJ;AAsBE;EACE,aAAA;EACA,SAAA;AApBJ;AAsBI;EACE,gBAAA;EACA,YAAA;EACA,wCAAA;EACA,mBAAA;AApBN;;AAyBA;EACE,aAAA;EACA,uBAAA;EACA,mBAAA;EACA,QAAA;EACA,wBAAA;EAEA,gBAAA;EACA,oCAAA;EACA,uCAAA;AAvBF;AAyBE;EACE,eAAA;EACA,WAAA;EACA,6FAAA;AAvBJ","sourcesContent":[":root {\n  --main-color: #fafafa;\n  --main-font: montserrat;\n  --secondary-color: #fdba74;\n}\n\n@font-face {\n  font-family: satisfy;\n  src: url(/src/assets/Satisfy-Regular.ttf);\n}\n@font-face {\n  font-family: montserrat;\n  src: url(/src/assets/Montserrat-Regular.ttf);\n}\n\n* {\n  box-sizing: border-box;\n  margin: 0;\n  padding: 0;\n}\n\nbody {\n  background: url(/src/assets/sushi_background.jpeg);\n  background-repeat: no-repeat;\n  background-attachment: fixed;\n  background-size: cover;\n\n  font-family: var(--main-font);\n}\n\n.content {\n  display: grid;\n  height: 100vh;\n  grid-template-rows: 240px 1fr 60px;\n  gap: 60px;\n}\n\nheader {\n  background-color: rgba(0, 0, 0, 0.8);\n  color: var(--main-color);\n  border-bottom: 2px solid var(--main-color);\n\n  display: grid;\n  align-items: center;\n  justify-content: center;\n\n  h1 {\n    font-size: 5em;\n    font-family: satisfy, cursive;\n  }\n  ul {\n    list-style: none;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    gap: 40px;\n  }\n\n  li {\n    font-size: 1.6em;\n    cursor: pointer;\n\n    display: inline-block;\n    position: relative;\n\n    &::after {\n      content: \"\";\n      position: absolute;\n      width: 100%;\n      transform: scaleX(0);\n      height: 2px;\n      bottom: 0;\n      left: 0;\n      background-color: var(--main-color);\n      transform-origin: bottom right;\n      transition: transform 0.25s ease-out;\n    }\n\n    &:hover::after {\n      transform: scaleX(1);\n      transform-origin: bottom left;\n    }\n  }\n  .active-li {\n    color: var(--secondary-color);\n  }\n}\n\n.not-active {\n  display: none !important;\n}\n\n.active-color {\n  color: var(--secondary-color) !important;\n}\n\n.container {\n  display: grid;\n  justify-content: center;\n}\n\n.home-container {\n  display: grid;\n  justify-items: center;\n  gap: 10px;\n  padding: 50px 175px;\n  background-color: rgba(0, 0, 0, 0.6);\n  border: 2px solid var(--secondary-color);\n  color: var(--secondary-color);\n\n  h2 {\n    font-size: 1.8em;\n  }\n\n  h3 {\n    font-size: 1.1em;\n  }\n\n  img {\n    width: 300px;\n    border-radius: 50%;\n    border: 4px solid var(--secondary-color);\n  }\n}\n\n.menu-container {\n  display: grid;\n  grid-template-columns: repeat(auto-fill, minmax(240px, 1fr));\n  gap: 60px;\n  padding: 50px 100px;\n  background-color: rgba(0, 0, 0, 0.6);\n  border: 2px solid var(--secondary-color);\n  color: var(--secondary-color);\n\n  .dish {\n    height: 340px;\n    padding: 20px;\n    border-radius: 10px;\n    background-color: var();\n    border: 2px solid var(--secondary-color);\n    display: grid;\n    justify-items: center;\n    align-items: center;\n    grid-template-rows: 50px 1fr 100px;\n    grid-template-areas:\n      \"title\"\n      \"img\"\n      \"desc\";\n  }\n\n  h3 {\n    grid-area: title;\n    border-bottom: 1px solid var(--secondary-color);\n  }\n\n  img {\n    grid-area: img;\n    float: left;\n    width: 100%;\n    height: 150px;\n    object-fit: cover;\n    border: 2px solid var(--secondary-color);\n    border-radius: 10px;\n  }\n  p {\n    grid-area: desc;\n  }\n}\n\n.contact-container {\n  display: grid;\n\n  gap: 20px;\n  padding: 30px 60px;\n  background-color: rgba(0, 0, 0, 0.6);\n  border: 2px solid var(--secondary-color);\n  color: var(--secondary-color);\n\n  h2 {\n    font-size: 1.8em;\n    border-bottom: 1px solid var(--secondary-color);\n  }\n\n  p {\n    font-size: 1.1em;\n    margin-left: 15px;\n  }\n\n  .contact {\n    display: grid;\n    gap: 10px;\n  }\n\n  .location {\n    display: grid;\n    gap: 10px;\n\n    img {\n      margin-top: 10px;\n      width: 500px;\n      border: 4px solid var(--secondary-color);\n      border-radius: 10px;\n    }\n  }\n}\n\nfooter {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  gap: 8px;\n  color: var(--main-color);\n\n  font-size: 1.2em;\n  background-color: rgba(0, 0, 0, 0.6);\n  border-top: 2px solid var(--main-color);\n\n  img {\n    margin-top: 6px;\n    width: 20px;\n    filter: invert(93%) sepia(0%) saturate(6%) hue-rotate(181deg)\n      brightness(105%) contrast(108%);\n  }\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

"use strict";


/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {

"use strict";


module.exports = function (url, options) {
  if (!options) {
    options = {};
  }
  if (!url) {
    return url;
  }
  url = String(url.__esModule ? url.default : url);

  // If url is already wrapped in quotes, remove them
  if (/^['"].*['"]$/.test(url)) {
    url = url.slice(1, -1);
  }
  if (options.hash) {
    url += options.hash;
  }

  // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls
  if (/["'() \t\n]|(%20)/.test(url) || options.needQuotes) {
    return "\"".concat(url.replace(/"/g, '\\"').replace(/\n/g, "\\n"), "\"");
  }
  return url;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {

"use strict";


module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./src/styles/main.scss":
/*!******************************!*\
  !*** ./src/styles/main.scss ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_main_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!../../node_modules/sass-loader/dist/cjs.js!./main.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles/main.scss");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_main_scss__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_main_scss__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_main_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_main_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

"use strict";


var stylesInDOM = [];
function getIndexByIdentifier(identifier) {
  var result = -1;
  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }
  return result;
}
function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];
  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };
    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }
    identifiers.push(identifier);
  }
  return identifiers;
}
function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);
  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }
      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };
  return updater;
}
module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];
    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }
    var newLastIdentifiers = modulesToDom(newList, options);
    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];
      var _index = getIndexByIdentifier(_identifier);
      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();
        stylesInDOM.splice(_index, 1);
      }
    }
    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

"use strict";


var memo = {};

/* istanbul ignore next  */
function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }
    memo[target] = styleTarget;
  }
  return memo[target];
}

/* istanbul ignore next  */
function insertBySelector(insert, style) {
  var target = getTarget(insert);
  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }
  target.appendChild(style);
}
module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

"use strict";


/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}
module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;
  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}
module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

"use strict";


/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";
  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }
  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }
  var needLayer = typeof obj.layer !== "undefined";
  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }
  css += obj.css;
  if (needLayer) {
    css += "}";
  }
  if (obj.media) {
    css += "}";
  }
  if (obj.supports) {
    css += "}";
  }
  var sourceMap = obj.sourceMap;
  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  }

  // For old IE
  /* istanbul ignore if  */
  options.styleTagTransform(css, styleElement, options.options);
}
function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }
  styleElement.parentNode.removeChild(styleElement);
}

/* istanbul ignore next  */
function domAPI(options) {
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}
module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

"use strict";


/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }
    styleElement.appendChild(document.createTextNode(css));
  }
}
module.exports = styleTagTransform;

/***/ }),

/***/ "./src/assets/sushi_dishes sync recursive ^\\.\\/.*$":
/*!************************************************!*\
  !*** ./src/assets/sushi_dishes/ sync ^\.\/.*$ ***!
  \************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var map = {
	"./california_roll.jpeg": "./src/assets/sushi_dishes/california_roll.jpeg",
	"./chirashi_bowl.jpeg": "./src/assets/sushi_dishes/chirashi_bowl.jpeg",
	"./eel_temaki.jpeg": "./src/assets/sushi_dishes/eel_temaki.jpeg",
	"./salmon_nigiri.jpeg": "./src/assets/sushi_dishes/salmon_nigiri.jpeg",
	"./salmon_temaki.jpeg": "./src/assets/sushi_dishes/salmon_temaki.jpeg",
	"./sashimi_platter.jpeg": "./src/assets/sushi_dishes/sashimi_platter.jpeg",
	"./spicy_tuna_roll.jpeg": "./src/assets/sushi_dishes/spicy_tuna_roll.jpeg",
	"./tuna_nigiri.jpeg": "./src/assets/sushi_dishes/tuna_nigiri.jpeg"
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	if(!__webpack_require__.o(map, req)) {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return map[req];
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = "./src/assets/sushi_dishes sync recursive ^\\.\\/.*$";

/***/ }),

/***/ "./src/assets/Montserrat-Regular.ttf":
/*!*******************************************!*\
  !*** ./src/assets/Montserrat-Regular.ttf ***!
  \*******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "Montserrat-Regular.ttf";

/***/ }),

/***/ "./src/assets/Satisfy-Regular.ttf":
/*!****************************************!*\
  !*** ./src/assets/Satisfy-Regular.ttf ***!
  \****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "Satisfy-Regular.ttf";

/***/ }),

/***/ "./src/assets/cute_sushi.jpeg":
/*!************************************!*\
  !*** ./src/assets/cute_sushi.jpeg ***!
  \************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "cute_sushi.jpeg";

/***/ }),

/***/ "./src/assets/github-mark.svg":
/*!************************************!*\
  !*** ./src/assets/github-mark.svg ***!
  \************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "github-mark.svg";

/***/ }),

/***/ "./src/assets/location.png":
/*!*********************************!*\
  !*** ./src/assets/location.png ***!
  \*********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "location.png";

/***/ }),

/***/ "./src/assets/sushi_background.jpeg":
/*!******************************************!*\
  !*** ./src/assets/sushi_background.jpeg ***!
  \******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "sushi_background.jpeg";

/***/ }),

/***/ "./src/assets/sushi_dishes/california_roll.jpeg":
/*!******************************************************!*\
  !*** ./src/assets/sushi_dishes/california_roll.jpeg ***!
  \******************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "california_roll.jpeg";

/***/ }),

/***/ "./src/assets/sushi_dishes/chirashi_bowl.jpeg":
/*!****************************************************!*\
  !*** ./src/assets/sushi_dishes/chirashi_bowl.jpeg ***!
  \****************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "chirashi_bowl.jpeg";

/***/ }),

/***/ "./src/assets/sushi_dishes/eel_temaki.jpeg":
/*!*************************************************!*\
  !*** ./src/assets/sushi_dishes/eel_temaki.jpeg ***!
  \*************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "eel_temaki.jpeg";

/***/ }),

/***/ "./src/assets/sushi_dishes/salmon_nigiri.jpeg":
/*!****************************************************!*\
  !*** ./src/assets/sushi_dishes/salmon_nigiri.jpeg ***!
  \****************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "salmon_nigiri.jpeg";

/***/ }),

/***/ "./src/assets/sushi_dishes/salmon_temaki.jpeg":
/*!****************************************************!*\
  !*** ./src/assets/sushi_dishes/salmon_temaki.jpeg ***!
  \****************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "salmon_temaki.jpeg";

/***/ }),

/***/ "./src/assets/sushi_dishes/sashimi_platter.jpeg":
/*!******************************************************!*\
  !*** ./src/assets/sushi_dishes/sashimi_platter.jpeg ***!
  \******************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "sashimi_platter.jpeg";

/***/ }),

/***/ "./src/assets/sushi_dishes/spicy_tuna_roll.jpeg":
/*!******************************************************!*\
  !*** ./src/assets/sushi_dishes/spicy_tuna_roll.jpeg ***!
  \******************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "spicy_tuna_roll.jpeg";

/***/ }),

/***/ "./src/assets/sushi_dishes/tuna_nigiri.jpeg":
/*!**************************************************!*\
  !*** ./src/assets/sushi_dishes/tuna_nigiri.jpeg ***!
  \**************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "tuna_nigiri.jpeg";

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/index.js"));
/******/ }
]);
//# sourceMappingURL=bundle89734d1cd78e91a3ce13.js.map