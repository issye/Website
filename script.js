document.addEventListener('DOMContentLoaded', () => {
    const links = document.querySelectorAll('nav a');
    const sections = document.querySelectorAll('.section');

    // Hide all sections initially
    sections.forEach(section => {
        section.classList.remove('active');
    });

    // Show the home section by default
    const showSection = (id) => {
        sections.forEach(section => {
            section.classList.remove('active'); // Hide all sections
        });
        document.getElementById(id).classList.add('active'); // Show the target section
    };

    showSection('home'); // Display the home section by default

    links.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault(); // Prevent default link behavior
            const targetId = link.getAttribute('href').substring(1); // Get the target section id
            
            showSection(targetId); // Show the target section

            // Highlight the active link
            links.forEach(navLink => {
                navLink.classList.remove('active-link'); // Remove active class from all links
            });
            link.classList.add('active-link'); // Add active class to the clicked link
        });
    });
});

function toggleDetails(projectId) {
    const details = document.getElementById(projectId);
    if (details.style.display === 'block') {
        details.style.display = 'none'; // Hide details
    } else {
        // Hide all other project details
        document.querySelectorAll('.project-details').forEach(detail => {
            detail.style.display = 'none';
        });
        details.style.display = 'block'; // Show the selected project details
    }
}
v