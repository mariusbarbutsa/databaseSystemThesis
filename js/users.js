import {
    firebaseDB
} from "./firebase-service.js";

import {
    collection,
    onSnapshot,
    doc,
} from "https://www.gstatic.com/firebasejs/9.4.1/firebase-firestore.js";

export default class Users {
    constructor() {
        this.beersRef = collection(firebaseDB, "menu/drinks/beer");
        this.foodsRef = collection(firebaseDB, "menu/food/foods");
        this.coldDrinksRef = collection(firebaseDB, "menu/drinks/cold-drinks");
        this.warmDrinksRef = collection(firebaseDB, "menu/drinks/warm-drinks");
        this.cocktailsRef = collection(firebaseDB, "menu/drinks/wine-cocktails");
        this.readFoods();
        this.readBeers();
        this.readColdDrinks();
        this.readWarmDrinks();
        this.readCocktails();
        this.menuFilter();
        this.seeFood();
    }

    /* ---- menu display - VLADA ----- */
    /*--- reading different kind of menu items -----*/
    readFoods() {
        // ========== READ ==========
        // watch the database ref for changes
        onSnapshot(this.foodsRef, (snapshot) => {
            this.foods = snapshot.docs.map((doc) => {
                const foods = doc.data();
                foods.id = doc.id;
                return foods;
            });

            console.log(this.foods);
            this.appendFoods(this.foods);
            this.appendFavourites(this.foods);
        });
    }

    readBeers() {
        // ========== READ ==========
        // watch the database ref for changes
        onSnapshot(this.beersRef, (snapshot) => {
            this.beers = snapshot.docs.map((doc) => {
                const beers = doc.data();
                beers.id = doc.id;
                return beers;
            });

            console.log(this.beers);
            this.appendBeers(this.beers);
        });
    }

    readWarmDrinks() {
        // ========== READ ==========
        // watch the database ref for changes
        onSnapshot(this.warmDrinksRef, (snapshot) => {
            this.warmDrinks = snapshot.docs.map((doc) => {
                const warmDrinks = doc.data();
                warmDrinks.id = doc.id;
                return warmDrinks;
            });

            console.log(this.warmDrinks);
            this.appendWarmDrinks(this.warmDrinks);
        });
    }

    readColdDrinks() {
        // ========== READ ==========
        // watch the database ref for changes
        onSnapshot(this.coldDrinksRef, (snapshot) => {
            this.coldDrinks = snapshot.docs.map((doc) => {
                const coldDrinks = doc.data();
                coldDrinks.id = doc.id;
                return coldDrinks;
            });

            console.log(this.coldDrinks);
            this.appendColdDrinks(this.coldDrinks);
        });
    }

    readCocktails() {
        // ========== READ ==========
        // watch the database ref for changes
        onSnapshot(this.cocktailsRef, (snapshot) => {
            this.cocktails = snapshot.docs.map((doc) => {
                const cocktails = doc.data();
                cocktails.id = doc.id;
                return cocktails;
            });

            console.log(this.cocktails);
            this.appendCocktails(this.cocktails);
        });
    }

    // append food menu to the DOM
    appendFoods(foods) {
        let htmlTemplate = "";
        for (let item of foods) {
            htmlTemplate += `
      <article>
      <img src="${item.photo || "../img/placeholder-img.png"}" class="menu-img">
      <div class="menu-text">
        <h2 class="menu-heading">${item.name}</h2>
        <p class="menu-description">${item.description || ""}</p>
        <p class="menu-price">${item.price}kr</p>
        </div>
      </article>
      `;
        }
        console.log("yes");
        document.querySelector("#menu-list").innerHTML = htmlTemplate;
    }

    // append beer menu to the DOM
    appendBeers(beers) {
        let htmlTemplate = "";
        for (let item of beers) {
            htmlTemplate += `
      <article>
      <div class="drink-text">
        <h2 class="menu-heading">${item.name}</h2>
        <p class="menu-description">${item.description || ""}</p>
        <p class="menu-price">${item.price}kr</p>
        </div>
      </article>
      `;
        }
        console.log("yes");
        document.querySelector("#beer-list").innerHTML = htmlTemplate;
    }

    // append warm drink menu to the DOM
    appendWarmDrinks(drinks) {
        let htmlTemplate = "";
        for (let item of drinks) {
            htmlTemplate += `
      <article>
      <div class="drink-text">
        <h2 class="menu-heading">${item.name}</h2>
        <p class="menu-description">${item.description || ""}</p>
        <p class="menu-price">${item.price}kr</p>
        </div>
      </article>
      `;
        }
        console.log("yes");
        document.querySelector("#warmdrink-list").innerHTML = htmlTemplate;
    }

