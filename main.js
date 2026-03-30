const form = document.getElementById("contactForm");

if (form) {
    form.addEventListener("submit", function (e) {
        e.preventDefault();

        let contacts = JSON.parse(localStorage.getItem("contacts")) || [];

        const newContact = {
            name: document.getElementById("name").value,
            email: document.getElementById("email").value,
            phone: document.getElementById("phone").value,
            department: document.getElementById("department").value,
            position: document.getElementById("position").value
        };

        contacts.push(newContact);
        localStorage.setItem("contacts", JSON.stringify(contacts));

        alert("Contact saved!");
        form.reset();
    });
}

const table = document.getElementById("contactTable");

if (table) {
    let contacts = JSON.parse(localStorage.getItem("contacts")) || "";

    contacts.forEach((contact, index) => {
        let row = `
            <tr>
                <td>${contact.name}</td>
                <td>${contact.email}</td>
                <td>${contact.phone}</td>
                <td>${contact.department}</td>
                <td>
                    <button onclick="viewDetails(${index})">Details</button>
                    <button onclick="editContact()">Edit</button>
                    <button onclick="deleteContact(${index})">Delete</button>
                </td>
            </tr>
        `;
        table.innerHTML += row;
    });
}


function viewDetails(index) {
    let contacts = JSON.parse(localStorage.getItem("contacts"));
    let c = contacts[index];

    alert(
        Name: ${c.name}\nEmail: ${c.email}\nPhone: ${c.phone}\nDepartment: ${c.department}\nPosition: ${c.position}
    );
}

function editContact() {
    alert("Edit functionality coming soon!");
}

function deleteContact(index) {
    if (confirm("Are you sure you want to delete?")) {
        let contacts = JSON.parse(localStorage.getItem("contacts"));
        contacts.splice(index, 1);
        localStorage.setItem("contacts", JSON.stringify(contacts));
        location.reload();
    }
}