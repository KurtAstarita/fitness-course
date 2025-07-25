// Get references to the cover page and app container
const coverPage = document.getElementById('cover-page');
const appContainer = document.getElementById('app-container');
const startButton = document.getElementById('start-course-btn');

// Add an event listener to the start button
startButton.addEventListener('click', () => {
    // Hide the cover page
    coverPage.style.display = 'none';
    // Show the main app container
    appContainer.style.display = 'block'; // Or 'flex', 'grid', depending on your #app-container CSS display property

    // Now, load the first lesson of your course
    renderLesson();
});


// This array will hold all your course content, slide by slide.
// Each object represents a "slide" or a "lesson segment".
// 'type': 'lesson' for content, 'quiz' for a quiz.
// 'duration': Time in seconds for the timer for lesson slides.
// 'content': HTML string for lesson slides.
// For quizzes, 'question', 'options' (array of strings), and 'correctAnswer' (index of the correct option).
const courseContent = [
    // Existing Introduction
    {
        type: 'lesson',
        title: 'Introduction to Fitness Fundamentals',
        content: `
            <p>Welcome to your interactive fitness journey! In this course, we'll demystify fitness, helping you build a strong foundation for a healthier, more active life.</p>
            <p>We'll cover core principles, practical techniques, and how to maintain consistency.</p>
            <img src="https://via.placeholder.com/400x200?text=Fitness+Intro" alt="Fitness Introduction" style="max-width:100%;">
        `,
        duration: 15
    },
    {
        type: 'lesson',
        title: 'Understanding Macronutrients', // Original generic, but kept for flow
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
        title: 'Quiz: Macronutrients', // Original quiz
        question: 'Which macronutrient is primarily responsible for muscle repair and growth?',
        options: ['Carbohydrates', 'Proteins', 'Fats', 'Vitamins'],
        correctAnswer: 1, // Index of 'Proteins'
    },

    // --- Module 1: Advanced Nutrition Fundamentals (Detailed) ---
    {
        type: 'lesson',
        title: 'Understanding Carbohydrates: Fueling Your Body',
        content: `<h3>Your Body's Primary Fuel</h3><p>Carbohydrates are your body's primary source of energy, essential for powering your workouts and daily activities. They are broken down into glucose, which is used immediately or stored as glycogen in muscles and the liver. Different types of carbohydrates (simple vs. complex) affect energy levels differently. Focus on complex carbohydrates for sustained energy release.</p>`,
        duration: 45
    },
    {
        type: 'lesson',
        title: 'The Power of Protein: Building and Repairing',
        content: `<h3>Building Blocks for Muscles</h3><p>Protein is crucial for muscle growth and repair, enzyme production, and hormone synthesis. It's often called the 'building block' of the body. Aim for quality sources like lean meats, fish, eggs, dairy, and plant-based options to support muscle recovery after intense training.</p>`,
        duration: 45
    },
    {
        type: 'lesson',
        title: 'Essential Fats: More Than Just Energy',
        content: `<h3>Good Fats vs. Bad Fats</h3><p>Fats are vital for hormone production, nutrient absorption, and maintaining cell health. They also provide a concentrated source of energy. Understand the difference between healthy fats (monounsaturated, polyunsaturated, Omega-3s) found in avocados, nuts, and fatty fish, and less healthy fats (trans fats, excessive saturated fats).</p>`,
        duration: 45
    },
        {
        type: 'lesson',
        title: 'Hydration & Micronutrients: The Unsung Heroes',
        content: `<h3>Fueling Your Body with Water and Essential Elements</h3><p>Water is essential for nearly every bodily function, including nutrient transport, temperature regulation, and joint lubrication. Dehydration can significantly impair performance. Micronutrients like vitamins and minerals, while needed in smaller amounts, play critical roles in metabolism, immune function, and overall health. Don't neglect them!</p>`,
        duration: 45
    },
    
    {
        type: 'quiz',
        title: 'Quiz: Macronutrient Mastery',
        question: 'Which macronutrient is primarily responsible for muscle growth and repair?',
        options: ['Carbohydrates', 'Fats', 'Proteins', 'Vitamins'],
        correctAnswer: 2, // Proteins
        duration: 45
    },
    // --- Module 1: Advanced Nutrition Fundamentals (Detailed) - EXPANSION ---
    {
        type: 'lesson',
        title: 'Carbohydrates: Simple vs. Complex',
        content: `<h3>Choosing the Right Carbs</h3><p>Not all carbohydrates are created equal. <b>Simple carbohydrates</b> (sugars) provide quick energy but can lead to energy crashes. They are found in fruits, dairy, and added sugars. <b>Complex carbohydrates</b> (starches and fiber) offer sustained energy, are rich in nutrients, and support digestive health. Prioritize whole grains, vegetables, and legumes for complex carbs.</p>`,
        duration: 45
    },
    {
        type: 'lesson',
        title: 'Protein Quality and Timing',
        content: `<h3>Maximizing Muscle Support</h3><p>Protein sources vary in quality based on their amino acid profile. <b>Complete proteins</b> (found in animal products like meat, eggs, and dairy) contain all essential amino acids. <b>Incomplete proteins</b> (found in most plant sources) lack one or more. Combining incomplete proteins (e.g., rice and beans) can create a complete profile. Consuming protein strategically throughout the day, especially post-workout, aids muscle recovery and growth.</p>`,
        duration: 45
    },
    {
        type: 'lesson',
        title: 'Types of Fats: A Deeper Look',
        content: `<h3>Understanding Saturated, Unsaturated, and Trans Fats</h3><p>Delve deeper into fats: <b>Saturated fats</b> (found in animal fats, butter) should be consumed in moderation. <b>Unsaturated fats</b> (monounsaturated in avocados/nuts, polyunsaturated in fish/seeds) are generally heart-healthy. Pay special attention to <b>Omega-3 fatty acids</b> (from fatty fish, flaxseed), which are crucial for brain health and reducing inflammation. Avoid artificial <b>trans fats</b> found in many processed foods due to their negative health impacts.</p>`,
        duration: 45
    },
    {
        type: 'quiz',
        title: 'Quiz: Advanced Macronutrients',
        question: 'Which type of carbohydrate provides sustained energy release and is rich in fiber?',
        options: ['Simple Carbohydrates', 'Complex Carbohydrates', 'Sugars', 'Fructose'],
        correctAnswer: 1, // Complex Carbohydrates
        duration: 45
    },
    {
        type: 'lesson',
        title: 'Introduction to Fitness Supplementation',
        content: `<h3>Do You Need Supplements?</h3><p>Supplements are intended to 'supplement' a healthy diet, not replace it. Common supplements include protein powders (for convenience), creatine (for strength/power), and multivitamins (to fill nutrient gaps). Always research thoroughly, prioritize whole foods, and consult a healthcare professional before adding supplements to your regimen. Quality and purity can vary greatly.</p>`,
        duration: 45
    },
    {
        type: 'lesson',
        title: 'Strategic Eating Habits: Timing & Frequency',
        content: `<h3>Optimizing Your Meals for Energy and Performance</h3><p>Beyond *what* you eat, *when* and *how often* you eat can impact your energy and recovery. While individual needs vary, consuming balanced meals every 3-4 hours can help maintain stable blood sugar and energy levels. Pre-workout meals provide fuel, and post-workout meals are critical for nutrient replenishment and muscle repair. Listen to your body's hunger cues.</p>`,
        duration: 45
    },
    {
        type: 'quiz',
        title: 'Quiz: Nutrition Application',
        question: 'Which type of fat is known for its anti-inflammatory properties and is found in fatty fish?',
        options: ['Saturated Fat', 'Trans Fat', 'Omega-3 Fatty Acids', 'Cholesterol'],
        correctAnswer: 2, // Omega-3 Fatty Acids
        duration: 45
    },


    

    // --- Module 2: Core Training Principles (Detailed) ---
    {
        type: 'lesson',
        title: 'Basic Strength Training Principles', // Original generic, but kept for flow
        content: `
            <h3>Progressive Overload and Consistency</h3>
            <p>To build strength and muscle, you need to apply two key principles:</p>
            <ul>
                <li><strong>Progressive Overload:</strong> Gradually increasing the demands on your body (e.g., lifting heavier, doing more reps).</li>
                <li><strong>Consistency:</strong> Showing up regularly and sticking to your plan is more important than perfect workouts.</li>
            </ul>
        `,
        duration: 45
    },
    {
        type: 'lesson',
        title: 'The Science of Adaptation: Training Effect & Progressive Overload',
        content: `<h3>How Your Body Gets Stronger</h3><p>The 'training effect' describes how your body adapts to physical activity, leading to improvements like increased strength, cardiovascular efficiency, and reduced body fat. To keep making progress, you must apply the principle of <b>Progressive Overload</b> – consistently challenging your muscles by increasing weight, reps, sets, or decreasing rest over time. Without it, your progress will plateau.</p>`,
        duration: 45
    },
    {
        type: 'lesson',
        title: 'Specificity, Individual Differences, and Periodization',
        content: `<h3>Tailoring Your Training for Maximum Results</h3><p>The <b>Principle of Specificity</b> means you get better at what you train for (e.g., if you want to run faster, you run; if you want to lift heavier, you lift heavy). <b>Individual Differences</b> acknowledge that everyone responds differently to training – what works for one person might not work for another. <b>Periodization</b> is the systematic planning of training, varying intensity and volume over time, to optimize performance and prevent overtraining. It helps you avoid burnout and continuously make gains.</p>`,
        duration: 45
    },
    {
        type: 'quiz',
        title: 'Quiz: Training Smarter',
        question: 'Which training principle states that your body adapts to the specific demands placed on it?',
        options: ['Progressive Overload', 'Individual Differences', 'Specificity', 'Periodization'],
        correctAnswer: 2, // Specificity
        duration: 45
    },
    // --- Module 1: Advanced Nutrition Fundamentals (Detailed) - EXPANSION ---
    {
        type: 'lesson',
        title: 'Carbohydrates: Simple vs. Complex',
        content: `<h3>Choosing the Right Carbs</h3><p>Not all carbohydrates are created equal. <b>Simple carbohydrates</b> (sugars) provide quick energy but can lead to energy crashes. They are found in fruits, dairy, and added sugars. <b>Complex carbohydrates</b> (starches and fiber) offer sustained energy, are rich in nutrients, and support digestive health. Prioritize whole grains, vegetables, and legumes for complex carbs.</p>`,
        duration: 45
    },
    {
        type: 'lesson',
        title: 'Protein Quality and Timing',
        content: `<h3>Maximizing Muscle Support</h3><p>Protein sources vary in quality based on their amino acid profile. <b>Complete proteins</b> (found in animal products like meat, eggs, and dairy) contain all essential amino acids. <b>Incomplete proteins</b> (found in most plant sources) lack one or more. Combining incomplete proteins (e.g., rice and beans) can create a complete profile. Consuming protein strategically throughout the day, especially post-workout, aids muscle recovery and growth.</p>`,
        duration: 45
    },
    {
        type: 'lesson',
        title: 'Types of Fats: A Deeper Look',
        content: `<h3>Understanding Saturated, Unsaturated, and Trans Fats</h3><p>Delve deeper into fats: <b>Saturated fats</b> (found in animal fats, butter) should be consumed in moderation. <b>Unsaturated fats</b> (monounsaturated in avocados/nuts, polyunsaturated in fish/seeds) are generally heart-healthy. Pay special attention to <b>Omega-3 fatty acids</b> (from fatty fish, flaxseed), which are crucial for brain health and reducing inflammation. Avoid artificial <b>trans fats</b> found in many processed foods due to their negative health impacts.</p>`,
        duration: 45
    },
    {
        type: 'quiz',
        title: 'Quiz: Advanced Macronutrients',
        question: 'Which type of carbohydrate provides sustained energy release and is rich in fiber?',
        options: ['Simple Carbohydrates', 'Complex Carbohydrates', 'Sugars', 'Fructose'],
        correctAnswer: 1, // Complex Carbohydrates
        duration: 45
    },
    {
        type: 'lesson',
        title: 'Introduction to Fitness Supplementation',
        content: `<h3>Do You Need Supplements?</h3><p>Supplements are intended to 'supplement' a healthy diet, not replace it. Common supplements include protein powders (for convenience), creatine (for strength/power), and multivitamins (to fill nutrient gaps). Always research thoroughly, prioritize whole foods, and consult a healthcare professional before adding supplements to your regimen. Quality and purity can vary greatly.</p>`,
        duration: 45
    },
    {
        type: 'lesson',
        title: 'Strategic Eating Habits: Timing & Frequency',
        content: `<h3>Optimizing Your Meals for Energy and Performance</h3><p>Beyond *what* you eat, *when* and *how often* you eat can impact your energy and recovery. While individual needs vary, consuming balanced meals every 3-4 hours can help maintain stable blood sugar and energy levels. Pre-workout meals provide fuel, and post-workout meals are critical for nutrient replenishment and muscle repair. Listen to your body's hunger cues.</p>`,
        duration: 45
    },
    {
        type: 'quiz',
        title: 'Quiz: Nutrition Application',
        question: 'Which type of fat is known for its anti-inflammatory properties and is found in fatty fish?',
        options: ['Saturated Fat', 'Trans Fat', 'Omega-3 Fatty Acids', 'Cholesterol'],
        correctAnswer: 2, // Omega-3 Fatty Acids
        duration: 45
    },
    

    // --- Module 3: Cardiovascular Fitness ---
    {
        type: 'lesson',
        title: 'Introduction to Cardiovascular Fitness',
        content: `<h3>Heart Health and Endurance</h3><p>Cardio is vital for improving heart and lung capacity. Regular cardiovascular exercise strengthens your heart, improves blood circulation, and enhances your body's ability to use oxygen efficiently. This leads to increased stamina and overall better health, reducing the risk of chronic diseases.</p>`,
        duration: 45
    },
    {
        type: 'lesson',
        title: 'Types of Cardio and Intensity Zones',
        content: `<h3>LISS vs. HIIT</h3><p>Explore different cardio methods and how to train effectively. <b>LISS (Low-Intensity Steady State)</b> involves sustained activity at a moderate pace (e.g., jogging, cycling). <b>HIIT (High-Intensity Interval Training)</b> alternates short bursts of intense exercise with brief recovery periods. Training in specific heart rate zones can target different fitness goals, like fat burning or endurance improvement.</p>`,
        duration: 45
    },
    {
        type: 'quiz',
        title: 'Quiz: Cardio Basics',
        question: 'Which type of cardio typically involves short bursts of intense exercise followed by brief recovery periods?',
        options: ['LISS', 'HIIT', 'Steady State', 'Yoga'],
        correctAnswer: 1, // HIIT
        duration: 45
    },
    // --- Module 3: Cardiovascular Fitness - EXPANSION ---
    {
        type: 'lesson',
        title: 'Detailed Benefits of Cardiovascular Training',
        content: `<h3>Beyond Endurance: A Healthier You</h3><p>Cardiovascular training offers a multitude of benefits:</p><ul><li><b>Improved Heart Health:</b> Strengthens the heart muscle, lowering resting heart rate and blood pressure.</li><li><b>Increased Stamina:</b> Enhances oxygen delivery to muscles, delaying fatigue.</li><li><b>Weight Management:</b> Burns calories and can help reduce body fat.</li><li><b>Reduced Risk of Chronic Diseases:</b> Lowers risk of type 2 diabetes, stroke, and certain cancers.</li><li><b>Mental Health Boost:</b> Releases endorphins, reducing stress and improving mood.</li></ul>`,
        duration: 45
    },
    {
        type: 'lesson',
        title: 'Calculating Your Target Heart Rate Zones',
        content: `<h3>Train Smarter, Not Just Harder</h3><p>To optimize your cardio workouts, understanding heart rate zones is key. A simple way to estimate your Maximum Heart Rate (MHR) is <b>220 - your age</b>. Your target heart rate zones for moderate-intensity cardio are typically 50-70% of your MHR, while vigorous intensity is 70-85% of your MHR. Training within these zones helps you achieve specific fitness goals more effectively.</p>`,
        duration: 45
    },
    {
        type: 'quiz',
        title: 'Quiz: Cardio Intensity',
        question: 'A simple way to estimate your Maximum Heart Rate (MHR) is to subtract your age from which number?',
        options: ['180', '200', '220', '240'],
        correctAnswer: 2, // 220
        duration: 45
    },
    {
        type: 'lesson',
        title: 'Progressing Your Cardio Workouts',
        content: `<h3>Continuously Challenging Your Cardiovascular System</h3><p>Just like strength training, progressive overload applies to cardio. You can increase the challenge by:</p><ul><li><b>Duration:</b> Gradually extending the length of your workouts.</li><li><b>Frequency:</b> Adding more cardio sessions per week.</li><li><b>Intensity:</b> Increasing your speed, resistance, or elevation (e.g., running faster, cycling uphill, increasing treadmill incline).</li><li><b>Varying Activities:</b> Incorporating different types of cardio to challenge your body in new ways.</li></ul>`,
        duration: 45
    },
    {
        type: 'lesson',
        title: 'Common Types of Cardiovascular Exercises',
        content: `<h3>A Variety of Ways to Get Your Heart Pumping</h3><p>Beyond running and cycling, many activities boost cardiovascular fitness:</p><ul><li><b>Walking:</b> Accessible and effective, especially brisk walking.</li><li><b>Swimming:</b> Full-body, low-impact cardio.</li><li><b>Rowing:</b> Engages both upper and lower body.</li><li><b>Jumping Rope:</b> High-intensity, great for coordination.</li><li><b>Dancing:</b> Fun and effective way to get your heart rate up.</li><li><b>Group Fitness Classes:</b> Offer variety and motivation (e.g., aerobics, Zumba).</li></ul>`,
        duration: 45
    },
    {
        type: 'quiz',
        title: 'Quiz: Cardio Progression & Variety',
        question: 'Which of the following is NOT a way to apply progressive overload to a cardiovascular workout?',
        options: ['Increasing duration', 'Decreasing intensity', 'Increasing frequency', 'Increasing speed'],
        correctAnswer: 1, // Decreasing intensity
        duration: 45
    },

    
    // --- Module 4: Recovery & Mindset ---
    {
        type: 'lesson',
        title: 'The Importance of Recovery and Sleep',
        content: `<h3>Optimal Performance Through Rest</h3><p>Recovery is when your muscles repair and grow, not during the workout itself. Adequate sleep (7-9 hours for most adults) is paramount for muscle recovery, hormone regulation, and cognitive function. Ignoring recovery leads to overtraining, injury, and stalled progress. Incorporate rest days and proper sleep hygiene into your routine.</p>`,
        duration: 45
    },
    {
        type: 'lesson',
        title: 'Motivation, Goal Setting, and Overcoming Setbacks',
        content: `<h3>The Mental Game of Fitness</h3><p>Maintaining motivation is key to long-term fitness success. Set <b>SMART goals</b> (Specific, Measurable, Achievable, Relevant, Time-bound). Understand the difference between intrinsic (internal enjoyment) and extrinsic (external rewards) motivation. Everyone faces setbacks like plateaus or injuries; learn to adapt, stay resilient, and use them as learning opportunities. A strong mindset is as important as physical strength.</p>`,
        duration: 45
    },
    // --- Module 4: Recovery & Mindset - EXPANSION ---
    {
        type: 'lesson',
        title: 'Signs and Prevention of Overtraining',
        content: `<h3>Recognizing When to Rest</h3><p>Overtraining occurs when you push your body beyond its ability to recover, leading to a decline in performance and increased risk of injury. Signs include persistent fatigue, decreased performance, mood disturbances, increased illness, and prolonged muscle soreness. Prevention involves incorporating adequate rest days, varying workout intensity, ensuring proper nutrition and hydration, and prioritizing sleep. Listen to your body!</p>`,
        duration: 45
    },
    {
        type: 'lesson',
        title: 'Active vs. Passive Recovery Methods',
        content: `<h3>Optimizing Your Body's Repair Process</h3><p>Recovery isn't just about doing nothing. <b>Passive recovery</b> involves complete rest, like sleep or light stretching. <b>Active recovery</b> includes low-intensity activities that promote blood flow and reduce muscle soreness, such as light cycling, walking, foam rolling, or gentle yoga. Both types are important. Incorporate active recovery on rest days to aid muscle repair and reduce stiffness.</p>`,
        duration: 45
    },
    {
        type: 'quiz',
        title: 'Quiz: Recovery Fundamentals',
        question: 'Which of the following is a common sign of overtraining?',
        options: ['Increased energy levels', 'Decreased muscle soreness', 'Persistent fatigue and decreased performance', 'Rapid weight gain'],
        correctAnswer: 2, // Persistent fatigue and decreased performance
        duration: 45
    },
    {
        type: 'lesson',
        title: 'Improving Your Sleep Hygiene',
        content: `<h3>The Foundation of Recovery</h3><p>Quality sleep is non-negotiable for physical and mental recovery. Improve your 'sleep hygiene' by:</p><ul><li>Establishing a consistent sleep schedule.</li><li>Creating a dark, quiet, and cool sleep environment.</li><li>Avoiding caffeine and heavy meals close to bedtime.</li><li>Limiting screen time before sleep.</li><li>Engaging in relaxing activities before bed (e.g., reading, stretching).</li></ul><p>Prioritizing sleep will significantly enhance your training results and overall well-being.</p>`,
        duration: 45
    },
    {
        type: 'lesson',
        title: 'Stress Management and Its Impact on Fitness',
        content: `<h3>The Mind-Body Connection</h3><p>Chronic stress can negatively impact your fitness journey by increasing cortisol levels (which can promote fat storage), impairing recovery, and disrupting sleep. Learning stress management techniques like meditation, deep breathing, spending time in nature, or engaging in hobbies is crucial. A balanced lifestyle that includes effective stress coping mechanisms will support both your physical and mental health goals.</p>`,
        duration: 45
    },
    {
        type: 'quiz',
        title: 'Quiz: Sleep & Stress',
        question: 'Which activity is generally NOT recommended close to bedtime for good sleep hygiene?',
        options: ['Reading a book', 'Light stretching', 'Limiting screen time', 'Consuming caffeine'],
        correctAnswer: 3, // Consuming caffeine
        duration: 45
    },
    {
        type: 'lesson',
        title: 'Building Consistent Habits & Mental Toughness',
        content: `<h3>From Discipline to Lifestyle</h3><p>Long-term fitness success hinges on building consistent habits. Start small, track your progress, and celebrate small wins. Mental toughness isn't about never feeling pain, but about pushing through discomfort and setbacks with resilience. Develop a strong "why" for your fitness journey and remind yourself of your goals. Embrace challenges as opportunities for growth.</p>`,
        duration: 45
    },
    {
        type: 'quiz',
        title: 'Quiz: Habits & Mindset',
        question: 'What type of goals are SMART goals?',
        options: ['Simple, Measurable, Achievable, Relevant, Timeless', 'Specific, Manageable, Ambitious, Realistic, Targeted', 'Specific, Measurable, Achievable, Relevant, Time-bound', 'Short, Meaningful, Actionable, Rewarding, Transformative'],
        correctAnswer: 2, // Specific, Measurable, Achievable, Relevant, Time-bound
        duration: 45
    },

    // --- Module 5: Exercise Techniques and Modalities ---
    {
        type: 'lesson',
        title: 'Introduction to Bodyweight Training (Calisthenics)',
        content: `<h3>Mastering Your Own Body</h3><p>Bodyweight training, or calisthenics, uses your own body weight for resistance. It's excellent for developing functional strength, mobility, and core stability without needing equipment. Exercises like push-ups, squats, lunges, and planks are foundational. Progressions exist for all fitness levels to continuously challenge you.</p>`,
        duration: 45
    },
    {
        type: 'quiz',
        title: 'Quiz: Training Modalities',
        question: 'What is a primary benefit of calisthenics?',
        options: ['Requires heavy weights', 'Develops functional strength and mobility', 'Only for advanced athletes', 'Primarily builds isolated muscles'],
        correctAnswer: 1, // Develops functional strength and mobility
        duration: 45
    },
    // --- Module 5: Exercise Techniques and Modalities - EXPANSION ---
    {
        type: 'lesson',
        title: 'The Importance of Warm-ups and Cool-downs',
        content: `<h3>Prepare and Recover Effectively</h3><p><b>Warm-ups</b> prepare your body for exercise by increasing blood flow to muscles, raising core temperature, and improving joint mobility, reducing injury risk. They should be dynamic. <b>Cool-downs</b> help your body gradually return to a resting state, promoting flexibility and reducing post-exercise soreness. They typically involve light cardio followed by static stretching.</p>`,
        duration: 45
    },
    {
        type: 'quiz',
        title: 'Quiz: Warm-up & Cool-down',
        question: 'What is the primary purpose of a dynamic warm-up?',
        options: ['To stretch muscles to their maximum length', 'To reduce heart rate rapidly', 'To prepare the body for exercise and reduce injury risk', 'To build muscle strength'],
        correctAnswer: 2, // To prepare the body for exercise and reduce injury risk
        duration: 45
    },
    {
        type: 'lesson',
        title: 'Introduction to Weight Training: Free Weights vs. Machines',
        content: `<h3>Choosing Your Tools for Strength</h3><p><b>Free weights</b> (barbells, dumbbells, kettlebells) engage more stabilizing muscles, allowing for a greater range of motion and mimicking real-world movements. They are excellent for functional strength. <b>Machines</b> offer more stability and isolation, making them great for beginners or targeting specific muscles. Both have a place in a well-rounded program. Start with lighter weights to master form before increasing load.</p>`,
        duration: 45
    },
    {
        type: 'lesson',
        title: 'Foundational Upper Body Compound Exercises',
        content: `<h3>Building a Strong Upper Body</h3><p>Compound exercises work multiple muscle groups and joints simultaneously, making them highly efficient. Key upper body compounds include:</p><ul><li><b>Bench Press:</b> Chest, shoulders, triceps.</li><li><b>Overhead Press:</b> Shoulders, triceps, core.</li><li><b>Barbell Rows:</b> Back, biceps.</li><li><b>Pull-ups/Lat Pulldowns:</b> Back, biceps.</li></ul><p>Focus on controlled movements and proper form for maximum benefit and safety.</p>`,
        duration: 45
    },
    {
        type: 'lesson',
        title: 'Foundational Lower Body Compound Exercises',
        content: `<h3>Powering Your Lower Half</h3><p>The lower body houses your largest muscle groups. Essential compound exercises include:</p><ul><li><b>Squats:</b> Quads, hamstrings, glutes, core.</li><li><b>Deadlifts:</b> Hamstrings, glutes, back, core.</li><li><b>Lunges:</b> Quads, hamstrings, glutes, balance.</li><li><b>Leg Press:</b> Quads, hamstrings, glutes (machine variation).</li></ul><p>Mastering these movements is crucial for overall strength, athletic performance, and daily functional movement.</p>`,
        duration: 45
    },
    {
        type: 'quiz',
        title: 'Quiz: Compound Lifts',
        question: 'Which exercise is a foundational compound exercise for the lower body?',
        options: ['Bicep Curl', 'Lateral Raise', 'Squat', 'Tricep Extension'],
        correctAnswer: 2, // Squat
        duration: 45
    },
    {
        type: 'lesson',
        title: 'Understanding Isolation Exercises',
        content: `<h3>Targeting Specific Muscles</h3><p>Isolation exercises work a single muscle group and joint. While compound lifts are the foundation, isolation exercises can be used to:</p><ul><li>Address muscle imbalances.</li><li>Further develop a specific muscle group for aesthetics.</li><li>Aid in rehabilitation.</li></ul><p>Examples include bicep curls, tricep extensions, and lateral raises. They are typically performed after compound exercises.</p>`,
        duration: 45
    },
    {
        type: 'lesson',
        title: 'Progressions in Bodyweight Training',
        content: `<h3>Taking Calisthenics to the Next Level</h3><p>As you master basic bodyweight exercises, you can progress them to increase difficulty:</p><ul><li><b>Push-ups:</b> From incline to decline, then single-arm.</li><li><b>Squats:</b> From air squats to pistol squats (single-leg).</li><li><b>Pull-ups:</b> From assisted to weighted, or one-arm variations.</li><li><b>Planks:</b> From standard to planks with leg/arm raises.</li></ul><p>This ensures continuous challenge without needing external weights.</p>`,
        duration: 45
    },
    {
        type: 'lesson',
        title: 'Core Training Essentials',
        content: `<h3>The Foundation of All Movement</h3><p>Your core muscles (abdominals, obliques, lower back, glutes) provide stability for almost every movement. A strong core:</p><ul><li>Improves posture.</li><li>Reduces risk of back pain.</li><li>Enhances athletic performance.</li><li>Transfers power between upper and lower body.</li></ul><p>Incorporate exercises like planks, bird-dog, dead bug, and various crunch/twist variations. Focus on control, not just speed.</p>`,
        duration: 45
    },
    {
        type: 'quiz',
        title: 'Quiz: Bodyweight & Core',
        question: 'Which of the following is a progression for a standard push-up?',
        options: ['Knee push-ups', 'Incline push-ups', 'Single-arm push-ups', 'Wall push-ups'],
        correctAnswer: 2, // Single-arm push-ups (this is a more advanced progression compared to the others being regressions or easier variations)
        duration: 45
    },
    {
        type: 'lesson',
        title: 'Flexibility and Mobility: Why They Matter',
        content: `<h3>Moving Freely and Reducing Injury</h3><p><b>Flexibility</b> refers to the ability of your muscles and connective tissues to lengthen. <b>Mobility</b> is the range of motion at a joint. Both are crucial for:</p><ul><li>Improved exercise performance.</li><li>Reduced risk of injury.</li><li>Better posture and reduced stiffness.</li><li>Enhanced daily functional movement.</li></ul><p>Incorporate dynamic stretches before workouts and static stretches during cool-downs.</p>`,
        duration: 45
    },
    {
        type: 'lesson',
        title: 'Stretching Techniques: Static, Dynamic, and Foam Rolling',
        content: `<h3>Tools for Better Movement</h3><p>Understand different stretching methods:</p><ul><li><b>Dynamic Stretching:</b> Controlled, flowing movements (e.g., leg swings, arm circles) ideal for warm-ups.</li><li><b>Static Stretching:</b> Holding a stretch for a period (e.g., 20-30 seconds) best for cool-downs to improve flexibility.</li><li><b>Foam Rolling:</b> Self-myofascial release technique using a foam roller to apply pressure to tight muscles, improving flexibility and reducing soreness.</li></ul><p>Use these techniques strategically for optimal results.</p>`,
        duration: 45
    },
    {
        type: 'quiz',
        title: 'Quiz: Flexibility & Mobility',
        question: 'Which type of stretching involves controlled, flowing movements and is best for warm-ups?',
        options: ['Static Stretching', 'Ballistic Stretching', 'Dynamic Stretching', 'PNF Stretching'],
        correctAnswer: 2, // Dynamic Stretching
        duration: 45
    },

    // Final Test Placeholder
    {
        type: 'final_test_placeholder',
        title: 'Final Assessment'
    }
];

