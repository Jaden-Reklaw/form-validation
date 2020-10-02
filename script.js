// Select DOM Elements
const form = document.getElementById('form');
const password1El = document.getElementById('password1');
const password2El = document.getElementById('password2');
const messageContainer = document.querySelector('.message-container');
const message = document.getElementById('message');
const button = document.querySelector('button');
const inputs = document.querySelectorAll('.input');

let isValid = false;
let passwordMatch = false;

const validateForm = () => {
    // Using Constraint API
    isValid = form.checkValidity();
    // Style main message for error
    if(!isValid) {
        message.textContent = 'Please fill out all fields';
        message.style.color = 'red';
        messageContainer.style.borderColor = 'red';
        //adding return statements at this point will save on processing speed
        return false;
    }
    // Check to see if passwords match
    if(password1El.value === password2El.value) {
        passwordMatch = true;
        password1El.style.borderColor = 'green';
        password2El.style.borderColor = 'green';
    } else {
        passwordMatch = false;
        message.textContent = 'Make sure passwords match.'
        message.style.color = 'red';
        messageContainer.style.borderColor = 'red';
        password1El.style.borderColor = 'red';
        password2El.style.borderColor = 'red';
        //adding return statements at this point will save on processing speed
        return false;
    }
    // isValid is true and passwords match
    if(isValid && passwordMatch) {
        message.textContent = 'Successfully Registered!';
        message.style.color = 'green';
        messageContainer.style.borderColor = 'green';
        inputs.forEach(input => {
            input.setAttribute('disabled', 'true');
        })
        button.disabled = true;
        return true;
    }  
}

// Store form data as an object to be sent across to the backend
const storeFormData = () => {
    const user = {
        name: form.name.value,
        phone: form.phone.value,
        email: form.email.value,
        website: form.website.value,
        password: form.password.value
    }
    console.log(user);
}

const processFormData = (e) => {
    e.preventDefault();
    //Validate Form
    if(validateForm()) {
        //Send data to the backend
        storeFormData();
    }
}

// Event Listener
form.addEventListener('submit', processFormData);