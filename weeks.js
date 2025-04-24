document.addEventListener('DOMContentLoaded', function() {
    // Get DOM elements
    const backBtn = document.getElementById('backBtn');
    const weekButtons = document.querySelectorAll('.week-btn');
    
    // Add event listeners
    backBtn.addEventListener('click', function() {
        window.location.href = 'index.html';
    });
    
    // Add best scores to week buttons
    weekButtons.forEach(button => {
        const weekNumber = button.getAttribute('data-week');
        const weekId = `week${weekNumber}`;
        
        // Only add best score if there is one (> 0)
        if (bestScores[weekId] > 0) {
            const bestScoreEl = document.createElement('div');
            bestScoreEl.className = 'week-best-score';
            bestScoreEl.innerHTML = `<span>Best: ${bestScores[weekId]}%</span>`;
            button.appendChild(bestScoreEl);
        }
        
        button.addEventListener('click', function() {
            startQuizForWeek(weekNumber);
        });
    });
    
    // Functions for starting a quiz
    function startQuizForWeek(weekNumber) {
        // Get the week data
        const weekData = quizData[`week${weekNumber}`];
        
        if (!weekData) {
            alert('Week data not found!');
            return;
        }
        
        // Apply scramble settings from global settings
        let questions = JSON.parse(JSON.stringify(weekData.questions));
        
        // Apply scramble questions if enabled
        if (scrambleQuestions) {
            questions = shuffleArray(questions);
        }
        
        // Create the quiz data
        const currentQuizData = {
            title: weekData.title,
            date: weekData.date,
            questions: questions
        };
        
        // Save the quiz data to localStorage
        localStorage.setItem('nptel_currentQuiz', JSON.stringify(currentQuizData));
        
        // Navigate to the quiz page
        window.location.href = 'quiz.html';
    }
}); 