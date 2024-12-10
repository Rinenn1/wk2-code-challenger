
// Select elements
const dropdown = document.getElementById("dropdown");
const itemName = document.getElementById("itemName");
const itemQuantity = document.getElementById("itemQuantity");
const addButton = document.getElementById("btn");
const list = document.getElementById("list");
const searchInput = document.getElementById("searchInput");
const searchButton = document.getElementById("button");
const clearItems = document.getElementById("clearBtn")

// Add item to the list
addButton.addEventListener("click", function (event) {
    event.preventDefault(); // Prevent default button behavior

    // Get input values
    const type = dropdown.value.trim();
    const name = itemName.value.trim();
    const quantity = itemQuantity.value.trim();

    // Validate inputs
    if (!type || !name || !quantity) {
        alert("Please fill in all fields.");
        return;
    }

    // Create a new list item
    const li = document.createElement("li");
    li.textContent = `${type}: ${name} (Qty: ${quantity})`;


