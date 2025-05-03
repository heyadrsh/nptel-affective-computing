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
        if (!learningContent.classList.contains('hidden')) {
            // If showing learning content, go back to week selection
            learningContent.classList.add('hidden');
            weekSelection.classList.remove('hidden');
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

        // Notes section has been removed

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

            // Add a note for multiple correct answers
            if (Array.isArray(question.correctAnswer) && question.correctAnswer.length > 1) {
                const multipleCorrectNote = document.createElement('p');
                multipleCorrectNote.className = 'multiple-correct-note';
                multipleCorrectNote.textContent = 'Multiple correct answers';
                questionContent.appendChild(multipleCorrectNote);
            }

            const answerContainer = document.createElement('div');
            answerContainer.className = 'learning-answer-container';

            // Display all options
            question.options.forEach(option => {
                const optionElement = document.createElement('div');
                optionElement.className = 'learning-option';

                // Highlight correct answer(s)
                if (Array.isArray(question.correctAnswer)) {
                    // For multiple correct answers
                    if (question.correctAnswer.includes(option)) {
                        optionElement.classList.add('correct-answer');
                    }
                } else {
                    // For single correct answer
                    if (option === question.correctAnswer) {
                        optionElement.classList.add('correct-answer');
                    }
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

        // Add Practice button at the bottom
        const practiceButtonContainer = document.createElement('div');
        practiceButtonContainer.className = 'practice-button-container';

        const practiceButton = document.createElement('button');
        practiceButton.className = 'practice-btn';
        practiceButton.innerHTML = 'Practice <span class="arrow-icon">→</span>';
        practiceButton.type = 'button';

        practiceButton.addEventListener('click', function() {
            startQuizForWeek(weekNumber);
        });

        practiceButtonContainer.appendChild(practiceButton);
        contentContainer.appendChild(practiceButtonContainer);

        // Hide week selection and show learning content
        weekSelection.classList.add('hidden');
        learningContent.classList.remove('hidden');

    }

    // Function to start quiz for a specific week
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