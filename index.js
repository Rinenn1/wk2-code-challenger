
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


    const markPurchasedButton = document.createElement("button");
    markPurchasedButton.textContent = "Mark Purchased";
    markPurchasedButton.style.marginLeft = "10px";

    // Handle "Mark Purchased" functionality
    markPurchasedButton.addEventListener("click", function () {
        if (li.style.textDecoration === "line-through") {
            li.style.textDecoration = ""; // Unmark as purchased
            li.style.backgroundColor = ""; // Reset background
        } else {
            li.style.textDecoration = "line-through"; // Mark as purchased
            li.style.backgroundColor = "#d4edda"; // Light green background
        }
    });

    // Append the button to the list item
    li.appendChild(markPurchasedButton);
    

    // Append the item to the list
    list.appendChild(li);

    // Clear inputs
    itemName.value = "";
    itemQuantity.value = "";
});


// Search for an item
searchButton.addEventListener("click", function (event) {
    event.preventDefault();

    const query = searchInput.value.trim().toLowerCase();
    const items = list.querySelectorAll("li");

    if (!query) {
        alert("Please enter an item to search for.");
        return;
    }

        // Search and highlight matching items
        items.forEach((item) => {
            const itemName = item.getAttribute("data-name");
            if (itemName.includes(query)) {
                item.style.backgroundColor = "#ffeb3b"; // Highlight matching item
            } else {
                item.style.backgroundColor = ""; // Reset non-matching items
            }
        });
});
    
clearItems.addEventListener('click', function(event){
    event.preventDefault();
    
    list.innerHTML = "";
})

