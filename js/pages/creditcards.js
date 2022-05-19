export default class CreditCards {
  constructor() {
    this.template();
  }


  template() {

    document.querySelector("#creditcards").innerHTML += /*html*/ `
        <div class="top-content">
        <!-- breadcrumbs navigation -->
        <div class="breadcrumbs">
        <a href="#"><img src="../img/svg/home.svg"></a>
        <img src="../img/svg/bracket.svg" class="back-bracket">
        <a href="#creditcards" class="step-link active-link">Credit Cards</a>
        </div>
                <!-- username and language -->
        <div class="user-display">
        <p class="username" id='username'></p>
        <img src="../img/svg/danish-flag.svg" class="flag">
        </div>
        </div>

     <h1 class="heading">CREDIT CARD LIST</h2>

     <div class="item-amount">
    <div class='search-box'><input type="search" placeholder="Search" onkeyup="searchCreditcards(this.value)" class='customerSearch'/></div>
     <div class='search-flex-numbers'><span id="creditCards-amount"></span>
     <p class="item-total">credit cards</p></div>
     </div>

     <!-- credit cards table -->
     <div class="page-layout">
      <section class="customersBox">
      <div class="latestbookingsContent">
        <table class='table-customers'>
          <thead>
            <tr>
              <th>
                <div class="latestbookingsOrderLabel">Credit Account</div>
              </th>
              <th>
                <div class="latestbookingsOrderLabel">Purchaser's Name</div>
              </th>
              <th>
                <div class="latestbookingsOrderLabel">Type</div>
              </th>
              <th>
                <div class="latestbookingsOrderLabel">Credits Bought</div>
              </th>
              <th>
                <div class="latestbookingsOrderLabel">Credits Left</div>
              </th>
              <th>
                <div class="latestbookingsOrderLabel">Balance</div>
              </th>
              <th>
                <div class="latestbookingsOrderLabel">Created on</div>
              </th>
            </tr>
          </thead>
          <tbody id="fetchedCards">
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