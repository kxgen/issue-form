// Generate today's date. No date input is needed.
const today = new Date();
document.getElementById('request-date').textContent = today.toLocaleDateString('en-GB', {
  day: '2-digit',
  month: 'short',
  year: 'numeric',
});

// Add and remove material rows.
const rows = document.getElementById('material-rows');

document.getElementById('add-material').addEventListener('click', () => {
  const row = rows.querySelector('tr').cloneNode(true);

  row.querySelectorAll('select').forEach((select) => {
    select.selectedIndex = 0;
  });

  row.querySelectorAll('input').forEach((input) => {
    input.value = '';
  });

  row.lastElementChild.innerHTML = `
    <button type="button"
        class="remove-material rounded px-2 py-1 text-sm text-red-700 hover:bg-red-50">
        Remove
    </button>
    `;

  rows.appendChild(row);
});

rows.addEventListener('click', (event) => {
  if (event.target.classList.contains('remove-material')) {
    event.target.closest('tr').remove();
  }
});

// Demo only: prevent a page reload until a backend is connected.
document.getElementById('request-form').addEventListener('submit', (event) => {
  event.preventDefault();
  alert('Form validated. Connect a backend to save the request.');
});

// Fetch Buttons

let dropdown_buildings = document.getElementById('dropdown_buildings_btn')
let dropdown_engineers = document.getElementById('dropdown_engineers_btn')
let dropdown_materials = document.getElementById('dropdown_materials_btn')


document.getElementById('fetchBlockbtn').addEventListener('click', async () => {
  const response = await fetch('http://localhost:3000/buildings');
  data = await response.json();
  dropdown_buildings.innerHTML = '<option value="">Select a block</option>';

  data.forEach(element => {
    const option = document.createElement('option');
    option.value = element.block_code
    option.textContent = element.block_code
    dropdown_buildings.appendChild(option)
  })
});

document.getElementById('fetchEngineerbtn').addEventListener('click', async () => {
  const response = await fetch('http://localhost:3000/engineers');
  engineers = await response.json();

  dropdown_engineers.innerHTML = "";

  data.forEach(element => {
    const option = document.createElement('option')
    option.value = element.id
    option.textContent = element.name

    dropdown_engineers.appendChild(option)
  })
});

document.getElementById('fetchMaterialbtn').addEventListener('click', async () => {
  const response = await fetch('http://localhost:3000/materials');
  materials = await response.json();
});
