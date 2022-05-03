export default class LoginPage {
  constructor() {
    this.template();
  }


  template() {

    document.querySelector("#login").innerHTML += /*html*/ `

       <div class='login-container'>
       <img src="/img/svg/icon-raskrask.svg" class='logo-svg'>
        <!-- firebase auth container  -->
        <section id="firebaseui-auth-container"></section>
</div>

    `;

  }
}