// This array will hold all your course content, slide by slide.
// Each object represents a "slide" or a "lesson segment".
// 'type': 'lesson' for content, 'quiz' for a quiz.
// 'duration': Time in seconds for the timer for lesson slides.
// 'content': HTML string for lesson slides.
// For quizzes, 'question', 'options' (array of strings), and 'correctAnswer' (index of the correct option).
const courseContent = [
    {
        type: 'lesson',
        title: 'Introduction to Fitness Fundamentals',
        content: `
            <p>Welcome to your interactive fitness journey! In this course, we'll demystify fitness, helping you build a strong foundation for a healthier, more active life.</p>
            <p>We'll cover core principles, practical techniques, and how to maintain consistency.</p>
            <img src="https://via.placeholder.com/400x200?text=Fitness+Intro" alt="Fitness Introduction" style="max-width:100%;">
        `,
        duration: 30 // seconds
    },
    {
        type: 'lesson',
        title: 'Understanding Macronutrients',
        content: `
            <h3>Carbohydrates, Proteins, and Fats</h3>
            <p>Macronutrients are the cornerstones of your diet, providing the energy and building blocks your body needs.</p>
            <ul>
                <li><strong>Carbohydrates:</strong> Your primary energy source (grains, fruits, vegetables).</li>
                <li><strong>Proteins:</strong> Essential for muscle repair and growth (meat, fish, beans, dairy).</li>
                <li><strong>Fats:</strong> Vital for hormone production and nutrient absorption (avocado, nuts, oils).</li>
            </ul>
        `,
        duration: 45
    },
    {
        type: 'quiz',
        title: 'Quiz: Macronutrients',
        question: 'Which macronutrient is primarily responsible for muscle repair and growth?',
        options: ['Carbohydrates', 'Proteins', 'Fats', 'Vitamins'],
        correctAnswer: 1 // Index of 'Proteins'
    },
    {
        type: 'lesson',
        title: 'Basic Strength Training Principles',
        content: `
            <h3>Progressive Overload and Consistency</h3>
            <p>To build strength and muscle, you need to apply two key principles:</p>
            <ul>
                <li><strong>Progressive Overload:</strong> Gradually increasing the demands on your body (e.g., lifting heavier, doing more reps).</li>
                <li><strong>Consistency:</strong> Showing up regularly and sticking to your plan is more important than perfect workouts.</li>
            </ul>
        `,
        duration: 40
    },
    // Add more lessons and quizzes here
    {
        type: 'final_test_placeholder', // This marks where the final test should appear conceptually
        title: 'Final Assessment'
    }
];

// This array will hold the questions for the final test.
// Structure similar to quiz, but potentially more questions and no immediate feedback.
const finalTestQuestions = [
    {
        question: 'What is the recommended daily water intake for an active adult?',
        options: ['1-2 liters', '2-3 liters', '3-4 liters', 'It varies greatly by individual activity and climate'],
        correctAnswer: 3
    },
    {
        question: 'Which of the following is NOT a principle of effective strength training?',
        options: ['Progressive Overload', 'Specificity', 'Randomness', 'Recovery'],
        correctAnswer: 2
    },
    {
        question: 'What is the primary role of carbohydrates in the body?',
        options: ['Muscle repair', 'Energy production', 'Hormone regulation', 'Vitamin absorption'],
        correctAnswer: 1
    }
    // Add more challenging questions here for the final test
];

// --- JavaScript variables and initial setup ---
let currentSlideIndex = 0;
let timerInterval;
let timeLeft;
let quizAttempted = false; // To prevent going back during a quiz
let quizScore = 0; // Track score for current quiz
let finalTestScores = []; // To store results of each final test question

// Declare DOM Elements variables, but assign them inside DOMContentLoaded
let certificateCanvas;
let downloadCertBtn;
let ctx;

let courseTitleEl;
let lessonContentEl;
let quizContainerEl;
let quizQuestionEl;
let quizOptionsEl;
let submitQuizBtn;
let quizFeedbackEl;
let backBtn;
let nextBtn;
let timerDisplayEl;
let currentTimeEl;
let finalTestContainerEl;
let finalTestQuestionsEl;
let submitFinalTestBtn;
let finalTestResultsEl;
let certificationAreaEl;
let certificateNameEl;
let certificateCourseTitleEl;
let certificateDateEl;


