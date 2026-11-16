document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevents page reload

    // Grab elements and data values
    const email = document.getElementById('email').value.trim();
    const password = document.getElementById('password').value;
    const rememberMe = document.getElementById('rememberMe').checked;
    const submitButton = document.querySelector('button[type="submit"]');

    // Validation Check
    if (!email || !password) {
        showAlert('សូមបំពេញអ៊ីមែល និងលេខកូដសម្ងាត់!', 'error');
        return;
    }

    // Handle Remember Me feature
    if (rememberMe) {
        localStorage.setItem('saved_school_email', email);
    } else {
        localStorage.removeItem('saved_school_email');
    }

    // Success Authentication Simulation & UI feedback
    showAlert('ការចូលប្រើប្រាស់បានជោគជ័យ! សូមរង់ចាំមួយភ្លែត...', 'success');
    
    // Disable button to prevent multiple submissions
    submitButton.disabled = true;
    submitButton.classList.add('opacity-50', 'cursor-not-allowed');

    // Network timeout delay redirecting back to core application workspace
    setTimeout(() => {
        window.location.href = 'https://tharahuokaing.github.io/international_school/';
    }, 1500);
});

// Helper Function to handle state feedback UI
function showAlert(message, type) {
    const alertBox = document.getElementById('formAlert');
    alertBox.textContent = message;
    alertBox.classList.remove('hidden', 'bg-red-100', 'text-red-700', 'bg-green-100', 'text-green-700');

    if (type === 'error') {
        alertBox.classList.add('bg-red-100', 'text-red-700');
    } else if (type === 'success') {
        alertBox.classList.add('bg-green-100', 'text-green-700');
    }
}

// Auto-fill email on page load if "Remember Me" was previously used
window.addEventListener('DOMContentLoaded', () => {
    const savedEmail = localStorage.getItem('saved_school_email');
    if (savedEmail) {
        document.getElementById('email').value = savedEmail;
        document.getElementById('rememberMe').checked = true;
    }
});
