window.addEventListener('DOMContentLoaded', async () => {
    try {
        const response = await fetch('galery.html');
        const galleryHTML = await response.text();
        const galleryDoc = new DOMParser().parseFromString(galleryHTML, 'text/html');
        const imageContainers = galleryDoc.querySelectorAll('.image-container');
        
        if (imageContainers.length === 0) {
            console.error('No .image-container elements found in galery.html');
            return;
        }
        
        // Randomly select an index
        const randomIndex = Math.floor(Math.random() * imageContainers.length);
        const randomImageContainer = imageContainers[randomIndex];
        
        // Clone the selected image container
        const clonedContainer = randomImageContainer.cloneNode(true);
        
        // Append the cloned container to the index.html page
        document.getElementById('galleryImages').appendChild(clonedContainer);
        
        // Call the function to add event listeners directly
        
    } catch (error) {
        console.error('Error fetching or parsing galery.html:', error);
    }
});
