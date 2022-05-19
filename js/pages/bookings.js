export default class Bookings {
  constructor() {
    this.template();
  }


  template() {

    document.querySelector("#bookings").innerHTML += /*html*/ `
        <div class="top-content">
        <!-- breadcrumbs navigation -->
        <div class="breadcrumbs">
        <a href="#"><img src="../img/svg/home.svg"></a>
        <img src="../img/svg/bracket.svg" class="back-bracket">
        <a href="#bookings" class="step-link active-link">Bookings</a>
        </div>
        <!-- username and language -->
        <div class="user-display">
        <p class="username" id='username'></p>
        <img src="../img/svg/danish-flag.svg" class="flag">
        </div>
        </div>

     <h1 class="heading">BOOKING LIST</h2>

     <div class="item-amount">
    <div class='search-box'><input type="search" placeholder="Search" onkeyup="searchBookings(this.value)" class='customerSearch'/></div>
     <div class='search-flex-numbers'><span id="booking-amount"></span>
     <p class="item-total">bookings</p></div>
     </div>
     <!-- bookings table -->
     <div class="page-layout">
      <section class="customersBox">
      <div class="latestbookingsContent">
        <table class='table-customers'>
          <thead>
            <tr>
              <th>
                <div class="latestbookingsOrderLabel"">Status<img src="/img/svg/order.svg" class="ordericon"></button>
              </th>
              <th>
                <div class="latestbookingsOrderLabel">Name</div>
              </th>
              <th>
                <div class="latestbookingsOrderLabel">Partner</div>
              </th>
              <th>
                <div class="latestbookingsOrderLabel">Type</div>
              </th>
              <th>
                <div class="latestbookingsOrderLabel">Booking date</div>
              </th>
               <th>
                <div class="latestbookingsOrderLabel">Service date</div>
              </th>
               <th>
                <div class="latestbookingsOrderLabel">Total incl.VAT</div>
              </th>
            </tr>
          </thead>
          <tbody id="fetchedBookings">
          </tbody>
          </tr>
        </table>
      </div>
    </section>


<!-- quick action table -->
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
        <a href="#" class="action">
          <img src="../img/svg/create-company.svg" class="action-icon">
          <p class="action-name">Create Company</p>
         </a>
         <a href="#" class="action">
          <img src="../img/svg/company-booking.svg" class="action-icon">
          <p class="action-name">Book Company</p>
         </a>
       </div>
       </section>


</div>
    `;

  }


}