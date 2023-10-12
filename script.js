function resetForm() {
    document.getElementById('survey-form').reset();
  }
  
  function submitForm() {
    const form = document.getElementById('survey-form');
    if (form.checkValidity()) {
      const data = {
        'First Name': form.elements['first-name'].value,
        'Last Name': form.elements['last-name'].value,
        'Date of Birth': form.elements['dob'].value,
        'Country': form.elements['country'].value,
        'Gender': [...form.querySelectorAll('input[name="gender"]:checked')].map(el => el.value).join(', '),
        'Profession': form.elements['profession'].value,
        'Email': form.elements['email'].value,
        'Mobile Number': form.elements['mobile'].value,
      };
  
      const popup = document.getElementById('popup');
      const popupData = document.getElementById('popup-data');
  
      popupData.innerHTML = '';
      for (const key in data) {
        if (data.hasOwnProperty(key)) {
          const value = data[key];
          popupData.innerHTML += `<p><strong>${key}:</strong> ${value}</p>`;
        }
      }
  
      popup.style.display = 'block';
    }
  }
  
  function closePopup() {
    const popup = document.getElementById('popup');
    popup.style.display = 'none';
    resetForm();
  }
  