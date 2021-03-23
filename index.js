// Web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyBY8n8Jjc-AYJPqsQS3ma5r1CSCxY_dvXI",
    authDomain: "contact-form-37b65.firebaseapp.com",
    databaseURL: "https://contact-form-37b65.firebaseio.com",
    projectId: "contact-form-37b65",
    storageBucket: "contact-form-37b65.appspot.com",
    messagingSenderId: "288335862501",

};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);


// Reference messages collection
var messagesRef = firebase.database().ref('messages');

// Listen for form submit
document.getElementById('contact-form').addEventListener('submit', submitForm);

// Submit form
function submitForm(e) {
    e.preventDefault();

    // Get values
    var name = getInputVal('name');
    var lname = getInputVal('lname');
    var email = getInputVal('email');
    var number = getInputVal('number');
    var message = getInputVal('message');

    // Save message
    saveMessage(name, lname, email, number, message);

    // Show alert
    document.querySelector('.alert').style.display = 'block';

    // Hide alert after 3 seconds
    setTimeout(function() {
        document.querySelector('.alert').style.display = 'none';
    }, 3000);

    // Clear form
    document.getElementById('contact-form').reset();
}

// Function to get get form values
function getInputVal(id) {
    return document.getElementById(id).value;
}

// Save message to firebase
function saveMessage(name, lname, email, number, message) {
    var newMessageRef = messagesRef.push();
    newMessageRef.set({
        name: name,
        lname: lname,
        email: email,
        number: number,
        message: message
    });
}