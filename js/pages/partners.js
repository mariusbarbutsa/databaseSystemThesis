export default class Partners {
  constructor() {
    this.template();
  }

  template() {

    document.querySelector("#partners").innerHTML += /*html*/ `
        <div class="top-content">
        <div class="breadcrumbs">
        <a href="#"><img src="../img/svg/home.svg"></a>
        <img src="../img/svg/bracket.svg" class="back-bracket">
        <a href="#customers" class="step-link active-link">Partners</a>
        </div>
        <div class="user-display">
        <p class="username" id='username'></p>
        <img src="../img/svg/danish-flag.svg" class="flag">
        </div>
        </div>

     <h1 class="heading">PARTNER LIST</h2>
    <div class="item-amount">
    <div class='search-box'><input type="search" placeholder="Search" onkeyup="searchCustomers(this.value)" class='customerSearch'/></div>
    <div class="filter-flex">
    <div class='search-flex-numbers'><span id="partner-amount"></span>
     <p class="item-total">partners</p></div>
     <a href="javascript:filterDisplay(1);" class="filter-btn"><img src="../img/svg/filter.svg" class="filter-icon">Filter</a>
     </div>
     </div>
     
      <section class="partnersBox">
      <div class="latestbookingsContent">
        <table class='table-customers'>
          <thead>
            <tr>
             <th>
                <div class="latestbookingsOrderLabel"></div>
              </th>
              <th>
                <button class="latestbookingsOrderLabel" name="status" value="status" onclick="orderBy(this.value);">Status<img src="/img/svg/order.svg" class="ordericon"></button>
              </th>
              <th>
                <div class="latestbookingsOrderLabel">Alias</div>
              </th>
              <th>
                <div class="latestbookingsOrderLabel">Speciality</div>
              </th>
              <th>
                <div class="truncated-text latestbookingsOrderLabel">Email address</div>
              </th>
              <th>
                <div class="latestbookingsOrderLabel">Phone number</div>
              </th>
               <th>
                <div class="latestbookingsOrderLabel">Area</div>
              </th>
              <th>
                <button class="truncated-text latestbookingsOrderLabel" name="date" value="date" onclick="orderBy(this.value);">RAB<img src="/img/svg/order.svg"
                    class="ordericon"></button>
              </th>
                <th>
                <button class="truncated-text latestbookingsOrderLabel" name="date" value="date" onclick="orderBy(this.value);">VAT<img src="/img/svg/order.svg"
                    class="ordericon"></button>
              </th>
              <th>
                <div class="latestbookingsOrderLabel">Share</div>
              </th>
            </tr>
          </thead>
          <tbody id="fetchedPartners">
          </tbody>
          </tr>
        </table>
    </section>

</div>
    `;
  }
}