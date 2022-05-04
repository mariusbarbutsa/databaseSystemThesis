export default class Customers {
  constructor() {
    this.template();

  }


  template() {

    document.querySelector("#customers").innerHTML += /*html*/ `
        <div class="top-content">
        <div class="breadcrumbs">
        <a href="#"><img src="../img/svg/home.svg"></a>
        <img src="../img/svg/bracket.svg" class="back-bracket">
        <a href="#customers" class="step-link active-link">Customers</a>
        </div>
        <div class="user-display">
        <p class="username" id='username'></p>
        <img src="../img/svg/danish-flag.svg" class="flag">
        </div>
        </div>

     <h1 class="heading">CUSTOMER LIST</h2>
    <div class="item-amount">
     <span id="customer-amount"></span>
     <p class="item-total">customers</p>
     </div>

     <div class="page-layout">
      <section class="customersBox">
      <div class="latestbookingsContent">
        <table class='table-customers'>
          <thead>
            <tr>
              <th>
                <button class="latestbookingsOrderLabel" name="status" value="status" onclick="orderBy(this.value);">Name/Surname<img src="/img/svg/order.svg" class="ordericon"></button>
              </th>
              <th>
                <div class="latestbookingsOrderLabel">Email address</div>
              </th>
              <th>
                <div class="latestbookingsOrderLabel">Phone nr.</div>
              </th>
              <th>
                <div class="truncated-text latestbookingsOrderLabel">Balance</div>
              </th>
              <th>
                <div class="latestbookingsOrderLabel">Credits</div>
              </th>
              <th>
                <button class="truncated-text latestbookingsOrderLabel" name="date" value="date" onclick="orderBy(this.value);">Created on<img src="/img/svg/order.svg"
                    class="ordericon"></button>
              </th>
            
            </tr>
          </thead>
          <tbody id="fetchedCustomers">
          </tbody>
          </tr>
        </table>
      </div>
    </section>



    <section class="quick-actions">
       <div class="action-box">
       <p class="actions-heading">Quick Actions</p>
        <a href="#" class="action">
          <img src="../img/svg/private-booking.svg" class="action-icon">
          <p class="action-name">Private Booking</p>
         </a>
         <a href="#" class="action">
          <img src="../img/svg/create-card.svg" class="action-icon">
          <p class="action-name">Create Card</p>
         </a>
         <a href="#" class="action">
          <img src="../img/svg/create-promocode.svg" class="action-icon">
          <p class="action-name">Create Promo Code</p>
         </a>
       </div>
       </section>


</div>
    `;

  }


}