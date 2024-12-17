// List of items with properties
const items = [
  { shortName: "ammo.pistol", displayName: "Ammo - Pistol", showImage: true },
  { shortName: "ammo.rifle", displayName: "Ammo - Rifle", showImage: true },
  { shortName: "ammo.shotgun", displayName: "Ammo - Shotgun", showImage: false }, // Will display fallback
  { shortName: "wood", displayName: "Wood", showImage: true },
  { shortName: "stone", displayName: "Stone", showImage: false } // Will display fallback
];

// Function to determine and set the image source
function getImageBasedOnCondition(item) {
  if (item.showImage === true) {
    // Use the dynamic image URL
    return `https://wiki.rustclash.com/img/items180/${item.shortName}.png`;
  } else {
    // Use a static fallback image
    return "https://example.com/staticFallbackImage.png"; // Replace with your fallback image URL
  }
}

// Function to render all items and their images on the page
function renderItems() {
  const container = document.getElementById("itemsContainer");

  if (!container) {
    console.error("Container element with ID 'itemsContainer' not found.");
    return;
  }

  // Clear existing content
  container.innerHTML = "";

  // Loop through each item and render its image and name
  items.forEach((item) => {
    const itemElement = document.createElement("div");
    itemElement.style.margin = "10px";

    // Create image element
    const imageElement = document.createElement("img");
    imageElement.src = getImageBasedOnCondition(item);
    imageElement.alt = item.displayName;
    imageElement.width = 100;
    imageElement.height = 100;

    // Create name label
    const labelElement = document.createElement("p");
    labelElement.textContent = item.displayName;

    // Append image and label to the item element
    itemElement.appendChild(imageElement);
    itemElement.appendChild(labelElement);

    // Append item element to the container
    container.appendChild(itemElement);
  });
}

// Run the render function after DOM content is loaded
document.addEventListener("DOMContentLoaded", function () {
  renderItems();
});
