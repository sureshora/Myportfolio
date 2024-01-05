function showPopup(contentType) {
    var popup = document.getElementById("popup");
    var popupContent = document.getElementById("popup-content");

    // Fetch content based on contentType
    getContentForType(contentType)
        .then(content => {
            popupContent.innerHTML = content;
            popup.style.display = "flex";
        });
}

function hidePopup() {
    var popup = document.getElementById("popup");
    popup.style.display = "none";
}

function getContentForType(contentType) {
    var url = "/" + contentType;
    return fetch(url)
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.text();
        })
        .then(data => data)
        .catch(error => {
            console.error('Error fetching content:', error);
            return 'Error fetching content.';
        });
}
