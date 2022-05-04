export default class Companies {
  constructor() {
    this.template();
  }


  template() {

    document.querySelector("#companies").innerHTML += /*html*/ `
        <div class="top-content">
        <div class="breadcrumbs">
        <a href="#"><img src="../img/svg/home.svg"></a>
        <img src="../img/svg/bracket.svg" class="back-bracket">
        <a href="#companies" class="step-link active-link">Companies</a>
        </div>
        <div class="user-display">
        <p class="username" id='username'></p>
        <img src="../img/svg/danish-flag.svg" class="flag">
        </div>
        </div>

     <h1 class="heading">COMPANY LIST</h2>

     <div class="item-amount">
    <div class='search-box'><input type="search" placeholder="Search" onkeyup="searchCompanies(this.value)" class='customerSearch'/></div>
     <div class='search-flex-numbers'><span id="company-amount"></span>
     <p class="item-total">companies</p></div>
     </div>

     <div class="page-layout">
      <section class="customersBox">
      <div class="latestbookingsContent">
        <table class='table-customers'>
          <thead>
            <tr>
              <th>
                <button class="latestbookingsOrderLabel" name="status" value="status" onclick="orderBy(this.value);">Name<img src="/img/svg/order.svg" class="ordericon"></button>
              </th>
              <th>
                <div class="latestbookingsOrderLabel">Admin Name</div>
              </th>
              <th>
                <div class="latestbookingsOrderLabel">Email</div>
              </th>
              <th>
                <div class="truncated-text latestbookingsOrderLabel">Phone number</div>
              </th>
              <th>
                <button class="truncated-text latestbookingsOrderLabel" onclick="orderBy(this.value);">Price exc. VAT<img src="/img/svg/order.svg"
                    class="ordericon"></button>
              </th>
                 <th>
                <button class="truncated-text latestbookingsOrderLabel" onclick="orderBy(this.value);">Employee Price<img src="/img/svg/order.svg"
                    class="ordericon"></button>
              </th>
                <th>
                <button class="truncated-text latestbookingsOrderLabel" onclick="orderBy(this.value);">Employee Booking<img src="/img/svg/order.svg"
                    class="ordericon"></button>
              </th>
            </tr>
          </thead>
          <tbody id="fetchedCompanies">
          </tbody>
          </tr>
        </table>
      </div>
    </section>



    <section class="quick-actions">
       <div class="action-box">
       <p class="actions-heading">Quick Actions</p>
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