// Note: You will also need to expand your 'finalTestQuestions' array to include
// questions from all these new topics to make the final assessment comprehensive.

// This array will hold the questions for the final test.
// Structure similar to quiz, but potentially more questions and no immediate feedback.
const finalTestQuestions = [
    // --- General / Introduction ---
    {
        question: 'What are the three primary macronutrients?',
        options: ['Vitamins, Minerals, Water', 'Carbohydrates, Proteins, Fats', 'Fibers, Sugars, Salts', 'Amino Acids, Glucose, Lipids'],
        correctAnswer: 1 // Carbohydrates, Proteins, Fats
    },

    // --- Nutrition Module Questions ---
    {
        question: 'Which type of carbohydrate provides sustained energy release and is generally rich in fiber?',
        options: ['Simple carbohydrates', 'Added sugars', 'Complex carbohydrates', 'Fructose'],
        correctAnswer: 2 // Complex carbohydrates
    },
    {
        question: 'Why is protein considered crucial for muscle growth and repair?',
        options: ['It is the body\'s primary energy source', 'It acts as insulation for organs', 'It provides building blocks (amino acids) for tissues', 'It primarily regulates hormone production'],
        correctAnswer: 2 // It provides building blocks (amino acids) for tissues
    },
    {
        question: 'Which type of fat is known for its anti-inflammatory properties and is found in fatty fish like salmon?',
        options: ['Saturated fats', 'Trans fats', 'Omega-3 fatty acids', 'Cholesterol'],
        correctAnswer: 2 // Omega-3 fatty acids
    },
    {
        question: 'Beyond thirst, what is a key role of water in the body, especially during exercise?',
        options: ['To provide direct energy for muscles', 'To act as a lubricant for joints and transport nutrients', 'To increase muscle mass rapidly', 'To store excess calories'],
        correctAnswer: 1 // To act as a lubricant for joints and transport nutrients
    },
    {
        question: 'Supplements are primarily intended to:',
        options: ['Replace a healthy diet', 'Cure all deficiencies', 'Supplement a healthy diet to fill gaps or enhance specific goals', 'Act as the main source of calories'],
        correctAnswer: 2 // Supplement a healthy diet to fill gaps or enhance specific goals
    },
    {
        question: 'What is a common recommendation for meal frequency to maintain stable blood sugar and energy levels?',
        options: ['Eating one large meal per day', 'Skipping meals frequently', 'Consuming balanced meals every 3-4 hours', 'Eating only when feeling extremely hungry'],
        correctAnswer: 2 // Consuming balanced meals every 3-4 hours
    },

    // --- Core Training Principles Module Questions ---
    {
        question: 'What is the principle of Progressive Overload?',
        options: ['Exercising only when you feel like it', 'Gradually increasing the demands on your body over time', 'Performing the same workout routine daily without changes', 'Only using very light weights'],
        correctAnswer: 1 // Gradually increasing the demands on your body over time
    },
    {
        question: 'The Principle of Specificity states that:',
        options: ['Everyone responds to training in the same way', 'You should only train one muscle group per week', 'Your body adapts specifically to the demands placed on it', 'Only professional athletes need specific training'],
        correctAnswer: 2 // Your body adapts specifically to the demands placed on it
    },
    {
        question: 'Which energy system is primarily used for activities lasting between 30 seconds to 2 minutes, like a typical set of weightlifting reps?',
        options: ['ATP-PC System', 'Glycolytic System', 'Oxidative System', 'Aerobic System'],
        correctAnswer: 1 // Glycolytic System
    },
    {
        question: 'If your primary goal is muscle hypertrophy (growth), which rep range is generally recommended?',
        options: ['1-5 repetitions', '6-12 repetitions', '15-20+ repetitions', 'Only bodyweight exercises'],
        correctAnswer: 1 // 6-12 repetitions
    },
    {
        question: 'What is the most important aspect to prioritize during any exercise to prevent injury?',
        options: ['Lifting the heaviest weight possible', 'Completing the exercise as quickly as possible', 'Proper exercise form', 'Sweating profusely'],
        correctAnswer: 2 // Proper exercise form
    },
    {
        question: 'What does a "Full Body" training split involve?',
        options: ['Training only one muscle group per day', 'Training all major muscle groups in each workout session', 'Only training upper body on one day and lower body on another', 'Only doing cardiovascular exercise'],
        correctAnswer: 1 // Training all major muscle groups in each workout session
    },

    // --- Cardiovascular Fitness Module Questions ---
    {
        question: 'Besides increasing endurance, what is a significant long-term benefit of regular cardiovascular training?',
        options: ['Rapid muscle gain', 'Increased risk of chronic diseases', 'Improved heart health and lower blood pressure', 'Decreased metabolic rate'],
        correctAnswer: 2 // Improved heart health and lower blood pressure
    },
    {
        question: 'A simple method to estimate your Maximum Heart Rate (MHR) is:',
        options: ['Your age divided by 2', '220 minus your age', 'Your resting heart rate multiplied by 2', '180 plus your age'],
        correctAnswer: 1 // 220 minus your age
    },
    {
        question: 'Which of these is NOT a way to apply progressive overload to your cardio workouts?',
        options: ['Increasing the duration of your run', 'Increasing your running speed', 'Decreasing the frequency of your workouts', 'Adding more incline to your treadmill walks'],
        correctAnswer: 2 // Decreasing the frequency of your workouts
    },
    {
        question: 'Which type of cardiovascular exercise is known for being low-impact and working the entire body?',
        options: ['Running', 'Jumping Rope', 'Swimming', 'Cycling'],
        correctAnswer: 2 // Swimming
    },

    // --- Recovery & Mindset Module Questions ---
    {
        question: 'During which phase does significant muscle repair and growth primarily occur?',
        options: ['During the workout itself', 'Only during active recovery', 'During rest and adequate sleep', 'Immediately after consuming protein'],
        correctAnswer: 2 // During rest and adequate sleep
    },
    {
        question: 'Which of the following is a common sign of overtraining?',
        options: ['Increased motivation and energy', 'Consistent performance improvements', 'Persistent fatigue, decreased performance, and increased irritability', 'Rapid fat loss'],
        correctAnswer: 2 // Persistent fatigue, decreased performance, and increased irritability
    },
    {
        question: 'What is "Active Recovery"?',
        options: ['Complete rest with no physical activity', 'Low-intensity activities that promote blood flow and aid recovery', 'Intense workouts focused on different muscle groups', 'Only stretching before a workout'],
        correctAnswer: 1 // Low-intensity activities that promote blood flow and aid recovery
    },
    {
        question: 'Which practice is considered good "sleep hygiene"?',
        options: ['Consuming caffeine before bed', 'Using electronic screens for extended periods before sleep', 'Maintaining a consistent sleep schedule', 'Eating a heavy meal right before bed'],
        correctAnswer: 2 // Maintaining a consistent sleep schedule
    },
    {
        question: 'What does the "A" in SMART goals stand for?',
        options: ['Ambitious', 'Actionable', 'Achievable', 'Awesome'],
        correctAnswer: 2 // Achievable
    },

    // --- Exercise Techniques and Modalities Module Questions ---
    {
        question: 'What is the primary purpose of a warm-up before exercise?',
        options: ['To build maximum strength immediately', 'To stretch muscles to their extreme limit', 'To prepare the body for physical activity and reduce injury risk', 'To burn as many calories as possible'],
        correctAnswer: 2 // To prepare the body for physical activity and reduce injury risk
    },
    {
        question: 'Which type of exercise equipment typically engages more stabilizing muscles and allows for a greater range of motion, mimicking real-world movements?',
        options: ['Resistance machines', 'Cable machines', 'Free weights (barbells, dumbbells)', 'Cardio machines'],
        correctAnswer: 2 // Free weights (barbells, dumbbells)
    },
    {
        question: 'Which of the following is considered a foundational compound exercise for the lower body?',
        options: ['Bicep Curl', 'Overhead Press', 'Squat', 'Lateral Raise'],
        correctAnswer: 2 // Squat
    },
    {
        question: 'What is a primary reason to incorporate isolation exercises into a training program?',
        options: ['To replace all compound exercises', 'To target and develop specific muscle groups or address imbalances', 'To only work one joint at a time', 'To make workouts shorter'],
        correctAnswer: 1 // To target and develop specific muscle groups or address imbalances
    },
    {
        question: 'If you can no longer do a standard push-up, which modification would be a good *regression* to make it easier?',
        options: ['One-arm push-up', 'Push-ups with feet elevated', 'Knee push-ups', 'Plyometric push-ups'],
        correctAnswer: 2 // Knee push-ups
    },
    {
        question: 'Which core exercise involves lying on your stomach and supporting yourself on your forearms and toes, keeping your body in a straight line?',
        options: ['Crunches', 'Leg Raises', 'Plank', 'Russian Twists'],
        correctAnswer: 2 // Plank
    },
    {
        question: 'Which type of stretching involves controlled, flowing movements and is best performed as part of a warm-up?',
        options: ['Static stretching', 'Dynamic stretching', 'Ballistic stretching', 'PNF stretching'],
        correctAnswer: 1 // Dynamic stretching
    },
    {
        question: 'What is the primary benefit of using a foam roller for recovery?',
        options: ['To build muscle strength directly', 'To increase cardiovascular endurance', 'To improve flexibility and reduce muscle soreness through self-myofascial release', 'To replace a full massage session'],
        correctAnswer: 2 // To improve flexibility and reduce muscle soreness through self-myofascial release
    }
];

// You will also likely need a 'final_test' type object in your courseContent
// array that points to these questions, if you don't have one already.
// Example (if needed, adjust to your exact structure):
// {
//     type: 'final_test',
//     title: 'Final Assessment: Comprehensive Fitness Test',
//     questions: finalTestQuestions, // Reference the array here
//     duration: 30 * 60 // Example duration, adjust based on number of questions
// }

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