    // append cold drink menu to the DOM
    appendColdDrinks(drinks) {
        let htmlTemplate = "";
        for (let item of drinks) {
            htmlTemplate += `
      <article>
      <div class="drink-text">
        <h2 class="menu-heading">${item.name}</h2>
        <p class="menu-description">${item.description || ""}</p>
        <p class="menu-price">${item.price}kr</p>
        </div>
      </article>
      `;
        }
        console.log("yes");
        document.querySelector("#colddrink-list").innerHTML = htmlTemplate;
    }

    // append cocktail menu to the DOM
    appendCocktails(drinks) {
        let htmlTemplate = "";
        for (let item of drinks) {
            htmlTemplate += `
      <article>
      <div class="drink-text">
        <h2 class="menu-heading">${item.name}</h2>
        <p class="menu-description">${item.description || ""}</p>
        <p class="menu-price">${item.price}kr</p>
        </div>
      </article>
      `;
        }
        console.log("yes");
        document.querySelector("#cocktails-list").innerHTML = htmlTemplate;
    }

    // function for appending all drink menus together
    appendDrinks() {
        this.readWarmDrinks(this.warmDrinks);
        this.readBeers(this.beers);
        this.readColdDrinks(this.coldDrinks);
        this.readCocktails(this.cocktails);
    }

    // function for appending favourite menu items to home page
    appendFavourites(foods) {
        let htmlTemplate = "";
        for (let item of foods) {
            if (item.favourite == true) {
                htmlTemplate += `
     <article>
      <img src="${item.photo || "../img/placeholder-img.png"}" class="menu-img">
      <div class="menu-text">
        <h2 class="menu-heading">${item.name}</h2>
        <p class="menu-description">${item.description || ""}</p>
        <p class="menu-price">${item.price}kr</p>
        </div>
      </article>
      `;
            }
        }
        console.log("yes");
        document.querySelector("#menu-favourites").innerHTML = htmlTemplate;
    }

    // onclick function for menu filtering buttons
    menuFilter() {
        document.querySelector("#button-container").innerHTML += /*html*/ `
    <div class="icons-filter">
    <button id="foods-menu" class="button-filter" onclick="readFoods(this.foods); seeFood();">
    <div class="blob icon-body1">
    <svg width="57" height="70" viewBox="0 0 57 70"  xmlns="http://www.w3.org/2000/svg" class="filter-img food active-food">
<path d="M28.3921 2.07831C28.5014 2.72089 30.5909 14.9982 30.5909 19.6876C30.5909 26.838 26.7943 31.9376 21.1814 33.9884L22.9431 66.541C23.0387 68.4141 21.5502 70 19.6656 70H10.9253C9.05435 70 7.55212 68.4277 7.64772 66.541L9.40942 33.9884C3.78289 31.9376 0 26.8243 0 19.6876C0 14.9845 2.08947 2.72089 2.19872 2.07831C2.63573 -0.697068 8.38517 -0.738084 8.74025 2.2287V21.5333C8.91778 21.9982 10.8024 21.9708 10.9253 21.5333C11.1165 18.0744 12.0042 2.50214 12.0178 2.14667C12.4685 -0.697068 18.1224 -0.697068 18.5594 2.14667C18.5867 2.51581 19.4607 18.0744 19.6519 21.5333C19.7748 21.9708 21.6731 21.9982 21.837 21.5333V2.2287C22.192 -0.724412 27.9551 -0.697068 28.3921 2.07831V2.07831ZM44.6709 41.1388L42.6224 66.4453C42.4585 68.3594 43.9744 70 45.8863 70H53.534C55.3503 70 56.8116 68.5371 56.8116 66.7188V3.28144C56.8116 1.47675 55.3503 0.000195405 53.534 0.000195405C42.2673 0.000195405 23.2982 24.4044 44.6709 41.1388Z"/>
</svg>
    <p class="icon-name">meals</p>
    </div>
    </button>
     <button class="button-filter" onclick="seeDrinks(); appendDrinks()">
    <div class="block icon-body2">
     <svg width="94" height="80" viewBox="0 0 94 80" xmlns="http://www.w3.org/2000/svg" class="filter-img drinks" fill="transparent">
<path d="M5 32.2227C5 55.8476 16.526 75.0003 39.578 75.0003C62.63 75.0003 74.156 55.8476 74.156 32.2227H5Z"  stroke-width="8.33333" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M39.5781 20.5556V5"  stroke-width="8.33333" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M58.7871 20.5554V12.7773"  stroke-width="8.33333" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M20.3682 20.5554V12.7773"  stroke-width="8.33333" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M70.6787 52.8784C72.5805 47.8539 73.7024 42.2111 74.0443 36.2105C74.7071 36.1444 75.3852 36.1113 76.0767 36.1113C83.5034 36.1113 89.5238 40.0294 89.5238 44.8614C89.5238 49.6934 83.5034 53.6115 76.0767 53.6115C74.1557 53.6115 72.3308 53.349 70.6787 52.8784Z"  stroke-width="8.33333" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
    <p class="icon-name1">drinks</p>
    </div>
    </button> 
    </div>
    `;
        document
            .querySelector(".icon-body2")
            .addEventListener("mouseover", function () {
                document.querySelector(".icon-body2").style.backgroundImage =
                    "url('../img/icons/hover.svg')";
            });

        document
            .querySelector(".icon-body2")
            .addEventListener("mouseout", function () {
                document.querySelector(".icon-body2").style.backgroundImage = "none";
            });
    }

