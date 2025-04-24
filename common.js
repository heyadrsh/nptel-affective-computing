// Quiz data for Week 1, Week 2, and Week 3
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
    },
    week3: {
        title: "Week 3: Assignment 3",
        date: "Due on 2025-02-12, 23:59 IST",
        questions: [
            {
                question: "What type of emotional expression is typically characterized by exaggerated and scripted feelings to simulate real emotions?",
                options: ["Spontaneous expressions", "Acted expressions", "Authentic expressions", "Spontaneous nonverbal cues"],
                correctAnswer: "Acted expressions",
                userAnswer: null
            },
            {
                question: "Which experimental design involves comparing different groups of participants who are exposed to varying conditions or stimuli?",
                options: ["Between-subject design", "Within-subject design", "Both A and B", "Correlational design"],
                correctAnswer: "Between-subject design",
                userAnswer: null
            },
            {
                question: "When conducting research on emotion recognition, why is the inclusion of naturalistic stimuli important?",
                options: [
                    "It helps maintain consistent emotional expression across participants", 
                    "It increases the realism and relevance of the research findings", 
                    "It simplifies the emotion recognition process for participants", 
                    "It minimizes ethical concerns in emotional manipulation"
                ],
                correctAnswer: "It increases the realism and relevance of the research findings",
                userAnswer: null
            },
            {
                question: "What is the purpose of presenting a neutral baseline film before showing emotional clips in a study?",
                options: [
                    "To establish a standard emotional state for all participants", 
                    "To assess the baseline physiological signals", 
                    "To make the participant feel neutral about the study", 
                    "To ensure that the participant understands the instructions"
                ],
                correctAnswer: "To establish a standard emotional state for all participants",
                userAnswer: null
            },
            {
                question: "What kind of data can be collected while a participant is watching an emotional video clip?",
                options: [
                    "Physiological signals such as heart rate and skin conductivity", 
                    "Audio-visual data through a webcam or camera", 
                    "Both physiological signals and audio-visual data", 
                    "Only self-reported emotions from the participant"
                ],
                correctAnswer: "Both physiological signals and audio-visual data",
                userAnswer: null
            },
            {
                question: "What is the primary purpose of the Institutional Review Board (IRB) in human research studies?",
                options: [
                    "To ensure that research is conducted ethically and protects the welfare of human subjects", 
                    "To analyze the scientific validity of research proposals", 
                    "To recruit participants for experiments", 
                    "To determine the funding for human research projects"
                ],
                correctAnswer: "To ensure that research is conducted ethically and protects the welfare of human subjects",
                userAnswer: null
            },
            {
                question: "Which of the following is NOT one of the categories of tools used in affective computing?",
                options: ["Data collection tools", "Signal analysis tools", "Affective expression tools", "Natural language processing tools"],
                correctAnswer: "Natural language processing tools",
                userAnswer: null
            },
            {
                question: "If you prefer a more customized approach to data annotation, what option do you have?",
                options: [
                    "Use prebuilt annotation tools exclusively", 
                    "Write your own scripts for data annotation", 
                    "Hire external annotators", 
                    "Focus only on video and audio modalities"
                ],
                correctAnswer: "Write your own scripts for data annotation",
                userAnswer: null
            },
            {
                question: "What is the primary function of data mining tools in affective computing?",
                options: [
                    "To collect raw data", 
                    "To preprocess data", 
                    "To analyze and understand emotions in the collected data", 
                    "To annotate the data"
                ],
                correctAnswer: "To analyze and understand emotions in the collected data",
                userAnswer: null
            },
            {
                question: "Which of the following tools is mentioned as a commonly used and simple tool for emotion expression in machines?",
                options: [
                    "WEKA", 
                    "ICT Virtual Human Toolkit", 
                    "ROS (Robotics Operating System)", 
                    "SAM (Self-Assessment Manikin)"
                ],
                correctAnswer: "ICT Virtual Human Toolkit",
                userAnswer: null
            }
        ]
    },
    week4: {
        title: "Week 4: Assignment 4",
        date: "Due on 2025-02-19, 23:59 IST",
        questions: [
            {
                question: "Which frame serves as the reference frame for facial expression recognition?",
                options: ["Starting frame of the sequence", "Last frame of the sequence", "Peak expression frame", "Random frame"],
                correctAnswer: "Peak expression frame",
                userAnswer: null
            },
            {
                question: "Dynamic facial expressions share the transition duration.",
                options: ["True", "False"],
                correctAnswer: "False",
                userAnswer: null
            },
            {
                question: "Which of the following is not an important step in conventional FER?",
                options: ["Face detection", "Feature Extraction", "Background analysis", "Face landmark detection"],
                correctAnswer: "Background analysis",
                userAnswer: null
            },
            {
                question: "Temporal information is crucial for detecting micro-expressions.",
                options: ["True", "False"],
                correctAnswer: "True",
                userAnswer: null
            },
            {
                question: "What does FACS stand for?",
                options: ["Facial Attribute Coding System", "Facial Affect Coding System", "Facial Action Coding System", "Functional Action Coding System"],
                correctAnswer: "Facial Action Coding System",
                userAnswer: null
            },
            {
                question: "Which of the facial features require less storage?",
                options: ["Both appearance and geometric", "Appearance only", "Geometric only", "None of the above"],
                correctAnswer: "Geometric only",
                userAnswer: null
            },
            {
                question: "Sequential information helps in expression recognition.",
                options: ["True", "False"],
                correctAnswer: "True",
                userAnswer: null
            },
            {
                question: "Which of the following features do not provide motion information?",
                options: ["Motion History Images (HMI)", "Local Binary Patterns (LBP)", "Histogram of Gradients (HoG)", "Optical Flow"],
                correctAnswer: "Histogram of Gradients (HoG)",
                userAnswer: null
            },
            {
                question: "The relative position of the persons in a group has no effect on the group level affect.",
                options: ["True", "False"],
                correctAnswer: "False",
                userAnswer: null
            },
            {
                question: "When dealing with subtle facial expressions, which of the following is not a setback?",
                options: ["Self-occlusion", "Illumination", "Individual variability", "Pose variation"],
                correctAnswer: "Pose variation",
                userAnswer: null
            }
        ]
    },
    week5: {
        title: "Week 5: Assignment 5",
        date: "Due on 2025-02-26, 23:59 IST",
        questions: [
            {
                question: "Which of the following is true about emotional speech signals?",
                options: ["Emotional speech always follows predictable patterns", "Emotional speech can be conveyed through tone, rhythm, and loudness", "Emotional speech is only expressed through content words", "Emotional speech is always louder than neutral speech"],
                correctAnswer: "Emotional speech can be conveyed through tone, rhythm, and loudness",
                userAnswer: null
            },
            {
                question: "What is a key factor in determining the emotional tone of a speaker's voice?",
                options: ["The pitch and modulation of the voice", "The speed of speech", "The presence of background music", "The clarity of the speaker's pronunciation"],
                correctAnswer: "The pitch and modulation of the voice",
                userAnswer: null
            },
            {
                question: "Which of the following is a commonly used feature in speech emotion recognition?",
                options: ["Mel-frequency cepstral coefficients (MFCCs)", "Linear prediction coefficients (LPCs)", "Formant frequencies", "All of the above"],
                correctAnswer: "All of the above",
                userAnswer: null
            },
            {
                question: "What does \"prosody\" refer to in speech emotion recognition?",
                options: ["The phonetic structure of speech", "The rhythm, pitch, and intonation patterns in speech", "The speaker's gender and age-related characteristics", "The loudness of speech"],
                correctAnswer: "The rhythm, pitch, and intonation patterns in speech",
                userAnswer: null
            },
            {
                question: "Why is it important to analyze emotions in situations where people speak different languages, like in interrogations?",
                options: ["To understand the emotional state of the speaker", "To count how many languages are being spoken", "To identify the speaker's name", "To translate all words to one language"],
                correctAnswer: "To understand the emotional state of the speaker",
                userAnswer: null
            },
            {
                question: "Which of the following prosody-based features is used to measure the energy in an input acoustic signal?",
                options: ["Loudness", "Pitch", "Speech rate", "Formant frequency"],
                correctAnswer: "Loudness",
                userAnswer: null
            },
            {
                question: "What is the advantage of using pre-trained networks in speech analysis over hand-engineered features like MFCC?",
                options: ["Pre-trained networks automatically extract features through deep learning", "Hand-engineered features are more accurate", "Pre-trained networks do not require data", "Hand-engineered features work better for real-time analysis"],
                correctAnswer: "Pre-trained networks automatically extract features through deep learning",
                userAnswer: null
            },
            {
                question: "Which of the following machine learning techniques is commonly used in speech emotion analysis?",
                options: ["Hidden Markov Models", "K-means clustering", "Linear regression", "Decision trees only"],
                correctAnswer: "Hidden Markov Models",
                userAnswer: null
            },
            {
                question: "What is the primary reason for using spectrograms in speech-based emotion recognition?",
                options: ["To visualize the frequency content of the audio signal over time", "To reduce the duration of the audio signal", "To eliminate background noise in the signal", "To make the signal easier to interpret in its raw form"],
                correctAnswer: "To visualize the frequency content of the audio signal over time",
                userAnswer: null
            },
            {
                question: "In the speech synthesis example, how can one distinguish between disappointment and excitement in the speech?",
                options: ["By listening to differences in tone and emotional expression in the speech", "By looking at the text that is being read aloud", "By measuring the pitch of the voice only", "By analyzing the background noise in the audio"],
                correctAnswer: "By listening to differences in tone and emotional expression in the speech",
                userAnswer: null
            }
        ]
    },
    week6: {
        title: "Week 6: Assignment 6",
        date: "Due on 2025-03-05, 23:59 IST",
        questions: [
            {
                question: "The shape and placement of text significantly contribute to conveying emotion in design or communication.",
                options: ["True", "False"],
                correctAnswer: "True",
                userAnswer: null
            },
            {
                question: "Emotion representation in text is:",
                options: ["Always straightforward and easily detectable without considering the surrounding context.", "Often complex and influenced by the surrounding context.", "Primarily dependent on the use of specific emotion words.", "A combination of linguistic features and contextual clues."],
                correctAnswer: "Often complex and influenced by the surrounding context.",
                userAnswer: null
            },
            {
                question: "How can cultural differences impact the interpretation of emotions in text?",
                options: ["Cultural differences have no impact on emotion recognition.", "Cultural differences can lead to misunderstandings and misinterpretations of emotions.", "Cultural differences can enhance the understanding of emotions, as they provide diverse perspectives.", "Cultural differences are only relevant in face-to-face communication, not in text-based communication."],
                correctAnswer: "Cultural differences can lead to misunderstandings and misinterpretations of emotions.",
                userAnswer: null
            },
            {
                question: "What is the significance of a high objective score for a word in SentiWordNet?",
                options: ["The word is highly positive.", "The word is highly negative.", "The word is highly neutral.", "The word has a strong sentiment orientation."],
                correctAnswer: "The word is highly neutral.",
                userAnswer: null
            },
            {
                question: "What is the primary objective of Bag-of-Words?",
                options: ["To represent text as a numerical feature vector.", "To understand the grammatical structure of a text.", "To analyze the semantic relationships between words in a text.", "To identify the topic or theme of a text."],
                correctAnswer: "To represent text as a numerical feature vector.",
                userAnswer: null
            },
            {
                question: "What is an n-gram?",
                options: ["A statistical method for estimating the probability of a word.", "A technique for stemming words.", "A type of neural network architecture.", "A sequence of n consecutive words in a text."],
                correctAnswer: "A sequence of n consecutive words in a text.",
                userAnswer: null
            },
            {
                question: "How can part-of-speech tagging help in emotion recognition?",
                options: ["It identifies the grammatical role of words in a sentence, which can provide clues about the intended emotion.", "It extracts keywords from a text.", "It identifies the topic of a text.", "It analyzes the semantic meaning of words."],
                correctAnswer: "It identifies the grammatical role of words in a sentence, which can provide clues about the intended emotion.",
                userAnswer: null
            },
            {
                question: "Which model is better suited for handling rare words or out-of-vocabulary words?",
                options: ["Word2Vec", "FastText", "GloVe", "All are equally suited"],
                correctAnswer: "FastText",
                userAnswer: null
            },
            {
                question: "What does the IDF component in TF-IDF represent?",
                options: ["The frequency of a term within a document.", "The total number of documents in the corpus", "The importance of a term relative to the entire corpus.", "The number of times a term appears in a document multiplied by the total number of terms in the document."],
                correctAnswer: "The importance of a term relative to the entire corpus.",
                userAnswer: null
            },
            {
                question: "Basic statistics are computed around the labels assigned by different labelers in text-based emotion detection to arrive at a final emotional classification for a statement",
                options: ["True", "False"],
                correctAnswer: "True",
                userAnswer: null
            }
        ]
    },
    week7: {
        title: "Week 7: Assignment 7",
        date: "Due on 2025-03-12, 23:59 IST",
        questions: [
            {
                question: "Which of the following is the primary physiological indicator measured in Electrodermal Activity (EDA)?",
                options: ["The electrical resistance of the skin", "The amount of sweat produced by the skin", "The heart rate variability", "The brain wave activity"],
                correctAnswer: "The electrical resistance of the skin",
                userAnswer: null
            },
            {
                question: "Heart rate variability is often reduced in individuals experiencing high stress.",
                options: ["True", "False"],
                correctAnswer: "True",
                userAnswer: null
            },
            {
                question: "Which of the following is NOT a typical physiological marker for detecting emotions in the autonomic nervous system?",
                options: ["Heart rate", "Respiratory rate", "Oxygen saturation", "Skin temperature"],
                correctAnswer: "Oxygen saturation",
                userAnswer: null
            },
            {
                question: "The Theta frequency band in EEG is commonly associated with deep relaxation and meditation states.",
                options: ["True", "False"],
                correctAnswer: "True",
                userAnswer: null
            },
            {
                question: "Which of the following emotions has been found to be correlated with heart rate?",
                options: ["Happiness", "Anger", "Sadness", "Surprise"],
                correctAnswer: "Anger",
                userAnswer: null
            },
            {
                question: "Why does heart rate increase during stressful situations, such as giving a presentation?",
                options: ["The brain signals the heart to pump more blood due to perceived stress or importance.", "The heart automatically adjusts to any increase in oxygen levels.", "The brain reduces the heart rate to conserve energy.", "The brain disconnects from the heart during stressful events."],
                correctAnswer: "The brain signals the heart to pump more blood due to perceived stress or importance.",
                userAnswer: null
            },
            {
                question: "Which of the following is a more accurate method for measuring heart rate?",
                options: ["Photoplethysmography (PPG)", "Electrocardiogram (ECG)", "Both are equally accurate", "Neither"],
                correctAnswer: "Electrocardiogram (ECG)",
                userAnswer: null
            },
            {
                question: "How does posture affect heart rate during measurement?",
                options: ["It does not affect heart rate.", "An uncomfortable posture may cause an increase in heart rate due to extra effort needed for stabilization.", "An uncomfortable posture decreases heart rate.", "Posture has only a minor effect on heart rate."],
                correctAnswer: "An uncomfortable posture may cause an increase in heart rate due to extra effort needed for stabilization.",
                userAnswer: null
            },
            {
                question: "What aspect of emotional state can heart rate measurements accurately estimate?",
                options: ["Valence", "Arousal", "Both valence and arousal", "Neither"],
                correctAnswer: "Arousal",
                userAnswer: null
            },
            {
                question: "Heart rate measurements can distinguish whether the arousal is caused by positive or negative stimuli.",
                options: ["True", "False"],
                correctAnswer: "False",
                userAnswer: null
            }
        ]
    },
    week8: {
        title: "Week 8: Assignment 8",
        date: "Due on 2025-03-19, 23:59 IST",
        questions: [
            {
                question: "Which of the following emotional states is typically associated with increased skin conductance?",
                options: ["Boredom", "Relaxation", "Stress", "Happiness"],
                correctAnswer: "Stress",
                userAnswer: null
            },
            {
                question: "What is a common technique used to measure skin conductance?",
                options: ["Electromyography (EMG)", "Electroencephalography (EEG)", "Functional Magnetic Resonance Imaging (fMRI)", "Galvanic Skin Response (GSR)"],
                correctAnswer: "Galvanic Skin Response (GSR)",
                userAnswer: null
            },
            {
                question: "How can SCL and SCR be used to assess emotional arousal?",
                options: ["Increased SCL and SCR indicate higher arousal.", "Decreased SCL and SCR indicate higher arousal.", "Increased SCL but decreased SCR indicate higher arousal.", "Decreased SCL but increased SCR indicate higher arousal."],
                correctAnswer: "Increased SCL and SCR indicate higher arousal.",
                userAnswer: null
            },
            {
                question: "What is the primary advantage of using the 10-20 system?",
                options: ["It allows for easy comparison of EEG data across different studies.", "It reduces the number of electrodes needed for EEG recordings.", "It increases the spatial resolution of EEG recordings.", "It eliminates the need for precise anatomical measurements."],
                correctAnswer: "It allows for easy comparison of EEG data across different studies.",
                userAnswer: null
            },
            {
                question: "Which frequency band is associated with deep sleep?",
                options: ["Alpha", "Beta", "Delta", "Theta"],
                correctAnswer: "Delta",
                userAnswer: null
            },
            {
                question: "In a multimodal setting, each modality is expected to provide similar information.",
                options: ["True", "False"],
                correctAnswer: "False",
                userAnswer: null
            },
            {
                question: "What is a major challenge in early feature fusion of multimodal data?",
                options: ["Data alignment and synchronization issues.", "Increased computational complexity.", "Selection of appropriate feature extraction techniques.", "Lack of standardized evaluation metrics."],
                correctAnswer: "Data alignment and synchronization issues.",
                userAnswer: null
            },
            {
                question: "Which fusion level is most suitable for modalities with different temporal resolutions?",
                options: ["Early fusion", "Intermediate fusion", "Late fusion", "All have the same effect."],
                correctAnswer: "Late fusion",
                userAnswer: null
            },
            {
                question: "Which type of features does feature selection aim to eliminate?",
                options: ["Descriptive features", "Relevant features", "Redundant features", "Interactive features"],
                correctAnswer: "Redundant features",
                userAnswer: null
            },
            {
                question: "Slow fusion eliminates the synchronization requirement while taking advantage of the correlations between the modalities.",
                options: ["True", "False"],
                correctAnswer: "True",
                userAnswer: null
            }
        ]
    },
    week9: {
        title: "Week 9: Assignment 9",
        date: "Due on 2025-03-26, 23:59 IST",
        questions: [
            {
                question: "What is the core concept of empathy?",
                options: ["Recognizing and understanding the emotional states of others", "Feeling pity for others in distress", "Ignoring others' emotional states", "Controlling others' emotions"],
                correctAnswer: "Recognizing and understanding the emotional states of others",
                userAnswer: null
            },
            {
                question: "The Uncanny Valley effect is most often observed when:",
                options: ["A robot has human-like features but lacks certain human behaviors", "A robot mimics human emotions accurately", "A robot appears completely non-human", "A robot displays behaviors that are distinctly mechanical"],
                correctAnswer: "A robot has human-like features but lacks certain human behaviors",
                userAnswer: null
            },
            {
                question: "Can empathy in robots and virtual agents be genuine?",
                options: ["Yes, as long as the agent can process and respond to emotional signals", "No, empathy in agents is always simulated and not truly felt", "Yes, but only when humans are aware it is an agent", "No, empathy in robots is irrelevant for effective interaction"],
                correctAnswer: "No, empathy in agents is always simulated and not truly felt",
                userAnswer: null
            },
            {
                question: "What is the key focus of perspective-taking in the context of empathy?",
                options: ["Understanding the emotional state of an individual based on their physiological cues", "Analyzing how the response will make the individual feel from their point of view", "Modifying the emotional state of an individual by regulating their feelings", "Ignoring the user's feelings to maintain an objective response"],
                correctAnswer: "Analyzing how the response will make the individual feel from their point of view",
                userAnswer: null
            },
            {
                question: "What is the primary goal of empathy analysis in the context of artificial empathy?",
                options: ["To predict the emotional state of an individual without understanding the context of the interaction", "To understand the emotional state of the user and evaluate whether the interaction is empathetic", "To generate empathetic responses in virtual agents based on physiological cues", "To analyze only the physiological cues without considering behavioral aspects"],
                correctAnswer: "To understand the emotional state of the user and evaluate whether the interaction is empathetic",
                userAnswer: null
            },
            {
                question: "The appearance of an embodied agent should be designed to match the specific characteristics of the target user to enhance empathy.",
                options: ["True", "False"],
                correctAnswer: "True",
                userAnswer: null
            },
            {
                question: "Which of the following best describes the role of lexical cues in empathy analysis?",
                options: ["Lexical cues are physiological data used to assess emotional states", "Lexical cues are text-based data used to analyze the empathetic quality of interactions", "Lexical cues are only used in analyzing emotional states, not empathy", "Lexical cues focus on the visual and audio cues of the interaction"],
                correctAnswer: "Lexical cues are text-based data used to analyze the empathetic quality of interactions",
                userAnswer: null
            },
            {
                question: "What is one of the mediating factors that can affect the empathetic response of an observer?",
                options: ["The agent's physical location", "The mood of the observer", "The agent's programming language", "The time of day"],
                correctAnswer: "The mood of the observer",
                userAnswer: null
            },
            {
                question: "What was the result of providing empathetic feedback in the virtual interview scenario?",
                options: ["It increased the interview stress level", "It had no effect on the interview stress level", "It reduced the interview stress level", "It caused the interview to be abandoned"],
                correctAnswer: "It reduced the interview stress level",
                userAnswer: null
            },
            {
                question: "The emotional state of the user is irrelevant when designing an embodied agent for a specific task.",
                options: ["True", "False"],
                correctAnswer: "False",
                userAnswer: null
            }
        ]
    },
    week10: {
        title: "Week 10: Assignment 10",
        date: "Due on 2025-04-02, 23:59 IST",
        questions: [
            {
                question: "Learners' experiences with affective learning technologies involve both emotional responses and learning outcomes",
                options: ["True", "False"],
                correctAnswer: "True",
                userAnswer: null
            },
            {
                question: "How does GazeTutor use eye-tracking data to improve learning?",
                options: ["By identifying when students are struggling with a concept.", "By predicting students' future performance.", "By adapting the difficulty level of the tutoring content.", "By providing real-time feedback on students' attention and engagement."],
                correctAnswer: "By providing real-time feedback on students' attention and engagement.",
                userAnswer: null
            },
            {
                question: "A machine that can anticipate future needs and adjust its behavior accordingly is at which level of adaptation?",
                options: ["Level 0", "Level 1", "Level 2", "Level 3"],
                correctAnswer: "Level 3", // Note: The assignment shows both Level 2 and Level 3 as correct
                userAnswer: null
            },
            {
                question: "Camera can be used to monitor the heart rate of the user.",
                options: ["True", "False"],
                correctAnswer: "True",
                userAnswer: null
            },
            {
                question: "What is empathy in the context of affective computing?",
                options: ["The ability of a machine to understand and respond to human emotions.", "The ability of a machine to perform tasks independently.", "The ability of a machine to learn from experience.", "The ability of a machine to process and analyze large amounts of data."],
                correctAnswer: "The ability of a machine to understand and respond to human emotions.",
                userAnswer: null
            },
            {
                question: "Tendency to provide human characteristics to non-lifelike artifacts is called as",
                options: ["Polymorphism", "Anthropomorphism", "Skeuomorphism", "Neumorphism"],
                correctAnswer: "Anthropomorphism",
                userAnswer: null
            },
            {
                question: "Parallel empathy is characterized by:",
                options: ["A strong emotional response to another person's feelings.", "A detached and objective perspective on another person's emotions.", "The ability to understand and share another person's feelings without being overwhelmed.", "A tendency to avoid emotional situations."],
                correctAnswer: "The ability to understand and share another person's feelings without being overwhelmed.",
                userAnswer: null
            },
            {
                question: "User feedback ratings can be a metric for evaluating affective agents.",
                options: ["True", "False"],
                correctAnswer: "True",
                userAnswer: null
            },
            {
                question: "Which of the following strategies can help to reduce negative affective states in learners?",
                options: ["Increasing the difficulty of tasks.", "Providing immediate feedback.", "Creating a competitive learning environment.", "Ignoring learner emotions."],
                correctAnswer: "Providing immediate feedback.",
                userAnswer: null
            },
            {
                question: "Cognitive empathy involves perceiving the emotions of the target in a logical manner.",
                options: ["True", "False"],
                correctAnswer: "True",
                userAnswer: null
            }
        ]
    },
    week11: {
        title: "Week 11: Assignment 11",
        date: "Due on 2025-04-09, 23:59 IST",
        questions: [
            {
                question: "A virtual assistant takes input in the form of text messages only.",
                options: ["True", "False"],
                correctAnswer: "False",
                userAnswer: null
            },
            {
                question: "Which of the following is NOT a part of the process for creating a virtual assistant as described in the lecture?",
                options: ["Wake word detection", "Automatic Speech Recognition (ASR)", "Emotion detection in the speech", "Data encryption for privacy"],
                correctAnswer: "Data encryption for privacy",
                userAnswer: null
            },
            {
                question: "It is acceptable to anthropomorphize emotional virtual agents as long as they provide useful emotional support to users.",
                options: ["True", "False"],
                correctAnswer: "True",
                userAnswer: null
            },
            {
                question: "An emotionally intelligent virtual assistant can help improve communication and reduce stress in the workplace by recognizing emotional cues from employees.",
                options: ["True", "False"],
                correctAnswer: "True",
                userAnswer: null
            },
            {
                question: "In which domain can an emotionally intelligent virtual assistant help provide real-time emotional support and coping strategies?",
                options: ["Healthcare", "Customer service", "Mental health and therapy", "Entertainment"],
                correctAnswer: "Mental health and therapy",
                userAnswer: null
            },
            {
                question: "What is the main goal of using an emotionally intelligent virtual assistant in education?",
                options: ["To replace teachers", "To monitor students' grades", "To identify when students need additional support and provide targeted feedback", "To conduct exams"],
                correctAnswer: "To identify when students need additional support and provide targeted feedback",
                userAnswer: null
            },
            {
                question: "The first step in the process of building an emotionally intelligent virtual assistant is to identify the language spoken by the user.",
                options: ["True", "False"],
                correctAnswer: "False",
                userAnswer: null
            },
            {
                question: "What is the role of the \"context\" in an emotionally intelligent virtual assistant?",
                options: ["To recognize the user's emotion at all times", "To understand the user's preferences and history for personalized responses", "To determine the user's intent regardless of their emotional state", "To simply follow the user's spoken instructions without emotion or history"],
                correctAnswer: "To understand the user's preferences and history for personalized responses",
                userAnswer: null
            },
            {
                question: "What is the primary ethical concern related to privacy when developing emotionally intelligent virtual agents?",
                options: ["The agent may not be able to collect enough data.", "The agent may collect personal data without user consent.", "The agent may not be able to process data accurately.", "The agent may share personal data only with medical professionals."],
                correctAnswer: "The agent may collect personal data without user consent.",
                userAnswer: null
            },
            {
                question: "How can emotional virtual agents help avoid bias in their responses to users?",
                options: ["By using data from only one ethnic group.", "By ensuring the data used for training is diverse and representative.", "By focusing on only one language group.", "By ignoring cultural differences."],
                correctAnswer: "By ensuring the data used for training is diverse and representative.",
                userAnswer: null
            }
        ]
    },
    week12: {
        title: "Week 12: Assignment 12",
        date: "Due on 2025-04-16, 23:59 IST",
        questions: [
            {
                question: "Privacy concerns in affective computing arise from:",
                options: ["The collection and analysis of personal data", "The potential for misuse of emotional information", "The lack of transparency in AI decision-making", "None of the above."],
                correctAnswer: "The collection and analysis of personal data",
                userAnswer: null
            },
            {
                question: "Which of the following is not a potential Ethical Consideration that need not to be addressed?",
                options: ["Emotional Manipulation", "Privacy", "Emotional Dependency", "System accuracy"],
                correctAnswer: "System accuracy",
                userAnswer: null
            },
            {
                question: "Which of the following has a high level of privacy intrusion?",
                options: ["Audio jack", "WiFi", "Camera", "Bluetooth"],
                correctAnswer: "Camera",
                userAnswer: null
            },
            {
                question: "All mobile sensors capture the least amount of sensitive data.",
                options: ["True", "False"],
                correctAnswer: "False",
                userAnswer: null
            },
            {
                question: "Which of the following sensing strategies is written wrongly in order of their privacy invasiveness, in ascending order?",
                options: ["Microphone > WiFi> Accelerometer", "GPS > Bluetooth > Screen Touch", "WiFi > Gyroscope > Calls", "Calls > Apps > Gyroscope"],
                correctAnswer: "WiFi > Gyroscope > Calls",
                userAnswer: null
            },
            {
                question: "What is the primary goal of anticipatory mobile computing?",
                options: ["To predict user needs and proactively provide services.", "To optimize battery life on mobile devices.", "To enhance the security of mobile devices.", "To increase the processing power of mobile devices."],
                correctAnswer: "To predict user needs and proactively provide services.",
                userAnswer: null
            },
            {
                question: "From an ethics perspective, what is a significant concern regarding affect-sensing apps in relation to emotional dependency?",
                options: ["User engagement", "Privacy intrusion", "Emotional manipulation", "User addiction"],
                correctAnswer: "User addiction",
                userAnswer: null
            },
            {
                question: "What is a potential ethical concern related to facial expression recognition?",
                options: ["Privacy violations", "Bias in recognition systems", "Misinterpretation of emotions", "All of the above"],
                correctAnswer: "All of the above",
                userAnswer: null
            },
            {
                question: "It is possible to completely anonymize a user's personal information using algorithms.",
                options: ["True", "False"],
                correctAnswer: "False",
                userAnswer: null
            },
            {
                question: "Who should be involved in shaping the ethical guidelines for the development of affect-aware machines?",
                options: ["Engineers and developers only.", "Ethicists and philosophers only.", "Users and stakeholders only.", "A combination of engineers, ethicists, users, and other relevant stakeholders."],
                correctAnswer: "A combination of engineers, ethicists, users, and other relevant stakeholders.",
                userAnswer: null
            }
        ]
    }
};

// Global settings for scrambling
let scrambleOptions = false;
let scrambleQuestions = false;

// Best scores tracking
let bestScores = {
    week1: 0,
    week2: 0,
    week3: 0,
    week4: 0,
    week5: 0,
    week6: 0,
    week7: 0,
    week8: 0,
    week9: 0,
    week10: 0,
    week11: 0,
    week12: 0,
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