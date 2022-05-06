import authService from "./auth.js";

export default class Modals {
  constructor() {
    this.template();
    this.authService = authService;
    // this.dateDisplay();
  }

  template() {

    document.querySelector("#modals").innerHTML += /*html*/ `
    <div id="overlay">
    <div id="popup"><a href="javascript:modalDisplay(0);"><img class="close-modal" src="/img/svg/close-modal.svg"></a>
      <div class="modal-flexbox">
        <p class="modal-heading-text">Private Booking</p>
        <div class="modal-form-row">

          <div class="modal-form-field right-margin">
            <p class="modal-field-label">Customer name<span class="red">*</span></p>
            <input type="text" id="name" name="name" placeholder="e.g. Glenn Vestergaard" class="modal-field-text"
              required>
          </div>

          <div class="modal-form-field">
            <p class="modal-field-label">Phone number<span class="red">*</span></p>
            <div class="modal-field-phone">
              <select id='phone-code' value="+45" class="modal-field-select right-margin-half">
                <option>+45</option>
                <option>+46</option>
                <option>+47</option>
              </select>
              <input type="number" id="phone" name="number" placeholder="e.g. 91932323" class="modal-field-number"
                required>
            </div>
          </div>

        </div>

        <div class="modal-form-row">

          <div class="modal-form-field right-margin">
            <p class="modal-field-label">Email<span class="red">*</span></p>
            <input type="email" id="email" name="email" placeholder="e.g. glennvestergaar@gmail.com"
              class="modal-field-text" required>
          </div>

          <div class="modal-form-field">
            <p class="modal-field-label">Address<span class="red">*</span></p>
            <input type="text" id="address" name="address" placeholder="e.g. Damagervej 12A" class="modal-field-text"
              required>
          </div>

        </div>


        <div class="modal-form-row">

          <div class="modal-form-field right-margin-half">
            <p class="modal-field-label">Date<span class="red">*</span></p>
            <input type="date" id="date" name="email" placeholder="e.g. glennvestergaar@gmail.com"
              class="modal-field-date" required>
          </div>

          <div class="modal-form-field ">
            <p class="modal-field-label">Time<span class="red">*</span></p>
            <input type="time" id="time" name="address" placeholder="e.g. Damagervej 12A" class="modal-field-date"
              required>
          </div>

        </div>

        <div class="modal-form-row">

          <div class="modal-form-field right-margin">
            <p class="modal-field-label">Customer name<span class="red">*</span></p>
            <select class="modal-field-select-field partner" id="fetchedPartnerAlias" required>
              <option value="" disabled selected hidden>Choose a partner</option>


            </select>
          </div>

          <div class="modal-form-field">
            <p class="modal-field-label">Customer name<span class="red">*</span></p>
            <select id="service" class="modal-field-select-field" required>
              <option value="" disabled selected hidden>Choose the service</option>
              <option>Massage</option>
              <option>Yoga Training</option>
              <option>Hairdresser</option>
              <option>Personal training</option>


            </select>
          </div>


        </div>

        <div class="modal-form-row">


          <div class="modal-form-field right-margin">
            <p class="modal-field-label">Discount</p>
            <div class="modal-field-phone">
              <select id="discount" value="+45" class="modal-field-select right-margin-half">
                <option value="" disabled selected hidden>Select</option>
                <option>Gift Card</option>
                <option>Klippe Card</option>
                <option>Promocode</option>
              </select>
              <input type="text" name="discount" placeholder="e.g. 91932323" class="modal-field-number" required>
            </div>
          </div>

          <div class="modal-form-field">
            <p class="modal-field-label">Service type<span class="red">*</span></p>
            <select id="serviceType" class="modal-field-select-field" id="fetchedPartnerAlias" required>
              <option value="" disabled selected hidden>Choose the service type</option>
              <option>Massage</option>
              <option>Yoga Training</option>
              <option>Hairdresser</option>
              <option>Personal training</option>


            </select>
          </div>

        </div>
        <p class="modal-field-label">Notes to the partner</p>
        <textarea class="modal-form-notes" name="notes" rows="3" placeholder="Type your message here"></textarea>
        <div class="modal-checkbox-reminder">
          <input type="checkbox" class="modal-form-checkbox" name="Reminder" value="Reminder">
          <label class="modal-checkbox-label" for="Reminder">Should the customer receive booking confirmation and
            reminders by
            SMS?</label>
        </div>
        <div class="button-alignment">
          <a class="cta-button-green" onclick="createUser()">Book now<img class="cta-arrow"
              src="/img/svg/arrow-button.svg" alt="arrow"></a>
        </div>

      </div>
    </div>
  </div>
  <div id="overlay-filter">
    <div id="filter-popup"><a href="javascript:filterDisplay(0);"><img class="close-modal"
          src="/img/svg/close-modal.svg"></a>
      <div class="filter-flexbox-first">
        <p class="filter-category">Status</p>
        <div class="checkbox-flex-divider">
          <label class="container margin-check">Active
            <input class='checkbox' type="checkbox" checked="checked" value="Active">
            <span class="checkmark"></span>
          </label>
          <label class="container">Inactive
            <input class='checkbox' type="checkbox" value="Inactive">
            <span class="checkmark"></span>
          </label>
        </div>
      </div>

      <div class="filter-flexbox">
        <p class="filter-category">Speciality</p>
        <div class="checkbox-flex">
          <label class="container margin-check">Masseur
            <input type="checkbox" checked="checked">
            <span class="checkmark"></span>
          </label>
          <label class="container">Hairdresser
            <input type="checkbox">
            <span class="checkmark"></span>
          </label>
        </div>
        <div class="checkbox-flex-divider">
          <label class="container margin-check">Trainer
            <input type="checkbox">
            <span class="checkmark"></span>
          </label>
          <label class="container">Yoga Teacher
            <input type="checkbox">
            <span class="checkmark"></span>
          </label>
        </div>
      </div>

      <div class="filter-flexbox">
        <p class="filter-category">RAB</p>
        <div class="checkbox-flex-divider">
          <label class="container margin-check">Yes
            <input type="checkbox" checked="checked">
            <span class="checkmark"></span>
          </label>
          <label class="container">No
            <input type="checkbox">
            <span class="checkmark"></span>
          </label>
        </div>
      </div>

      <div class="filter-flexbox">
        <p class="filter-category">VAT</p>
        <div class="checkbox-flex-divider">
          <label class="container margin-check">Not Applicable
            <input type="checkbox" checked="checked">
            <span class="checkmark"></span>
          </label>
          <label class="container">Liable
            <input type="checkbox">
            <span class="checkmark"></span>
          </label>
        </div>
      </div>

      <div class="filter-flexbox">
        <p class="filter-category">Share</p>
        <div class="checkbox-flex">
          <label class="container margin-check">Platinum
            <input type="checkbox" checked="checked">
            <span class="checkmark"></span>
          </label>
          <label class="container">Gold
            <input type="checkbox">
            <span class="checkmark"></span>
          </label>
        </div>
        <div class="checkbox-flex-divider">
          <label class="container margin-check">Silver
            <input type="checkbox">
            <span class="checkmark"></span>
          </label>
          <label class="container">Bronze
            <input type="checkbox">
            <span class="checkmark"></span>
          </label>
        </div>
      </div>
      <a class="filter-btn btn-infilter" onclick="filterByStatus(this.value)">Apply</a>
    </div>
  </div>
    `;



  }

}