// Array of items
const items = [
  "ammo.pistol",
  "bone.club",
  "bow.compound",
  "crossbow",
  "grenade.beancan",
  "grenade.f1",
  "knife.bone",
  "knife.combat",
  "metal.fragments",
  "pistol.eoka",
  "rifle.ak",
  "rifle.bolt",
  "shotgun.double",
  "smg.2",
  "weapon.mod.extendedmags",
  "weapon.mod.small.scope",
  "wood"
];

// Get the dropdown list container
const itemDropdown = document.getElementById("itemDropdown");

// Generate HTML for each item and append to dropdown
items.forEach(item => {
  const itemName = item.replace(".", " ").replace(/(?:^|\s)\S/g, l => l.toUpperCase()); // Format item name
  const itemDiv = document.createElement("div");
  itemDiv.className = "dropdown-item";
  itemDiv.setAttribute("data-value", item);
  itemDiv.innerHTML = `
    <img src="https://gorillaperson.github.io/WaxKitCreator/images/${item}.png" alt="${itemName}">
    ${itemName}
  `;
  itemDropdown.appendChild(itemDiv);
});
