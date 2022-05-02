import {
    firebaseDB
} from "./firebase-service.js";

export default class Users {
    constructor() {
        this.bookingRef = firebaseDB.collection("bookings");
        this.read();
    }

    read() {
        // ========== READ ==========
        // watch the database ref for changes
        this.bookingRef.onSnapshot(snapshotData => {
            let bookings = [];
            snapshotData.forEach(doc => {
                let booking = doc.data();
                booking.id = doc.id;
                bookings.push(booking);
            });
            this.appendBooking(bookings);
        });
    }

    // append users to the DOM
    appendBooking(bookings) {
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
        document.querySelector('#fetchedLatestBookings').innerHTML = htmlTemplate;
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