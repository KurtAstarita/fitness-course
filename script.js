// --- Your Course Content Array ---
// This array holds all your lessons, quizzes, and placeholders.
// Please ensure this 'courseContent' array is your most up-to-date one
// with all lessons, quizzes, and the final_test_placeholder.
const courseContent = [
    // Existing Introduction
{
        type: 'lesson',
        title: 'Introduction to Fitness Fundamentals',
        content: `
            <h3>Welcome to Your Comprehensive Fitness Journey!</h3>
            <p>Embark on an exciting and transformative journey designed to demystify the world of fitness and empower you to build a strong, healthier, and more active life. This course is your personal guide to understanding the foundational elements of well-being, moving beyond quick fixes to embrace sustainable habits.</p>
            
            <h4>What You'll Learn:</h4>
            <ul>
                <li><strong>Core Principles:</strong> Dive into the scientific principles that govern how your body responds to exercise and nutrition, enabling you to train smarter, not just harder.</li>
                <li><strong>Practical Techniques:</strong> Master essential exercise techniques with a focus on proper form and safety, minimizing injury risk and maximizing effectiveness.</li>
                <li><strong>Sustainable Habits:</strong> Discover strategies for maintaining consistency, setting realistic goals, and integrating fitness seamlessly into your daily life for long-term success.</li>
                <li><strong>Holistic Well-being:</strong> Explore the interconnectedness of physical activity, nutrition, recovery, and mental resilience, understanding that true fitness encompasses mind, body, and spirit.</li>
            </ul>
            
            <p>Prepare to transform not just your physique, but also your energy levels, mental clarity, and overall quality of life. Let's begin building a healthier, more capable you!</p>
            <img src="https://kurtastarita.github.io/400x200?text=Fitness+Intro" alt="Fitness Introduction">
        `,
        duration: 15
    },
    {
        type: 'lesson',
        title: 'Understanding Macronutrients',
        content: `
            <h3>Carbohydrates, Proteins, and Fats: The Pillars of Your Diet</h3>
            <p>Macronutrients are fundamental to your body's function, providing the bulk of the energy you need and serving as the essential building blocks for growth, repair, and overall health. They are required in large quantities, hence the term "macro."</p>
            
            <ul>
                <li>
                    <strong>Carbohydrates: Your Primary Energy Source</strong>
                    <p>Carbohydrates are the body's preferred fuel, especially during exercise. They are broken down into glucose, which is used immediately for energy or stored as glycogen in your muscles and liver for later use. Focus on complex carbohydrates like whole grains, fruits, and vegetables for sustained energy and fiber, rather than simple sugars that can lead to energy crashes.</p>
                </li>
                <li>
                    <strong>Proteins: Essential for Muscle Repair and Growth</strong>
                    <p>Proteins are often called the "building blocks of the body." They are crucial for repairing and building muscle tissue, producing enzymes and hormones, and supporting immune function. Excellent sources include lean meats, poultry, fish, eggs, dairy products, legumes, and nuts. Consuming adequate protein is vital for recovery, especially after physical activity.</p>
                </li>
                <li>
                    <strong>Fats: Vital for Hormone Production and Nutrient Absorption</strong>
                    <p>Dietary fats are essential for many bodily processes, including hormone production, absorption of fat-soluble vitamins (A, D, E, K), and providing a concentrated source of energy. It's important to differentiate between healthy fats (monounsaturated and polyunsaturated fats found in avocados, nuts, seeds, and olive oil) and less healthy fats (saturated and trans fats) to support heart health and overall well-being.</p>
                </li>
            </ul>
            <p>Balancing these three macronutrients according to your individual activity level, goals, and body composition is key to optimal fitness and health.</p>
        `,
        duration: 1
    },
    {
        type: 'lesson',
        title: 'Optimizing Macronutrient Ratios for Your Goals',
        content: `
            <h3>Tailoring Your Macros: It's Not One-Size-Fits-All</h3>
            <p>While understanding what macronutrients are is crucial, optimizing their ratios in your diet is key to achieving specific fitness goals, whether it's weight loss, muscle gain, or maintenance.</p>
            <ul>
                <li>
                    <strong>For Weight Loss:</strong> Often involves a moderate-to-high protein intake, controlled carbohydrates, and healthy fats. Protein helps preserve muscle mass during a calorie deficit, and both protein and fats contribute to satiety.</li>
                <li>
                    <strong>For Muscle Gain (Bulking):</strong> Typically requires a higher overall calorie intake, with sufficient protein to support muscle protein synthesis, and adequate carbohydrates to fuel intense workouts and aid recovery. Fats remain important for hormonal balance.</li>
                <li>
                    <strong>For Maintenance:</strong> A balanced approach where macronutrient ratios support energy needs and overall health, typically allowing for more flexibility once goals are met.</li>
            </ul>
            <p>There's no single "perfect" ratio for everyone, as individual needs vary based on activity level, body composition, and dietary preferences. Tools like a macro calculator can provide a starting point, but listening to your body's response is essential.</p>
        `,
        duration: 2 // Adjust duration as needed
    },
    {
        type: 'lesson',
        title: 'Macronutrients and Exercise Performance',
        content: `
            <h3>Fueling Your Workouts and Boosting Recovery</h3>
            <p>The timing and composition of your macronutrient intake significantly impact your energy levels during exercise and your body's ability to recover afterwards.</p>
            <ul>
                <li>
                    <strong>Carbohydrates for Energy:</strong> Consuming carbohydrates before and during prolonged exercise provides readily available energy, helping to sustain performance and prevent fatigue. Post-workout carbs replenish glycogen stores, which is vital for recovery.</li>
                <li>
                    <strong>Protein for Repair:</strong> Protein intake, especially post-workout, is critical for muscle protein synthesis (the process of repairing and building new muscle tissue). Spreading protein intake throughout the day can also optimize muscle repair.</li>
                <li>
                    <strong>Fats for Sustained Fuel:</strong> While not the primary fuel during high-intensity exercise, healthy fats provide a dense and sustained energy source for longer, lower-intensity activities and play a crucial role in overall hormone regulation, which indirectly supports performance and recovery.</li>
            </ul>
            <p>Understanding how each macronutrient contributes to your athletic endeavors allows for strategic fueling that can enhance performance, speed up recovery, and optimize adaptations from your training.</p>
        `,
        duration: 2 // Adjust duration as needed
    },
    {
        type: 'quiz',
        title: 'Quiz: Macronutrient Application', // Changed title to reflect application focus
        question: 'A competitive athlete engaging in high-intensity, daily training sessions aims to maximize muscle recovery and sustained energy. Based on optimal macronutrient strategies, which approach to their post-workout nutrition would be most effective?',
        options: [
            'Prioritizing high fat intake with moderate protein and low carbohydrates',
            'Focusing on equal parts protein, carbohydrates, and fats for balance',
            'Emphasizing high protein and high carbohydrate intake, with moderate healthy fats',
            'Minimizing all macronutrients immediately after training to promote fat burning'
        ],
        correctAnswer: 2, // Index of 'Emphasizing high protein and high carbohydrate intake, with moderate healthy fats'
        duration: 1
    },

    // --- Module 1: Advanced Nutrition Fundamentals (Detailed) ---

{
        type: 'lesson',
        title: 'Hydration & Micronutrients: The Unsung Heroes',
        content: `
            <h3>Hydration & Micronutrients: The Unsung Heroes of Health and Performance</h3>
            <p>While macronutrients provide the bulk of your energy, hydration and micronutrients (vitamins and minerals) are equally critical. Often overlooked, these "unsung heroes" play countless vital roles that underpin every aspect of your health and fitness.</p>
            
            <h4>The Power of Proper Hydration</h4>
            <p>Water is more than just a thirst quencher; it's essential for virtually every bodily function. It acts as a solvent for nutrient transport, lubricates joints, regulates body temperature (especially during exercise), helps remove waste products, and maintains overall cellular function. Even mild dehydration can significantly impair physical performance, cognitive function, and metabolic processes.</p>
            <ul>
                <li><strong>How much water?</strong> General guidelines suggest 8 glasses (about 2 liters) per day, but individual needs vary greatly based on activity level, climate, and diet. Listen to your body's thirst signals and observe urine color (light yellow indicates good hydration).</li>
                <li><strong>Beyond plain water:</strong> While plain water is best, fluids from fruits, vegetables, and other beverages contribute to your daily intake.</li>
            </ul>

            <h4>Micronutrients: Small Amounts, Big Impact</h4>
            <p>Micronutrients are vitamins and minerals that, although needed in smaller quantities than macronutrients, are absolutely crucial for countless biochemical reactions in your body. They are vital for energy production, immune system function, bone health, nerve function, and much more.</p>
            <ul>
                <li>
                    <strong>Vitamins:</strong> Organic compounds essential for normal growth and nutrition. They include fat-soluble vitamins (A, D, E, K) and water-soluble vitamins (B-vitamins, C). Each plays unique roles, from supporting vision (Vitamin A) to boosting immunity (Vitamin C) and aiding metabolism (B-vitamins).
                </li>
                <li>
                    <strong>Minerals:</strong> Inorganic elements necessary for various bodily functions, such as building strong bones (Calcium), transporting oxygen (Iron), and maintaining fluid balance (Sodium, Potassium). They are often categorized as major minerals or trace minerals based on the amounts needed.
                </li>
            </ul>
            <p>A diet rich in diverse, whole foods (fruits, vegetables, lean proteins, whole grains) is the best way to ensure adequate intake of a broad spectrum of micronutrients. Supplementation may be beneficial in specific cases, but a food-first approach is always recommended.</p>
        `,
        duration: 3 // Increased duration to reflect more comprehensive content
    },
{
        type: 'lesson',
        title: 'Understanding Carbohydrates: Fueling Your Body',
        content: `
            <h3>Carbohydrates: Your Body's Primary Energy Source</h3>
            <p>Carbohydrates are the cornerstone of your body's energy system, indispensable for powering everything from your daily activities to intense workouts. They are efficiently broken down into glucose, which serves as immediate fuel for your cells, or converted into glycogen and stored in your muscles and liver for later use.</p>
            
            <h4>Simple vs. Complex Carbohydrates: The Energy Difference</h4>
            <ul>
                <li>
                    <strong>Simple Carbohydrates:</strong> These are sugars that are quickly digested and absorbed, leading to rapid spikes in blood sugar and a quick burst of energy, often followed by a crash.
                    <p>Examples include: Sugary drinks, candies, white bread, and many processed snacks.</p>
                </li>
                <li>
                    <strong>Complex Carbohydrates:</strong> Composed of longer chains of sugar molecules, these are digested more slowly. This results in a gradual release of glucose into the bloodstream, providing sustained energy and helping to maintain stable blood sugar levels. They are also typically rich in fiber, which aids digestion and promotes satiety.
                    <p>Examples include: Whole grains (oats, brown rice, quinoa, whole-wheat bread), legumes (beans, lentils), and starchy vegetables (sweet potatoes, corn).</p>
                </li>
            </ul>
            
            <p>For optimal energy levels throughout the day and to support your fitness goals, focus predominantly on complex carbohydrates. While simple carbohydrates can have a role (e.g., quick energy during prolonged endurance exercise), a diet rich in complex carbs provides more consistent fuel and essential nutrients.</p>
        `,
        duration: 2 // Increased duration to reflect more content
    },
{
        type: 'lesson',
        title: 'The Power of Protein: Building and Repairing',
        content: `
            <h3>Protein: The Essential Building Block for Your Body</h3>
            <p>Protein is a macronutrient fundamental to virtually every cell and tissue in your body, far beyond just muscle. It's often referred to as the 'building block' because it's crucial for the growth, repair, and maintenance of all body tissues, including muscles, organs, skin, hair, and nails.</p>
            
            <h4>Key Roles of Protein:</h4>
            <ul>
                <li><strong>Muscle Growth and Repair:</strong> After exercise, protein provides the amino acids necessary to repair damaged muscle fibers and synthesize new ones, leading to stronger, larger muscles.</li>
                <li><strong>Enzyme and Hormone Production:</strong> Many enzymes (which facilitate biochemical reactions) and hormones (chemical messengers) are made of protein, playing vital roles in metabolism, digestion, and communication throughout the body.</li>
                <li><strong>Immune Function:</strong> Antibodies, which help fight off infections, are proteins, making adequate protein intake essential for a robust immune system.</li>
                <li><strong>Transport and Storage:</strong> Proteins help transport molecules like oxygen (hemoglobin) and fats throughout the body, and can also store nutrients.</li>
                <li><strong>Satiety and Weight Management:</strong> Protein is highly satiating, helping you feel fuller for longer, which can be beneficial for appetite control and weight management goals.</li>
            </ul>

            <h4>Quality Protein Sources:</h4>
            <p>Protein sources vary in their amino acid profiles. Complete proteins contain all nine essential amino acids that your body cannot produce on its own.</p>
            <ul>
                <li>
                    <strong>Animal-Based Proteins:</strong> Typically complete proteins. Examples include:
                    <ul>
                        <li>Lean Meats (Chicken, Turkey, Beef)</li>
                        <li>Fish (Salmon, Tuna, Cod)</li>
                        <li>Eggs</li>
                        <li>Dairy Products (Milk, Yogurt, Cheese, Whey)</li>
                    </ul>
                </li>
                <li>
                    <strong>Plant-Based Proteins:</strong> Many are incomplete on their own but can form complete proteins when combined (e.g., rice and beans). Excellent sources include:
                    <ul>
                        <li>Legumes (Lentils, Chickpeas, Black Beans)</li>
                        <li>Tofu, Tempeh, Edamame</li>
                        <li>Quinoa (complete protein)</li>
                        <li>Nuts and Seeds</li>
                    </ul>
                </li>
            </ul>
            <p>Aim for consistent, quality protein intake throughout your day, especially around your workouts, to support muscle recovery, growth, and overall bodily functions.</p>
        `,
        duration: 3 // Increased duration to reflect more comprehensive content
    },
{
        type: 'lesson',
        title: 'Essential Fats: More Than Just Energy',
        content: `
            <h3>Essential Fats: Understanding the Good, the Bad, and the Crucial</h3>
            <p>Often misunderstood, dietary fats are not merely a source of energy; they are vital for numerous critical bodily functions. Fats are essential for hormone production, the absorption of fat-soluble vitamins (A, D, E, K), maintaining healthy cell membranes, protecting organs, and providing a concentrated source of energy for sustained activities.</p>
            
            <h4>Types of Dietary Fats:</h4>
            <ul>
                <li>
                    <strong>Saturated Fats:</strong>
                    <p>Primarily found in animal products (red meat, butter, full-fat dairy) and some tropical oils (coconut oil, palm oil). Consumed in moderation, they are part of a balanced diet, but excessive intake can raise LDL ("bad") cholesterol levels.</p>
                </li>
                <li>
                    <strong>Unsaturated Fats: (The "Good" Fats)</strong>
                    <p>These fats are typically liquid at room temperature and are considered beneficial for heart health when consumed in place of saturated and trans fats. They can help lower LDL cholesterol and provide essential fatty acids.</p>
                    <ul>
                        <li>
                            <strong>Monounsaturated Fats (MUFAs):</strong> Found in olive oil, avocados, nuts (almonds, pecans, cashews), and seeds.
                        </li>
                        <li>
                            <strong>Polyunsaturated Fats (PUFAs):</strong> Found in sunflower oil, corn oil, soybean oil, walnuts, and flaxseeds. This category also includes the crucial Omega-3 and Omega-6 fatty acids.
                            <p><strong>Omega-3 Fatty Acids:</strong> Particularly important for brain health, reducing inflammation, and heart health. Rich sources include fatty fish (salmon, mackerel, sardines), flaxseeds, chia seeds, and walnuts.</p>
                        </li>
                    </ul>
                </li>
                <li>
                    <strong>Trans Fats: (The "Bad" Fats)</strong>
                    <p>These are unhealthy fats formed through a process called hydrogenation, primarily found in processed foods like some baked goods, fried foods, and certain margarines. They raise LDL cholesterol and lower HDL ("good") cholesterol, significantly increasing the risk of heart disease. It's best to avoid trans fats as much as possible.</p>
                </li>
            </ul>
            <p>Incorporating a variety of healthy fats into your diet is crucial for overall health, hormone balance, and optimizing nutrient absorption, contributing significantly to your fitness journey.</p>
        `,
        duration: 3 // Increased duration to reflect more comprehensive content
    },
    {
        type: 'quiz',
        title: 'Quiz: Advanced Nutrition Application', // Changed title to reflect advanced, applied focus
        question: 'An individual is training for an endurance event and needs to optimize both sustained energy and cellular function. Beyond complex carbohydrates, which combination of dietary components would be most critical to focus on, as discussed in the lessons?',
        options: [
            'High intake of simple sugars and trans fats',
            'Adequate hydration and a balance of essential vitamins and minerals',
            'Exclusive reliance on saturated fats for long-term energy',
            'Prioritizing only animal-based proteins with minimal water'
        ],
        correctAnswer: 1, // Index of 'Adequate hydration and a balance of essential vitamins and minerals'
        duration: 1
    },
    {
        type: 'lesson',
        title: 'Carbohydrates: Simple vs. Complex',
        content: `<h3>Choosing the Right Carbs</h3><p>Not all carbohydrates are created equal. <b>Simple carbohydrates</b> (sugars) provide quick energy but can lead to energy crashes. They are found in fruits, dairy, and added sugars. <b>Complex carbohydrates</b> (starches and fiber) offer sustained energy, are rich in nutrients, and support digestive health. Prioritize whole grains, vegetables, and legumes for complex carbs.</p>`,
        duration: 1
    },
    {
        type: 'lesson',
        title: 'Protein Quality and Timing',
        content: `<h3>Maximizing Muscle Support</h3><p>Protein sources vary in quality based on their amino acid profile. <b>Complete proteins</b> (found in animal products like meat, eggs, and dairy) contain all essential amino acids. <b>Incomplete proteins</b> (found in most plant sources) lack one or more. Combining incomplete proteins (e.g., rice and beans) can create a complete profile. Consuming protein strategically throughout the day, especially post-workout, aids muscle recovery and growth.</p>`,
        duration: 1
    },
    {
        type: 'lesson',
        title: 'Types of Fats: A Deeper Look',
        content: `<h3>Understanding Saturated, Unsaturated, and Trans Fats</h3><p>Delve deeper into fats: <b>Saturated fats</b> (found in animal fats, butter) should be consumed in moderation. <b>Unsaturated fats</b> (monounsaturated in avocados/nuts, polyunsaturated in fish/seeds) are generally heart-healthy. Pay special attention to <b>Omega-3 fatty acids</b> (from fatty fish, flaxseed), which are crucial for brain health and reducing inflammation. Avoid artificial <b>trans fats</b> found in many processed foods due to their negative health impacts.</p>`,
        duration: 1
    },
    {
        type: 'quiz',
        title: 'Quiz: Advanced Macronutrients',
        question: 'Which type of carbohydrate provides sustained energy release and is rich in fiber?',
        options: ['Simple Carbohydrates', 'Complex Carbohydrates', 'Sugars', 'Fructose'],
        correctAnswer: 1, // Complex Carbohydates
        duration: 1
    },
    {
        type: 'lesson',
        title: 'Introduction to Fitness Supplementation',
        content: `<h3>Do You Need Supplements?</h3><p>Supplements are intended to 'supplement' a healthy diet, not replace it. Common supplements include protein powders (for convenience), creatine (for strength/power), and multivitamins (to fill nutrient gaps). Always research thoroughly, prioritize whole foods, and consult a healthcare professional before adding supplements to your regimen. Quality and purity can vary greatly.</p>`,
        duration: 1
    },
    {
        type: 'lesson',
        title: 'Strategic Eating Habits: Timing & Frequency',
        content: `<h3>Optimizing Your Meals for Energy and Performance</h3><p>Beyond *what* you eat, *when* and *how often* you eat can impact your energy and recovery. While individual needs vary, consuming balanced meals every 3-4 hours can help maintain stable blood sugar and energy levels. Pre-workout meals provide fuel, and post-workout meals are critical for nutrient replenishment and muscle repair. Listen to your body's hunger cues.</p>`,
        duration: 1
    },
    {
        type: 'quiz',
        title: 'Quiz: Nutrition Application',
        question: 'Which type of fat is known for its anti-inflammatory properties and is found in fatty fish?',
        options: ['Saturated Fat', 'Trans Fat', 'Omega-3 Fatty Acids', 'Cholesterol'],
        correctAnswer: 2, // Omega-3 Fatty Acids
        duration: 1
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
        duration: 1
    },
    {
        type: 'lesson',
        title: 'The Science of Adaptation: Training Effect & Progressive Overload',
        content: `<h3>How Your Body Gets Stronger</h3><p>The 'training effect' describes how your body adapts to physical activity, leading to improvements like increased strength, cardiovascular efficiency, and reduced body fat. To keep making progress, you must apply the principle of <b>Progressive Overload</b> – consistently challenging your muscles by increasing weight, reps, sets, or decreasing rest over time. Without it, your progress will plateau.</p>`,
        duration: 1
    },
    {
        type: 'lesson',
        title: 'Specificity, Individual Differences, and Periodization',
        content: `<h3>Tailoring Your Training for Maximum Results</h3><p>The <b>Principle of Specificity</b> means you get better at what you train for (e.g., if you want to run faster, you run; if you want to lift heavier, you lift heavy). <b>Individual Differences</b> acknowledge that everyone responds differently to training – what works for one person might not work for another. <b>Periodization</b> is the systematic planning of training, varying intensity and volume over time, to optimize performance and prevent overtraining. It helps you avoid burnout and continuously make gains.</p>`,
        duration: 1
    },
    {
        type: 'quiz',
        title: 'Quiz: Training Smarter',
        question: 'Which training principle states that your body adapts to the specific demands placed on it?',
        options: ['Progressive Overload', 'Individual Differences', 'Specificity', 'Periodization'],
        correctAnswer: 2, // Specificity
        duration: 1
    },
    {
        type: 'lesson',
        title: 'Energy Systems: Fueling Your Workouts',
        content: `<h3>How Your Body Powers Movement</h3><p>Your body uses three main energy systems depending on the intensity and duration of your activity:</p><ul><li><b>ATP-PC System:</b> For very short, explosive efforts (e.g., a single heavy lift, sprint).</li><li><b>Glycolytic System:</b> For moderate-duration, high-intensity efforts (e.g., a set of 8-12 reps, a 400m sprint).</li><li><b>Oxidative System:</b> For long-duration, low-to-moderate intensity activities (e.g., marathon running, extended cardio).</li></ul><p>Understanding these helps you tailor your training to your energy demands.</p>`,
        duration: 1
    },
    {
        type: 'lesson',
        title: 'Rep Ranges and Training Goals',
        content: `<h3>Tailoring Reps for Strength, Hypertrophy, or Endurance</h3><p>The number of repetitions (reps) you perform significantly impacts your training outcome:</p><ul><li><b>Strength (1-5 reps):</b> Focus on lifting heavy weights for pure strength gains.</li><li><b>Hypertrophy (6-12 reps):</b> Ideal for muscle growth and size.</li><li><b>Endurance (12+ reps):</b> Improves muscular stamina and cardiovascular fitness.</li></ul><p>Varying your rep ranges can help achieve different aspects of fitness.</p>`,
        duration: 1
    },
    {
        type: 'quiz',
        title: 'Quiz: Energy Systems & Reps',
        question: 'Which energy system is primarily used for very short, explosive efforts like a single heavy lift?',
        options: ['Glycolytic System', 'Oxidative System', 'ATP-PC System', 'Anaerobic System'],
        correctAnswer: 2, // ATP-PC System
        duration: 1
    },
    {
        type: 'lesson',
        title: 'Fundamental Exercise Form and Safety',
        content: `<h3>Protecting Your Body, Maximizing Your Results</h3><p>Proper exercise form is paramount to prevent injuries and effectively target muscles. Always prioritize form over weight. Learn to engage your core, maintain a neutral spine, and control the movement throughout the full range of motion. If unsure, start with lighter weights or bodyweight and watch instructional videos. Listen to your body and never push through sharp pain.</p>`,
        duration: 1
    },
    {
        type: 'lesson',
        title: 'Introduction to Training Splits',
        content: `<h3>Structuring Your Workout Week</h3><p>A training split refers to how you divide your workouts across the week. Common splits include:</p><ul><li><b>Full Body:</b> Training all major muscle groups in each session (e.g., 2-3 times/week).</li><li><b>Upper/Lower:</b> Dividing workouts into upper body and lower body days.</li><li><b>Body Part Split:</b> Dedicating each workout to specific muscle groups (e.g., Chest Day, Leg Day).</li></ul><p>Choose a split that fits your schedule, recovery capacity, and goals.</p>`,
        duration: 1
    },
    {
        type: 'quiz',
        title: 'Quiz: Form & Splits',
        question: 'What is the primary reason to prioritize proper exercise form?',
        options: ['To lift the most weight possible', 'To prevent injuries and effectively target muscles', 'To finish workouts faster', 'To sweat more'],
        correctAnswer: 1, // To prevent injuries and effectively target muscles
        duration: 1
    },

    // --- Module 3: Cardiovascular Fitness ---
    {
        type: 'lesson',
        title: 'Introduction to Cardiovascular Fitness',
        content: `<h3>Heart Health and Endurance</h3><p>Cardio is vital for improving heart and lung capacity. Regular cardiovascular exercise strengthens your heart, improves blood circulation, and enhances your body's ability to use oxygen efficiently. This leads to increased stamina and overall better health, reducing the risk of chronic diseases.</p>`,
        duration: 1
    },
    {
        type: 'lesson',
        title: 'Types of Cardio and Intensity Zones',
        content: `<h3>LISS vs. HIIT</h3><p>Explore different cardio methods and how to train effectively. <b>LISS (Low-Intensity Steady State)</b> involves sustained activity at a moderate pace (e.g., jogging, cycling). <b>HIIT (High-Intensity Interval Training)</b> alternates short bursts of intense exercise with brief recovery periods. Training in specific heart rate zones can target different fitness goals, like fat burning or endurance improvement.</p>`,
        duration: 1
    },
    {
        type: 'quiz',
        title: 'Quiz: Cardio Basics',
        question: 'Which type of cardio typically involves short bursts of intense exercise followed by brief recovery periods?',
        options: ['LISS', 'HIIT', 'Steady State', 'Yoga'],
        correctAnswer: 1, // HIIT
        duration: 1
    },
    {
        type: 'lesson',
        title: 'Detailed Benefits of Cardiovascular Training',
        content: `<h3>Beyond Endurance: A Healthier You</h3><p>Cardiovascular training offers a multitude of benefits:</p><ul><li><b>Improved Heart Health:</b> Strengthens the heart muscle, lowering resting heart rate and blood pressure.</li><li><b>Increased Stamina:</b> Enhances oxygen delivery to muscles, delaying fatigue.</li><li><b>Weight Management:</b> Burns calories and can help reduce body fat.</li><li><b>Reduced Risk of Chronic Diseases:</b> Lowers risk of type 2 diabetes, stroke, and certain cancers.</li><li><b>Mental Health Boost:</b> Releases endorphins, reducing stress and improving mood.</li></ul>`,
        duration: 1
    },
    {
        type: 'lesson',
        title: 'Calculating Your Target Heart Rate Zones',
        content: `<h3>Train Smarter, Not Just Harder</h3><p>To optimize your cardio workouts, understanding heart rate zones is key. A simple way to estimate your Maximum Heart Rate (MHR) is <b>220 - your age</b>. Your target heart rate zones for moderate-intensity cardio are typically 50-70% of your MHR, while vigorous intensity is 70-85% of your MHR. Training within these zones helps you achieve specific fitness goals more effectively.</p>`,
        duration: 1
    },
    {
        type: 'quiz',
        title: 'Quiz: Cardio Intensity',
        question: 'A simple way to estimate your Maximum Heart Rate (MHR) is to subtract your age from which number?',
        options: ['180', '200', '220', '240'],
        correctAnswer: 2, // 220
        duration: 1
    },
    {
        type: 'lesson',
        title: 'Progressing Your Cardio Workouts',
        content: `<h3>Continuously Challenging Your Cardiovascular System</h3><p>Just like strength training, progressive overload applies to cardio. You can increase the challenge by:</p><ul><li><b>Duration:</b> Gradually extending the length of your workouts.</li><li><b>Frequency:</b> Adding more cardio sessions per week.</li><li><b>Intensity:</b> Increasing your speed, resistance, or elevation (e.g., running faster, cycling uphill, increasing treadmill incline).</li><li><b>Varying Activities:</b> Incorporating different types of cardio to challenge your body in new ways.</li></ul>`,
        duration: 1
    },
    {
        type: 'lesson',
        title: 'Common Types of Cardiovascular Exercises',
        content: `<h3>A Variety of Ways to Get Your Heart Pumping</h3><p>Beyond running and cycling, many activities boost cardiovascular fitness:</p><ul><li><b>Walking:</b> Accessible and effective, especially brisk walking.</li><li><b>Swimming:</b> Full-body, low-impact cardio.</li><li><b>Rowing:</b> Engages both upper and lower body.</li><li><b>Jumping Rope:</b> High-intensity, great for coordination.</li><li><b>Dancing:</b> Fun and effective way to get your heart rate up.</li><li><b>Group Fitness Classes:</b> Offer variety and motivation (e.g., aerobics, Zumba).</li></ul>`,
        duration: 1
    },
    {
        type: 'quiz',
        title: 'Quiz: Cardio Progression & Variety',
        question: 'Which of the following is NOT a way to apply progressive overload to a cardiovascular workout?',
        options: ['Increasing duration', 'Decreasing intensity', 'Increasing frequency', 'Increasing speed'],
        correctAnswer: 1, // Decreasing intensity
        duration: 1
    },

    // --- Module 4: Recovery & Mindset ---
    {
        type: 'lesson',
        title: 'The Importance of Recovery and Sleep',
        content: `<h3>Optimal Performance Through Rest</h3><p>Recovery is when your muscles repair and grow, not during the workout itself. Adequate sleep (7-9 hours for most adults) is paramount for muscle recovery, hormone regulation, and cognitive function. Ignoring recovery leads to overtraining, injury, and stalled progress. Incorporate rest days and proper sleep hygiene into your routine.</p>`,
        duration: 1
    },
    {
        type: 'lesson',
        title: 'Motivation, Goal Setting, and Overcoming Setbacks',
        content: `<h3>The Mental Game of Fitness</h3><p>Maintaining motivation is key to long-term fitness success. Set <b>SMART goals</b> (Specific, Measurable, Achievable, Relevant, Time-bound). Understand the difference between intrinsic (internal enjoyment) and extrinsic (external rewards) motivation. Everyone faces setbacks like plateaus or injuries; learn to adapt, stay resilient, and use them as learning opportunities. A strong mindset is as important as physical strength.</p>`,
        duration: 1
    },
    {
        type: 'lesson',
        title: 'Signs and Prevention of Overtraining',
        content: `<h3>Recognizing When to Rest</h3><p>Overtraining occurs when you push your body beyond its ability to recover, leading to a decline in performance and increased risk of injury. Signs include persistent fatigue, decreased performance, mood disturbances, increased illness, and prolonged muscle soreness. Prevention involves incorporating adequate rest days, varying workout intensity, ensuring proper nutrition and hydration, and prioritizing sleep. Listen to your body!</p>`,
        duration: 1
    },
    {
        type: 'lesson',
        title: 'Active vs. Passive Recovery Methods',
        content: `<h3>Optimizing Your Body's Repair Process</h3><p>Recovery isn't just about doing nothing. <b>Passive recovery</b> involves complete rest, like sleep or light stretching. <b>Active recovery</b> includes low-intensity activities that promote blood flow and reduce muscle soreness, such as light cycling, walking, foam rolling, or gentle yoga. Both types are important. Incorporate active recovery on rest days to aid muscle repair and reduce stiffness.</p>`,
        duration: 1
    },
    {
        type: 'quiz',
        title: 'Quiz: Recovery Fundamentals',
        question: 'Which of the following is a common sign of overtraining?',
        options: ['Increased energy levels', 'Decreased muscle soreness', 'Persistent fatigue and decreased performance', 'Rapid weight gain'],
        correctAnswer: 2, // Persistent fatigue and decreased performance
        duration: 1
    },
    {
        type: 'lesson',
        title: 'Improving Your Sleep Hygiene',
        content: `<h3>The Foundation of Recovery</h3><p>Quality sleep is non-negotiable for physical and mental recovery. Improve your 'sleep hygiene' by:</p><ul><li>Establishing a consistent sleep schedule.</li><li>Creating a dark, quiet, and cool sleep environment.</li><li>Avoiding caffeine and heavy meals close to bedtime.</li><li>Limiting screen time before sleep.</li><li>Engaging in relaxing activities before bed (e.g., reading, stretching).</li></ul><p>Prioritizing sleep will significantly enhance your training results and overall well-being.</p>`,
        duration: 1
    },
    {
        type: 'lesson',
        title: 'Stress Management and Its Impact on Fitness',
        content: `<h3>The Mind-Body Connection</h3><p>Chronic stress can negatively impact your fitness journey by increasing cortisol levels (which can promote fat storage), impairing recovery, and disrupting sleep. Learning stress management techniques like meditation, deep breathing, spending time in nature, or engaging in hobbies is crucial. A balanced lifestyle that includes effective stress coping mechanisms will support both your physical and mental health goals.</p>`,
        duration: 1
    },
    {
        type: 'quiz',
        title: 'Quiz: Sleep & Stress',
        question: 'Which activity is generally NOT recommended close to bedtime for good sleep hygiene?',
        options: ['Reading a book', 'Light stretching', 'Limiting screen time', 'Consuming caffeine'],
        correctAnswer: 3, // Consuming caffeine
        duration: 1
    },
    {
        type: 'lesson',
        title: 'Building Consistent Habits & Mental Toughness',
        content: `<h3>From Discipline to Lifestyle</h3><p>Long-term fitness success hinges on building consistent habits. Start small, track your progress, and celebrate small wins. Mental toughness isn't about never feeling pain, but about pushing through discomfort and setbacks with resilience. Develop a strong "why" for your fitness journey and remind yourself of your goals. Embrace challenges as opportunities for growth.</p>`,
        duration: 1
    },
    {
        type: 'quiz',
        title: 'Quiz: Habits & Mindset',
        question: 'What type of goals are SMART goals?',
        options: ['Simple, Measurable, Achievable, Relevant, Timeless', 'Specific, Manageable, Ambitious, Realistic, Targeted', 'Specific, Measurable, Achievable, Relevant, Time-bound', 'Short, Meaningful, Actionable, Rewarding, Transformative'],
        correctAnswer: 2, // Specific, Measurable, Achievable, Relevant, Time-bound
        duration: 1
    },

    // --- Module 5: Exercise Techniques and Modalities ---
    {
        type: 'lesson',
        title: 'Introduction to Bodyweight Training (Calisthenics)',
        content: `<h3>Mastering Your Own Body</h3><p>Bodyweight training, or calisthenics, uses your own body weight for resistance. It's excellent for developing functional strength, mobility, and core stability without needing equipment. Exercises like push-ups, squats, lunges, and planks are foundational. Progressions exist for all fitness levels to continuously challenge you.</p>`,
        duration: 1
    },
    {
        type: 'quiz',
        title: 'Quiz: Training Modalities',
        question: 'What is a primary benefit of calisthenics?',
        options: ['Requires heavy weights', 'Develops functional strength and mobility', 'Only for advanced athletes', 'Primarily builds isolated muscles'],
        correctAnswer: 1, // Develops functional strength and mobility
        duration: 1
    },
    {
        type: 'lesson',
        title: 'The Importance of Warm-ups and Cool-downs',
        content: `<h3>Prepare and Recover Effectively</h3><p><b>Warm-ups</b> prepare your body for exercise by increasing blood flow to muscles, raising core temperature, and improving joint mobility, reducing injury risk. They should be dynamic. <b>Cool-downs</b> help your body gradually return to a resting state, promoting flexibility and reducing post-exercise soreness. They typically involve light cardio followed by static stretching.</p>`,
        duration: 1
    },
    {
        type: 'quiz',
        title: 'Quiz: Warm-up & Cool-down',
        question: 'What is the primary purpose of a dynamic warm-up?',
        options: ['To stretch muscles to their maximum length', 'To reduce heart rate rapidly', 'To prepare the body for exercise and reduce injury risk', 'To build muscle strength'],
        correctAnswer: 2, // To prepare the body for exercise and reduce injury risk
        duration: 1
    },
    {
        type: 'lesson',
        title: 'Introduction to Weight Training: Free Weights vs. Machines',
        content: `<h3>Choosing Your Tools for Strength</h3><p><b>Free weights</b> (barbells, dumbbells, kettlebells) engage more stabilizing muscles, allowing for a greater range of motion and mimicking real-world movements. They are excellent for functional strength. <b>Machines</b> offer more stability and isolation, making them great for beginners or targeting specific muscles. Both have a place in a well-rounded program. Start with lighter weights to master form before increasing load.</p>`,
        duration: 1
    },
    {
        type: 'lesson',
        title: 'Foundational Upper Body Compound Exercises',
        content: `<h3>Building a Strong Upper Body</h3><p>Compound exercises work multiple muscle groups and joints simultaneously, making them highly efficient. Key upper body compounds include:</p><ul><li><b>Bench Press:</b> Chest, shoulders, triceps.</li><li><b>Overhead Press:</b> Shoulders, triceps, core.</li><li><b>Barbell Rows:</b> Back, biceps.</li><li><b>Pull-ups/Lat Pulldowns:</b> Back, biceps.</li></ul><p>Focus on controlled movements and proper form for maximum benefit and safety.</p>`,
        duration: 1
    },
    {
        type: 'lesson',
        title: 'Foundational Lower Body Compound Exercises',
        content: `<h3>Powering Your Lower Half</h3><p>The lower body houses your largest muscle groups. Essential compound exercises include:</p><ul><li><b>Squats:</b> Quads, hamstrings, glutes, core.</li><li><b>Deadlifts:</b> Hamstrings, glutes, back, core.</li><li><b>Lunges:</b> Quads, hamstrings, glutes, balance.</li><li><b>Leg Press:</b> Quads, hamstrings, glutes (machine variation).</li></ul><p>Mastering these movements is crucial for overall strength, athletic performance, and daily functional movement.</p>`,
        duration: 1
    },
    {
        type: 'quiz',
        title: 'Quiz: Compound Lifts',
        question: 'Which exercise is a foundational compound exercise for the lower body?',
        options: ['Bicep Curl', 'Lateral Raise', 'Squat', 'Tricep Extension'],
        correctAnswer: 2, // Squat
        duration: 1
    },
    {
        type: 'lesson',
        title: 'Understanding Isolation Exercises',
        content: `<h3>Targeting Specific Muscles</h3><p>Isolation exercises work a single muscle group and joint. While compound lifts are the foundation, isolation exercises can be used to:</p><ul><li>Address muscle imbalances.</li><li>Further develop a specific muscle group for aesthetics.</li><li>Aid in rehabilitation.</li></ul><p>Examples include bicep curls, tricep extensions, and lateral raises. They are typically performed after compound exercises.</p>`,
        duration: 1
    },
    {
        type: 'lesson',
        title: 'Progressions in Bodyweight Training',
        content: `<h3>Taking Calisthenics to the Next Level</h3><p>As you master basic bodyweight exercises, you can progress them to increase difficulty:</p><ul><li><b>Push-ups:</b> From incline to decline, then single-arm.</li><li><b>Squats:</b> From air squats to pistol squats (single-leg).</li><li><b>Pull-ups:</b> From assisted to weighted, or one-arm variations.</li><li><b>Planks:</b> From standard to planks with leg/arm raises.</li></ul><p>This ensures continuous challenge without needing external weights.</p>`,
        duration: 1
    },
    {
        type: 'lesson',
        title: 'Core Training Essentials',
        content: `<h3>The Foundation of All Movement</h3><p>Your core muscles (abdominals, obliques, lower back, glutes) provide stability for almost every movement. A strong core:</p><ul><li>Improves posture.</li><li>Reduces risk of back pain.</li><li>Enhances athletic performance.</li><li>Transfers power between upper and lower body.</li></ul><p>Incorporate exercises like planks, bird-dog, dead bug, and various crunch/twist variations. Focus on control, not just speed.</p>`,
        duration: 1
    },
    {
        type: 'quiz',
        title: 'Quiz: Bodyweight & Core',
        question: 'Which of the following is a progression for a standard push-up?',
        options: ['Knee push-ups', 'Incline push-ups', 'Single-arm push-ups', 'Wall push-ups'],
        correctAnswer: 2, // Single-arm push-ups (this is a more advanced progression compared to the others being regressions or easier variations)
        duration: 1
    },
    {
        type: 'lesson',
        title: 'Flexibility and Mobility: Why They Matter',
        content: `<h3>Moving Freely and Reducing Injury</h3><p><b>Flexibility</b> refers to the ability of your muscles and connective tissues to lengthen. <b>Mobility</b> is the range of motion at a joint. Both are crucial for:</p><ul><li>Improved exercise performance.</li><li>Reduced risk of injury.</li><li>Better posture and reduced stiffness.</li><li>Enhanced daily functional movement.</li></ul><p>Incorporate dynamic stretches before workouts and static stretches during cool-downs.</p>`,
        duration: 1
    },
    {
        type: 'lesson',
        title: 'Stretching Techniques: Static, Dynamic, and Foam Rolling',
        content: `<h3>Tools for Better Movement</h3><p>Understand different stretching methods:</p><ul><li><b>Dynamic Stretching:</b> Controlled, flowing movements (e.g., leg swings, arm circles) ideal for warm-ups.</li><li><b>Static Stretching:</b> Holding a stretch for a period (e.g., 20-30 seconds) best for cool-downs to improve flexibility.</li><li><b>Foam Rolling:</b> Self-myofascial release technique using a foam roller to apply pressure to tight muscles, improving flexibility and reducing soreness.</li></ul><p>Use these techniques strategically for optimal results.</p>`,
        duration: 1
    },
    {
        type: 'quiz',
        title: 'Quiz: Flexibility & Mobility',
        question: 'Which type of stretching involves controlled, flowing movements and is best for warm-ups?',
        options: ['Static Stretching', 'Ballistic Stretching', 'Dynamic Stretching', 'PNF Stretching'],
        correctAnswer: 2, // Dynamic Stretching
        duration: 1
    },

    // Final Test Placeholder
    {
        type: 'final_test_placeholder',
        title: 'Final Assessment - 30 minutes',
        duration: 1
    }
];

