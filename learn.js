document.addEventListener('DOMContentLoaded', function() {
    // Get DOM elements
    const backBtn = document.getElementById('backBtn');
    const weekButtons = document.querySelectorAll('.week-btn');
    const weekSelection = document.querySelector('.week-selection');
    const learningContent = document.getElementById('learning-content');
    const weekTitle = document.getElementById('week-title');
    const weekMaterials = document.getElementById('week-materials');
    
    // Add event listeners
    backBtn.addEventListener('click', function() {
        if (learningContent.style.display === 'block') {
            // If showing learning content, go back to week selection
            learningContent.style.display = 'none';
            weekSelection.style.display = 'block';
        } else {
            // If showing week selection, go back to landing page
            window.location.href = 'index.html';
        }
    });
    
    weekButtons.forEach(button => {
        button.addEventListener('click', function() {
            const weekNumber = this.getAttribute('data-week');
            showWeekContent(weekNumber);
        });
    });
    
    // Function to display week content
    function showWeekContent(weekNumber) {
        // Get the week data
        const weekData = quizData[`week${weekNumber}`];
        
        if (!weekData) {
            alert('Week data not found!');
            return;
        }
        
        // Update title
        weekTitle.textContent = weekData.title;
        
        // Clear previous content
        weekMaterials.innerHTML = '';
        
        // Create learning content
        const contentContainer = document.createElement('div');
        contentContainer.className = 'learning-container';
        
        // Question & Answer sections
        weekData.questions.forEach((question, index) => {
            const questionSection = document.createElement('div');
            questionSection.className = 'learning-section';
            
            const questionNumber = document.createElement('div');
            questionNumber.className = 'learning-number';
            questionNumber.textContent = `${index + 1}`;
            
            const questionContent = document.createElement('div');
            questionContent.className = 'learning-content-item';
            
            const questionText = document.createElement('h3');
            questionText.className = 'learning-question';
            questionText.textContent = question.question;
            
            const answerContainer = document.createElement('div');
            answerContainer.className = 'learning-answer-container';
            
            // Display all options
            question.options.forEach(option => {
                const optionElement = document.createElement('div');
                optionElement.className = 'learning-option';
                
                // Highlight correct answer
                if (option === question.correctAnswer) {
                    optionElement.classList.add('correct-answer');
                }
                
                optionElement.textContent = option;
                answerContainer.appendChild(optionElement);
            });
            
            questionContent.appendChild(questionText);
            questionContent.appendChild(answerContainer);
            
            questionSection.appendChild(questionNumber);
            questionSection.appendChild(questionContent);
            
            contentContainer.appendChild(questionSection);
        });
        
        weekMaterials.appendChild(contentContainer);
        
        // Hide week selection and show learning content
        weekSelection.style.display = 'none';
        learningContent.style.display = 'block';
    }
}); 