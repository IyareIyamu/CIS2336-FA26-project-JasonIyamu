// Dynamic Navigation Menu Generation
const navigationLinks = [
        { name: "Home", url: "index.html" },
    { name: "FAQ", url: "FAQ.html" },
    { name: "Room Booking", url: "roombooking.html" },
    { name: "References", url: "reference.html" }
];

const navigationContainer = document.getElementById("main-nav");

// Generate and inject menu layout elements automatically
const menuList = document.createElement("ul");
menuList.className = "nav-menu";

navigationLinks.forEach(link => {
    const listItem = document.createElement("li");
    const anchor = document.createElement("a");
    anchor.href = link.url;
    anchor.textContent = link.name;
    
    // Highlight active link matching current page file location
    if (window.location.pathname.includes(link.url) || (link.url === "index.html" && window.location.pathname === "/")) {
        anchor.className = "active";
    }
    
    listItem.appendChild(anchor);
    menuList.appendChild(listItem);
});

navigationContainer.appendChild(menuList);
// Collapsible FAQ Interface Elements
document.addEventListener("DOMContentLoaded", () => {
    const faqButtons = document.querySelectorAll(".faq-toggle");

    faqButtons.forEach(button => {
        button.addEventListener("click", function() {
            this.classList.toggle("active");
            const content = this.nextElementSibling;
            
            if (content.style.maxHeight) {
                content.style.maxHeight = null;
            } else {
                content.style.maxHeight = content.scrollHeight + "px";
            }
        });
    });
});

// Booking form validation
document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("booking-form");
    if (!form) return; // the other pages have no booking form

    const nameInput = document.getElementById("student-name");
    const idInput = document.getElementById("student-id");
    const roomSelect = document.getElementById("room-select");
    const dateInput = document.getElementById("booking-date");

    // Today's date as YYYY-MM-DD in local time; past days are greyed out in the picker
    const now = new Date();
    const today = now.getFullYear() + "-" +
        String(now.getMonth() + 1).padStart(2, "0") + "-" +
        String(now.getDate()).padStart(2, "0");
    dateInput.min = today;

    // Shows (or clears) the error message under a field
    function showError(input, message) {
        const group = input.closest(".form-group");
        group.classList.toggle("invalid", message !== "");
        group.querySelector(".error-message").textContent = message;
        return message === "";
    }

    function validateName() {
        const value = nameInput.value.trim();
        if (value.length < 2) return showError(nameInput, "Please enter your full name.");
        return showError(nameInput, "");
    }

    function validateId() {
        if (!/^\d{7}$/.test(idInput.value.trim())) {
            return showError(idInput, "PeopleSoft ID must be exactly 7 digits.");
        }
        return showError(idInput, "");
    }

    function validateRoom() {
        if (roomSelect.value === "") return showError(roomSelect, "Please choose a room.");
        return showError(roomSelect, "");
    }

    function validateDate() {
        if (dateInput.value === "") return showError(dateInput, "Please choose a date.");
        if (dateInput.value < today) return showError(dateInput, "The date cannot be in the past.");
        return showError(dateInput, "");
    }

    // Check each field when the user leaves it, and re-check while they fix it
    [
        [nameInput, validateName],
        [idInput, validateId],
        [roomSelect, validateRoom],
        [dateInput, validateDate]
    ].forEach(([input, check]) => {
        input.addEventListener("blur", check);
        input.addEventListener("input", () => {
            if (input.closest(".form-group").classList.contains("invalid")) check();
        });
    });

    form.addEventListener("submit", event => {
        const results = [validateName(), validateId(), validateRoom(), validateDate()];
        if (!results.every(Boolean)) {
            event.preventDefault(); // stop the form from submitting
            form.querySelector(".invalid input, .invalid select").focus();
        }
    });
});