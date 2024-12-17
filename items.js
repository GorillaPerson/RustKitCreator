// List of items with properties
const items = [
  { shortName: "ammo.pistol", displayName: "Ammo - Pistol", showImage: true },
  { shortName: "ammo.rifle", displayName: "Ammo - Rifle", showImage: true },
  { shortName: "ammo.shotgun", displayName: "Ammo - Shotgun", showImage: false }, // Will display fallback
  { shortName: "wood", displayName: "Wood", showImage: true },
  { shortName: "stone", displayName: "Stone", showImage: false } // Will display fallback
];

// Function to determine and set the image source
console.log(items);

// Function to determine the image source based on `showImage`
const getImageSource = (item) => {
  if (item.showImage) {
    return `https://raw.githubusercontent.com/GorillaPerson/Rust-items-images/refs/heads/main/items/${item.shortName}.png`;
  } else {
    return "https://example.com/staticFallbackImage.png"; // Replace with your fallback image URL
  }
};

// Dynamically build the dropdown list
const buildDropdown = () => {
  const itemDropdown = document.getElementById('itemDropdown');
  itemDropdown.innerHTML = ''; // Clear previous items

  items.forEach(item => {
    const dropdownItem = document.createElement('div');
    dropdownItem.className = 'dropdown-item';
    dropdownItem.dataset.value = item.shortName;

    // Set image and name dynamically
    dropdownItem.innerHTML = `
      <img src="${getImageSource(item)}" alt="${item.displayName}" width="50" height="50">
      ${item.displayName}
    `;
    itemDropdown.appendChild(dropdownItem);
  });
};

// Call the function to build the dropdown when the script is loaded
document.addEventListener('DOMContentLoaded', buildDropdown);
