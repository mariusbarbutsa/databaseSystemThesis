export default class LoginPage {
  constructor() {
    this.template();
  }


  template() {

    document.querySelector("#login").innerHTML += /*html*/ `

       
          <h2>Login</h2>
        </header>
        <!-- firebase auth container  -->
        <section id="firebaseui-auth-container"></section>

    `;

  }
}