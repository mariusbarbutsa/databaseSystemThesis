import SpaService from "./spa-service.js";
import Dashboard from "./dashboard.js";
import Users from "./users.js";
import Customers from "./pages/customers.js";
import Companies from "./pages/companies.js";
import Partners from "./pages/partners.js";
import Bookings from "./pages/bookings.js";
import CreditCards from "./pages/creditcards.js";
import LoginPage from "./pages/login.js";
import authService from "./auth.js";
import Modals from "./modals.js";

let _spaService = new SpaService("home");
let _dashboard = new Dashboard();
let _customers = new Customers();
let _companies = new Companies();
let partners = new Partners();
let _bookings = new Bookings();
let _creditcards = new CreditCards();
let loginPage = new LoginPage();
let users = new Users();
let modals = new Modals();

let _selectedUserId = "";
let _selectedImgFile = "";

// init services 

authService.init();

window.logout = () => _dashboard.logout();

window.pageChange = function () {
  _spaService.pageChange();
}

window.setActiveTab = function (pageId) {
  _spaService.setActiveTab(pageId);
}

window.navigateTo = function (pageId) {
  _spaService.navigateTo(pageId)
}

window.orderBy = function (value) {
  users.orderBy(value);
}

window.orderByCustomers = function (value) {
  users.orderByCustomers(value);
}

window.searchedData = function (value) {
  users.searchedData(value);
}

window.searchCustomers = function (value) {
  users.searchCustomers(value);
}

window.searchCompanies = function (value) {
  users.searchCompanies(value);
}

window.searchPartners = function (value) {
  users.searchPartners(value);
}

window.searchBookings = function (value) {
  users.searchBookings(value);
}

window.searchCreditcards = function (value) {
  users.searchCreditcards(value);
}

window.showDetailView = function (id) {
  users.showDetailView(id);
};

window.showBooking = function (id) {
  users.showBooking(id);
};

window.filterByStatus = function (value) {
  partners.filterByStatus(value)
}

window.addEventListener("load", function () {
  document.querySelector("body").classList.add("loaded");
});

window.scrollToTop = function () {
  window.scrollTo(0, 0);
}
0
// window.orderByStatus = function () {
//   users.orderByStatus();
// }

// create user function - attributing variable to the elements from the table
window.createUser = () => {
  document.getElementById('overlay').style.display = 'none';
  // references to the input fields
  var date = new Date();
  var createdOn = date;
  createdOn = createdOn.toDateString().split(' ').slice(1).join(' ');
  let paymentTypes = ['Mobile Pay', 'Bank account', 'Cash'];
  let payment = paymentTypes[Math.floor((Math.random() * paymentTypes.length))];
  let nameInput = document.querySelector('#name');
  let emailInput = document.querySelector('#email');
  let phone = document.querySelector('#phone');
  let phoneCode = document.querySelector('#phone-code')
  let phoneNr = phoneCode.value + ' ' + phone.value;
  let address = document.querySelector('#address');
  let balance = Math.floor(200 + Math.random() * 900);
  let credits = Math.floor(300 + Math.random() * 900);
  let alias = document.querySelector('.partner');
  let service = document.querySelector('#service');
  let type = document.querySelector('#serviceType');
  let serviceDate = document.querySelector('#date');
  let price = Math.floor(100 + Math.random() * 900);
  let fakturaNumber = Math.floor(1000000 + Math.random() * 9000000);
  let status = 'Active';
  // serviceDateVar = serviceDateVar.toDateString().split(' ').slice(1).join(' ');
  console.log(date.value)
  console.log(credits)
  console.log(alias.value)
  users.create(nameInput.value, emailInput.value, phoneNr, address.value, createdOn, balance, credits, status, alias.value, service.value, type.value, serviceDate.value, price, payment, fakturaNumber);

  _spaService.navigateTo("home");
}

// Toggle navigation sidebar ON - Marius
window.toggleSidebar = () => {
  console.log("opening sidebar");
  document.getElementById("mySidebar").style.width = "206px";
  document.querySelector(".active-menu").style.width = "174px";
  const activeMenu = document.querySelectorAll('.hoverButton');
  activeMenu.forEach(activeMenuItem => {
    activeMenuItem.style.width = '174px';
  });
  const textIcons = document.querySelectorAll('.icon-text');
  textIcons.forEach(iconText => {
    iconText.style.display = 'block';
  });
  const raskraskIcon = document.querySelector('.raskrask-text');
  raskraskIcon.style.display = 'block';

  const menuItemFlex = document.querySelectorAll('.menu-item-flex');
  menuItemFlex.forEach(menuItem => {
    menuItem.style.justifyContent = 'left';
    menuItem.style.marginLeft = '16px';
  });
}

// Toggle navigation sidebar OFF
window.toggleSidebarOff = () => {
  console.log("closing sidebar");
  document.getElementById("mySidebar").style.width = "80px";
  document.querySelector(".active-menu").style.width = "48px";
  const activeMenu = document.querySelectorAll('.hoverButton');
  activeMenu.forEach(activeMenuItem => {
    activeMenuItem.style.width = '48px';
  });
  const textIcons = document.querySelectorAll('.icon-text');
  textIcons.forEach(iconText => {
    iconText.style.display = 'none';
  });

  const raskraskIcon = document.querySelector('.raskrask-text');
  raskraskIcon.style.display = 'none';

  const menuItemFlex = document.querySelectorAll('.menu-item-flex');
  menuItemFlex.forEach(menuItem => {
    menuItem.style.justifyContent = 'center';
    menuItem.style.marginLeft = '0';
  });

}

// Display the modal private booking function - Marius
window.modalDisplay = function (state) {

  var overlayElement = document.getElementById('overlay');

  if (state) {
    overlayElement.style.display = 'block';
  } else {
    overlayElement.style.display = 'none';
  }
};
// Display the modal filter partners function - Vlada

window.filterDisplay = function (state) {

  var overlayElement = document.getElementById('overlay-filter');

  if (state) {
    overlayElement.style.display = 'block';
  } else {
    overlayElement.style.display = 'none';
  }
};