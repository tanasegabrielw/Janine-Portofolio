    window.addEventListener('DOMContentLoaded', async () => {
        const response = await fetch('galery.html');
        const galleryHTML = await response.text();
        const galleryDoc = new DOMParser().parseFromString(galleryHTML, 'text/html');
        const imageContainers = galleryDoc.querySelectorAll('.image-container');
    
        // Randomly select an index
        const randomIndex = Math.floor(Math.random() * imageContainers.length);
    
        // Get the randomly selected image container
        const randomImageContainer = imageContainers[randomIndex];
    
        // Clone the selected image container
        const clonedContainer = randomImageContainer.cloneNode(true);
    
        // Append the cloned container to the index.html page
        document.getElementById('galleryImages').appendChild(clonedContainer);
    });

