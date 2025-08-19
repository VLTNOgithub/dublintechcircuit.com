const techAreas = [
    'Web Development',
    'Mobile App Development',
    'Artificial Intelligence',
    'Cybersecurity',
    'Game Development',
    'Data Science',
    'Robotics',
    'UI/UX Design',
    '3D Printing/CAD',
    'Digital Media'
];

function renderInterests() {
    const interestsGrid = document.getElementById('interests-grid');
    
    techAreas.forEach(area => {
        const checkboxItem = document.createElement('label');
        checkboxItem.className = 'checkbox-item';
        
        checkboxItem.innerHTML = `
            <input type="checkbox" name="interests" value="${area}">
            <span class="checkmark"></span>
            ${area}
        `;
        
        interestsGrid.appendChild(checkboxItem);
    });
}

function handleFormSubmit(event) {
    event.preventDefault();
    
    const formData = new FormData(event.target);
    const data = {};
    
    // Collect all form data
    for (let [key, value] of formData.entries()) {
        if (data[key]) {
            // Handle multiple values (like checkboxes)
            if (Array.isArray(data[key])) {
                data[key].push(value);
            } else {
                data[key] = [data[key], value];
            }
        } else {
            data[key] = value;
        }
    }
    
    // Collect interests specifically
    const interests = [];
    const interestCheckboxes = document.querySelectorAll('input[name="interests"]:checked');
    interestCheckboxes.forEach(checkbox => {
        interests.push(checkbox.value);
    });
    data.interests = interests;
    
    console.log('Form submitted with data:', data);
    
    // Hide form and show success message
    document.getElementById('registration-form').style.display = 'none';
    document.querySelector('.info-section').style.display = 'none';
    document.getElementById('success-message').style.display = 'block';
    
    // Scroll to top
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

document.addEventListener('DOMContentLoaded', function() {
    renderInterests();
    
    // Add form submit handler
    const form = document.getElementById('registration-form');
    form.addEventListener('submit', handleFormSubmit);
});
