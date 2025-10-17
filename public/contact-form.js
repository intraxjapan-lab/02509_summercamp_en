// Contact Form Handler
document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('contactForm');
    const submitBtn = document.getElementById('submitBtn');
    const submitText = document.getElementById('submitText');
    const loadingText = document.getElementById('loadingText');
    const formStatus = document.getElementById('formStatus');
    const successMessage = document.getElementById('successMessage');
    const errorMessage = document.getElementById('errorMessage');
    const successText = document.getElementById('successText');
    const errorText = document.getElementById('errorText');

    if (form) {
        form.addEventListener('submit', async function(e) {
            e.preventDefault();
            
            // Disable submit button and show loading state
            submitBtn.disabled = true;
            submitText.classList.add('hidden');
            loadingText.classList.remove('hidden');
            
            // Hide previous messages
            formStatus.classList.add('hidden');
            successMessage.classList.add('hidden');
            errorMessage.classList.add('hidden');

            // Get form data
            const formData = new FormData(form);
            const data = {
                firstName: formData.get('firstName'),
                lastName: formData.get('lastName'),
                email: formData.get('email'),
                phone: formData.get('phone') || '',
                message: formData.get('message')
            };

            // Basic client-side validation
            if (!data.firstName || !data.lastName || !data.email || !data.message) {
                showError('Please fill in all required fields.');
                resetSubmitButton();
                return;
            }

            // Email validation
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(data.email)) {
                showError('Please enter a valid email address.');
                resetSubmitButton();
                return;
            }

            try {
                // Send data to PHP backend
                const response = await fetch('./process_form.php', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                        'X-Requested-With': 'XMLHttpRequest'
                    },
                    body: JSON.stringify(data)
                });

                const result = await response.json();

                if (result.success) {
                    showSuccess(result.message || 'Thank you! Your message has been sent successfully.');
                    form.reset(); // Clear the form
                } else {
                    showError(result.message || 'There was an error sending your message. Please try again.');
                }
            } catch (error) {
                console.error('Form submission error:', error);
                showError('There was a network error. Please check your connection and try again.');
            }

            resetSubmitButton();
        });
    }

    function showSuccess(message) {
        successText.textContent = message;
        successMessage.classList.remove('hidden');
        formStatus.classList.remove('hidden');
        
        // Scroll to message
        formStatus.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }

    function showError(message) {
        errorText.textContent = message;
        errorMessage.classList.remove('hidden');
        formStatus.classList.remove('hidden');
        
        // Scroll to message
        formStatus.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }

    function resetSubmitButton() {
        submitBtn.disabled = false;
        submitText.classList.remove('hidden');
        loadingText.classList.add('hidden');
    }

    // Add input validation styling
    const inputs = form.querySelectorAll('input, textarea');
    inputs.forEach(input => {
        input.addEventListener('blur', function() {
            if (this.hasAttribute('required') && !this.value.trim()) {
                this.classList.add('border-red-300', 'focus:ring-red-500');
                this.classList.remove('border-gray-300', 'focus:ring-green-500');
            } else {
                this.classList.remove('border-red-300', 'focus:ring-red-500');
                this.classList.add('border-gray-300', 'focus:ring-green-500');
            }
        });

        input.addEventListener('input', function() {
            if (this.classList.contains('border-red-300')) {
                this.classList.remove('border-red-300', 'focus:ring-red-500');
                this.classList.add('border-gray-300', 'focus:ring-green-500');
            }
        });
    });
});


