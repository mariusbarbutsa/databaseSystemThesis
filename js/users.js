import {
    firebaseDB
}
from "./firebase-service.js";

export default class Users {
    constructor() {
        this.bookingRef = firebaseDB.collection("bookings");
        this.customerRef = firebaseDB.collection("customers");
        this.companiesRef = firebaseDB.collection("companies");
        this.partnersRef = firebaseDB.collection("partners");
        this.creditCardsRef = firebaseDB.collection("creditcards");
        this.readBookings();
        this.readCustomers();
        this.readCompanies();
        this.readPartners();
        this.readCreditCards();
        this.bookings = [];
        this.customers = [];
        this.companies = [];
        this.partners = [];
        this.creditCards = [];
    }
    // ========== READ ==========
    // watch the database ref for changes

    readBookings() {
        this.bookingRef.onSnapshot(snapshotData => {

            this.bookings = snapshotData.docs.map(doc => {
                const booking = doc.data();
                booking.id = doc.id;
                return booking;
            });
            this.appendBooking(this.bookings);
            this.appendBookings(this.bookings);
            let bookingAmount = this.bookings.length;
            console.log(bookingAmount)
            document.querySelector("#booking-amount").innerHTML = bookingAmount;
            this.orderByDate();
            // this.appendCustomerBookings(this.bookings)
        });
    }

