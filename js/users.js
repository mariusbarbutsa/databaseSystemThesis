import {
    firebaseDB
} from "./firebase-service.js";

export default class Users {
    constructor() {
        this.bookingRef = firebaseDB.collection("bookings");
        this.customerRef = firebaseDB.collection("customers");
        this.companiesRef = firebaseDB.collection("companies");
        this.readBookings();
        this.readCustomers();
        this.readCompanies();
        this.bookings = [];
        this.customers = [];
    }

    readBookings() {
        // ========== READ ==========
        // watch the database ref for changes
        this.bookingRef.onSnapshot(snapshotData => {

            this.bookings = snapshotData.docs.map(doc => {
                const booking = doc.data();
                booking.id = doc.id;
                return booking;
            });
            this.appendBooking(this.bookings);
            // this.appendCustomerBookings(this.bookings)
        });
    }

    readCustomers() {
        // ========== READ ==========
        // watch the database ref for changes
        this.customerRef.onSnapshot(snapshotData => {
            this.customers = snapshotData.docs.map(doc => {
                const customer = doc.data();
                customer.id = doc.id;
                return customer;
            });
            this.appendCustomer(this.customers);
            let customerAmount = this.customers.length;
            console.log(customerAmount)
            document.querySelector("#customer-amount").innerHTML = customerAmount;
        });
    }

       readCompanies() {
        // ========== READ ==========
        // watch the database ref for changes
        this.companiesRef.onSnapshot(snapshotData => {
            let companies = [];
            snapshotData.forEach(doc => {
                let company = doc.data();
                company.id = doc.id;
                companies.push(company);
            });
            this.appendCompanies(companies);
            let companyAmount = companies.length;
            console.log(companyAmount)
            document.querySelector("#company-amount").innerHTML = companyAmount;
        });
    }

    // append bookings to the DOM
    appendBooking(bookings) {
        let htmlTemplate = "";
        for (let booking of this.bookings) {
            htmlTemplate += `
            <tr>
              <td>${booking.status}</td>
              <td class='truncated-text'>${booking.payment}</td>
              <td class='truncated-text'>${booking.type}</td>
              <td>${booking.fakturaNumber}</td>
              <td class='truncated-text'>${booking.name}</td>
              <td class='truncated-text'>${booking.createdOn}</td>
              <td>${booking.price}</td>
            </tr>
      `;
        }
        document.querySelector('#fetchedLatestBookings').innerHTML = htmlTemplate;
    }

    // append customers to the DOM
    appendCustomer(customers) {
        let htmlTemplate = "";
        for (let customer of this.customers) {
            htmlTemplate += /*html*/ `
            <tr onclick="showDetailView('${customer.id}'); navigateTo('detailedview');">
              <td class='truncated-text' onclick="showDetailView('${customer.id}')">${customer.name}</td>
              <td class='truncated-text' onclick="showDetailView('${customer.id}')">${customer.email}</td>
              <td class='truncated-text'>${customer.phone}</td>
              <td>${customer.balance} DKK</td>
              <td>${customer.credits}</td>
              <td class='truncated-text'>${customer.createdOn}</td>
            </tr>
      `;
        }
        document.querySelector('#fetchedCustomers').innerHTML = htmlTemplate;
        console.log(customers)
    }

    // append companies to the DOM
    appendCompanies(companies) {
        let htmlTemplate = "";
        for (let company of companies) {
            htmlTemplate += `
            <tr>
              <td class='truncated-text'>${company.name}</td>
              <td class='truncated-text'>${company.admin}</td>
              <td class='truncated-text'>${company.email}</td>
              <td class='truncated-text'>${company.phone}</td>
              <td>${company.companyPrice} DKK</td>
              <td>${company.employeePrice} DKK</td>
              <td>${company.employeeBooking}</td>
            </tr>
      `;
        }
        document.querySelector('#fetchedCompanies').innerHTML = htmlTemplate;
        console.log(companies)
    }

