// Quiz data for Week 1 and Week 2
const quizData = {
    week1: {
        title: "Week 1: Assignment 1",
        date: "Due on 2025-02-05, 23:59 IST",
        questions: [
            {
                question: "Affective computing focuses solely on the recognition of emotions without any attempt to synthesize or simulate emotional expressions.",
                options: ["True", "False"],
                correctAnswer: "False",
                userAnswer: null
            },
            {
                question: "Which of the following data modalities is least likely to be used for emotion recognition?",
                options: ["Heart Rate Variability (HRV)", "Speech Intonation", "Weather Patterns", "Facial Expressions"],
                correctAnswer: "Weather Patterns",
                userAnswer: null
            },
            {
                question: "Thermal cameras can be effective for affect sensing because:",
                options: [
                    "They capture changes in heat patterns associated with emotional states",
                    "They have high resolution for RGB-based emotion analysis.",
                    "They are designed for real-time object tracking.",
                    "They directly measure neural activity."
                ],
                correctAnswer: "They capture changes in heat patterns associated with emotional states",
                userAnswer: null
            },
            {
                question: "Analyzing multiple data streams simultaneously (e.g., combining facial expressions, voice tone, and physiological signals) improves the accuracy of emotion recognition systems.",
                options: ["True", "False"],
                correctAnswer: "True",
                userAnswer: null
            },
            {
                question: "Wearable devices like smartwatches can assist in affect sensing by:",
                options: [
                    "Detecting changes in motion and location.",
                    "Tracking physiological metrics like heart rate and skin conductivity",
                    "Providing augmented reality overlays",
                    "Capturing high-resolution facial expressions."
                ],
                correctAnswer: "Tracking physiological metrics like heart rate and skin conductivity",
                userAnswer: null
            },
            {
                question: "Which of the following sensors is commonly used for detecting physiological signals related to emotions?",
                options: ["Gyroscope", "Galvanic Skin Response (GSR)", "Ultrasonic Sensor", "Barcode Reader"],
                correctAnswer: "Galvanic Skin Response (GSR)",
                userAnswer: null
            },
            {
                question: "Which of the following is an ethical concern in affective computing?",
                options: [
                    "High computational cost",
                    "Misinterpretation of emotional data",
                    "Limited bandwidth for sensor data transfer",
                    "Lack of compatibility with legacy hardware"
                ],
                correctAnswer: "Misinterpretation of emotional data",
                userAnswer: null
            },
            {
                question: "What is the primary purpose of the MACH system?",
                options: [
                    "To analyze environmental data",
                    "To provide analytics on user communication behaviors",
                    "To monitor physical health",
                    "To replace human recruiters in interviews"
                ],
                correctAnswer: "To provide analytics on user communication behaviors",
                userAnswer: null
            },
            {
                question: "What ethical concern might arise with the use of systems like MACH?",
                options: [
                    "Over-reliance on hardware performance",
                    "Privacy concerns regarding facial data collection",
                    "Limited availability in rural areas",
                    "High training cost for users"
                ],
                correctAnswer: "Privacy concerns regarding facial data collection",
                userAnswer: null
            },
            {
                question: "What is the primary goal of emotion-aware interfaces in user experience design?",
                options: [
                    "To create complex and visually appealing designs",
                    "To ensure content aligns with the user's emotional state to avoid overwhelming them",
                    "To focus solely on functional aspects of a product",
                    "To prioritize system efficiency over user satisfaction"
                ],
                correctAnswer: "To ensure content aligns with the user's emotional state to avoid overwhelming them",
                userAnswer: null
            }
        ]
    },
    week2: {
        title: "Week 2: Assignment 2",
        date: "Due on 2025-02-05, 23:59 IST",
        questions: [
            {
                question: "Which type of emotion is primarily recognized in the stimuli?",
                options: ["Induced emotion", "Perceived emotion", "None of the given", "A and B"],
                correctAnswer: "Perceived emotion",
                userAnswer: null
            },
            {
                question: "Which model makes annotation easier for classifying emotions during data collection?",
                options: ["Categorical Model", "Valence Arousal Dominance model", "None of the given", "A and B"],
                correctAnswer: "Categorical Model",
                userAnswer: null
            },
            {
                question: "In the Circumplex Model, which emotion belongs to Low Arousal and Positive Valence?",
                options: ["Frustrated", "Delighted", "Content", "Tired"],
                correctAnswer: "Content",
                userAnswer: null
            },
            {
                question: "Dominance allows better differentiation of emotions of overlapping in the VA model.",
                options: ["True", "False"],
                correctAnswer: "True",
                userAnswer: null
            },
            {
                question: "A set of facial actions is specific to a particular emotion.",
                options: ["True", "False"],
                correctAnswer: "False",
                userAnswer: null
            },
            {
                question: "Which of the following is/are a result of individual variability in emotions?",
                options: ["Accumulation of emotions over time", "Cultural bias", "Cognitive appraisal", "All of the above"],
                correctAnswer: "All of the above",
                userAnswer: null
            },
            {
                question: "In Emotion Design, which of the following is responsible for the initial impression of a product?",
                options: ["Behavioral", "Visceral", "Reflective", "All of the above"],
                correctAnswer: "Visceral",
                userAnswer: null
            },
            {
                question: "In the context of emotion recognition models, which model categorizes emotions into discrete, distinct categories or labels?",
                options: ["Categorical model", "VAD model", "Universal model", "Dynamic model"],
                correctAnswer: "Categorical model",
                userAnswer: null
            },
            {
                question: "What is the primary distinction between perceived emotions and induced emotions?",
                options: [
                    "Perceived emotions are universal, while induced emotions are culturally influenced.",
                    "Perceived emotions are consciously experienced, while induced emotions are subconscious reactions.",
                    "Perceived emotions are the emotions others observe in an individual, while induced emotions are intentionally expressed.",
                    "Perceived emotions are the emotions an individual believes they are experiencing, while induced emotions are emotions intentionally triggered by external stimuli."
                ],
                correctAnswer: "Perceived emotions are the emotions an individual believes they are experiencing, while induced emotions are emotions intentionally triggered by external stimuli.",
                userAnswer: null
            },
            {
                question: "Which of the following design level helps in improving the user-product interaction of a product?",
                options: ["Visceral", "Behavioral", "Reflective", "None of the above"],
                correctAnswer: "Behavioral",
                userAnswer: null
            }
        ]
    }
};

