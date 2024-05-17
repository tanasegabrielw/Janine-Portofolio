window.addEventListener('DOMContentLoaded', async () => {
    const response = await fetch('galery.html');
    const galleryHTML = await response.text();
    const galleryDoc = new DOMParser().parseFromString(galleryHTML, 'text/html');
    const imageContainers = galleryDoc.querySelectorAll('.image-container');

    const randomIndex = Math.floor(Math.random() * imageContainers.length);
    const randomImageContainer = imageContainers[randomIndex];

    const clonedContainer = randomImageContainer.cloneNode(true);
    document.getElementById('galleryImages').appendChild(clonedContainer);

    // Call the function to add event listeners after appending the container
    addEventListeners();
});

function addEventListeners() {
    const containers = document.querySelectorAll('.image-caption-box');
    const imageContainers = document.querySelectorAll('.image-container');

    containers.forEach(container => {
        const image = container.querySelector('img');
        const mobileCaption = container.querySelector('.mobile-caption');
        const caption = container.querySelector('.caption');
        // For Mobile always keeps caption ON //
        if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
            mobileCaption.style.opacity = '1';
        } else {
            container.addEventListener('mouseenter', () => {
                caption.style.opacity = '1';
            });
            container.addEventListener('mouseleave', () => {
                caption.style.opacity = '0';
            });
        }
    });

    imageContainers.forEach(imageContainer => {
        const imageTitle = imageContainer.querySelector('.title');
        if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
            imageTitle.style.display = 'none';
        }
    });
}
