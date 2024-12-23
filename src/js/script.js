const searchInput = document.querySelector(".residency-search-input");
const searchFlag = document.querySelector(".residency-search-flag");
const countryOptions = document.querySelectorAll(".residency-country-option");
const countryList = document.querySelector(".residency-country-list");

// Filter countries based on input
searchInput.addEventListener("input", (e) => {
    const filter = e.target.value.toLowerCase();
    countryOptions.forEach(option => {
        const countryName = option.dataset.name.toLowerCase();
        if (countryName.includes(filter)) {
            option.style.display = "flex";
        } else {
            option.style.display = "none";
        }
    });
});

// Select a country
countryOptions.forEach(option => {
    option.addEventListener("click", () => {
        const flag = option.dataset.flag;
        const name = option.dataset.name;

        // Update input with selected country
        searchFlag.src = flag;
        searchFlag.classList.remove("hidden");
        searchInput.value = name;
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
function toggleDropdown(id) {
  const dropdown = document.getElementById(id);
  const dropdownIcon = dropdown.previousElementSibling.querySelector('svg');

  // Toggle dropdown visibility
  dropdown.classList.toggle('hidden');

  // Adjust the icon's rotation
  if (!dropdown.classList.contains('hidden')) {
      dropdownIcon.classList.add('rotate-180');
  } else {
      dropdownIcon.classList.remove('rotate-180');
  }
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
      showCategory(activeCategory); // Initialize with default active category
    };


    // function togglePasswordVisibility(id, button) {
    //   const input = document.getElementById(id);
    //   const isPassword = input.type === 'password';
    //   input.type = isPassword ? 'text' : 'password';
    //   button.innerHTML = isPassword 
    //     ? '<svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12l-3 3m0 0l-3-3m3 3V9m3 3a6 6 0 11-12 0 6 6 0 0112 0z" /></svg>' 
    //     : '<svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 12a9 9 0 0118 0 9 9 0 01-18 0zm9 3a3 3 0 100-6 3 3 0 000 6z" /></svg>';
    // }


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


