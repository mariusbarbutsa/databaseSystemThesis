export default class Customers {
    constructor() {
        this.template();
    }


    template() {

        document.querySelector("#customers").innerHTML += /*html*/ `
     <h1 class="heading">CUSTOMER LIST</h2>

     <div class="layout">

      
      <section class="customersBox">
      <div class="latestbookingsContent">
         <div class='scroll-box-customers'>
        <table class='table-customers'>
          <thead>
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
                <div class=" truncated-text latestbookingsOrderLabel">Balance</div>
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
          <tbody id="fetchedCustomers">
          </tbody>
          </tr>
        </table>
      </div>
      </div>
    </section>



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


</div>
    `;

    }
}