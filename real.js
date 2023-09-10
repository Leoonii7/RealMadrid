document.addEventListener("DOMContentLoaded", function () {
    const cartTotalElement = document.getElementById("cart-total");

    let cartTotal = 0;

    function updateCartTotal() {
        cartTotalElement.textContent = `Cart Total: $${cartTotal.toFixed(2)}`;
    }

    updateCartTotal(); // Call this function to display initial total
});
document.addEventListener("DOMContentLoaded", function () {
    const productCards = document.querySelectorAll(".product-card");
    const cartTotalElement = document.getElementById("cart-total");

    let cartTotal = 0;

    function updateCartTotal() {
        cartTotalElement.textContent = `Cart Total: $${cartTotal.toFixed(2)}`;
    }

    productCards.forEach(function (card) {
        const addToCartButton = card.querySelector(".add-to-cart-btn");
        const price = parseFloat(card.querySelector("p:last-child").textContent.slice(8));

        addToCartButton.addEventListener("click", function () {
            cartTotal += price;
            updateCartTotal();
        });
    });

    const productPrices = {
        "Real Madrid Home Kit 2023": 120,
        // Add prices for other products here
    };

    // Initialize the total bill
    let totalBill = 0;

    // Function to update the total bill
    function updateTotalBill() {
        const totalBillElement = document.getElementById("total-bill");
        totalBillElement.textContent = `Total Bill: $${totalBill}`;
    }

    // Add event listener for the "Add to Cart" buttons
    const addToCartButtons = document.querySelectorAll(".add-to-cart-btn");
    addToCartButtons.forEach((button) => {
        button.addEventListener("click", () => {
            const productName = button.getAttribute("data-product");

            // Calculate the price for the selected product
            const productPrice = productPrices[productName];
            const totalPrice = productPrice;

            // Add the calculated price to the total bill
            totalBill += totalPrice;

            // Update the total bill on the page
            updateTotalBill();
        });
    });

    const checkoutButton = document.getElementById("proceed-to-checkout");
    checkoutButton.addEventListener("click", redirectToPaymentPage);

    function redirectToPaymentPage() {
        // Redirect to the payment page with the total bill as a parameter
        const totalBillValue = totalBill.toFixed(2); // Ensure the total bill is formatted correctly
        window.location.href = `payshop.php?total=${totalBillValue}`;
    }

});