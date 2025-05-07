// DOM Elements
const heading = document.getElementById('main-heading');
const changeTextBtn = document.getElementById('change-text-btn');
const changeStyleBtn = document.getElementById('change-style-btn');
const addElementBtn = document.getElementById('add-element-btn');
const removeElementBtn = document.getElementById('remove-element-btn');
const firstCard = document.getElementById('first-card');
const dynamicContainer = document.getElementById('dynamic-elements-container');
const footerText = document.getElementById('footer-text');

// Change Text Content
changeTextBtn.addEventListener('click', () => {
    if (heading.textContent === 'DOM Manipulation Project') {
        heading.textContent = 'Text Changed with JavaScript!';
        heading.style.color = '#34a853';
    } else {
        heading.textContent = 'DOM Manipulation Project';
        heading.style.color = 'white';
    }
});

// Toggle CSS Class
changeStyleBtn.addEventListener('click', () => {
    firstCard.classList.toggle('special-style');
    
    // Change button text based on state
    if (firstCard.classList.contains('special-style')) {
        changeStyleBtn.textContent = 'Remove Special Style';
    } else {
        changeStyleBtn.textContent = 'Toggle Special Style';
    }
});

// Add New Element
addElementBtn.addEventListener('click', () => {
    const newElement = document.createElement('div');
    newElement.className = 'new-element';
    newElement.textContent = `New Element #${dynamicContainer.children.length + 1} - Added at ${new Date().toLocaleTimeString()}`;
    dynamicContainer.appendChild(newElement);
    
    // Update footer
    footerText.textContent = `Last added: ${newElement.textContent}`;
});

// Remove Last Element
removeElementBtn.addEventListener('click', () => {
    if (dynamicContainer.children.length > 0) {
        const lastElement = dynamicContainer.lastElementChild;
        dynamicContainer.removeChild(lastElement);
        footerText.textContent = `Removed: ${lastElement.textContent}`;
    } else {
        footerText.textContent = 'No elements to remove!';
    }
});

// Bonus: Change footer year dynamically
footerText.textContent = footerText.textContent.replace('2023', new Date().getFullYear());