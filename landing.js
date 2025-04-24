document.addEventListener('DOMContentLoaded', function() {
    // DOM Elements
    const weekBtn = document.getElementById('weekBtn');
    const completeBtn = document.getElementById('completeBtn');
    const scrambleOptionsToggle = document.getElementById('scrambleOptionsToggle');
    const scrambleQuestionsToggle = document.getElementById('scrambleQuestionsToggle');
    
    // Initialize toggle states from global settings
    scrambleOptionsToggle.checked = scrambleOptions;
    scrambleQuestionsToggle.checked = scrambleQuestions;
    
    // Add event listeners for toggles
    scrambleOptionsToggle.addEventListener('change', function() {
        scrambleOptions = this.checked;
        saveSettings();
    });
    
    scrambleQuestionsToggle.addEventListener('change', function() {
        scrambleQuestions = this.checked;
        saveSettings();
    });
    
    // Event Listeners for buttons
    weekBtn.addEventListener('click', function() {
        window.location.href = 'weeks.html';
    });
    
    completeBtn.addEventListener('click', function() {
        // Save current week data for complete practice
        const allQuestions = [];
        Object.keys(quizData).forEach(week => {
            quizData[week].questions.forEach(q => {
                // Reset any previous user answers
                const questionCopy = {...q, userAnswer: null, week: week};
                allQuestions.push(questionCopy);
            });
        });
        
        // Create a custom week data for the complete practice
        currentWeekData = {
            title: "Complete Practice",
            date: "All Weeks Combined",
            questions: scrambleQuestions ? shuffleArray(allQuestions) : allQuestions
        };
        
        // Save to localStorage for quiz page to access
        localStorage.setItem('nptel_currentQuiz', JSON.stringify(currentWeekData));
        
        // Navigate to quiz page
        window.location.href = 'quiz.html';
    });
}); 