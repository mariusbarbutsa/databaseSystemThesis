export default class Dashboard{
    constructor() {
        this.template();
        // this.dateDisplay();
    }

//     dateDisplay() {
//     var objToday = new Date(),
// 	weekday = new Array('Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'),
// 	dayOfWeek = weekday[objToday.getDay()],
// 	domEnder = function() { var a = objToday; if (/1/.test(parseInt((a + "").charAt(0)))) return "th"; a = parseInt((a + "").charAt(1)); return 1 == a ? "st" : 2 == a ? "nd" : 3 == a ? "rd" : "th" }(),
// 	dayOfMonth = today + ( objToday.getDate() < 10) ? '0' + objToday.getDate() + domEnder : objToday.getDate() + domEnder,
// 	months = new Array('January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'),
// 	curMonth = months[objToday.getMonth()],
// 	curYear = objToday.getFullYear(),
// 	curHour = objToday.getHours() > 12 ? objToday.getHours() - 12 : (objToday.getHours() < 10 ? "0" + objToday.getHours() : objToday.getHours()),
// 	curMinute = objToday.getMinutes() < 10 ? "0" + objToday.getMinutes() : objToday.getMinutes(),
// 	curSeconds = objToday.getSeconds() < 10 ? "0" + objToday.getSeconds() : objToday.getSeconds(),
// 	curMeridiem = objToday.getHours() > 12 ? "PM" : "AM";
// var today = curHour + ":" + curMinute + "." + curSeconds + curMeridiem + " " + dayOfWeek + " " + dayOfMonth + " of " + curMonth + ", " + curYear;

// document.getElementsByTagName('h1')[0].textContent = today;
//     }

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
     <h1 class="heading">DASHBOARD</h2>

     <div class="layout">
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
      

      <section class="latestbookingsBox">
      <div class="latestbookingsContent">
        <p class="latestbookingsTitle">Latest orders</p>
        <table class="latestbookingsTable">
          <thead>
            <tr>
              <th>
                <div class="latestbookingsOrderLabel">Status<img src="/img/svg/order.svg" class="ordericon"></div>
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
                <div class="truncated-text latestbookingsOrderLabel">Created on<img src="/img/svg/order.svg"
                    class="ordericon"></div>
              </th>
              <th>
                <div class="latestbookingsOrderLabel">Total<img src="/img/svg/order.svg" class="ordericon"></div>
              </th>
            </tr>
          </thead>

          <tbody id="fetchedLatestBookings">
          </tbody>
          </tr>
        </table>
      </div>
    </section>
    `;
  }

}
