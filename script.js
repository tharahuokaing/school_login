document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevents page reload

    // Grab elements and data values
    const email = document.getElementById('email').value.trim();
    const password = document.getElementById('password').value;
    const alertBox = document.getElementById('formAlert');

    // Validation Check
    if (!email || !password) {
        showAlert('សូមបំពេញអ៊ីមែល និងលេខកូដសម្ងាត់!', 'error');
        return;
    }

    // Success Authentication Simulation
    showAlert('ការចូលប្រើប្រាស់បានជោគជ័យ! សូមរង់ចាំមួយភ្លែត...', 'success');

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