// This array will hold the questions for the final test.
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
        options: ['Static stretching', 'Ballistic Stretching', 'Dynamic Stretching', 'PNF stretching'],
        correctAnswer: 1 // Dynamic stretching
    },
    {
        question: 'What is the primary benefit of using a foam roller for recovery?',
        options: ['To build muscle strength directly', 'To increase cardiovascular endurance', 'To improve flexibility and reduce muscle soreness through self-myofascial release', 'To replace a full massage session'],
        correctAnswer: 2 // To improve flexibility and reduce muscle soreness through self-myofascial release
    }
];

// --- New Global Variables for Penalty Logic ---
let penaltyPoints = 0; // Accumulates penalty points for the current slide
let lastPenaltyBlock = -1; // Tracks which penalty block was last applied to avoid duplicate deductions

// --- JavaScript variables (declared here, assigned inside DOMContentLoaded) ---
let currentSlideIndex = 0;
let timerInterval;
let timeLeft;
let quizAttempted = false; // To prevent going back during a quiz
let quizScore = 0; // Track score for current quiz
let finalTestScores = []; // To store results of each final test question

// DOM Elements - Declare them globally, but assign inside DOMContentLoaded
let coverPage; // Declared globally
let appContainer; // Declared globally
let startButton; // Declared globally

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
    // Assign ALL DOM Elements AFTER the DOM is fully loaded
    coverPage = document.getElementById('cover-page');
    appContainer = document.getElementById('app-container');
    startButton = document.getElementById('start-course-btn');

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
    startButton.addEventListener('click', () => {
        // Hide the cover page
        coverPage.style.display = 'none';
        // Show the main app container
        appContainer.style.display = 'block'; // Ensure this matches your CSS display property

        // Load the very first lesson AFTER the app container is shown
        currentSlideIndex = 0; // Reset to ensure it starts from the beginning
        displaySlide();
    });

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
    downloadCertBtn.addEventListener('click', downloadCertificate);
}); // End of DOMContentLoaded