// --- All code that interacts with the DOM will be inside this listener ---
document.addEventListener('DOMContentLoaded', () => {
    // Assign DOM Elements AFTER the DOM is fully loaded
    certificateCanvas = document.getElementById('certificateCanvas');
    downloadCertBtn = document.getElementById('downloadCertBtn');

    // Only try to get context if canvas is found
    if (certificateCanvas) {
        ctx = certificateCanvas.getContext('2d');
    } else {
        console.error("Error: Canvas element with ID 'certificateCanvas' not found!");
        // You might want to display a user-friendly error message or handle gracefully
        return; // Exit if a critical element is missing
    }

    courseTitleEl = document.getElementById('course-title');
    lessonContentEl = document.getElementById('lesson-content');
    quizContainerEl = document.getElementById('quiz-container');
    quizQuestionEl = document.getElementById('quiz-question');
    quizOptionsEl = document.getElementById('quiz-options');
    submitQuizBtn = document.getElementById('submit-quiz-btn');
    quizFeedbackEl = document.getElementById('quiz-feedback');
    backBtn = document.getElementById('back-btn');
    nextBtn = document.getElementById('next-btn');
    timerDisplayEl = document.getElementById('timer-display');
    currentTimeEl = document.getElementById('current-time');
    finalTestContainerEl = document.getElementById('final-test-container');
    finalTestQuestionsEl = document.getElementById('final-test-questions');
    submitFinalTestBtn = document.getElementById('submit-final-test-btn');
    finalTestResultsEl = document.getElementById('final-test-results');
    certificationAreaEl = document.getElementById('certification-area');
    certificateNameEl = document.getElementById('certificate-name');
    certificateCourseTitleEl = document.getElementById('certificate-course-title');
    certificateDateEl = document.getElementById('certificate-date');

    // Add all event listeners here
    nextBtn.addEventListener('click', () => {
        if (currentSlideIndex < courseContent.length - 1) {
            currentSlideIndex++;
            displaySlide();
        } else if (currentSlideIndex === courseContent.length - 1 && courseContent[currentSlideIndex].type === 'final_test_placeholder') {
            // This handles the transition TO the final test display, not moving past it
            // The final test will have its own submit button.
            // nextBtn will typically be disabled when on final_test_placeholder
        }
    });

    backBtn.addEventListener('click', () => {
        if (currentSlideIndex > 0) {
            currentSlideIndex--;
            displaySlide();
        }
    });

    submitQuizBtn.addEventListener('click', submitQuiz);
    submitFinalTestBtn.addEventListener('click', submitFinalTest);
    downloadCertBtn.addEventListener('click', downloadCertificate); // Your new button listener

    // Initial display when the page loads
    displaySlide();
}); // End of DOMContentLoaded


// Function to display current slide/lesson
function displaySlide() {
    clearInterval(timerInterval); // Always clear timer on slide change
    // Clear previous content
    lessonContentEl.innerHTML = '';
    quizContainerEl.classList.add('hidden');
    finalTestContainerEl.classList.add('hidden');
    quizFeedbackEl.textContent = '';
    submitQuizBtn.classList.remove('hidden'); // Ensure quiz submit button is visible for new quizzes
    nextBtn.disabled = false; // Enable next button by default

    const currentItem = courseContent[currentSlideIndex];
    courseTitleEl.textContent = currentItem.title;

    if (currentItem.type === 'lesson') {
        lessonContentEl.classList.remove('hidden');
        lessonContentEl.innerHTML = currentItem.content;
        startTimer(currentItem.duration);
    } else if (currentItem.type === 'quiz') {
        lessonContentEl.classList.add('hidden');
        quizContainerEl.classList.remove('hidden');
        displayQuiz(currentItem);
        startTimer(currentItem.duration || 120); // Default quiz time if not specified
        backBtn.disabled = true; // Cannot go back during a quiz
        quizAttempted = false; // Reset quiz attempt status
    } else if (currentItem.type === 'final_test_placeholder') {
        lessonContentEl.classList.add('hidden');
        quizContainerEl.classList.add('hidden');
        finalTestContainerEl.classList.remove('hidden');
        displayFinalTest();
        backBtn.disabled = true; // Cannot go back during final test
        nextBtn.disabled = true; // Cannot go forward from final test placeholder
    }

    // Manage navigation button states
    backBtn.disabled = currentSlideIndex === 0 || (currentItem.type === 'quiz' && !quizAttempted) || currentItem.type === 'final_test_placeholder';
    // nextBtn.disabled will be handled by timer or quiz completion (for lessons/quizzes)
}

