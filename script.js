const burgerMenu = document.getElementById('burger-menu');
  const mobileMenu = document.getElementById('mobile-menu');
  const burgerIcon = document.getElementById('burger-icon');
  const closeIcon = document.getElementById('close-icon');

  burgerMenu.addEventListener('click', () => {
    mobileMenu.classList.toggle('hidden');
    burgerIcon.classList.toggle('hidden');
    closeIcon.classList.toggle('hidden');
  });

    function selectCurrency(flagUrl, currencyCode) {
        const flagElement = document.getElementById('selected-flag');
        const currencyElement = document.getElementById('selected-currency');
        flagElement.src = flagUrl;
        currencyElement.textContent = currencyCode;
        toggleDropdown('currency-dropdown');
    }

    function selectRecipientCurrency(flagUrl, currencyCode) {
        const flagElement = document.getElementById('recipient-flag');
        const currencyElement = document.getElementById('recipient-currency');
        flagElement.src = flagUrl;
        currencyElement.textContent = currencyCode;
        toggleDropdown('recipient-currency-dropdown');
    }

    function toggleDropdown(id) {
        const dropdown = document.getElementById(id);
        dropdown.classList.toggle('hidden');
    }

    function filterDropdown(listId, searchId) {
        const list = document.getElementById(listId);
        const searchInput = document.getElementById(searchId).value.toLowerCase();
        const items = list.querySelectorAll('li');

        items.forEach(item => {
            const text = item.innerText.toLowerCase();
            item.style.display = text.includes(searchInput) ? '' : 'none';
        });
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
      document.getElementById(category + '-button').classList.add('bg-blue-500', 'text-white');
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
