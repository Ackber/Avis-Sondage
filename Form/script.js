function limitCheckboxGroup() {
    let checkboxGroup = document.querySelectorAll('#adjectivesForm input[type="checkbox"]');
    let limit = 4;
    checkboxGroup.forEach((checkbox) => {
      checkbox.addEventListener('change', function() {
        let checkedCount = document.querySelectorAll('#adjectivesForm input[type="checkbox"]:checked').length;
        if (checkedCount > limit) {
          this.checked = false;
          alert('You can only select a maximum of ' + limit + ' adjectives.');
        }
      });
    });
  }

  limitCheckboxGroup();

  function submitForm() {
    var form = document.getElementById('identityForm');
    if(form.reportValidity()) {
      // Form submission logic here
      alert('Le formulaire a été soumis.');
      // Prevent the default form submit action if using AJAX or similar
      // event.preventDefault();
    } else {
      // Handle the case where the form is not valid
      alert('Veuillez remplir les champs requis.');
    }
    // Prevent form from submitting normally, remove this line if you are not using AJAX
    return false;
  }