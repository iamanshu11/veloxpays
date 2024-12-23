"use strict";


const nationalityInput = document.getElementById('nationality-drop-input');
  const nationalityList = document.getElementById('nationality-drop-list');
  const nationalityFlag = document.getElementById('nationality-flag');

  nationalityInput.addEventListener('click', () => {
    nationalityList.classList.remove('hidden');
  });

  function selectNationality(name, flagPath) {
    nationalityInput.value = name;
    nationalityFlag.src = flagPath;
    nationalityFlag.classList.remove('hidden');
    nationalityList.classList.add('hidden');
  }

  function filterNationalities() {
    const filter = nationalityInput.value.toLowerCase();
    const items = nationalityList.querySelectorAll('li');
    
    items.forEach(item => {
      const text = item.textContent || item.innerText;
      if (text.toLowerCase().indexOf(filter) > -1) {
        item.style.display = "flex";
      } else {
        item.style.display = "none";
      }
    });
  }

  document.addEventListener('click', (event) => {
    if (!nationalityList.contains(event.target) && event.target !== nationalityInput) {
      nationalityList.classList.add('hidden');
    }
  });



  const countryCodeList = document.getElementById('country-code-list');
  const phoneFlag = document.getElementById('phone-flag');
  const countryCode = document.getElementById('country-code');

  function toggleCountryCodeList(event) {
    event.stopPropagation(); // Prevent event from propagating to document click
    countryCodeList.classList.toggle('hidden');
  }

  function selectCountryCode(code, flagPath) {
    countryCode.textContent = code;
    phoneFlag.src = flagPath;
    countryCodeList.classList.add('hidden');
  }

  document.addEventListener('click', (event) => {
    if (!event.target.closest('#country-code-list') && !event.target.closest('button')) {
      countryCodeList.classList.add('hidden');
    }
  });