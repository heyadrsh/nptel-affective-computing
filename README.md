# Affective Computing NPTEL Assignment Practice Portal

A minimalist web application for practicing NPTEL Affective Computing course assignments organized by week.

## Features

- **Minimalist Monochrome Design**: Clean black and white interface with focused typography
- **Multi-page Structure**: Separate pages for landing, week selection, and quiz taking
- **Two Practice Modes**:
  - **Week-by-Week Practice**: Practice assignments organized by course week
  - **Complete Practice**: Practice all assignments in randomized order
- **Quiz Settings**: Configure scrambling options from the landing page:
  - Scramble Options: Randomize answer choices for each question
  - Scramble Questions: Randomize the order of questions
- **Immediate Feedback**: Get instant feedback on your answers with correct/incorrect indicators
- **Score Tracking**: View your score and percentage after submission
- **Progress Tracking**: Visual progress indicator shows how many questions you've answered
- **Responsive Design**: Works on mobile and desktop devices
- **State Persistence**: Your quiz progress and settings are saved even if you close the browser

## How to Use

1. Open `index.html` in a web browser
2. Configure scramble settings (optional)
3. Choose practice mode (by week or complete)
4. Answer the questions by selecting the appropriate options
5. Click "Submit" to see your results
6. Review correct and incorrect answers

## File Structure

- `index.html` - Landing page with settings and practice mode selection
- `weeks.html` - Week selection page
- `quiz.html` - Quiz taking page
- `common.js` - Shared data and utility functions
- `landing.js` - Landing page functionality
- `weeks.js` - Week selection functionality
- `quiz.js` - Quiz taking functionality
- `styles.css` - Styling for all pages

## Current Assignment Data

The application currently includes assignments from:
- Week 1: Fundamentals of Affective Computing
- Week 2: Emotion Psychology and Theory

## Future Enhancements

- Add more weeks of assignments
- Add timed practice mode
- Add search functionality
- Add user authentication for saving progress across devices 