// --- Functions (defined outside DOMContentLoaded but using globally assigned elements) ---

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
        startTimer(currentItem.duration || 45); // Default quiz time if not specified, now 45s
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

// --- UPDATED startTimer Function ---
function startTimer(duration) {
    clearInterval(timerInterval); // Clear any existing timer
    timeLeft = duration;
    penaltyPoints = 0; // Reset penalties for the new slide
    lastPenaltyBlock = -1; // Reset penalty block tracker for the new slide

    updateTimerDisplay(); // Initial display

    timerInterval = setInterval(() => {
        timeLeft--;
        updateTimerDisplay();

        // Check for penalties only if time has gone negative
        if (timeLeft < 0) {
            const timeOver = Math.abs(timeLeft);
            const penaltyBlockDuration = 45; // Every 45 seconds over
            const currentPenaltyBlock = Math.floor(timeOver / penaltyBlockDuration);

            // If a new penalty block has been crossed
            if (currentPenaltyBlock > lastPenaltyBlock) {
                penaltyPoints += 1; // Deduct 1 point for every penaltyBlockDuration over
                lastPenaltyBlock = currentPenaltyBlock;
                // console.log(`Penalty incurred! Total penalty points for this slide: ${penaltyPoints}`); // For debugging
            }
        }

        // For lessons, enable next button when time is up (or goes negative)
        if (timeLeft <= 0 && courseContent[currentSlideIndex].type === 'lesson') {
            clearInterval(timerInterval);
            nextBtn.disabled = false;
            // Optionally update title to show "Time's Up!" or penalty info
            // courseTitleEl.textContent = `${courseContent[currentSlideIndex].title} (Time's Up! Penalties: ${penaltyPoints})`;
        }
        // For quizzes, the timer will continue past zero until submitted, allowing penalties to accumulate.
    }, 1000); // Update every second

    // Disable next button initially for timed sections until time is up,
    // unless it's a quiz where next is enabled after submission.
    if (courseContent[currentSlideIndex].type === 'lesson') {
        nextBtn.disabled = true;
    }
}

