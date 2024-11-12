// Function to toggle the navigation menu
function toggleMenu() {
    const navMenu = document.getElementById('navMenu');
    navMenu.classList.toggle('active'); // Toggle the 'active' class
}

// Event listener for the hamburger menu click
document.getElementById('hamburger').addEventListener('click', toggleMenu);