/* Variables */
let containerItems = document.querySelector(".container__items")
const data = "https://raw.githubusercontent.com/stente3/Store-with-json/main/tshirts.json";
fetch(data)
    .then(data => data.json())
    .then(data => showProducts(data));


/* Functions */
function showProducts(products) {
    products.items.forEach(element => {
        let item = document.createElement("div");
        item.classList.add("col-sm-6", "col-xl-4", "mb-3");
        /* Create a card with all the information*/
        item.innerHTML = `<div class="card">
                            <img src="${element.location}" class="card-img-top" alt="T-shirts">
                            <div class="card-body d-flex flex-column align-items-center">
                                <h2 class="card-title h5">T-shirt of ${element.name}</h2>
                                <p class="card-text">${element.price}</p>
                                <a href="#" class="btn btn-primary col-10 m-auto col-md-7 col-xl-5">Buy</a>
                            </div> <!-- .card-body -->
                        </div>  <!-- .card -->`
        containerItems.appendChild(item);
    });
}