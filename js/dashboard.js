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
     <div class="content-left">
      <section class="functions">
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
      </section>

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
          <div class='scroll-box'>
          <tbody id="fetchedLatestBookings">
          </tbody>
          </div>
          </tr>
        </table>
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
}
