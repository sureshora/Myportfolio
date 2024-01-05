// script.js

function showPopup(contentType) {
    var popup = document.getElementById("popup");
    var popupContent = document.getElementById("popup-content-body");

    // Fetch content based on contentType (replace with actual data from Flask)
    var content = getContentForType(contentType);

    popupContent.innerHTML = content;
    popup.style.display = "flex";
}

function hidePopup() {
    var popup = document.getElementById("popup");
    popup.style.display = "none";
}

function getContentForType(contentType) {
    // Implement logic to fetch content based on contentType
    // Example: You can have predefined content or make an AJAX request to the server
    // For now, let's create placeholder content
    switch (contentType) {
        case '/about':
            return "This is the About content.";
        case '/achievements':
            return "These are the Achievements.";
        case '/skills':
            return "Skills and expertise information.";
        case '/education':
            return "Education details.";
        case '/projects':
            return "Details about various projects.";
        case '/experience':
            return "Work experience details.";
        case '/contact':
            return "Contact information.";
        default:
            return "Default content for unknown type.";
    }
}
