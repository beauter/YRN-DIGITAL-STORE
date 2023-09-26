// Function to handle button clicks
function handleButtonClick(event) {
    event.preventDefault();
    
    // Get the ID of the clicked button
    const buttonId = event.target.id;

    // Redirect to the appropriate page based on the button clicked
    switch (buttonId) {
        case 'home-button':
            window.location.href = 'index.html';
            break;
        case 'portraits-button':
            window.location.href = 'portraits.html';
            break;
        case 'landscapes-button':
            window.location.href = 'landscapes.html';
            break;
        case 'street-photo-button':
            window.location.href = 'street-photos.html';
            break;
        case 'nature-photos-button':
            window.location.href = 'nature-photos.html';
            break;
        // Add more cases for other buttons as needed
        case 'contact-us-button':
            // Replace '#' with the URL of your contact page
            window.location.href = 'contact.html'; 
            break;
        default:
            // Handle any other cases here
            break;
    }
}

// Function to load images for a specific category
function loadCategoryImages(category) {
    const imageGallery = document.querySelector('.image-gallery');

    // Create and append image elements
    for (let i = 1; i <= 10; i++) {
        const img = document.createElement('img');
        img.src = `pics (${i}).jpg`; // Using the new naming convention
        img.alt = `Image ${i}`;
        imageGallery.appendChild(img);
    }
}

// Check which category was clicked and load images accordingly
document.addEventListener('DOMContentLoaded', () => {
    const landingSection = document.querySelector('section.hero.landing');
    if (landingSection) {
        // Add the class to change the background image after a delay (e.g., 5 seconds)
        setTimeout(() => {
            landingSection.classList.add('landing-alternate');
        }, 5000); // Change background after 5 seconds (5000 milliseconds)
    }
// Function to call a phone number
function callPhoneNumber(phoneNumber) {
    window.location.href = 'tel:+254708281969' + phoneNumber;
}

// Function to open the user's email client to send an email
function sendEmail() {
    window.location.href = 'mailto:officialbeauter@gmail.com';
}

// Function to open WhatsApp with a contact number
function openWhatsApp(contactNumber) {
    const whatsappURL = 'https://wa.me/+254708281969' + contactNumber;
    window.open(whatsappURL, '_blank');
}

    // Add click event listeners to the buttons
    const homeButton = document.getElementById('home-button');
    const portraitsButton = document.getElementById('portraits-button');
    const landscapesButton = document.getElementById('landscapes-button');
    const streetPhotoButton = document.getElementById('street-photo-button');
    const naturePhotosButton = document.getElementById('nature-photos-button');
    const contactUsButton = document.getElementById('contact-us-button');

    if (homeButton) {
        homeButton.addEventListener('click', handleButtonClick);
    }
    if (portraitsButton) {
        portraitsButton.addEventListener('click', () => loadCategoryImages('portraits'));
    }
    if (landscapesButton) {
        landscapesButton.addEventListener('click', () => loadCategoryImages('landscapes'));
    }
    if (streetPhotoButton) {
        streetPhotoButton.addEventListener('click', () => loadCategoryImages('street-photo'));
    }
    if (naturePhotosButton) {
        naturePhotosButton.addEventListener('click', () => loadCategoryImages('nature-photos'));
    }
    if (contactUsButton) {
        contactUsButton.addEventListener('click', handleButtonClick);
    }
});