// Global settings for scrambling
let scrambleOptions = false;
let scrambleQuestions = false;// Best scores tracking
let bestScores = {
    week1: 0,
    week2: 0,
    complete: 0
};

// Current quiz data (to be used in quiz.js)
let currentWeekData = null;

// Helper Functions

// Function to save settings to localStorage
function saveSettings() {
    localStorage.setItem('nptel_scrambleOptions', scrambleOptions);
    localStorage.setItem('nptel_scrambleQuestions', scrambleQuestions);
}

// Function to save best scores to localStorage
function saveBestScores() {
    localStorage.setItem('nptel_bestScores', JSON.stringify(bestScores));
}

// Function to load best scores from localStorage
function loadBestScores() {
    const savedBestScores = localStorage.getItem('nptel_bestScores');
    if (savedBestScores !== null) {
        bestScores = JSON.parse(savedBestScores);
    }
}

// Function to update a best score if the current score is higher
function updateBestScore(weekId, score) {
    if (bestScores[weekId] < score) {
        bestScores[weekId] = score;
        saveBestScores();
        return true; // Score was improved
    }
    return false; // Score was not improved
}

// Function to load settings from localStorage
function loadSettings() {
    const savedScrambleOptions = localStorage.getItem('nptel_scrambleOptions');
    const savedScrambleQuestions = localStorage.getItem('nptel_scrambleQuestions');
    
    if (savedScrambleOptions !== null) {
        scrambleOptions = savedScrambleOptions === 'true';
    }
    
    if (savedScrambleQuestions !== null) {
        scrambleQuestions = savedScrambleQuestions === 'true';
    }
}

// Function to shuffle arrays
function shuffleArray(array) {
    const newArray = [...array]; // Create a copy
    for (let i = newArray.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [newArray[i], newArray[j]] = [newArray[j], newArray[i]];
    }
    return newArray;
}

// Load settings and best scores when the script loads
loadSettings();
loadBestScores(); 