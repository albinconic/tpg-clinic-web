class BookNow {
    constructor() {
        this._formHandler();
        this._handleLocationField();
    }

    async _formHandler() {
        const form = document.querySelector('#webflow-form');
        form.addEventListener('submit', this._formListener.bind(this, form));
    }

    _handleLocationField() {
        const doNotLiveInLACheckbox = document.getElementById('do_not_live_in_la');
        const liveInLACheckbox = document.getElementById('live_in_la');
        const locationFieldWrapper = document.getElementById('location-input-wrapper');
        const locationField = document.getElementById('location');

        doNotLiveInLACheckbox.addEventListener('change', (e) => {
            if (e.target.checked) {
                locationFieldWrapper.style.display = 'block';
                locationField.setAttribute('required', 'required'); // Make field required
            } else {
                locationFieldWrapper.style.display = 'none';
                locationField.removeAttribute('required'); // Remove required if unchecked
            }
        });

        liveInLACheckbox.addEventListener('change', (e) => {
            if (e.target.checked) {
                locationFieldWrapper.style.display = 'none';
                locationField.removeAttribute('required'); // Make field required
            }
        });

    }

    async _formListener(form, e) {
        e.preventDefault();
        const dataArr = [...new FormData(form)];
        const data = Object.fromEntries(dataArr);
        const errorMessageDiv = document.querySelector('.error-message.w-form-fail');
        const successMessageDiv = document.querySelector('.success-message.w-form-done');
        successMessageDiv.textContent = '';
        successMessageDiv.style.display = 'none';

        errorMessageDiv.textContent = 'Please wait...';

        const newData = {
            name: data?.name || false,
            phone: data?.phone || false,
            email: data?.email || false,
            message: data?.message || false,
            heard_about_us: data?.heard_about_us || false,
            do_not_live_in_la: data?.do_not_live_in_la || false,
            live_in_la: data?.live_in_la || false,
            how_did_you_hear_other: data?.how_did_you_hear_other || false,
            location: data?.location || false
        };

        if (newData.heard_about_us !== false && newData.heard_about_us === 'Other') {
            if (newData.how_did_you_hear_other === false) {
                newData.heard_about_us = false;
            }
        }

        if (newData.heard_about_us === false || newData.name === false || newData.phone === false || newData.email === false || (newData.do_not_live_in_la === false && newData.live_in_la === false) || (newData.do_not_live_in_la && newData.location === false)) {
            // error
            errorMessageDiv.textContent = 'Please fill all required fields!';
        } else {
            const response = await this._sendFormData(newData);

            if (response.status === 'true') {
                // Push an event to the dataLayer on successful form submission
                window.dataLayer = window.dataLayer || [];
                window.dataLayer.push({
                    'event': 'form_submitted'
                });

                successMessageDiv.style.display = 'block';
                successMessageDiv.textContent = response.message;

                // Hide error element
                errorMessageDiv.style.display = 'none';
                errorMessageDiv.textContent = '';

                // Clear all form fields
                form.reset();
                const otherField = document.getElementById("how_did_you_hear_other");
                otherField.style.display = "none";

                // Clear checkboxes
                const checkboxes = form.querySelectorAll('input[type="checkbox"]');
                checkboxes.forEach(checkbox => checkbox.checked = false);

                // Hide location field
                locationFieldWrapper.style.display = 'none';
            } else {
                errorMessageDiv.textContent = response.error;
            }
        }
    }

    async _sendFormData(formData) {
        const productionUrl = 'https://clinic.theprehabguys.com/server.php';
        const developmentUrl = 'http://localhost/clinic.theprehabguys.com/server.php';

        const request = await fetch(productionUrl, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(formData)
        });

        return request.json();
    }
}

new BookNow();
