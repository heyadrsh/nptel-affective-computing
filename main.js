document.addEventListener('DOMContentLoaded', function() {
    // Get DOM elements
    const learnBtn = document.getElementById('learnBtn');
    const practiceBtn = document.getElementById('practiceBtn');
    
    // Event Listeners
    practiceBtn.addEventListener('click', function() {
        window.location.href = 'practice.html'; // This will be the renamed index.html
    });
    
    learnBtn.addEventListener('click', function() {
        window.location.href = 'learn.html'; // This will lead to the learning materials
    });
}); 