    showDetailView(id) {
        const customerObject = this.customers.find((customer) => customer.id == id);
        document.querySelector("#detailed-view-container").innerHTML = /*html*/ `
        <div class="top-content">
             <div class="breadcrumbs">
                <a href="#"><img src="../img/svg/home.svg"></a>
                 <img src="../img/svg/bracket.svg" class="back-bracket">
                <a href="#customers" class="step-link">Customers</a>
                <img src="../img/svg/bracket.svg" class="back-bracket">
                <a href="#customers" class="step-link active-link">${customerObject.name}</a>
            </div>
            <div class="user-display">
                <p class="username" id='username'></p>
                <img src="../img/svg/danish-flag.svg" class="flag">
            </div>
        </div>
        <div class="profile-detailed">
            <img src="../img/svg/raskrask-customers.svg" class="profile-icon">
            <div class="profile-description">
            <div class="profile-main">
                <h2 class="profile-name">${customerObject.name}</h2>
                <p class="profile-status">${customerObject.status}</p>
            </div>
            <div class="contact-info">
            <div class="profile-important">
                 <img src="../img/svg/raskrask-message-icon.svg" class="contact-icon">
                 <p class="contact-details">${customerObject.email}</p>
            </div>
             <div class="profile-important">
                 <img src="../img/svg/raskrask-phone-icon.svg" class="contact-icon">
                 <p class="contact-details">${customerObject.phone}</p>
            </div>
            <div class="profile-important">
                 <img src="../img/svg/raskrask-location-icon.svg" class="contact-icon">
                 <p class="contact-details">${customerObject.address}</p>
            </div>
            </div>
            </div>
            <div class="buttons">
            <a href="#" class="cta-button-dark">Book</a>
            <a href="#" class="cta-button-light space">Edit</a>
            </div>
        </div>

        <div class="page-layout">
      <section class="customersBox">
      <div class="latestbookingsContent">
      <p class="latestbookingsTitle">Bookings</p>
        <table class='table-customers'>
          <thead>
            <tr>
              <th>
                <button class="latestbookingsOrderLabel" name="status" value="status" onclick="orderBy(this.value);">Status<img src="/img/svg/order.svg" class="ordericon"></button>
              </th>
              <th>
                <div class="latestbookingsOrderLabel">Partner</div>
              </th>
              <th>
                <div class="latestbookingsOrderLabel">Type</div>
              </th>
              <th>
                <div class="truncated-text latestbookingsOrderLabel">Service date</div>
              </th>
              <th>
                <div class="latestbookingsOrderLabel">Address</div>
              </th>
              <th>
                <button class="truncated-text latestbookingsOrderLabel" name="date" value="date" onclick="orderBy(this.value);">Total incl.VAT<img src="/img/svg/order.svg"
                    class="ordericon"></button>
              </th>
              <th>
                <button class="truncated-text latestbookingsOrderLabel" name="date" value="date" onclick="orderBy(this.value);">Balance<img src="/img/svg/order.svg"
                    class="ordericon"></button>
              </th>
            </tr>
          </thead>
          <tbody id="fetchedCustomerBookings">
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
        `
        if (customerObject.status === "Active") {
    document.querySelector(".profile-status").style.backgroundColor =
      "var(--green)";
        } else {
            document.querySelector(".profile-status").style.backgroundColor =
      "var(--red)";
        }
        // this.appendCustomerBookings(this.bookings)
        let htmlTemplate = "";
        for (let booking of this.bookings) {
            // console.log(customerObject.name, booking.client)
            if(booking.name == customerObject.name) {
            htmlTemplate += `
            <tr>
              <td>${booking.status}</td>
              <td class='truncated-text'>${booking.alias}</td>
              <td class='truncated-text'>${booking.type}</td>
              <td class='truncated-text'>${booking.serviceDate}</td>
              <td class='truncated-text'>${booking.address}</td>
              <td>${booking.price} DKK</td>
              <td>${booking.balance} DKK</td>
            </tr>
      `;
        }
    }
    if(htmlTemplate == ""){
        htmlTemplate += `
       <p class="no-bookings">No current bookings</p>
     `
    }
    document.querySelector('#fetchedCustomerBookings').innerHTML = htmlTemplate;
        console.log(this.bookings)
    }


    // order function - Marius
    orderBy(value) {
        console.log(value)
        if (value === "status") {
            this.orderByStatus();
        } else if (value === "date") {
            this.orderByDate();
        } else if (value === "price") {
            this.orderByPrice();
        } else {
            console.log('no')
        }
    }

    // order by environment of the activity function - Marius
    orderByStatus() {
        console.log(this.bookings)

        this.bookings.sort((booking1, booking2) => {
            return booking1.status.localeCompare(booking2.status);
        });
        this.appendBooking(this.bookings);
        console.log('success')
    }

    orderByDate() {
        this.bookings.forEach(booking => {

        });
        this.bookings.sort((date1, date2) => {
            return date1.createdOn.localeCompare(date2.createdOn);
        });
        this.appendBooking(bookings);
        console.log('success')
    }

    orderByPrice() {
        this.bookings.sort((price1, price2) => {
            return price1.createdOn.localeCompare(price2.createdOn);
        });
        this.appendBooking(bookings);
        console.log('success')
    }



    // ========== CREATE ==========
    // add a new user to firestore (database)
    create(name, mail, img) {
        this.userRef.add({
            name,
            mail,
            img
        });
    }

    // ========== UPDATE ==========
    update(id, name, mail, img) {
        this.userRef.doc(id).update({
            name,
            mail,
            img
        });
    }

    // ========== DELETE ==========
    delete(id) {
        this.userRef.doc(id).delete();
    }
}