const items = [
  { shortName: "ammo.pistol", displayName: "Ammo - Pistol", showImage: true },
  { shortName: "ammo.rifle", displayName: "Ammo - Rifle", showImage: true },
  { shortName: "ammo.shotgun", displayName: "Ammo - Shotgun", showImage: false },
  { shortName: "wood", displayName: "Wood", showImage: true },
  { shortName: "stone", displayName: "Stone", showImage: false },
  { shortName: "metal.fragments", displayName: "Metal Fragments", showImage: true }
]; 
console.log(items);

// Function to get a random static image URL (you can adjust the logic as per your static image choices)
const getRandomStaticImage = () => {
  const staticImages = [
    'https://via.placeholder.com/150?text=Static+Image+1',
    'https://via.placeholder.com/150?text=Static+Image+2',
    'https://via.placeholder.com/150?text=Static+Image+3'
  ];
  const randomIndex = Math.floor(Math.random() * staticImages.length);
  return staticImages[randomIndex];
};

// Dynamically build the dropdown list
const buildDropdown = () => {
  const itemDropdown = document.getElementById('itemDropdown');
  itemDropdown.innerHTML = ''; // Clear previous items

  items.forEach(item => {
    const dropdownItem = document.createElement('div');
    dropdownItem.className = 'dropdown-item';
    dropdownItem.dataset.value = item.shortName;

    // Check if the item has the showImage flag set to true, then show either dynamic or static image
    const imageUrl = item.showImage
      ? `https://raw.githubusercontent.com/GorillaPerson/Rust-items-images/refs/heads/main/items/${item.shortName}.png`
      : getRandomStaticImage();

    dropdownItem.innerHTML = `
      <img src="${imageUrl}" alt="${item.displayName}">
      ${item.displayName}
      <label class="switch">
        <input type="checkbox" ${item.showImage ? 'checked' : ''} onchange="toggleImage(${items.indexOf(item)})">
        <span class="slider"></span>
      </label>
    `;
    itemDropdown.appendChild(dropdownItem);
  });
};

// Toggle image between dynamic and static
const toggleImage = (index) => {
  const item = items[index];
  item.showImage = !item.showImage; // Toggle the showImage value
  buildDropdown(); // Rebuild the dropdown to reflect the change
};

// Call the function to build the dropdown when the script is loaded
document.addEventListener('DOMContentLoaded', buildDropdown);