// --- UPDATED updateTimerDisplay Function ---
function updateTimerDisplay() {
    let displayTime = timeLeft;
    let prefix = '';
    if (displayTime < 0) {
        prefix = '-';
        displayTime = Math.abs(displayTime); // Use absolute value for display calculation
    }
    const minutes = Math.floor(displayTime / 60);
    const seconds = displayTime % 60;
    currentTimeEl.textContent = `${prefix}${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
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

// --- UPDATED submitQuiz Function ---
// --- CORRECTED submitQuiz Function ---
function submitQuiz() {
    quizAttempted = true;
    clearInterval(timerInterval); // Stop timer

    const selectedOption = document.querySelector('input[name="quizOption"]:checked');
    const currentQuiz = courseContent[currentSlideIndex];

    let correct = false;
    // The 'else' for 'no option selected' must be directly tied to this 'if'
    if (selectedOption) {
        if (parseInt(selectedOption.value) === currentQuiz.correctAnswer) {
            correct = true;
            quizFeedbackEl.textContent = 'Correct! ';
            quizFeedbackEl.style.color = 'green';
        } else {
            quizFeedbackEl.textContent = `Incorrect. The correct answer was: ${currentQuiz.options[currentQuiz.correctAnswer]}. `;
            quizFeedbackEl.style.color = 'red';
        }

        // Calculate final score for this quiz (1 point for correct, minus penalties)
        let currentQuizScore = correct ? 1 : 0;
        currentQuizScore -= penaltyPoints;

        // Ensure score doesn't go below zero for a single quiz
        if (currentQuizScore < 0) {
            currentQuizScore = 0;
        }

        quizFeedbackEl.textContent += `(Time Penalty: ${penaltyPoints} points. Your score for this quiz: ${currentQuizScore} point(s)).`;

        submitQuizBtn.classList.add('hidden'); // Hide submit button after attempt
        nextBtn.disabled = false; // Allow user to move to next slide
    } else { // This 'else' is now correctly associated with 'if (selectedOption)'
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
function generateCertificate(finalScore, courseTitle) { // Keeping finalScore and courseTitle as potential parameters
    let name = '';
    const maxLength = 100;
    const lettersOnlyRegex = /^[a-zA-Z\s.-]+$/; // Allows letters, spaces, hyphens, and periods

    // Loop until a valid name is entered or the user cancels
    while (true) {
        name = prompt("Please enter your name for the certificate (letters, spaces, hyphens, periods only, max 100 characters):");

        // Check if the user clicked "Cancel" or closed the prompt
        if (name === null) {
            alert("Certificate generation cancelled.");
            // Optionally, hide the certification area or navigate back if appropriate
            document.getElementById('certification-area').classList.add('hidden');
            return; // Exit the function
        }

        name = name.trim(); // Remove leading/trailing whitespace

        if (name === "") {
            alert("Name cannot be empty. Please enter your name.");
        } else if (name.length > maxLength) {
            alert(`Name is too long. Please enter a name with up to ${maxLength} characters.`);
        } else if (!lettersOnlyRegex.test(name)) {
            alert("Invalid characters. Please use only letters, spaces, hyphens, and periods.");
        } else {
            // Name is valid, break out of the loop
            break;
        }
    }

    const certificateCanvas = document.getElementById('certificateCanvas');
    const ctx = certificateCanvas.getContext('2d');

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
    const certificateCanvas = document.getElementById('certificateCanvas'); // Ensure canvas is accessible
    const image = certificateCanvas.toDataURL('image/png').replace('image/png', 'image/octet-stream');
    const link = document.createElement('a');
    link.download = 'Fitness_Course_Certificate.png';
    link.href = image;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
}
