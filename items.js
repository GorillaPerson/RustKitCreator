// items.js
const items = [
  { shortName: "ammo.pistol", displayName: "Ammo - Pistol" },
  { shortName: "wood", displayName: "Wood" },
  { shortName: "metal.fragments", displayName: "Metal Fragments" },
  { shortName: "rifle.ak", displayName: "Rifle - AK" },
  { shortName: "grenade.beancan", displayName: "Grenade - Beancan" },
];

// Dynamically build the dropdown list
const buildDropdown = () => {
  const itemDropdown = document.getElementById('itemDropdown');
  itemDropdown.innerHTML = ''; // Clear previous items

  items.forEach(item => {
    const dropdownItem = document.createElement('div');
    dropdownItem.className = 'dropdown-item';
    dropdownItem.dataset.value = item.shortName;
    dropdownItem.innerHTML = `
      <img src="https://gorillaperson.github.io/WaxKitCreator/images/${item.shortName}.png" alt="${item.displayName}">
      ${item.displayName}
    `;
    itemDropdown.appendChild(dropdownItem);
  });
};

// Call the function to build the dropdown when the script is loaded
document.addEventListener('DOMContentLoaded', buildDropdown);
