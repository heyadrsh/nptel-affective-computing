document.addEventListener('DOMContentLoaded', function() {
    // DOM Elements
    const backToWeeksBtn = document.getElementById('backToWeeksBtn');
    const submitQuizBtn = document.getElementById('submitQuizBtn');
    const quizTitleElement = document.getElementById('quiz-title');
    const quizDateElement = document.getElementById('quiz-date');
    const quizQuestionsElement = document.getElementById('quiz-questions');
    const resultsElement = document.getElementById('results');
    const scoreElement = document.getElementById('score');
    const resultDetailsElement = document.getElementById('result-details');

    // Get current quiz data from localStorage
    const savedQuizData = localStorage.getItem('nptel_currentQuiz');

    if (!savedQuizData) {
        alert('No quiz data found! Redirecting to home page.');
        window.location.href = 'index.html';
        return;
    }

    // Parse the saved quiz data
    currentWeekData = JSON.parse(savedQuizData);

    // Event Listeners
    backToWeeksBtn.addEventListener('click', function() {
        window.location.href = 'weeks.html';
    });

    submitQuizBtn.addEventListener('click', submitQuiz);

    // Initialize the quiz
    renderQuiz();

    // Create floating progress indicator
    createFloatingProgressIndicator();

    // Functions
    function renderQuiz() {
        // Update quiz header
        quizTitleElement.textContent = currentWeekData.title;
        quizDateElement.textContent = currentWeekData.date;

        // Clear previous questions
        quizQuestionsElement.innerHTML = '';

        // Add progress indicator
        const progressContainer = document.createElement('div');
        progressContainer.className = 'progress-container';
        progressContainer.id = 'main-progress-container';

        const progressText = document.createElement('p');
        progressText.id = 'progress-text';
        progressText.textContent = `Answered: 0/${currentWeekData.questions.length}`;
        progressContainer.appendChild(progressText);

        const progressBar = document.createElement('div');
        progressBar.className = 'progress-bar';

        const progressFill = document.createElement('div');
        progressFill.id = 'progress-fill';
        progressFill.className = 'progress-fill';
        progressFill.style.width = '0%';

        progressBar.appendChild(progressFill);
        progressContainer.appendChild(progressBar);
        quizQuestionsElement.appendChild(progressContainer);

        // Render each question
        currentWeekData.questions.forEach((questionData, index) => {
            const questionElement = document.createElement('div');
            questionElement.className = 'question';
            questionElement.id = `question-${index}`;

            // Question text
            const questionText = document.createElement('p');
            questionText.textContent = `${index + 1}. ${questionData.question}`;
            questionElement.appendChild(questionText);

            // Options
            const optionsContainer = document.createElement('div');
            optionsContainer.className = 'options';

            // Determine if we should scramble options for this question
            let optionsToDisplay = [...questionData.options];
            if (scrambleOptions) {
                // Shuffle the options without changing the correct answer
                optionsToDisplay = shuffleArray(optionsToDisplay);
            }

            // Check if this is a multiple correct question
            const isMultipleCorrect = questionData.multipleCorrect === true;

            // Add a note if it's a multiple correct question
            if (isMultipleCorrect) {
                const multipleCorrectNote = document.createElement('p');
                multipleCorrectNote.className = 'multiple-correct-note';
                multipleCorrectNote.textContent = 'Select all that apply.';
                questionElement.appendChild(multipleCorrectNote);
            }

            optionsToDisplay.forEach((option, optionIndex) => {
                const optionElement = document.createElement('label');
                optionElement.className = 'option';

                // Create either a radio button or checkbox based on question type
                const inputElement = document.createElement('input');
                inputElement.type = isMultipleCorrect ? 'checkbox' : 'radio';
                inputElement.name = `question-${index}`;
                inputElement.value = option;
                inputElement.id = `q${index}-option${optionIndex}`;

                // Check if this option is in the user's previous answers
                if (isMultipleCorrect) {
                    // For multiple correct questions, userAnswer is an array
                    if (Array.isArray(questionData.userAnswer) && questionData.userAnswer.includes(option)) {
                        inputElement.checked = true;
                    }
                } else {
                    // For single answer questions
                    if (questionData.userAnswer === option) {
                        inputElement.checked = true;
                    }
                }

                inputElement.addEventListener('change', () => {
                    // Update user answer based on question type
                    if (isMultipleCorrect) {
                        // Initialize userAnswer as an array if it doesn't exist
                        if (!Array.isArray(currentWeekData.questions[index].userAnswer)) {
                            currentWeekData.questions[index].userAnswer = [];
                        }

                        // Add or remove the option from the array
                        if (inputElement.checked) {
                            // Add the option if it's not already in the array
                            if (!currentWeekData.questions[index].userAnswer.includes(option)) {
                                currentWeekData.questions[index].userAnswer.push(option);
                            }
                        } else {
                            // Remove the option from the array
                            currentWeekData.questions[index].userAnswer = currentWeekData.questions[index].userAnswer.filter(
                                item => item !== option
                            );
                        }
                    } else {
                        // For single answer questions
                        currentWeekData.questions[index].userAnswer = option;
                    }

                    // Save the updated quiz state
                    localStorage.setItem('nptel_currentQuiz', JSON.stringify(currentWeekData));

                    // Update progress
                    updateProgress();
                });

                optionElement.appendChild(inputElement);

                const optionText = document.createTextNode(option);
                optionElement.appendChild(optionText);

                optionsContainer.appendChild(optionElement);
            });

            questionElement.appendChild(optionsContainer);
            quizQuestionsElement.appendChild(questionElement);
        });

        // Hide results initially
        resultsElement.style.display = 'none';

        // Update progress for any previously answered questions
        updateProgress();
    }

    function createFloatingProgressIndicator() {
        // Get initial answer count
        const answeredCount = currentWeekData.questions.filter(q => q.userAnswer !== null).length;
        const totalQuestions = currentWeekData.questions.length;

        // Create the floating progress element
        const floatingProgress = document.createElement('div');
        floatingProgress.className = 'floating-progress-indicator';
        floatingProgress.id = 'floating-progress';

        // Set initial content based on answer count
        if (answeredCount === 0) {
            floatingProgress.innerHTML = '<i class="flag-icon">&#9873;</i>';
            floatingProgress.classList.add('no-answers');
        } else {
            floatingProgress.textContent = `${answeredCount}/${totalQuestions}`;
            if (answeredCount === totalQuestions) {
                floatingProgress.classList.add('complete');
            }
        }

        floatingProgress.style.display = 'none';
        document.body.appendChild(floatingProgress);

        // Add scroll event listener to show/hide floating progress
        window.addEventListener('scroll', function() {
            const progressContainer = document.getElementById('main-progress-container');
            if (progressContainer) {
                const rect = progressContainer.getBoundingClientRect();
                const isVisible = (
                    rect.top >= 0 &&
                    rect.bottom <= (window.innerHeight || document.documentElement.clientHeight)
                );

                if (!isVisible && window.scrollY > 100) {
                    floatingProgress.style.display = 'flex';
                } else {
                    floatingProgress.style.display = 'none';
                }
            }
        });
    }

    function updateProgress() {
        // Count answered questions
        const answeredCount = currentWeekData.questions.filter(q => q.userAnswer !== null).length;
        const totalQuestions = currentWeekData.questions.length;
        const percentage = Math.round((answeredCount / totalQuestions) * 100);

        // Update progress text and bar
        const progressText = document.getElementById('progress-text');
        const progressFill = document.getElementById('progress-fill');

        if (progressText && progressFill) {
            progressText.textContent = `Answered: ${answeredCount}/${totalQuestions}`;
            progressFill.style.width = `${percentage}%`;
        }

        // Update floating progress indicator
        const floatingProgress = document.getElementById('floating-progress');
        if (floatingProgress) {
            if (answeredCount === 0) {
                // Show flag icon when no questions attempted
                floatingProgress.innerHTML = '<i class="flag-icon">&#9873;</i>';
                floatingProgress.classList.add('no-answers');
            } else {
                // Show regular count
                floatingProgress.textContent = `${answeredCount}/${totalQuestions}`;
                floatingProgress.classList.remove('no-answers');

                // Update color based on progress
                if (answeredCount === totalQuestions) {
                    floatingProgress.classList.add('complete');
                } else {
                    floatingProgress.classList.remove('complete');
                }
            }
        }
    }

    function submitQuiz() {
        // Calculate score
        let correctCount = 0;
        let totalQuestions = currentWeekData.questions.length;

        // Show results section
        resultsElement.style.display = 'block';
        resultDetailsElement.innerHTML = '';

        // Add header for incorrect answers section
        const incorrectHeader = document.createElement('h4');
        incorrectHeader.textContent = 'Incorrect or Unanswered Questions:';
        resultDetailsElement.appendChild(incorrectHeader);

        let hasIncorrectAnswers = false;

        // Analyze each question
        currentWeekData.questions.forEach((question, index) => {
            let isCorrect = false;

            // Check if it's a multiple correct question
            if (question.multipleCorrect === true) {
                // For multiple correct questions, check if all correct answers are selected
                // and no incorrect answers are selected
                if (Array.isArray(question.userAnswer) && Array.isArray(question.correctAnswer)) {
                    // Check if all correct answers are selected
                    const allCorrectSelected = question.correctAnswer.every(answer =>
                        question.userAnswer.includes(answer)
                    );

                    // Check if no incorrect answers are selected
                    const noIncorrectSelected = question.userAnswer.every(answer =>
                        question.correctAnswer.includes(answer)
                    );

                    isCorrect = allCorrectSelected && noIncorrectSelected && question.userAnswer.length > 0;
                }
            } else {
                // For single answer questions
                isCorrect = question.userAnswer === question.correctAnswer;
            }

            if (isCorrect) correctCount++;

            // Only display incorrect or unanswered questions
            if (!isCorrect) {
                hasIncorrectAnswers = true;

                // Create result item
                const resultItem = document.createElement('div');
                resultItem.className = 'result-item incorrect';

                // Question text
                const questionText = document.createElement('p');
                questionText.innerHTML = `<strong>Question ${index + 1}:</strong> ${question.question}`;
                resultItem.appendChild(questionText);

                // User's answer
                const userAnswerText = document.createElement('p');
                if (Array.isArray(question.userAnswer)) {
                    // For multiple correct questions
                    if (question.userAnswer.length === 0) {
                        userAnswerText.innerHTML = `<strong>Your answer:</strong> Not answered`;
                    } else {
                        userAnswerText.innerHTML = `<strong>Your answer:</strong> ${question.userAnswer.join(', ')}`;
                    }
                } else {
                    // For single answer questions
                    userAnswerText.innerHTML = `<strong>Your answer:</strong> ${question.userAnswer || 'Not answered'}`;
                }
                resultItem.appendChild(userAnswerText);

                // Correct answer
                const correctAnswerText = document.createElement('p');
                if (Array.isArray(question.correctAnswer)) {
                    // For multiple correct questions
                    correctAnswerText.innerHTML = `<strong>Correct answer:</strong> ${question.correctAnswer.join(', ')}`;
                } else {
                    // For single answer questions
                    correctAnswerText.innerHTML = `<strong>Correct answer:</strong> ${question.correctAnswer}`;
                }
                resultItem.appendChild(correctAnswerText);

                resultDetailsElement.appendChild(resultItem);
            }

            // Highlight the question in the quiz
            const questionElement = document.getElementById(`question-${index}`);
            if (questionElement) {
                questionElement.style.borderLeft = isCorrect ? '3px solid green' : '3px solid red';
            }
        });

        // Display message if all answers are correct
        if (!hasIncorrectAnswers) {
            const allCorrectMessage = document.createElement('p');
            allCorrectMessage.textContent = "Great job! All questions were answered correctly.";
            resultDetailsElement.appendChild(allCorrectMessage);
        }

        // Calculate percentage score
        const percentage = Math.round((correctCount / totalQuestions) * 100);

        // Determine which week this is to update the appropriate best score
        let weekId = 'complete';

        // First check for double-digit weeks (10, 11, 12) to avoid matching with single digit weeks
        if (currentWeekData.title.includes("Week 10")) {
            weekId = "week10";
        } else if (currentWeekData.title.includes("Week 11")) {
            weekId = "week11";
        } else if (currentWeekData.title.includes("Week 12")) {
            weekId = "week12";
        } else {
            // Then check for single-digit weeks (1-9)
            for (let i = 1; i <= 9; i++) {
                // Check for different formats of week titles (Week 1, Week 1:, etc.)
                if (currentWeekData.title.includes(`Week ${i}`) ||
                    currentWeekData.title.includes(`Week ${i}:`) ||
                    currentWeekData.title.includes(`Week ${i} :`)) {
                    weekId = `week${i}`;
                    break;
                }
            }
        }

        // Update best score if current score is better
        const isNewBest = updateBestScore(weekId, percentage);

        // Display score
        const scoreContainer = document.createElement('div');
        scoreContainer.className = 'score-container';

        const currentScore = document.createElement('div');
        currentScore.className = 'current-score';
        currentScore.innerHTML = `<div class="score-label">Your Score</div>
                                 <div class="score-value">${correctCount}/${totalQuestions} (${percentage}%)</div>`;

        const bestScoreElement = document.createElement('div');
        bestScoreElement.className = 'best-score';
        bestScoreElement.innerHTML = `<div class="score-label">Best Score</div>
                                     <div class="score-value">${bestScores[weekId]}%</div>`;

        if (isNewBest) {
            bestScoreElement.classList.add('new-best');

            const newBestBadge = document.createElement('div');
            newBestBadge.className = 'new-best-badge';
            newBestBadge.textContent = 'New Best!';
            bestScoreElement.appendChild(newBestBadge);
        }

        scoreContainer.appendChild(currentScore);
        scoreContainer.appendChild(bestScoreElement);
        scoreElement.appendChild(scoreContainer);

        // Scroll to results
        resultsElement.scrollIntoView({ behavior: 'smooth' });

        // Disable submit button
        submitQuizBtn.disabled = true;
    }
});