// items.js
// main.js (or whatever your main JS file is)
import { items } from './itemlist.js';

// Now you can use the 'items' array here
console.log(items);


// Dynamically build the dropdown list
const buildDropdown = () => {
  const itemDropdown = document.getElementById('itemDropdown');
  itemDropdown.innerHTML = ''; // Clear previous items

  items.forEach(item => {
    const dropdownItem = document.createElement('div');
    dropdownItem.className = 'dropdown-item';
    dropdownItem.dataset.value = item.shortName;
    dropdownItem.innerHTML = `
      <img src="https://wiki.rustclash.com/img/items180/${item.shortName}.png" alt="${item.displayName}">
      ${item.displayName}
    `;
    itemDropdown.appendChild(dropdownItem);
  });
};

// Call the function to build the dropdown when the script is loaded
document.addEventListener('DOMContentLoaded', buildDropdown);
