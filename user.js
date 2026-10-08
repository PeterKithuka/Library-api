const loadBtn = document.querySelector("#load-users");
const filterInput = document.querySelector("#filter-input");
const status = document.querySelector("#status");
const usersList = document.querySelector("#users-list");

let users = [];

// Render function
function renderUsers(list) {
  usersList.innerHTML = "";
  if (list.length === 0) {
    status.textContent = "No users match your filter.";
    return;
  }
  list.forEach(user => {
    const li = document.createElement("li");
    li.textContent = `${user.name} — ${user.email} — ${user.address.city} — ${user.company.name}`;
    usersList.appendChild(li);
  });
}

// Load users
async function loadUsers() {
  loadBtn.disabled = true;
  status.textContent = "Loading users...";
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    users = await response.json();
    status.textContent = "Users loaded successfully.";
    renderUsers(users);
  } catch (err) {
    status.textContent = `Error loading users: ${err.message}`;
  } finally {
    loadBtn.disabled = false;
  }
}

// Event listeners
loadBtn.addEventListener("click", loadUsers);

filterInput.addEventListener("input", () => {
  const term = filterInput.value.toLowerCase();
  const filtered = users.filter(u => u.name.toLowerCase().includes(term));
  renderUsers(filtered);
});