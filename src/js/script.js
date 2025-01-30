document.addEventListener('DOMContentLoaded', function() {
    const nationalityInput = document.getElementById('nationality-drop-input');
    const nationalityList = document.getElementById('nationality-drop-list');
    const nationalityFlag = document.getElementById('nationality-flag');

    // Show nationality dropdown on input click
    nationalityInput.addEventListener('click', function() {
        nationalityList.classList.remove('hidden');
    });

    // Select nationality and update input/flag
    window.selectNationality = function(name, flagPath) {
        nationalityInput.value = name;
        nationalityFlag.src = flagPath;
        nationalityFlag.classList.remove('hidden');
        nationalityList.classList.add('hidden');
    };

    // Filter nationalities based on input
    nationalityInput.addEventListener('input', function() {
        const filter = nationalityInput.value.toLowerCase();
        const items = nationalityList.querySelectorAll('li');

        items.forEach(item => {
            const text = item.textContent || item.innerText;
            item.style.display = text.toLowerCase().includes(filter) ? "flex" : "none";
        });
    });

    // Close dropdown if clicked outside
    document.addEventListener('click', function(event) {
        if (!nationalityList.contains(event.target) && event.target !== nationalityInput) {
            nationalityList.classList.add('hidden');
        }
    });
});


const burgerMenu = document.getElementById('burger-menu');
const mobileMenu = document.getElementById('mobile-menu');
const burgerIcon = document.getElementById('burger-icon');
const closeIcon = document.getElementById('close-icon');

burgerMenu.addEventListener('click', () => {
    mobileMenu.classList.toggle('hidden');
    burgerIcon.classList.toggle('hidden');
    closeIcon.classList.toggle('hidden');
});


function toggleDropdown(dropdownId, iconId) {
    // Select the dropdown menu and its corresponding icon
    const dropdown = document.getElementById(dropdownId);
    const dropdownIcon = document.getElementById(iconId);

    if (!dropdown || !dropdownIcon) {
        console.error("Dropdown or Icon not found!");
        return;
    }

    // Toggle visibility of the dropdown
    dropdown.classList.toggle('hidden');

    // Toggle rotation of the icon
    dropdownIcon.classList.toggle('rotate-180');
}

function selectCurrency(flagUrl, currencyCode) {
    const flagElement = document.getElementById('selected-flag');
    const currencyElement = document.getElementById('selected-currency');
    const dropdown = document.getElementById('currency-dropdown');
    const dropdownIcon = dropdown.previousElementSibling.querySelector('svg');

    // Update selected flag and currency
    flagElement.src = flagUrl;
    currencyElement.textContent = currencyCode;

    // Close dropdown
    dropdown.classList.add('hidden');

    // Reset the icon's rotation
    dropdownIcon.classList.remove('rotate-180');
}

function selectRecipientCurrency(flagUrl, currencyCode) {
    const flagElement = document.getElementById('recipient-flag');
    const currencyElement = document.getElementById('recipient-currency');
    const dropdown = document.getElementById('recipient-currency-dropdown');
    const dropdownIcon = dropdown.previousElementSibling.querySelector('svg');

    // Update selected flag and currency
    flagElement.src = flagUrl;
    currencyElement.textContent = currencyCode;

    // Close dropdown
    dropdown.classList.add('hidden');

    // Reset the icon's rotation
    dropdownIcon.classList.remove('rotate-180');
}

function filterDropdown(listId, searchId) {
    const dropdown = document.getElementById(listId);
    const dropdownIcon = dropdown.previousElementSibling.querySelector('svg');
    const searchInput = document.getElementById(searchId).value.toLowerCase();
    const items = dropdown.querySelectorAll('li');

    // Filter dropdown items
    items.forEach(item => {
        const text = item.innerText.toLowerCase();
        item.style.display = text.includes(searchInput) ? '' : 'none';
    });

    // Keep dropdown icon rotated while searching
    if (!dropdown.classList.contains('hidden')) {
        dropdownIcon.classList.add('rotate-180');
    } else {
        dropdownIcon.classList.remove('rotate-180');
    }
}


let activeCategory = 'money'; // Default active category