    // function for changing style when viewing food menu
    seeFood() {
        document.querySelector("#menu-list").style.display = "grid";
        document.querySelector("#beer-list").style.display = "none";
        document.querySelector(".warmdrink-heading").style.display = "none";
        document.querySelector(".colddrink-heading").style.display = "none";
        document.querySelector(".beer-heading").style.display = "none";
        document.querySelector("#colddrink-list").style.display = "none";
        document.querySelector("#warmdrink-list").style.display = "none";
        document.querySelector(".cocktails-heading").style.display = "none";
        document.querySelector("#cocktails-list").style.display = "none";
        document.querySelector(".icon-body1").classList.add(".icon-notactive");
        document.querySelector(".food").style.fill = "#393331";
        document.querySelector(".drinks").style.stroke = "#B5C499";
        document.querySelector(".icon-body1").style.backgroundImage =
            "url('../img/icons/hover.svg')";
        document.querySelector(".icon-body2").style.backgroundImage = "none";
        document.querySelector(".icon-name").style.color = "#393331";
        document.querySelector(".icon-name1").style.color = "#B5C499";

        document
            .querySelector(".icon-body1")
            .addEventListener("mouseover", function () {
                document.querySelector(".icon-body1").style.backgroundImage =
                    "url('../img/icons/hover.svg')";
            });
        document
            .querySelector(".icon-body1")
            .addEventListener("mouseout", function () {
                document.querySelector(".icon-body1").style.backgroundImage =
                    "url('../img/icons/hover.svg')";
            });

        document
            .querySelector(".icon-body2")
            .addEventListener("mouseover", function () {
                document.querySelector(".icon-body2").style.backgroundImage =
                    "url('../img/icons/hover.svg')";
            });

        document
            .querySelector(".icon-body2")
            .addEventListener("mouseout", function () {
                document.querySelector(".icon-body2").style.backgroundImage = "none";
            });
    }

    // function for changing style when viewing drink menu
    seeDrinks() {
        document.querySelector("#menu-list").style.display = "none";
        document.querySelector("#beer-list").style.display = "grid";
        document.querySelector(".warmdrink-heading").style.display = "block";
        document.querySelector("#warmdrink-list").style.display = "grid";
        document.querySelector(".colddrink-heading").style.display = "block";
        document.querySelector(".beer-heading").style.display = "block";
        document.querySelector("#colddrink-list").style.display = "grid";
        document.querySelector(".cocktails-heading").style.display = "block";
        document.querySelector("#cocktails-list").style.display = "grid";
        document.querySelector(".icon-body2").classList.add(".icon-active");
        document.querySelector(".food").style.fill = "#B5C499";
        document.querySelector(".drinks").style.stroke = "#393331";
        document.querySelector(".icon-name").style.color = "#B5C499";
        document.querySelector(".icon-name1").style.color = "#393331";

        document
            .querySelector(".icon-body1")
            .addEventListener("mouseover", function () {
                document.querySelector(".icon-body1").style.backgroundImage =
                    "url('../img/icons/hover.svg')";
            });
        document
            .querySelector(".icon-body1")
            .addEventListener("mouseout", function () {
                document.querySelector(".icon-body1").style.backgroundImage = "none";
            });

        document
            .querySelector(".icon-body2")
            .addEventListener("mouseover", function () {
                document.querySelector(".icon-body2").style.backgroundImage =
                    "url('../img/icons/hover.svg')";
            });

        document
            .querySelector(".icon-body2")
            .addEventListener("mouseout", function () {
                document.querySelector(".icon-body2").style.backgroundImage =
                    "url('../img/icons/hover.svg')";
            });

        document.querySelector(".icon-body1").style.backgroundImage = "none";
        document.querySelector(".icon-body2").style.backgroundImage =
            "url('../img/icons/hover.svg')";
    }
}