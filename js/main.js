import SpaService from "./spa-service.js";
import UserService from "./user-service.js";
import navigationMenu from "./navigation.js";
import Dashboard from "./dashboard.js";
import Users from "./users.js";
import Customers from "./pages/customers.js";
import LoginPage from "./pages/login.js";
import authService from "./auth.js";

let _spaService = new SpaService("home");
let _userService = new UserService();
let _navigationMenu = new navigationMenu();
let _dashboard = new Dashboard();
let _customers = new Customers();
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

window.orderBy = function (value) {
  users.orderBy(value);
}


// window.orderByStatus = function () {
//   users.orderByStatus();
// }

window.createUser = () => {
  // references to the input fields
  let nameInput = document.querySelector('#name');
  let mailInput = document.querySelector('#mail');
  let imageInput = document.querySelector('#imagePreview');
  _userService.create(nameInput.value, mailInput.value, imageInput.src);
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