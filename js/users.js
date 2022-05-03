import {
    firebaseDB
} from "./firebase-service.js";

export default class Users {
    constructor() {
        this.bookingRef = firebaseDB.collection("bookings");
        this.customerRef = firebaseDB.collection("customers");
        this.readBookings();
        this.readCustomers();
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
            htmlTemplate += `
            <tr>
              <td class='truncated-text'>${customer.name}</td>
              <td class='truncated-text'>${customer.email}</td>
              <td class='truncated-text'>${customer.phone}</td>
              <td>${customer.balance}</td>
              <td>${customer.credits}</td>
              <td class='truncated-text'>${customer.createdOn}</td>
            </tr>
      `;
        }
        document.querySelector('#fetchedCustomers').innerHTML = htmlTemplate;
        console.log(bookings)
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