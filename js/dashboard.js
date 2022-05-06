import authService from "./auth.js";

export default class Dashboard {
  constructor() {
    this.template();
    this.authService = authService;
    // this.dateDisplay();
  }

  template() {
    // program to display the date
    // get local machine date time
    const date = new Date();

    // get the date as a string
    const n = date.toDateString();

    const today = `Today, ` + n

    // const a = "day"

    // const day = n[0].concat(a)

    // display date
    console.log(today);

    document.querySelector("#home").innerHTML += /*html*/ `
    <div class='user-display-flexbox'>
      <div class='search-box'><input type="search" placeholder="Search" onkeyup="searchedData(this.value)" class='globalSearch'/></div>
        <div class="user-display align-right">
        <p class="username" id='username'></p>
        <img src="../img/svg/danish-flag.svg" class="flag">
        </div>
        </div>
        <section class="latestbookingsBox globalSearchBox" id='bookingsSearchSection' style='display: none;'>
      <div class="latestbookingsContent">
         <div>
        <table class="latestbookingsTable">
          <thead class='global-thead-absolute'>
            <tr>
              <th>
                <button class="latestbookingsOrderLabel" name="status" value="status" onclick="orderBy(this.value);">Status<img src="/img/svg/order.svg" class="ordericon"></button>
              </th>
              <th>
                <div class="latestbookingsOrderLabel">Payment</div>
              </th>
              <th>
                <div class="latestbookingsOrderLabel">Type</div>
              </th>
              <th>
                <div class=" truncated-text latestbookingsOrderLabel">Fak. nr.</div>
              </th>
              <th>
                <div class="latestbookingsOrderLabel">Name</div>
              </th>
              <th>
                <button class="truncated-text latestbookingsOrderLabel" name="date" value="date" onclick="orderBy(this.value);">Created on<img src="/img/svg/order.svg"
                    class="ordericon"></button>
              </th>
              <th>
                <button class="latestbookingsOrderLabel" name="price" value="price" onclick="orderBy(this.value);">Total<img src="/img/svg/order.svg" class="ordericon"></button>
              </th>
            </tr>
          </thead>
          <tbody id = "searchedData">
          </tbody>
          </tr>
        </table>
      </div>
      </div>
    </section>

    <section class="latestbookingsBox globalSearchBoxCustomers" id='customersSearchSection' style='display: none;'>
      <div class="latestbookingsContent">
         <div>
        <table class="latestbookingsTable">
          <thead class='global-thead-absolute'>
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
          <tbody id = "searchedDataCustomers">
          </tbody>
          </tr>
        </table>
      </div>
      </div>
    </section>
    <h1 class="heading">DASHBOARD</h2>

     <div class="layout">
     <div class="content-left">
      <section class="functions">
      <a href="javascript:modalDisplay(1);" >
        <div class="function-box box1">
          <div class="function-content">
              <img src="img/svg/private-booking.svg" class="function-icon">
              <p class="function-name name1">Private Booking</p>
          </div>
        </div>
        </a>
        <a href="#">
        <div class="function-box">
          <div class="function-content">
              <img src="img/svg/create-company.svg" class="function-icon">
              <p class="function-name">Create Company</p>
          </div>
        </div>
        </a>
        <a href="#">
        <div class="function-box">
          <div class="function-content">
              <img src="img/svg/company-booking.svg" class="function-icon">
              <p class="function-name name2">Company Booking</p>
          </div>
        </div>
        </a>
        <a href="#">
        <div class="function-box">
          <div class="function-content">
              <img src="img/svg/create-card.svg" class="function-icon">
              <p class="function-name name3">Create Card</p>
          </div>
        </div>
        </a>
        <a href="#">
        <div class="function-box">
          <div class="function-content">
              <img src="img/svg/create-promocode.svg" class="function-icon">
              <p class="function-name name4">Create Promo Code</p>
          </div>
        </div>
        </a>
      </section>

      <section class="latestbookingsBox">
      <div class="latestbookingsContent">
        <p class="latestbookingsTitle">Latest orders</p>
         <div class='scroll-box'>
        <table class="latestbookingsTable">
          <thead class='thead-absolute'>
            <tr>
              <th>
                <button class="latestbookingsOrderLabel" name="status" value="status" onclick="orderBy(this.value);">Status<img src="/img/svg/order.svg" class="ordericon"></button>
              </th>
              <th>
                <div class="latestbookingsOrderLabel">Payment</div>
              </th>
              <th>
                <div class="latestbookingsOrderLabel">Type</div>
              </th>
              <th>
                <div class=" truncated-text latestbookingsOrderLabel">Fak. nr.</div>
              </th>
              <th>
                <div class="latestbookingsOrderLabel">Name</div>
              </th>
              <th>
                <button class="truncated-text latestbookingsOrderLabel" name="date" value="date" onclick="orderBy(this.value);">Created on<img src="/img/svg/order.svg"
                    class="ordericon"></button>
              </th>
              <th>
                <button class="latestbookingsOrderLabel" name="price" value="price" onclick="orderBy(this.value);">Total<img src="/img/svg/order.svg" class="ordericon"></button>
              </th>
            </tr>
          </thead>
          <tbody tbody id = "fetchedLatestBookings" >
          </tbody>
          </tr>
        </table>
      </div>
      </div>
    </section>
    </div>

    <div class="content-right">
    <section class="stats">
        <p class="stats-heading">Today, April 28 2022</p>
        <p class="daily-clients-text">4 NEW CLIENTS</p>
         <div class="graph-box">
           <img src="../img/svg/donut-graph.svg" class="graph-img">
            <div class="graph-text">
              <p class="graph-description">TOTAL OF</p>
              <p class="graph-description emphasized">40</p>
              <p class="graph-description">ORDERS</p>
            </div>
        </div>
        <div class="labels">
         <div class="label1">
          <span class="square1"></span>
            <p class="label-text"><span class="semibold">Reorders:</span></b> 30</p>
          </div>
         <div class="label2">
          <span class="square2"></span>
            <p class="label-text"><span class="semibold">New orders:</span> 10</p>
         </div>
         </div>
       </section>

    <section class="help">
      <div class="help-box">
        <img src="../img/svg/help.svg" class="help-img">
        <p class="help-heading">Need help?</p>
      </div>
      <p class="help-text">If you need help with onboarding into the system or further instructions of how to get started, press here:</p>
    <a href="#" class="help-button">GUIDANCE</a>
      </section>
      </div>
</div>
    `;

    document.querySelector(".stats-heading").innerHTML = today;


  }


  logout() {
    this.authService.logout();
  }
}