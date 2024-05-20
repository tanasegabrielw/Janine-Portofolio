window.addEventListener('DOMContentLoaded', async () => {
    try {
        const responseDE = await fetch('gallery_de.html');
        
        if (!responseDE.ok) {
            throw new Error(`HTTP error! status: ${responseDE.status}`);
        }
        
        const galleryHTMLDE = await responseDE.text();
        const galleryDocDE = new DOMParser().parseFromString(galleryHTMLDE, 'text/html');
        const imageContainersDE = galleryDocDE.querySelectorAll('.image-container');

        // Log the number of image containers found
        console.log(`Found ${imageContainersDE.length} image containers.`);

        // Check if imageContainersDE is not empty
        if (imageContainersDE.length === 0) {
            console.error('No image containers found in gallery_de.html');
            return;
        }

        // Randomly select an index
        const randomIndexDE = Math.floor(Math.random() * imageContainersDE.length);
        const randomImageContainerDE = imageContainersDE[randomIndexDE];

        // Clone the selected image container
        const clonedContainerDE = randomImageContainerDE.cloneNode(true);

        // Append the cloned container to the index.html page
        document.getElementById('galleryImages').appendChild(clonedContainerDE);
    } catch (error) {
        console.error('Error fetching or processing gallery_de.html:', error);
    }
});