    readCustomers() {
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
            this.orderByDateCustomers();
        });
    }

    readCompanies() {

        this.companiesRef.onSnapshot(snapshotData => {
            this.companies = snapshotData.docs.map(doc => {
                const company = doc.data();
                company.id = doc.id;
                return company;
            });
            this.appendCompanies(this.companies);
            let companyAmount = this.companies.length;
            document.querySelector("#company-amount").innerHTML = companyAmount;
        });
    }

    readPartners() {

        this.partnersRef.onSnapshot(snapshotData => {
            this.partners = snapshotData.docs.map(doc => {
                const partner = doc.data();
                partner.id = doc.id;
                return partner;
            });
            this.appendPartners(this.partners);
            let partnerAmount = this.partners.length;
            document.querySelector("#partner-amount").innerHTML = partnerAmount;
        });
    }

    readCreditCards() {

        this.creditCardsRef.onSnapshot(snapshotData => {
            this.creditCards = snapshotData.docs.map(doc => {
                const creditCard = doc.data();
                creditCard.id = doc.id;
                return creditCard;
            });
            this.appendCreditCards(this.creditCards);
            let creditCardsAmount = this.creditCards.length;
            document.querySelector("#creditCards-amount").innerHTML = creditCardsAmount;
        });
    }


    // append latest bookings to the DOM 
    appendBooking(bookings) {
        let htmlTemplate = "";
        for (let booking of this.bookings) {
            var timestamp = booking.createdOn;
            var date = new Date(timestamp);
            var dateCreated = date;
            dateCreated = dateCreated.toDateString().split(' ').slice(1).join(' ');
            htmlTemplate += /*html*/ `
            <tr onclick = "showBooking('${booking.id}'); navigateTo('bookingview')" >
              <td class='truncated-text'>${booking.status}</td>
              <td class='truncated-text'>${booking.payment}</td>
              <td class='truncated-text'>${booking.type}</td>
              <td class='truncated-text'>${booking.fakturaNumber}</td>
              <td class='truncated-text'>${booking.name}</td>
              <td class='truncated-text'>${dateCreated}</td>
              <td class='truncated-text'>${booking.price}</td>
            </tr>
      `;
        }
        document.querySelector('#fetchedLatestBookings').innerHTML = htmlTemplate;
        console.log(bookings)
    }

    // append bookings to the DOM
    appendBookings(bookings) {
        let htmlTemplate = "";
        for (let booking of bookings) {
            var timestamp = booking.createdOn;
            var date = new Date(timestamp);
            var dateCreated = date;
            dateCreated = dateCreated.toDateString().split(' ').slice(1).join(' ');

            var datestamp = booking.serviceDate;
            var theDate = new Date(datestamp);
            var serviceDate = theDate;
            serviceDate = serviceDate.toDateString().split(' ').slice(1).join(' ');
            htmlTemplate += `
            <tr>
              <td>${booking.status}</td>
              <td class='truncated-text'>${booking.name}</td>
              <td class='truncated-text'>${booking.alias}</td>
              <td class='truncated-text'>${booking.type}</td>
              <td class='truncated-text'>${booking.createdOn}</td>
              <td class='truncated-text'>${booking.serviceDate}</td>
              <td>${booking.price}</td>
            </tr>
      `;
        }
        document.querySelector('#fetchedBookings').innerHTML = htmlTemplate;
        console.log(bookings)
    }

    // append customers to the DOM
    appendCustomer(customers) {
        let htmlTemplate = "";
        for (let customer of customers) {
            var timestamp = customer.createdOn;
            var date = new Date(timestamp);
            var dateCreated = date;
            dateCreated = dateCreated.toDateString().split(' ').slice(1).join(' ');
            htmlTemplate += /*html*/ `
            <tr onclick="showDetailView('${customer.id}'); navigateTo('detailedview');">
              <td class='truncated-text' onclick="showDetailView('${customer.id}')">${customer.name}</td>
              <td class='truncated-text' onclick="showDetailView('${customer.id}')">${customer.email}</td>
              <td class='truncated-text'>${customer.phone}</td>
              <td>${customer.balance} DKK</td>
              <td>${customer.credits}</td>
              <td class='truncated-text'>${dateCreated}</td>
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

    // append partners to the DOM
    appendPartners(partners) {
        let htmlTemplate = "";
        let attachPartners = "";
        for (let partner of partners) {
            htmlTemplate += `
            <tr>
            <td class="link-td"><span class='app-button'>APP</span></td>
              <td class='truncated-text'>${partner.status}</td>
              <td class='truncated-text'>${partner.alias}</td>
              <td class='truncated-text'>${partner.speciality}</td>
              <td class='truncated-text'>${partner.email}</td>
              <td class='truncated-text'>${partner.phone}</td>
              <td class='truncated-text'>${partner.area}</td>
              <td>${partner.rab}</td>
              <td>${partner.vat}</td>
              <td>${partner.share}</td>
            </tr>
      `;

            attachPartners += `
            <option>${partner.alias}</option>
            `;
            console.log(partner.alias)
        }
        document.querySelector('#fetchedPartners').innerHTML = htmlTemplate;
        document.querySelector('#fetchedPartnerAlias').innerHTML = attachPartners;
        console.log(partners)
    }
    // append credit cards to the DOM
    appendCreditCards(cards) {
        let htmlTemplate = "";
        for (let card of cards) {
            htmlTemplate += `
            <tr>
              <td>${card.account}</td>
              <td class='truncated-text'>${card.name}</td>
              <td class='truncated-text'>${card.type}</td>
              <td class='truncated-text'>${card.creditsBought}</td>
              <td class='truncated-text'>${card.creditsLeft}</td>
              <td class='truncated-text'>${card.balance} DKK</td>
              <td>${card.createdOn}</td>
            </tr>
      `;
        }
        document.querySelector('#fetchedCards').innerHTML = htmlTemplate;
    }




    // append detailed view of the customer - Vlada
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
            <a href="javascript:modalDisplay(1);" class="cta-button-dark">Book</a>
            <a href="#" class="cta-button-light space">Edit</a>
            </div>
        </div>

        <div class="page-layout">
        <section class='detailedview-side'>
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

 <section class="customersBox">
      <div class="latestbookingsContent">
      <p class="latestbookingsTitle">Credit Cards</p>
        <table class='table-customers'>
          <thead>
            <tr>
              <th>
                <button class="latestbookingsOrderLabel" name="status" value="status" onclick="orderBy(this.value);">Klippekort/gavekode<img src="/img/svg/order.svg" class="ordericon"></button>
              </th>
              <th>
                <div class="latestbookingsOrderLabel">Type of card</div>
              </th>
              <th>
                <div class="latestbookingsOrderLabel">Created on</div>
              </th>
              <th>
                <div class="truncated-text latestbookingsOrderLabel">Credits left</div>
              </th>
              <th>
                <div class="latestbookingsOrderLabel">Credits bought</div>
              </th>
              <th>
                <button class="truncated-text latestbookingsOrderLabel" name="date" value="date" onclick="orderBy(this.value);">Balance<img src="/img/svg/order.svg"
                    class="ordericon"></button>
              </th>
            </tr>
          </thead>
          <tbody id="fetchedCustomerCreditCards">
          </tbody>
          </tr>
        </table>
      </div>
      </section>
      </section>

        <section section class = 'detailedview-side' >
       <section class="notes-box">
        <p class='notes-header'>Notes</p>
        <div class='notes-scroll'>
            <div class='notes-container'>
            <a href='' class='notes-button'>PINNED</a>
            <p class='notes-title'>Editing subscription</p>
            <p class='notes-time'>3 months ago</p>
            <p class='notes-content'>In the administration when creating or editing a subscription, it is now possible to handle a large number of add-ons. Add-ons to be added can be searched with text matching in handle, name and description.</p>
            </div>

            <div class='notes-container'>
            <p class='notes-title'>Editing subscription</p>
            <p class='notes-time'>3 months ago</p>
            <p class='notes-content'>In the administration when creating or editing a subscription, it is now possible to handle a large number of add-ons. Add-ons to be added can be searched with text matching in handle, name and description.</p>
            </div>

            <div class='notes-container'>
            <p class='notes-title'>Editing subscription</p>
            <p class='notes-time'>3 months ago</p>
            <p class='notes-content'>In the administration when creating or editing a subscription, it is now possible to handle a large number of add-ons. Add-ons to be added can be searched with text matching in handle, name and description.</p>
            </div>
        </div>
        <a href='#detailedview' class='notes-add-button'>+</a>
       </section>

       <section class="notes-box">
        <p class='notes-header'>Timeline</p>
        <div class='timeline-scroll'>
            <div class='timeline-container'>
            <p class='timeline-title'>Gift Card created</p>
            <p class='timeline-time'>3 April 2022 17:28</p>
            </div>

            <div class='timeline-container'>
            <p class='timeline-title'>Booking invoice settled</p>
            <p class='timeline-time'>2 April 2022 10:35</p>
            </div>

            <div class='timeline-container'>
            <p class='timeline-title'>Booking created</p>
            <p class='timeline-time'>2 April 2022 10:30</p>
            </div>

            <div class='timeline-container'>
            <p class='timeline-title'>Booking created</p>
            <p class='timeline-time'>2 April 2022 10:30</p>
            </div>

        </div>

       </section>

        <section class="notes-box">
        <p class='notes-header'>Communication</p>
        <div class='timeline-scroll'>
            <div class='timeline-container'>
            <p class='timeline-title'>SMS</p>
            <p class='timeline-time'>3 April 2022 17:28</p>
            </div>

            <div class='timeline-container'>
            <p class='timeline-title'>EMAIL</p>
            <p class='timeline-time'>2 April 2022 10:35</p>
            </div>

            <div class='timeline-container'>
            <p class='timeline-title'>EMAIL</p>
            <p class='timeline-time'>2 April 2022 10:30</p>
            </div>

            <div class='timeline-container'>
            <p class='timeline-title'>SMS</p>
            <p class='timeline-time'>2 April 2022 10:30</p>
            </div>

        </div>

       </section>

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
            if (booking.name == customerObject.name) {
                htmlTemplate += /*html*/ `
            <tr onclick="showBooking('${booking.id}'); navigateTo('bookingview')">
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
        if (htmlTemplate == "") {
            htmlTemplate += `
       <p class="no-bookings">No current bookings</p>
     `
        }
        document.querySelector('#fetchedCustomerBookings').innerHTML = htmlTemplate;
        console.log(this.bookings)

        let htmlTemplate2 = "";
        for (let card of this.creditCards) {
            console.log(customerObject.name, card.name)
            if (card.name == customerObject.name) {
                htmlTemplate2 += /*html*/ `
            <tr>
            <td class='truncated-text'>${card.account}</td>
              <td class='truncated-text'>${card.type}</td>
              <td class='truncated-text'>${card.createdOn}</td>
              <td class='truncated-text'>${card.creditsLeft}</td>
              <td class='truncated-text'>${card.creditsBought}</td>
              <td>${card.balance} DKK</td>
            </tr>
      `;
            }
        }
        if (htmlTemplate2 == "") {
            htmlTemplate2 += `
       <p class="no-bookings">No current credit cards</p>
     `
        }
        document.querySelector('#fetchedCustomerCreditCards').innerHTML = htmlTemplate2;
    }

    // append detailed view of the booking - Vlada
    showBooking(id) {
        const bookingObject = this.bookings.find((booking) => booking.id == id);
        document.querySelector("#booking-detail").innerHTML = /*html*/ `
        <div class="top-content">
             <div class="breadcrumbs">
                <a href="#"><img src="../img/svg/home.svg"></a>
                 <img src="../img/svg/bracket.svg" class="back-bracket">
                <a href="#customers" class="step-link">Customers</a>
                <img src="../img/svg/bracket.svg" class="back-bracket">
                <a onclick='history.back()' class="step-link">${bookingObject.name}</a>
                <img src="../img/svg/bracket.svg" class="back-bracket">
                <a onclick="showBooking('${bookingObject.id}');" class="step-link active-link">${bookingObject.id}</a>
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
                <h2 class="profile-name">Booking</h2>
                <p class="booking-id">${bookingObject.id}</p>
            </div>
            <div class="booking-info">
            <div class="contact-info">
            <div class="profile-important">
                 <p class="profile-section">Type:</p>
                 <p class="contact-details">${bookingObject.type}</p>
            </div>
            
             <div class="profile-important">
                <p class="profile-section">Service date:</p>
                 <p class="contact-details">${bookingObject.serviceDate}</p>
            </div>
            <div class="profile-important">
                  <p class="profile-section">Address:</p>
                 <p class="contact-details">${bookingObject.address}</p>
            </div>
            <div class="profile-important">
                  <p class="profile-section">Partner:</p>
                 <p class="contact-details">${bookingObject.alias}</p>
            </div>
            </div>
            <div class="booking-buttons">
            <a href="#" class="cta-button-light">Edit booking</a>
            <a href="#" class="cta-button-light space">Cancel booking</a>
            <a href="#" class="cta-button-light space">Rebook</a>
            </div>
            </div>
            </div>
            </div>
        `;
    }


    // filterByStatus(status) {
    //     let valueFilter = document.querySelector('input[name="Status"]:checked').value;
    //     let checkmarks = document.querySelectorAll('.checkbox');
    //     for (checkmark of checkmarks) {
    //         const activePartners = this.partners.filter(partner => partner.status === status);
    //             this.appendPartners(activePartners);
    //         if (status === "Active") {
    //             const activePartners = this.partners.filter(partner => partner.status === status);
    //             this.appendPartners(activePartners);
    //         } else if (status === "Inactive") {
    //             const inactivePartners = this.partners.filter(partner => partner.status === status);
    //             this.appendPartners(inactivePartners);
    //         } else {
    //             this.appendPartners(this.partners)
    //          }
    //     }
    // }


    // order functions by status, date and price - Marius

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


    orderByStatus() {
        console.log(this.bookings)

        this.bookings.sort((booking1, booking2) => {
            return booking1.status.localeCompare(booking2.status);
        });
        this.appendBooking(this.bookings);
        console.log('success')
    }

    orderByDate() {

        this.bookings.sort((booking1, booking2) => {
            var timestamp1 = booking1.createdOn;
            var timestamp2 = booking2.createdOn;
            var date1 = new Date(timestamp1);
            var date2 = new Date(timestamp2);
            var dateCreated1 = date1;
            var dateCreated2 = date2;
            return dateCreated2 - dateCreated1
        });
        this.appendBooking(this.bookings);
    }

    orderByPrice() {

        this.bookings.sort((booking1, booking2) => {
            return booking2.price - booking1.price;
        });
        this.appendBooking(this.bookings);
    }


    orderByCustomers(value) {
        console.log(value)
        if (value === "name") {
            this.orderByName();
        } else if (value === "date") {
            this.orderByDateCustomers();
        }
    }


    orderByName() {

        this.customers.sort((customer1, customer2) => {
            return customer1.name.localeCompare(customer2.name);
        });
        this.appendCustomer(this.customers);

    }

    orderByDateCustomers() {

        this.customers.sort((customer1, customer2) => {
            var timestamp1 = customer1.createdOn;
            var timestamp2 = customer2.createdOn;
            var date1 = new Date(timestamp1);
            var date2 = new Date(timestamp2);
            var dateCreated1 = date1;
            var dateCreated2 = date2;
            return dateCreated2 - dateCreated1
        });
        this.appendCustomer(this.customers);
    }
    // append bookings from the global search results
    appendGlobalSearch(bookings) {
        let htmlTemplate = "";
        for (let booking of bookings) {
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
        document.querySelector('#searchedData').innerHTML = htmlTemplate;
    }
    // append customers from the global search results
    appendGlobalSearchCustomers(customers) {
        let htmlTemplate = "";
        for (let customer of customers) {
            var timestamp = customer.createdOn;
            var date = new Date(timestamp);
            var dateCreated = date;
            dateCreated = dateCreated.toDateString().split(' ').slice(1).join(' ');
            htmlTemplate += /*html*/ `
            <tr onclick="showDetailView('${customer.id}'); navigateTo('detailedview');">
              <td class='truncated-text' onclick="showDetailView('${customer.id}')">${customer.name}</td>
              <td class='truncated-text' onclick="showDetailView('${customer.id}')">${customer.email}</td>
              <td class='truncated-text'>${customer.phone}</td>
              <td>${customer.balance} DKK</td>
              <td>${customer.credits}</td>
              <td class='truncated-text'>${dateCreated}</td>
            </tr>
      `;
        }
        document.querySelector('#searchedDataCustomers').innerHTML = htmlTemplate;
    }

    // Global search from the Dashboard, works for the bookings and customers collections - Marius
    searchedData(value) {
        // let searchitem = document.querySelector("#searchedData");

        //selecting both tables from the dashboard and hiding them if the search value does not match the content from the collections
        let bookingSearch = document.querySelector('#bookingsSearchSection');
        let customerSearch = document.querySelector('#customersSearchSection');
        bookingSearch.style.display = "none";
        customerSearch.style.display = "none";
        if (value == "") {
            // searchitem.style.display = "none";
            bookingSearch.style.display = "none";
            customerSearch.style.display = "none";
            // document.querySelector('.latestbookingsBox').classList.add("globalSearchBoxCustomers");
        } else {
            // searchitem.style.display = "";
            // bookingSearch.style.display = "";
            // customerSearch.style.display = "";

            let searchQuery = value.toLowerCase();
            let filteredBookings = [];
            let filteredCustomers = [];

            for (let booking of this.bookings) {
                let name = booking.name.toLowerCase();
                let date = booking.createdOn.toLowerCase();
                let payment = booking.payment.toLowerCase();

                if (name.includes(searchQuery) || date.includes(searchQuery) || payment.includes(searchQuery)) {
                    filteredBookings.push(booking);
                    bookingSearch.style.display = "";
                    this.appendGlobalSearch(filteredBookings);
                }
            }

            for (let customer of this.customers) {
                let name = customer.name.toLowerCase();
                let email = customer.email.toLowerCase();
                let address = customer.address.toLowerCase();

                if (name.includes(searchQuery) || email.includes(searchQuery) || address.includes(searchQuery)) {
                    filteredCustomers.push(customer);
                    customerSearch.style.display = "";
                    this.appendGlobalSearchCustomers(filteredCustomers);
                }
            }
            // this.appendGlobalSearch(filteredProducts);
            // this.appendGlobalSearchCustomers(filteredProductsCustomers);
            console.log(filteredProductsCustomers)

        }

    }
    // search function for the customer page
    searchCustomers(value) {

        if (value == "") {
            this.appendCustomer(this.customers);

        } else {

            let searchQuery = value.toLowerCase();
            let filteredCustomers = [];


            for (let customer of this.customers) {
                let name = customer.name.toLowerCase();
                let email = customer.email.toLowerCase();
                let address = customer.address.toLowerCase();

                if (name.includes(searchQuery) || email.includes(searchQuery) || address.includes(searchQuery)) {
                    filteredCustomers.push(customer);

                }
            }
            this.appendCustomer(filteredCustomers);

        }

    }

    searchCompanies(value) {

        if (value == "") {
            this.appendCompanies(this.companies);

        } else {

            let searchQuery = value.toLowerCase();
            let filteredCompanies = [];


            for (let company of this.companies) {
                let name = company.name.toLowerCase();
                let email = company.email.toLowerCase();
                let address = company.address.toLowerCase();

                if (name.includes(searchQuery) || email.includes(searchQuery) || address.includes(searchQuery)) {
                    filteredCompanies.push(company);
                }
            }
            this.appendCompanies(filteredCompanies);

        }

    }
    // search function for the partners page
    searchPartners(value) {

        if (value == "") {
            this.appendPartners(this.partners);

        } else {

            let searchQuery = value.toLowerCase();
            let filteredPartners = [];


            for (let partner of this.partners) {
                let alias = partner.alias.toLowerCase();
                let email = partner.email.toLowerCase();
                let speciality = partner.speciality.toLowerCase();
                let area = partner.area.toLowerCase();

                if (alias.includes(searchQuery) || email.includes(searchQuery) || speciality.includes(searchQuery) || area.includes(searchQuery)) {
                    filteredPartners.push(partner);
                }
            }
            this.appendPartners(filteredPartners);

        }

    }
    // search function for the bookings page
    searchBookings(value) {

        if (value == "") {
            this.appendBookings(this.bookings);

        } else {

            let searchQuery = value.toLowerCase();
            let filteredBookings = [];


            for (let booking of this.bookings) {
                let name = booking.name.toLowerCase();
                let alias = booking.alias.toLowerCase();
                let type = booking.type.toLowerCase();
                let createdOn = booking.createdOn.toLowerCase();

                if (alias.includes(searchQuery) || name.includes(searchQuery) || type.includes(searchQuery) || createdOn.includes(searchQuery)) {
                    filteredBookings.push(booking);
                }
            }
            this.appendBookings(filteredBookings);

        }
    }
    // search function for the credit cards page
    searchCreditcards(value) {

        if (value == "") {
            this.appendCreditCards(this.creditCards);

        } else {

            let searchQuery = value.toLowerCase();
            let filteredCards = [];


            for (let card of this.creditCards) {
                let name = card.name.toLowerCase();
                let email = card.email.toLowerCase();
                let type = card.type.toLowerCase();
                let createdOn = card.createdOn.toLowerCase();

                if (email.includes(searchQuery) || name.includes(searchQuery) || type.includes(searchQuery) || createdOn.includes(searchQuery)) {
                    filteredCards.push(card);
                }
            }
            this.appendCreditCards(filteredCards);

        }
    }






    // create function that adds a new customer and booking to the firestore
    create(name, email, phone, address, createdOn, balance, credits, status, alias, service, type, serviceDate, price, payment, fakturaNumber) {

        this.customerRef.add({
            name,
            email,
            phone,
            address,
            createdOn,
            balance,
            credits,
            status

        });

        this.bookingRef.add({
            name,
            alias,
            service,
            type,
            address,
            createdOn,
            serviceDate,
            price,
            status,
            payment,
            fakturaNumber,
            balance

        });
    }

}