function showCategory(category) {
    const categories = document.querySelectorAll('.faq-category');
    categories.forEach(cat => {
        if (cat.dataset.category === category) {
            cat.classList.remove('hidden');
        } else {
            cat.classList.add('hidden');
        }
    });

    // Update active button styling
    document.querySelectorAll('.filter-button').forEach(button => {
        button.classList.remove('bg-blue-500', 'text-white');
        button.classList.add('bg-gray-200');
    });
    const activeButton = document.getElementById(category + '-button');
    activeButton.classList.add('bg-blue-500', 'text-white');
    activeButton.classList.remove('bg-gray-200');

    activeCategory = category;
}

function toggleFAQ(faq) {
    const content = document.getElementById(faq);
    const arrow = document.querySelector(`[data-arrow="${faq}"]`);
    content.classList.toggle('hidden');
    arrow.classList.toggle('rotate-180');
}

window.onload = () => {
    showCategory(activeCategory);
};



function togglePassword(fieldId, iconId, imgId) {
    const input = document.getElementById(fieldId);
    const eyeIcon = document.getElementById(imgId);

    if (input.type === 'password') {
        input.type = 'text';
        eyeIcon.src = '../images/signup/visible.png';
    } else {
        input.type = 'password';
        eyeIcon.src = '../images/signup/hide.png';
    }
}


// Toggle the country code list dropdown
function toggleCountryCodeList(event) {
    event.stopPropagation();
    const countryCodeList = document.getElementById('country-code-list');
    countryCodeList.classList.toggle('hidden');
}

// Filter country codes based on search input
function filterCountryCodes(event) {
    const searchValue = event.target.value.toLowerCase();
    const options = document.querySelectorAll('#country-code-options li');

    options.forEach(option => {
        const text = option.textContent.toLowerCase();
        if (text.includes(searchValue)) {
            option.classList.remove('hidden');
        } else {
            option.classList.add('hidden');
        }
    });
}

// Select country code and update the flag and code (only on button)
function selectCountryCode(element) {
    const phoneFlag = document.getElementById('phone-flag');
    const countryCode = document.getElementById('country-code');

    const flagSrc = element.getAttribute('data-flag');
    const code = element.getAttribute('data-code');

    phoneFlag.src = flagSrc;
    countryCode.textContent = code;

    // Close the dropdown after selection
    const countryCodeList = document.getElementById('country-code-list');
    countryCodeList.classList.add('hidden');
}

// Close dropdown if clicked outside
document.addEventListener('click', (event) => {
    const countryCodeList = document.getElementById('country-code-list');
    const dropdownButton = event.target.closest('button');

    if (!countryCodeList.classList.contains('hidden') && !dropdownButton) {
        countryCodeList.classList.add('hidden');
    }
});


// *********** filter for Account  **************************** 
function showForm(formId, element) {
    // Hide all forms
    document.getElementById('personalForm').classList.add('hidden');
    document.getElementById('businessForm').classList.add('hidden');
  
    // Remove active style from all links
    document.querySelectorAll('.flex > a').forEach(a => {
        a.children[0].style.backgroundColor = ''; // Reset background color
    });
  
    // Show the selected form and add active style
    document.getElementById(formId).classList.remove('hidden');
    element.children[0].style.backgroundColor = '#8B1EC4'; // Custom purple color for active state
  }
  
  // Ensure the DOM is fully loaded before running the script
  document.addEventListener('DOMContentLoaded', function() {
    const personalLink = document.getElementById('personalLink');
    showForm('personalForm', personalLink);
  });



// *********** Modal Overlay  **************************** 
function openModal() {
    const modalOverlay = document.getElementById("modalOverlay");
    const modalContent = document.getElementById("modalContent");
    
    // Show modal with fade-in effect
    modalOverlay.classList.remove("hidden");
    setTimeout(() => {
        modalOverlay.classList.add("opacity-100");
        modalContent.classList.remove("scale-95", "opacity-0");
        modalContent.classList.add("scale-100", "opacity-100");
    }, 10);
}

function closeModal() {
    const modalOverlay = document.getElementById("modalOverlay");
    const modalContent = document.getElementById("modalContent");

    // Add fade-out and scale animation before hiding modal
    modalContent.classList.remove("scale-100", "opacity-100");
    modalContent.classList.add("scale-95", "opacity-0");
    modalOverlay.classList.remove("opacity-100");

    setTimeout(() => {
        modalOverlay.classList.add("hidden");
    }, 300); // Wait for animation to complete before hiding
}


