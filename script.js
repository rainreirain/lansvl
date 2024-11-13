document.getElementById('peripherals-button').addEventListener('click', function() {
    // Show Peripherals content and hide Others content
    document.getElementById('peripherals-content').style.display = 'block';
    document.getElementById('others-content').style.display = 'none';

    // Set active button style
    this.classList.add('active');
    document.getElementById('others-button').classList.remove('active');
});

document.getElementById('others-button').addEventListener('click', function() {
    // Show Others content and hide Peripherals content
    document.getElementById('others-content').style.display = 'block';
    document.getElementById('peripherals-content').style.display = 'none';

    // Set active button style
    this.classList.add('active');
    document.getElementById('peripherals-button').classList.remove('active');
});

// Add this new function
function showWorkspaceDetails(section) {
    // This function will handle clicking on workspace items
    // You can expand this to show more details or navigate to specific pages
    console.log(`Showing details for ${section}`);
    
    // You can add more functionality here, such as:
    // - Opening a modal with more details
    // - Navigating to a dedicated page
    // - Showing additional images
}

// Add this new function to handle section viewing
function showSection(section) {
    // Hide all sections first
    document.querySelectorAll('.detail-section').forEach(el => {
        el.style.display = 'none';
    });
    
    // Hide the main grid
    document.querySelector('.workspace-grid').style.display = 'none';
    
    // Show the selected section
    const sectionElement = document.getElementById(`${section}-section`);
    if (sectionElement) {
        sectionElement.style.display = 'block';
        
        // Create and add back button if it doesn't exist
        if (!sectionElement.querySelector('.back-button')) {
            const backButton = document.createElement('button');
            backButton.className = 'back-button';
            backButton.textContent = '← Back';
            backButton.onclick = () => {
                sectionElement.style.display = 'none';
                document.querySelector('.workspace-grid').style.display = 'grid';
            };
            sectionElement.insertBefore(backButton, sectionElement.firstChild);
        }
    }
}
