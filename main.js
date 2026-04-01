let contacts = JSON.parse(localStorage.getItem("contacts")) || [];

const form = document.getElementById("contactForm");

if (form) {
    form.addEventListener("submit", function (e) {
        e.preventDefault();

        const newContact = {
            fullName: form.firstName.value + " " + form.lastName.value,
            email: form.email.value,
            phone: form.phone.value,
            department: form.department.value
        };

        contacts.push(newContact);
        localStorage.setItem("contacts", JSON.stringify(contacts));

        alert("Contact saved successfully ");
        form.reset();
    });
}


const tableBody = document.getElementById("contactTable");

if (tableBody) {
    displayContacts();
}

function displayContacts() {
    tableBody.innerHTML = "";

    contacts.forEach((contact, index) => {
        const row = document.createElement("tr");

        row.innerHTML = `
            <td>${contact.fullName}</td>
            <td>${contact.email}</td>
            <td>${contact.phone}</td>
            <td>${contact.department}</td>
            <td>
                <button onclick="viewDetails(${index})">Details</button>
                <button onclick="editContact()">Edit</button>
                <button onclick="deleteContact(${index})">Delete</button>
            </td>
        `;

        tableBody.appendChild(row);
    });
}


function viewDetails(index) {
    const contact = contacts[index];
    alert(
        `Name: ${contact.fullName}
Email: ${contact.email}
Phone: ${contact.phone}
Department: ${contact.department}`
    );
}


function editContact() {
    alert("Still figuring this feature out");
}


function deleteContact(index) {
    const confirmDelete = confirm("Are you sure you want to delete?");

    if (confirmDelete) {
        contacts.splice(index, 1);
        localStorage.setItem("contacts", JSON.stringify(contacts));
        displayContacts();
    }
}