
// Function to move the social media icons around the circular image
const socialMedia = document.querySelector('.social-media');
const radius = 75; // The radius of the circle in pixels (half of the width of .social-media)
let angle = 0;

// Function to update the position of the social icons
function updatePosition() {
    const icons = document.querySelectorAll('.social-icon');
    const angleStep = 360 / icons.length;

    icons.forEach((icon, index) => {
        // Calculate the angle for each icon
        const currentAngle = angle + index * angleStep;

        // Convert angle to radians
        const radians = (currentAngle * Math.PI) / 180;

        // Calculate the x and y position for the icon using trigonometry
        const x = radius * Math.cos(radians);
        const y = radius * Math.sin(radians);

        // Position the icon using the calculated x and y values
        icon.style.transform = `translate(-50%, -50%) translate(${x}px, ${y}px)`;
    });
}

// Update the position of the icons periodically to create the rotation effect
setInterval(() => {
    angle += 1; // Increment angle to move the icons
    updatePosition();
}, 20); // Update every 20ms for smooth movement