// Function to start timer for a section
function startTimer(duration) {
    clearInterval(timerInterval); // Clear any existing timer
    timeLeft = duration;
    updateTimerDisplay();

    timerInterval = setInterval(() => {
        timeLeft--;
        updateTimerDisplay();
        if (timeLeft <= 0) {
            clearInterval(timerInterval);
            // For lessons, just enable the next button if it's not already
            if (courseContent[currentSlideIndex].type === 'lesson') {
                nextBtn.disabled = false;
            } else if (courseContent[currentSlideIndex].type === 'quiz') {
                // If quiz time runs out, auto-submit if not already attempted
                if (!quizAttempted) {
                    submitQuiz();
                }
            }
        }
    }, 1000);

    // Disable next button initially for timed sections until time is up,
    // unless it's a quiz where next is enabled after submission.
    if (courseContent[currentSlideIndex].type === 'lesson') {
        nextBtn.disabled = true;
    }
}

// Function to update timer display
function updateTimerDisplay() {
    const minutes = Math.floor(timeLeft / 60);
    const seconds = timeLeft % 60;
    currentTimeEl.textContent = `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
}

// Function to display quiz questions
function displayQuiz(quizData) {
    quizQuestionEl.textContent = quizData.question;
    quizOptionsEl.innerHTML = ''; // Clear previous options

    quizData.options.forEach((option, index) => {
        const label = document.createElement('label');
        const input = document.createElement('input');
        input.type = 'radio';
        input.name = 'quizOption';
        input.value = index;
        label.appendChild(input);
        label.appendChild(document.createTextNode(option));
        quizOptionsEl.appendChild(label);
    });
    quizFeedbackEl.textContent = '';
}

// Function to handle quiz submission
function submitQuiz() {
    quizAttempted = true;
    clearInterval(timerInterval); // Stop timer

    const selectedOption = document.querySelector('input[name="quizOption"]:checked');
    const currentQuiz = courseContent[currentSlideIndex];

    if (selectedOption) {
        if (parseInt(selectedOption.value) === currentQuiz.correctAnswer) {
            quizFeedbackEl.textContent = 'Correct!';
            quizFeedbackEl.style.color = 'green';
            quizScore++; // Increment overall quiz score if needed, or just for immediate feedback
        } else {
            quizFeedbackEl.textContent = `Incorrect. The correct answer was: ${currentQuiz.options[currentQuiz.correctAnswer]}`;
            quizFeedbackEl.style.color = 'red';
        }
        submitQuizBtn.classList.add('hidden'); // Hide submit button after attempt
        nextBtn.disabled = false; // Allow user to move to next slide
    } else {
        quizFeedbackEl.textContent = 'Please select an answer.';
        quizFeedbackEl.style.color = 'orange';
        quizAttempted = false; // Keep quizAttempted false if no answer selected to allow re-submission
        // Re-enable timer if not selected or give more time etc.
        if (timeLeft <= 0) { // If time ran out and no selection
            nextBtn.disabled = false; // Still allow to move on, but no answer recorded
        } else {
            startTimer(timeLeft); // Resume timer if user needs to select
        }
    }
}

// Function to display the final test
function displayFinalTest() {
    finalTestQuestionsEl.innerHTML = ''; // Clear previous
    finalTestScores = []; // Reset scores for final test

    finalTestQuestions.forEach((qData, qIndex) => {
        const questionDiv = document.createElement('div');
        questionDiv.classList.add('final-test-question');
        questionDiv.innerHTML = `<p><strong>${qIndex + 1}. ${qData.question}</strong></p>`;

        qData.options.forEach((option, oIndex) => {
            const label = document.createElement('label');
            const input = document.createElement('input');
            input.type = 'radio';
            input.name = `finalQuestion${qIndex}`; // Unique name for each question
            input.value = oIndex;
            label.appendChild(input);
            label.appendChild(document.createTextNode(option));
            questionDiv.appendChild(label);
            questionDiv.appendChild(document.createElement('br'));
        });
        finalTestQuestionsEl.appendChild(questionDiv);
    });
}

// Modify submitFinalTest to call certificate generation
function submitFinalTest() {
    let correctAnswers = 0;
    finalTestQuestions.forEach((qData, qIndex) => {
        const selectedOption = document.querySelector(`input[name="finalQuestion${qIndex}"]:checked`);
        if (selectedOption && parseInt(selectedOption.value) === qData.correctAnswer) {
            correctAnswers++;
        }
    });

    const totalQuestions = finalTestQuestions.length;
    const scorePercentage = (correctAnswers / totalQuestions) * 100;

    finalTestResultsEl.innerHTML = `<p>You scored ${correctAnswers} out of ${totalQuestions} (${scorePercentage.toFixed(2)}%).</p>`;
    finalTestResultsEl.style.color = scorePercentage >= 70 ? 'green' : 'red';

    if (scorePercentage >= 70) {
        certificationAreaEl.classList.remove('hidden');
        // Prompt for user's name for the certificate
        let userName = prompt("Congratulations! Please enter your name for the certificate:");
        if (!userName || userName.trim() === "") {
            userName = "Valued Learner"; // Default if no name entered
        }
        generateCertificate(userName, 'Interactive Fitness Course'); // Call the new function
    } else {
        certificationAreaEl.classList.add('hidden');
        finalTestResultsEl.innerHTML += `<p>You need at least 70% to receive a certification. Please review the material and try again!</p>`;
    }

    submitFinalTestBtn.disabled = true;
}

// NEW FUNCTION: Generate and draw the certificate on canvas
function generateCertificate(name, courseTitle) {
    // Clear canvas
    ctx.clearRect(0, 0, certificateCanvas.width, certificateCanvas.height);

    // Background
    ctx.fillStyle = '#f0f8ff'; // Light blue background for certificate
    ctx.fillRect(0, 0, certificateCanvas.width, certificateCanvas.height);

    // Border
    ctx.strokeStyle = '#007bff';
    ctx.lineWidth = 10;
    ctx.strokeRect(5, 5, certificateCanvas.width - 10, certificateCanvas.height - 10);

    // Title
    ctx.fillStyle = '#333';
    ctx.font = 'bold 30px Arial';
    ctx.textAlign = 'center';
    ctx.fillText('CERTIFICATE OF COMPLETION', certificateCanvas.width / 2, 80);

    // Subtitle
    ctx.font = 'italic 18px Arial';
    ctx.fillText('Proudly Presented To', certificateCanvas.width / 2, 130);

    // Name
    ctx.fillStyle = '#000';
    ctx.font = 'bold 40px "Times New Roman"'; // A fancier font for the name
    ctx.fillText(name, certificateCanvas.width / 2, 200);

    // Course
    ctx.font = '20px Arial';
    ctx.fillText(`For successfully completing the`, certificateCanvas.width / 2, 250);
    ctx.font = 'bold 25px Arial';
    ctx.fillText(`${courseTitle}`, certificateCanvas.width / 2, 285);

    // Date
    ctx.font = '16px Arial';
    const completionDate = new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' });
    ctx.fillText(`on ${completionDate}`, certificateCanvas.width / 2, 330);

    // Signature/Placeholder
    ctx.font = 'italic 14px Arial';
    ctx.fillText('Your Fitness Guru', certificateCanvas.width / 2, 370);
}

// NEW FUNCTION: Download the certificate
function downloadCertificate() {
    const image = certificateCanvas.toDataURL('image/png').replace('image/png', 'image/octet-stream');
    const link = document.createElement('a');
    link.download = 'Fitness_Course_Certificate.png';
    link.href = image;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
}
