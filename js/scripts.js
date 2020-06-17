const form = document.getElementById("form");
const username = form.querySelector("#username");
const email = form.querySelector("#email");
const password = form.querySelector("#password");
const password2 = form.querySelector("#password2");


// Show the error message
function showError(input, message) {
    const formControl = input.parentElement;
    formControl.classList.add('error');

    //Create an error message element
    const small = document.createElement( 'small' );
    small.textContent = message;
    // Insert the error message into the DOM
    formControl.insertAdjacentElement('beforeend', small)
}

// Show the success message
function showSuccess( input ) {
    input.parentElement.classList.add( 'success' );
}

// Email validation
function validateEmail( input ) {
    const regex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return regex.test(String(input.value).toLowerCase());
}

// Event listeners
form.addEventListener( 'submit', function( e ) {
    // Prevent default actions
    e.preventDefault();

    if ( username.value === '' ) {
        showError( username, 'Username is required' );
    } else {
        showSuccess( username );
    }

    if ( email.value === '' ) {
        showError( email, 'Email is required' );
    } else if (!validateEmail( email.value ) ) { 
        showError( email, 'Your email is not valid' );
    } else {
        showSuccess( email );
    }
} );