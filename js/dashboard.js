export default class navigationMenu {
    constructor() {
        this.template();
    }

    template() {
        document.querySelector("#home").innerHTML += /*html*/ `
     <h1 class="heading">DASHBOARD</h2>

      <div class="functions">
        <div class="function-box">
          <div class="function-content">
            <a href="#"><img src="img/svg/private-booking.svg" class="function-icon">
              <p class="function-name name1">Private Booking</p>
            </a>
          </div>
        </div>
        <div class="function-box">
          <div class="function-content">
            <a href="#"><img src="img/svg/create-company.svg" class="function-icon">
              <p class="function-name">Create Company</p>
            </a>
          </div>
        </div>
        <div class="function-box">
          <div class="function-content">
            <a href="#"><img src="img/svg/company-booking.svg" class="function-icon">
              <p class="function-name name2">Company Booking</p>
            </a>
          </div>
        </div>
        <div class="function-box">
          <div class="function-content">
            <a href="#"><img src="img/svg/create-card.svg" class="function-icon">
              <p class="function-name name3">Create Card</p>
            </a>
          </div>
        </div>
        <div class="function-box">
          <div class="function-content">
            <a href="#"><img src="img/svg/create-promocode.svg" class="function-icon">
              <p class="function-name name4">Create Promo Code</p>
            </a>
          </div>
        </div>
      </div>
    `;
    }
}