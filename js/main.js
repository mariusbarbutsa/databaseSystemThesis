import SpaService from "./spa-service.js";
import Dashboard from "./dashboard.js";
import Users from "./users.js";
import Customers from "./pages/customers.js";
import Companies from "./pages/companies.js";
import Partners from "./pages/partners.js";
import LoginPage from "./pages/login.js";
import authService from "./auth.js";

let _spaService = new SpaService("home");
let _dashboard = new Dashboard();
let _customers = new Customers();
let _companies = new Companies();
let _partners = new Partners();
let loginPage = new LoginPage();
let users = new Users();

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

window.showDetailView = function (id) {
  users.showDetailView(id);
};


window.filterByStatus = function (value) {
  partners.filterByStatus(value)
}
// window.orderByStatus = function () {
//   users.orderByStatus();
// }

window.createUser = () => {
  // references to the input fields
  let nameInput = document.querySelector('#name');
  let emailInput = document.querySelector('#email');
  let phoneNr = document.querySelector('#phone');
  let address = document.querySelector('#address');
  let date = document.querySelector('#date');
  let balance = Math.floor(100 + Math.random() * 900);
  let credits = Math.floor(200 + Math.random() * 900);
  let status = 'Active';
  console.log(date.value)
  console.log(credits)

  users.create(nameInput.value, emailInput.value, phoneNr.value, address.value, date.value, balance, credits, status);
  _spaService.navigateTo("home");
}

window.selectUser = (id, name, mail, img) => {
  console.log(id, name, mail);
  // references to the input fields
  let nameInput = document.querySelector('#name-update');
  let mailInput = document.querySelector('#mail-update');
  let imageInput = document.querySelector('#imagePreviewUpdate');
  nameInput.value = name;
  mailInput.value = mail;
  imageInput.src = img;
  _selectedUserId = id;
  _spaService.navigateTo("edit");
}

window.updateUser = () => {
  let nameInput = document.querySelector('#name-update');
  let mailInput = document.querySelector('#mail-update');
  let imageInput = document.querySelector('#imagePreviewUpdate');
  _userService.update(_selectedUserId, nameInput.value, mailInput.value, imageInput.src);
  _spaService.navigateTo("home");
}

window.deleteUser = (id) => {
  _userService.delete(id);
}

window.previewImage = (file, previewId) => {
  if (file) {
    _selectedImgFile = file;
    let reader = new FileReader();
    reader.onload = event => {
      document.querySelector('#' + previewId).setAttribute('src', event.target.result);
    };
    reader.readAsDataURL(file);
  }
}

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

window.modalDisplay = function (state) {
  /* state can be 1 or 0 */
  var bluredContainer = document.getElementById('overlay-container');
  var overlayElement = document.getElementById('overlay');

  if (state) {
    overlayElement.style.display = 'block';
  } else {
    overlayElement.style.display = 'none';
  }
};

window.filterDisplay = function (state) {
  /* state can be 1 or 0 */
  var overlayElement = document.getElementById('overlay-filter');

  if (state) {
    overlayElement.style.display = 'block';
  } else {
    overlayElement.style.display = 'none';
  }
};