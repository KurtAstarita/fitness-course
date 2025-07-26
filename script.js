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
        duration: 1
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
        duration: 1 // Adjust duration as needed
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
        duration: 1 // Adjust duration as needed
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
        duration: 1,
        completed: false
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
        duration: 1,
        completed: false
    },
{
        type: 'lesson',
        title: 'Carbohydrates: Simple vs. Complex',
        content: `
            <h3>Choosing the Right Carbohydrates for Optimal Energy and Health</h3>
            <p>Understanding the distinction between simple and complex carbohydrates is crucial for managing your energy levels, supporting your fitness goals, and maintaining overall health. Not all carbs are created equal in terms of how they impact your body.</p>
            
            <h4>Simple Carbohydrates: Quick Energy, Quick Crash?</h4>
            <p>Simple carbohydrates are composed of one or two sugar molecules (monosaccharides or disaccharides). Because of their simple structure, they are very quickly digested and absorbed into the bloodstream, leading to a rapid rise in blood sugar levels. This provides a fast burst of energy, but often results in a subsequent energy "crash" as blood sugar levels drop rapidly.</p>
            <ul>
                <li><strong>Naturally Occurring:</strong> Found in fruits (fructose), milk (lactose), and some vegetables. These often come with beneficial fiber, vitamins, and minerals.</li>
                <li><strong>Added Sugars:</strong> Sugars added to processed foods, sodas, candies, and many desserts. These provide "empty calories" with little to no nutritional value and should be limited. Examples include sucrose, high-fructose corn syrup, and glucose.</li>
            </ul>

            <h4>Complex Carbohydrates: Sustained Energy and Nutrient Powerhouses</h4>
            <p>Complex carbohydrates are made up of long chains of sugar molecules (polysaccharides) and often contain fiber. Their complex structure means they take longer to digest and absorb, leading to a more gradual and sustained release of glucose into the bloodstream. This provides stable energy levels, prevents drastic blood sugar fluctuations, and helps maintain satiety.</p>
            <ul>
                <li><strong>Starches:</strong> Found in grains, potatoes, corn, and peas. They are broken down into glucose for energy.</li>
                <li><strong>Fiber:</strong> A type of complex carbohydrate that the body cannot digest. It adds bulk to your diet, aids digestive health, helps regulate blood sugar, and can contribute to feelings of fullness. Fiber is found abundantly in whole grains, fruits, vegetables, legumes, and nuts.</li>
            </ul>
            <p><strong>Prioritize:</strong> For consistent energy, better blood sugar control, and a richer nutrient intake, prioritize complex carbohydrates like whole grains (e.g., oats, brown rice, quinoa, whole-wheat bread), starchy and non-starchy vegetables, and legumes (beans, lentils). They are your allies in a sustainable fitness journey.</p>
        `,
        duration: 3 // Increased duration to reflect more comprehensive content
    },
{
        type: 'lesson',
        title: 'Protein Quality and Timing: Maximizing Muscle Support',
        content: `
            <h3>Optimizing Your Protein Intake for Growth and Recovery</h3>
            <p>To truly maximize the benefits of protein for muscle growth, repair, and overall health, it's not just about how much you eat, but also the quality of the protein and when you consume it.</p>
            
            <h4>Protein Quality: Understanding Amino Acid Profiles</h4>
            <p>Proteins are made up of smaller units called amino acids. There are 20 different amino acids, nine of which are considered "essential" because your body cannot produce them and must obtain them through your diet. Protein quality is determined by its amino acid profile:</p>
            <ul>
                <li>
                    <strong>Complete Proteins:</strong> These sources provide all nine essential amino acids in sufficient quantities. They are typically derived from animal sources.
                    <p>Examples: Meat, poultry, fish, eggs, dairy (milk, yogurt, cheese, whey protein).</p>
                </li>
                <li>
                    <strong>Incomplete Proteins:</strong> These sources lack one or more of the essential amino acids, or have them in very limited quantities. Most plant-based proteins fall into this category.
                    <p>Examples: Legumes (beans, lentils), grains (rice, wheat), nuts, seeds, and most vegetables.</p>
                    <p><strong>Complementary Proteins:</strong> Vegetarians and vegans can still get all essential amino acids by combining different incomplete protein sources within the same day (e.g., rice and beans, peanut butter on whole-wheat toast) to form a complete protein profile.</p>
                </li>
            </ul>

            <h4>Protein Timing: When to Fuel Your Muscles</h4>
            <p>While the concept of a very narrow "anabolic window" immediately post-workout has been broadened, strategic protein timing can still optimize muscle protein synthesis and recovery.</p>
            <ul>
                <li>
                    <strong>Consistent Daily Intake:</strong> The most crucial aspect is meeting your total daily protein needs. Aim to spread your protein intake relatively evenly throughout the day across 3-5 meals or snacks.</li>
                <li>
                    <strong>Pre-Workout:</strong> Consuming some protein (along with carbohydrates) before a workout can prime your muscles for growth and reduce muscle breakdown during exercise.</li>
                <li>
                    <strong>Post-Workout:</strong> This is still a critical time. Consuming 20-40 grams of high-quality protein within a few hours after resistance training helps to kickstart muscle repair and recovery.</li>
                <li>
                    <strong>Before Bed:</strong> A slow-digesting protein (like casein from dairy or a plant-based blend) before sleep can help provide a sustained release of amino acids overnight, supporting recovery while you rest.</li>
                <li>
                    <strong>General Recommendations:</strong> For active individuals, a common guideline is 1.6-2.2 grams of protein per kilogram of body weight per day (or 0.7-1.0 grams per pound). Individual needs vary based on activity level, age, and goals.
                </li>
            </ul>
            <p>By focusing on both the quality and strategic timing of your protein intake, you can significantly enhance your body's ability to build and maintain lean muscle mass, improve recovery, and support overall metabolic health.</p>
        `,
        duration: 4 // Increased duration to reflect more comprehensive content
    },
{
        type: 'lesson',
        title: 'Types of Fats: A Deeper Look',
        content: `
            <h3>Diving Deeper into Dietary Fats: Saturated, Unsaturated, and Trans Fats</h3>
            <p>Fats are often the most misunderstood macronutrient, but they are absolutely essential for optimal health, not just energy. Understanding the different types of fats and their distinct impacts on your body is key to making informed dietary choices. Fats play crucial roles in hormone production, nutrient absorption, cellular health, and providing concentrated energy.</p>
            
            <h4>1. Saturated Fats: Consume in Moderation</h4>
            <p>Saturated fats are typically solid at room temperature and are primarily found in animal-based foods. While a necessary part of a balanced diet in moderation, high intake can contribute to elevated LDL ("bad") cholesterol levels, which may increase the risk of heart disease.</p>
            <ul>
                <li><strong>Sources:</strong> Fatty cuts of red meat, poultry skin, full-fat dairy products (butter, cheese, cream), and tropical oils like coconut oil and palm oil.</li>
                <li><strong>Role:</strong> Provide energy, support cell membranes, and aid in the absorption of fat-soluble vitamins.</li>
            </ul>

            <h4>2. Unsaturated Fats: The Heart-Healthy Choices</h4>
            <p>Unsaturated fats are generally liquid at room temperature and are widely considered beneficial for cardiovascular health. They can help lower LDL cholesterol levels and provide essential fatty acids that the body cannot produce.</p>
            <ul>
                <li>
                    <strong>Monounsaturated Fats (MUFAs):</strong>
                    <p>These fats can help reduce LDL cholesterol levels and are a staple of the Mediterranean diet. They are known for their anti-inflammatory properties.</p>
                    <p><strong>Sources:</strong> Olive oil, avocado, almonds, cashews, pecans, and peanuts.</p>
                </li>
                <li>
                    <strong>Polyunsaturated Fats (PUFAs):</strong>
                    <p>This category includes essential fatty acids that the body needs for brain function, cell growth, and inflammation control. The two main types are Omega-3 and Omega-6 fatty acids.</p>
                    <ul>
                        <li>
                            <strong>Omega-3 Fatty Acids:</strong> These are incredibly important for reducing inflammation, supporting brain and cognitive function, improving heart health, and potentially boosting mood.
                            <p><strong>Sources:</strong> Fatty fish (salmon, mackerel, sardines, tuna), flaxseeds, chia seeds, walnuts, and flaxseed oil.</p>
                        </li>
                        <li>
                            <strong>Omega-6 Fatty Acids:</strong> Also essential, but typically consumed in higher amounts in modern diets. While necessary, an imbalance (too much Omega-6 relative to Omega-3) can promote inflammation.
                            <p><strong>Sources:</strong> Vegetable oils (soybean, corn, sunflower), most nuts and seeds.</p>
                        </li>
                    </ul>
                </li>
            </ul>

            <h4>3. Trans Fats: The Fats to Avoid</h4>
            <p>Trans fats are largely artificial fats created through a process called hydrogenation, which turns liquid oils into solid fats to extend shelf life and enhance texture in processed foods. They are widely recognized as the most harmful type of fat, as they simultaneously raise LDL ("bad") cholesterol and lower HDL ("good") cholesterol, significantly increasing the risk of heart disease and other health issues.</p>
            <ul>
                <li><strong>Sources:</strong> Found in many fried foods, baked goods (pastries, cookies, cakes), stick margarines, and some processed snacks. Always check nutrition labels for "partially hydrogenated oil."</li>
                <li><strong>Recommendation:</strong> It is strongly advised to eliminate artificial trans fats from your diet entirely.</li>
            </ul>
            <p>By prioritizing healthy unsaturated fats, consuming saturated fats in moderation, and strictly avoiding trans fats, you will significantly support your long-term health, energy levels, and overall fitness journey.</p>
        `,
        duration: 4 // Increased duration to reflect comprehensive content
    },
    {
        type: 'quiz',
        title: 'Quiz: Advanced Macronutrients',
        question: 'Which type of carbohydrate provides sustained energy release and is rich in fiber?',
        options: ['Simple Carbohydrates', 'Complex Carbohydrates', 'Sugars', 'Fructose'],
        correctAnswer: 1, // Complex Carbohydates
        duration: 1,
        completed: false
    },
{
        type: 'quiz',
        title: 'Quiz: Advanced Macronutrients Application', // Adjusted title for clarity
        question: 'An individual aims to improve cardiovascular health and reduce systemic inflammation. Based on the detailed understanding of dietary fats, which specific fat-related dietary change would be most effective?',
        options: [
            'Increasing consumption of artificial trans fats found in processed snacks.',
            'Prioritizing high intake of saturated fats from animal products like butter and fatty meats.',
            'Substituting saturated and trans fats with an emphasis on Omega-3 rich polyunsaturated fats and monounsaturated fats.',
            'Eliminating all dietary fats to minimize calorie intake.'
        ],
        correctAnswer: 2, // Index of 'Substituting saturated and trans fats with an emphasis on Omega-3 rich polyunsaturated fats and monounsaturated fats.'
        duration: 1,
        completed: false
    },
{
        type: 'lesson',
        title: 'Strategic Eating Habits: Timing & Frequency',
        content: `
            <h3>Optimizing Your Meals for Sustained Energy, Performance, and Recovery</h3>
            <p>Beyond the quality and quantity of your food, *when* and *how often* you eat plays a significant role in your energy levels, athletic performance, and recovery. Strategic eating habits can help maintain stable blood sugar, support muscle growth, and improve overall well-being.</p>
            
            <h4>Meal Frequency: Finding Your Rhythm</h4>
            <p>There's no single magic number for meal frequency, as individual preferences, schedules, and goals vary. However, consistency is key.</p>
            <ul>
                <li>
                    <strong>Traditional 3 Meals a Day:</strong> For many, three balanced meals spaced throughout the day work well for satiety and nutrient intake.
                </li>
                <li>
                    <strong>Frequent Smaller Meals (5-6 per day):</strong> Some individuals find that eating smaller, more frequent meals (every 2-4 hours) helps manage hunger, maintain stable blood sugar levels, and ensures a steady supply of nutrients, particularly useful for those with higher caloric needs or specific athletic goals.
                </li>
            </ul>
            <p>Ultimately, the best frequency is one you can consistently adhere to that supports your energy needs and helps you feel your best.</p>

            <h4>Meal Timing Around Exercise: Fuel, Perform, Recover</h4>
            <p>Strategically timing your meals and snacks around your workouts can significantly impact your performance and recovery.</p>
            <ul>
                <li>
                    <strong>Pre-Workout (1-3 hours before):</strong>
                    <p>Focus on easily digestible carbohydrates to provide readily available energy for your workout. A moderate amount of protein can also be beneficial, while high fat or fiber intake right before exercise might cause digestive discomfort.</p>
                    <p>Examples: Banana with a small handful of nuts, oatmeal with berries, whole-wheat toast with a little peanut butter.</p>
                </li>
                <li>
                    <strong>During Workout (for longer/intense sessions):</strong>
                    <p>For workouts lasting longer than 60-90 minutes or very high-intensity sessions, consuming easily digestible carbohydrates (e.g., sports drink, fruit, energy gel) can help maintain energy levels and prevent fatigue.</p>
                </li>
                <li>
                    <strong>Post-Workout (within 1-2 hours):</strong>
                    <p>This is a crucial window for recovery. Aim for a combination of carbohydrates to replenish glycogen stores and high-quality protein to initiate muscle repair and growth. This combination aids in faster recovery and better adaptation to training.</p>
                    <p>Examples: Chicken and rice, a protein shake with fruit, Greek yogurt with granola.</p>
                </li>
            </ul>

            <h4>Listen to Your Body: Hunger, Satiety, and Individual Needs</h4>
            <p>While guidelines are helpful, truly optimizing your eating habits means paying attention to your body's unique signals. Learn to recognize genuine hunger and satiety cues. Your activity level, metabolism, and personal preferences will dictate your optimal meal timing and frequency.</p>
            <p>The goal is to provide your body with consistent, high-quality fuel to support your energy levels, maximize your performance during workouts, and facilitate efficient recovery, all while enjoying your food.</p>
        `,
        duration: 4 // Increased duration to reflect comprehensive content
    },
    {
        type: 'quiz',
        title: 'Quiz: Advanced Nutrition Application', // Reusing this title for consistency with previous advanced quiz
        question: 'A strength athlete is aiming to maximize muscle protein synthesis and maintain consistent energy for daily intensive training. Based on the comprehensive nutrition lessons, which strategic dietary approach would be most effective?',
        options: [
            'Relying solely on simple carbohydrates for pre-workout energy and consuming all daily protein in one large meal.',
            'Prioritizing high intake of saturated fats and avoiding all carbohydrates to promote fat adaptation.',
            'Distributing high-quality protein consistently throughout the day, strategically combining complex carbohydrates around training times, and ensuring adequate intake of essential healthy fats.',
            'Minimizing fluid intake during training and consuming only incomplete proteins to avoid excessive calories.'
        ],
        correctAnswer: 2, // Index of 'Distributing high-quality protein consistently throughout the day, strategically combining complex carbohydrates around training times, and ensuring adequate intake of essential healthy fats.'
        duration: 1,
        completed: false
    },

    // --- Module 2: Core Training Principles (Detailed) ---
    {
        type: 'lesson',
        title: 'Foundational Strength Training Principles',
        content: `
            <h3>Unlocking Your Potential: Core Principles of Strength Training</h3>
            <p>Building strength, muscle, and improving overall physical capacity isn't just about lifting weights; it's about intelligently applying foundational training principles that guide your body's adaptation. These principles ensure your efforts lead to consistent progress and help prevent plateaus and injuries.</p>

            <h4>1. Progressive Overload: The Engine of Growth</h4>
            [cite_start]<p>To continuously build strength and muscle, you must gradually increase the demands placed on your body over time[cite: 793, 3753]. Your body adapts to stress, so to keep adapting, the stress must continually increase. This doesn't just mean lifting heavier, though that's a primary method. Methods of achieving progressive overload include:</p>
            <ul>
                <li><strong>Increasing Resistance:</strong> Lifting heavier weights.</li>
                <li><strong>Increasing Volume:</strong> Doing more repetitions or more sets.</li>
                <li><strong>Decreasing Rest Periods:</strong> Reducing the time between sets.</li>
                <li><strong>Increasing Frequency:</strong> Training a muscle group more often.</li>
                <li><strong>Improving Technique/Form:</strong> Performing the exercise with stricter form, which often makes it harder.</li>
                <li><strong>Increasing Time Under Tension:</strong> Slowing down the eccentric (lowering) or concentric (lifting) phase of an exercise.</li>
                [cite_start]<li><strong>Using More Difficult Variations:</strong> Progressing to exercises that require more strength or stability (e.g., knee push-ups to standard push-ups, or bodyweight squats to pistol squats)[cite: 3526].</li>
            </ul>
            <p>It's crucial to apply this principle safely, especially for beginners. [cite_start]Avoid training to failure in the initial months to perfect movement patterns and prevent injuries[cite: 3751].</p>

            <h4>2. Consistency: The Non-Negotiable Foundation</h4>
            [cite_start]<p>Showing up regularly and adhering to your training plan is arguably the most critical factor for long-term success[cite: 793, 3685]. Sporadic, intense workouts are far less effective than consistent, well-structured sessions. Your body needs regular stimuli to adapt and grow. [cite_start]The best program is the one you can consistently stick to and that allows for ongoing progress[cite: 3616].</p>

            <h4>3. Specificity: Train What You Want to Gain</h4>
            [cite_start]<p>The adaptations your body makes are highly specific to the type of training you perform[cite: 793]. If you want to get stronger at squats, you need to squat. If you want to improve endurance, you need to train endurance. This principle means that your training should directly reflect your goals.</p>

            <h4>4. Individuality: Your Unique Blueprint</h4>
            [cite_start]<p>Everyone responds differently to training due to genetics, training history, lifestyle, and recovery capacity[cite: 793, 3616]. What works perfectly for one person may not work for another. [cite_start]It's essential to listen to your body, track your progress, and adjust your program to suit your unique needs and how you recover[cite: 3616].</p>

            <h4>5. Recovery: Where Growth Happens</h4>
            <p>Training breaks down muscle tissue; recovery builds it back stronger. Without adequate rest, sleep, and proper nutrition, your body cannot adapt to the training stimulus, leading to fatigue, poor performance, and increased injury risk. [cite_start]"Most athletes are not over-training, they are under-recovering." [cite: 3619] [cite_start]Ensure you allow sufficient time for muscle groups to recover (e.g., 24-48 hours after strength training for specific muscle groups)[cite: 3525].</p>

            <h4>6. Periodization: Strategic Planning for Peak Performance</h4>
            [cite_start]<p>Periodization is the systematic planning of training to achieve specific goals over time, often involving varying intensity, volume, and exercise selection in cycles (e.g., macrocycles, mesocycles, microcycles)[cite: 793, 3617]. This helps prevent overtraining, reduce injury risk, and ensures continuous progress by strategically incorporating phases of higher intensity, higher volume, and recovery. [cite_start]Different methods like linear, undulating, and block periodization exist, offering various ways to structure your training[cite: 3618].</p>

            <h4>7. Reversibility: Use It or Lose It</h4>
            [cite_start]<p>The "use it or lose it" principle states that if you stop training, the adaptations you've gained will gradually diminish[cite: 793]. Consistency helps mitigate this, but prolonged breaks will lead to a loss of strength and fitness. This highlights the importance of maintaining an active lifestyle even during periods of reduced training intensity.</p>
        `,
        duration: 8 // Increased duration to reflect comprehensive content
    },
{
        type: 'lesson',
        title: 'The Science of Adaptation: Training Effect & Progressive Overload',
        content: `
            <h3>How Your Body Gets Stronger: The Principles of Adaptation and Progression</h3>
            <p>At the heart of all effective fitness programs lies the remarkable ability of your body to adapt. This phenomenon, known as the 'training effect' or the principle of adaptation, is how your body responds to physical stress by becoming stronger, more efficient, and more resilient. To ensure continuous improvement, you must consistently challenge this adaptive capacity through progressive overload.</p>
            
            <h4>The Training Effect: Physiological Adaptations</h4>
            <p>When you engage in physical activity, especially resistance training or cardiovascular exercise, you introduce a stressor to your body. In response, your body undergoes a series of physiological adaptations to better handle that stress in the future. These adaptations include:</p>
            <ul>
                <li><strong>Muscular Adaptations:</strong>
                    <ul>
                        <li><strong>Hypertrophy:</strong> Increase in muscle fiber size.</li>
                        <li><strong>Neurological Adaptations:</strong> Improved coordination between the nervous system and muscles, allowing for more motor units to be recruited and fired more efficiently, leading to increased strength even without significant muscle size increase.</li>
                    </ul>
                </li>
                <li><strong>Cardiovascular Adaptations:</strong> Increased stroke volume (heart pumps more blood per beat), improved capillarization (more blood vessels to muscles), and enhanced oxygen delivery and utilization.</li>
                <li><strong>Skeletal Adaptations:</strong> Increased bone density, making bones stronger and more resistant to fracture.</li>
                <li><strong>Metabolic Adaptations:</strong> Improved energy production pathways, better fat utilization for fuel, and enhanced insulin sensitivity.</li>
            </ul>
            <p>This adaptive process follows the principle of <strong>supercompensation</strong>, where your body not only recovers from the training stress but temporarily adapts to a higher level of fitness before returning to baseline if no further stimulus is provided.</p>

            <h4>Progressive Overload: The Key to Continuous Progress</h4>
            <p>For your body to continue adapting and improving (i.e., to keep experiencing the training effect), the stimulus must constantly increase. This is the essence of <strong>Progressive Overload</strong>. Without it, your body will simply maintain its current level of adaptation, leading to a plateau in progress. This principle is fundamental for any fitness goal, whether it's building muscle, increasing strength, or improving endurance.</p>
            <p>Methods to apply progressive overload strategically:</p>
            <ul>
                <li><strong>Increase Resistance (Weight):</strong> The most common method; lift heavier weights over time.</li>
                <li><strong>Increase Repetitions:</strong> Perform more reps with the same weight.</li>
                <li><strong>Increase Sets:</strong> Do more sets of an exercise.</li>
                <li><strong>Decrease Rest Periods:</strong> Reduce the time between sets, increasing the density of your workout.</li>
                <li><strong>Increase Training Frequency:</strong> Train a muscle group or movement pattern more times per week.</li>
                <li><strong>Increase Time Under Tension:</strong> Slow down the eccentric (lowering) or concentric (lifting) phases of an exercise.</li>
                <li><strong>Improve Exercise Technique:</strong> Performing an exercise with stricter form often makes it more challenging and effective.</li>
                <li><strong>Increase Exercise Complexity/Difficulty:</strong> Progressing from easier variations to harder ones (e.g., assisted pull-ups to unassisted pull-ups, push-ups to decline push-ups).</li>
                <li><strong>Increase Training Volume:</strong> The total amount of work done (sets x reps x weight).</li>
            </ul>
            <p>Regularly tracking your workouts is essential to ensure you are consistently applying progressive overload. Listen to your body to balance challenge with adequate recovery, ensuring sustainable and effective progress over the long term.</p>
        `,
        duration: 1 // Increased duration to reflect comprehensive content
    },
{
        type: 'lesson',
        title: 'Specificity, Individual Differences, and Periodization',
        content: `
            <h3>Tailoring Your Training for Maximum Results: Advanced Principles</h3>
            <p>Moving beyond basic progressive overload, applying the principles of specificity, accounting for individual differences, and using periodization are crucial for truly optimizing your training, avoiding plateaus, and achieving peak performance.</p>

            <h4>1. Principle of Specificity (SAID Principle)</h4>
            <p>The **Specific Adaptations to Imposed Demands (SAID) Principle** states that your body will adapt precisely to the demands placed upon it. This means that training effects are highly specific to the type of exercise, muscles involved, range of motion, speed, and energy systems utilized.</p>
            <ul>
                <li><strong>Strength Specificity:</strong> To get stronger in a squat, you must squat. Lifting heavy for low reps builds maximal strength.</li>
                <li><strong>Hypertrophy Specificity:</strong> To build muscle size, training often involves moderate loads for moderate-to-high repetitions, focusing on muscle fatigue and time under tension.</li>
                <li><strong>Endurance Specificity:</strong> To improve cardiovascular endurance, you need to engage in sustained aerobic activities (running, cycling, swimming) that challenge your heart and lungs.</li>
                <li><strong>Movement Specificity:</strong> Improving at a sport requires practicing the movements and energy demands of that sport (e.g., jumping for basketball, sprinting for track).</li>
            </ul>
            <p>Your training program should directly reflect your specific goals. If your goal is to increase your vertical jump, doing bicep curls won't yield the specific adaptation you need.</p>

            <h4>2. Individual Differences: Recognizing Your Unique Response</h4>
            <p>No two individuals will respond to the exact same training program in precisely the same way. The **Principle of Individual Differences** acknowledges that people possess unique genetic predispositions, training histories, recovery capabilities, and lifestyles that influence their adaptations to exercise. Factors contributing to these differences include:</p>
            <ul>
                <li><strong>Genetics:</strong> Predisposition to muscle fiber type (fast-twitch vs. slow-twitch), hormonal responses, and recovery rates.</li>
                <li><strong>Training Age/History:</strong> Beginners typically make faster gains than advanced lifters. Previous injuries can also impact training.</li>
                <li><strong>Recovery Capacity:</strong> Factors like sleep quality, nutrition, stress levels, and age significantly affect how well an individual recovers and adapts.</li>
                <li><strong>Lifestyle:</strong> Work demands, stress, and overall activity levels outside of training play a role.</li>
            </ul>
            <p>This principle underscores the importance of personalized coaching and the need to listen to your own body, adjusting your program based on your unique progress and recovery feedback rather than blindly following someone else's routine.</p>

            <h4>3. Periodization: Strategic Long-Term Planning</h4>
            <p><strong>Periodization</strong> is the systematic, cyclical planning of training to achieve specific goals at predetermined times, while optimizing performance and preventing overtraining, burnout, and injury. It involves varying the training intensity, volume, and exercise selection over different phases.</p>
            <ul>
                <li>
                    <strong>Macrocycle:</strong> The longest cycle, typically covering an entire training year or competitive season, with a major long-term goal.
                </li>
                <li>
                    <strong>Mesocycle:</strong> Shorter cycles (e.g., 4-12 weeks) within the macrocycle, each focusing on a specific training goal (e.g., hypertrophy, strength, power, tapering).
                </li>
                <li>
                    <strong>Microcycle:</strong> The shortest cycles (e.g., 1-4 weeks), representing typical weekly training schedules, focusing on daily workouts that contribute to the mesocycle's goal.
                </li>
            </ul>
            <p>Types of Periodization:</p>
            <ul>
                <li><strong>Linear Periodization:</strong> Gradually increases intensity and decreases volume over the mesocycles (e.g., starting with high reps/lower weight and progressing to low reps/higher weight).</li>
                <li><strong>Undulating (Non-Linear) Periodization:</strong> Varies intensity and volume more frequently, often on a daily or weekly basis, allowing for different adaptations simultaneously.</li>
            </ul>
            <p>Periodization helps manage fatigue, allows for planned recovery, reduces the risk of plateaus, and prepares the body to peak for specific events or achieve long-term fitness milestones.</p>
        `,
        duration: 1 // Duration set to 1 as per user instruction
    },
{
        type: 'quiz',
        title: 'Quiz: Training Smarter',
        question: 'A weightlifter has been performing the exact same set, rep, and weight scheme for their compound lifts for several months, despite feeling capable of more. They have noticed their strength gains have completely stopped. Which fundamental training principle is being ignored, causing this plateau?',
        options: [
            'Principle of Specificity',
            'Principle of Individual Differences',
            'Principle of Progressive Overload',
            'Principle of Reversibility'
        ],
        correctAnswer: 2, // Principle of Progressive Overload
        duration: 1, // Duration set to 1 as per user instruction
    completed: false
    },
{
        type: 'lesson',
        title: 'Energy Systems: Fueling Your Workouts',
        content: `
            <h3>How Your Body Powers Movement: The Three Energy Systems</h3>
            <p>Understanding how your body generates energy for different types of activities is fundamental to designing effective training programs. [cite_start]Our bodies constantly produce a molecule called Adenosine Triphosphate (ATP), which is the direct source of energy for all muscle contractions and cellular processes[cite: 323]. The rate and amount of ATP production depend on the intensity and duration of the physical demand. Your body primarily utilizes three interconnected energy systems to produce ATP, each dominant during different types of effort:</p>

            <h4>1. ATP-PC System (Phosphagen System)</h4>
            <ul>
                [cite_start]<li><strong>Mechanism:</strong> This system uses stored ATP and creatine phosphate (PC) within the muscle cells to rapidly regenerate ATP[cite: 3289]. It's the fastest way to produce ATP because it doesn't require oxygen and involves minimal chemical reactions. [cite_start]Creatine helps replenish phosphocreatine stores to quickly provide energy for short, intense activities[cite: 3289].</li>
                <li><strong>Duration:</strong> Dominant for very short, explosive efforts lasting approximately 0-10 seconds.</li>
                <li><strong>Examples:</strong> A single heavy weight lift (e.g., 1-3 reps of a maximal squat), a 100-meter sprint, a powerful jump, or throwing a shot put.</li>
                <li><strong>Power Output:</strong> Very high power, but very limited capacity.</li>
            </ul>

            <h4>2. Glycolytic System (Anaerobic Lactic System)</h4>
            <ul>
                <li><strong>Mechanism:</strong> This system breaks down glucose (from blood sugar) or glycogen (stored glucose in muscles and liver) without the presence of oxygen (anaerobic process). This process, known as anaerobic glycolysis, produces ATP relatively quickly, but also results in the formation of lactate and hydrogen ions, which can contribute to muscle fatigue and the "burning" sensation during intense exercise.</li>
                <li><strong>Duration:</strong> Dominant for moderate-duration, high-intensity efforts lasting approximately 10-120 seconds. [cite_start]This system contributes to what is known as "anaerobic capacity"[cite: 546].</li>
                <li><strong>Examples:</strong> A set of 8-12 repetitions in resistance training, a 400-meter sprint, a sustained wrestling match, or multiple short, intense bursts in a team sport.</li>
                <li><strong>Power Output:</strong> High power, but limited capacity (intermediate between ATP-PC and Oxidative).</li>
            </ul>

            <h4>3. Oxidative System (Aerobic System)</h4>
            <ul>
                <li><strong>Mechanism:</strong> This is the most complex and slowest ATP production system, but it's also the most efficient and sustainable. It uses oxygen to break down carbohydrates (glucose/glycogen), fats (fatty acids), and, in extreme cases, proteins (amino acids) to produce large amounts of ATP. This process occurs primarily in the mitochondria of cells.</li>
                <li><strong>Duration:</strong> Dominant for long-duration, low-to-moderate intensity activities, typically lasting longer than 2 minutes.</li>
                <li><strong>Examples:</strong> Marathon running, cycling, swimming, prolonged hiking, or any extended cardiovascular exercise.</li>
                <li><strong>Power Output:</strong> Low power output, but very high capacity, allowing for sustained activity.</li>
            </ul>

            <h4>Interplay of Energy Systems</h4>
            <p>It's important to understand that these energy systems do not work in isolation. They operate on a continuum, with one system predominating based on the intensity and duration of the activity, while the others contribute to varying degrees. For instance, even during a long-distance run (primarily oxidative), the ATP-PC and Glycolytic systems provide bursts of energy for inclines or a sprint finish.</p>

            <p><strong>Understanding these systems helps you tailor your training to your energy demands and specific fitness goals.</strong> For example, high-intensity interval training (HIIT) heavily taxes both the ATP-PC and Glycolytic systems, while long, steady-state cardio primarily trains the Oxidative system. By manipulating exercise intensity, duration, and rest periods, you can specifically target and improve each of these vital energy pathways.</p>
        `,
        duration: 1 // Increased duration to reflect comprehensive content
    },
    {
        type: 'lesson',
        title: 'Rep Ranges and Training Goals',
        content: `
            <h3>Tailoring Reps for Strength, Hypertrophy, or Endurance: A Deeper Dive</h3>
            <p>The number of repetitions (reps) you perform per set, often coupled with the intensity (weight lifted), is a fundamental variable in resistance training. Manipulating your rep ranges allows you to specifically target different physiological adaptations, leading to distinct training outcomes.</p>

            <h4>1. Strength (1-5 Reps: Heavy Loads, Low Volume)</h4>
            <ul>
                <li><strong>Primary Adaptation:</strong> Primarily neurological adaptations. This range maximizes the recruitment of high-threshold motor units and improves the efficiency of your nervous system in coordinating muscle contractions. This means your muscles become better at producing maximal force.</li>
                <li><strong>Weight/Intensity:</strong> Very heavy loads, typically 85% of your 1-Rep Max (1RM) or higher.</li>
                <li><strong>Rest Periods:</strong> Longer rest periods (3-5+ minutes) are crucial between sets to allow for full ATP-PC system recovery and nervous system recuperation, ensuring maximal effort on each subsequent set.</li>
                <li><strong>Benefits:</strong> Significant gains in absolute strength, improved power output, and enhanced inter/intra-muscular coordination. This range is ideal for powerlifters, Olympic lifters, or anyone seeking to lift the heaviest possible weights.</li>
                <li><strong>Exercise Focus:</strong> Best suited for compound movements like squats, deadlifts, bench press, and overhead press.</li>
            </ul>

            <h4>2. Hypertrophy (6-12 Reps: Moderate Loads, Moderate Volume)</h4>
            <ul>
                <li><strong>Primary Adaptation:</strong> Muscle growth (hypertrophy), involving both sarcoplasmic (increase in muscle cell fluid) and myofibrillar (increase in contractile protein size) components. This range is optimal for inducing metabolic stress and mechanical tension, key drivers of muscle growth.</li>
                <li><strong>Weight/Intensity:</strong> Moderate loads, typically 65-85% of your 1RM.</li>
                <li><strong>Rest Periods:</strong> Moderate rest periods (60-120 seconds) to create sufficient fatigue and metabolic stress, while still allowing for adequate recovery to perform subsequent sets effectively.</li>
                <li><strong>Benefits:</strong> Optimized for increasing muscle size and definition. Often considered the "bodybuilding" range.</li>
                <li><strong>Exercise Focus:</strong> Effective for both compound and isolation movements, allowing for a balanced approach to muscle development.</li>
            </ul>

            <h4>3. Muscular Endurance (12+ Reps: Lighter Loads, High Volume)</h4>
            <ul>
                <li><strong>Primary Adaptation:</strong> Improved muscular stamina and the ability to sustain prolonged contractions or repetitive movements. Adaptations include increased mitochondrial density, enhanced capillary density (better oxygen delivery), and improved lactate buffering capacity.</li>
                <li><strong>Weight/Intensity:</strong> Lighter loads, typically 65% of your 1RM or less.</li>
                <li><strong>Rest Periods:</strong> Shorter rest periods (30-60 seconds) to keep the muscles under continuous stress and challenge their ability to recover and perform.</li>
                <li><strong>Benefits:</strong> Increased local muscular endurance, improved cardiovascular fitness, and greater resistance to fatigue. Beneficial for athletes in endurance sports, individuals focusing on overall fitness, or those new to resistance training.</li>
                <li><strong>Exercise Focus:</strong> Can be applied to various exercises, often used in circuit training or higher-rep isolation work.</li>
            </ul>

            <h4>Overlap and Individualization</h4>
            <p>While these rep ranges serve as excellent guidelines, it's important to remember that they are not mutually exclusive. There is some overlap in adaptations; for example, heavy strength training will still cause some hypertrophy, and hypertrophy training can contribute to endurance. The goal is to prioritize the range that aligns with your primary objective. Many effective training programs utilize a **periodized approach** (as discussed in previous lessons) by rotating through different rep ranges over time to elicit a variety of adaptations and avoid plateaus, ensuring well-rounded physical development and continuous progress.</p>
        `,
        duration: 1 // Duration set to 1 as per user instruction
    },
{
        type: 'quiz',
        title: 'Quiz: Energy Systems & Reps',
        question: 'A competitive powerlifter is training to increase their maximal 1-rep deadlift. Based on their goal, which combination of rep range, primary energy system utilized, and key training principle is most appropriate?',
        options: [
            '15+ reps; Oxidative System; Recovery',
            '6-12 reps; Glycolytic System; Specificity (to hypertrophy)',
            '1-5 reps; ATP-PC System; Progressive Overload',
            '8-10 reps; Oxidative System; Individual Differences'
        ],
        correctAnswer: 2, // 1-5 reps; ATP-PC System; Progressive Overload
        duration: 1, // Duration set to 1 as per user instruction
    completed: false
    },
{
        type: 'lesson',
        title: 'Fundamental Exercise Form and Safety',
        content: `
            <h3>Protecting Your Body, Maximizing Your Results: The Essentials of Form and Safety</h3>
            <p>Mastering proper exercise form is the cornerstone of effective and injury-free training. It not only safeguards your body but also ensures that you are effectively targeting the intended muscles, leading to greater results and sustainable progress. Always prioritize flawless form over lifting heavy weights.</p>

            <h4>Core Principles of Impeccable Form:</h4>
            <ul>
                <li><strong>Neutral Spine and Spinal Alignment:</strong> Maintaining a natural curve in your spine is critical for most exercises, especially compound lifts like squats, deadlifts, and overhead presses. Avoid excessive arching (hyperextension) or rounding of your lower back. Your head should generally align with your spine.</li>
                <li><strong>Engage Your Core:</strong> Before initiating a movement, brace your core as if preparing for a punch. This stabilizes your trunk, protects your spine, and allows for more efficient transfer of force throughout your body.</li>
                <li><strong>Controlled Movement and Full Range of Motion (ROM):</strong> Execute each repetition with control, both during the lifting (concentric) and lowering (eccentric) phases. Avoid using momentum, which reduces muscle engagement and increases injury risk. Strive for a full, pain-free range of motion to maximize muscle development and flexibility around the joint.</li>
                <li><strong>Proper Breathing:</strong> Generally, exhale during the most strenuous part of the lift (exertion) and inhale during the easier, eccentric phase. For heavy lifts, learning to brace (Valsalva maneuver) can increase intra-abdominal pressure for spinal stability, but consult a professional for proper technique.</li>
                <li><strong>Joint Alignment:</strong> Ensure that your joints are stacked and moving in proper alignment (e.g., knees tracking over toes in squats and lunges, elbows tucked in during bench press).</li>
            </ul>

            <h4>Essential Safety Guidelines:</h4>
            <ul>
                <li><strong>Form Over Weight, Always:</strong> This cannot be stressed enough. Lifting too heavy with poor form is a direct route to injury and minimizes effective muscle stimulus. Start with lighter weights or even just bodyweight to perfect your movement patterns.</li>
                <li><strong>Listen to Your Body:</strong> Distinguish between muscle fatigue/soreness (a good sign of work) and sharp, sudden, or persistent pain. Never "push through" sharp pain, as this is your body's signal of potential injury.</li>
                <li><strong>Warm-up and Cool-down:</strong> Always begin with a dynamic warm-up to prepare your joints and muscles for activity. Conclude with a cool-down and light stretching to aid recovery and flexibility.</li>
                <li><strong>Use Spotters and Safety Equipment:</strong> When lifting heavy weights, especially on exercises like bench press or squats, always use a spotter or safety racks. Use weight collars to secure plates on barbells.</li>
                <li><strong>Know Your Limits:</strong> Don't attempt lifts that are clearly beyond your current strength level. Progress gradually.</li>
                <li><strong>Seek Professional Guidance:</strong> If you are unsure about proper form, struggling with a movement, or experiencing pain, do not hesitate to consult with a certified personal trainer or a qualified healthcare professional. Watching instructional videos from reputable sources can also be a great learning tool.</li>
                <li><strong>Stay Hydrated:</strong> Proper hydration is crucial for joint lubrication, muscle function, and overall body performance and safety.</li>
            </ul>
            <p>By diligently applying these principles of form and safety, you will not only prevent injuries but also unlock your true potential, ensuring a long and effective fitness journey.</p>
        `,
        duration: 1 // Duration set to 1 as per user instruction
    },
{
        type: 'lesson',
        title: 'Introduction to Training Splits',
        content: `
            <h3>Structuring Your Workout Week: Understanding Training Splits</h3>
            <p>A training split refers to how you organize your resistance training sessions throughout the week, determining which muscle groups you work on specific days. The choice of split significantly impacts training frequency, volume, and recovery, and should align with your fitness goals, experience level, and available time.</p>

            <h4>Common Training Splits:</h4>

            <h5>1. Full Body Split</h5>
            <ul>
                <li><strong>Description:</strong> You train all major muscle groups (e.g., chest, back, legs, shoulders, arms) in each workout session.</li>
                <li><strong>Frequency:</strong> Typically performed 2-4 times per week, with at least one rest day between sessions.</li>
                <li><strong>Pros:</strong>
                    <ul>
                        <li>High frequency for each muscle group, which can be beneficial for strength and muscle growth, especially for beginners.</li>
                        <li>Time-efficient if you have limited days to train.</li>
                        <li>Excellent for overall conditioning and strength development.</li>
                        <li>Promotes higher calorie burn per session.</li>
                    </ul>
                </li>
                <li><strong>Cons:</strong>
                    <ul>
                        <li>Per-muscle group volume per session might be lower due to overall fatigue.</li>
                        <li>Can be very taxing if intensity is too high.</li>
                    </ul>
                </li>
                <li><strong>Ideal For:</strong> Beginners, individuals with limited training days (2-3 times/week), those seeking general fitness, strength, or fat loss.</li>
            </ul>

            <h5>2. Upper/Lower Split</h5>
            <ul>
                <li><strong>Description:</strong> Workouts are divided into dedicated upper body days and lower body days. Core is often integrated into both.</li>
                <li><strong>Frequency:</strong> Typically performed 4 times per week (2 upper, 2 lower) for optimal frequency, or 3 times (e.g., Upper, Lower, Full Body).</li>
                <li><strong>Pros:</strong>
                    <ul>
                        <li>Allows for higher training volume per muscle group per session compared to full body.</li>
                        <li>Provides good frequency for each muscle group (usually twice a week).</li>
                        <li>Excellent balance between recovery and training stimulus.</li>
                    </ul>
                </li>
                <li><strong>Cons:</strong> Requires more dedicated training days than a full-body split.</li>
                <li><strong>Ideal For:</strong> Intermediate lifters, those wanting more volume than a full-body but still benefiting from moderate frequency, and those who can commit to 4 training days per week.</li>
            </ul>

            <h5>3. Body Part Split (or "Bro Split")</h5>
            <ul>
                <li><strong>Description:</strong> Each workout session is dedicated to one or two specific muscle groups (e.g., Chest Day, Back Day, Leg Day, Shoulder/Arm Day).</li>
                <li><strong>Frequency:</strong> Typically 4-6 times per week. Each muscle group is usually trained once per week.</li>
                <li><strong>Pros:</strong>
                    <ul>
                        <li>Allows for very high training volume for specific muscle groups in a single session.</li>
                        <li>Excellent for advanced lifters focused on maximizing hypertrophy and bringing up lagging body parts.</li>
                        <li>Offers variety in exercise selection for each muscle.</li>
                    </ul>
                </li>
                <li><strong>Cons:</strong>
                    <ul>
                        <li>Lower frequency per muscle group (often only once a week), which might be suboptimal for natural lifters for muscle protein synthesis compared to higher frequencies.</li>
                        <li>Requires more training days to hit all muscle groups.</li>
                    </ul>
                </li>
                <li><strong>Ideal For:</strong> Advanced lifters, competitive bodybuilders, or individuals prioritizing very high localized volume.</li>
            </ul>

            <h5>4. Push/Pull/Legs (PPL) Split</h5>
            <ul>
                <li><strong>Description:</strong> Workouts are divided by movement pattern: "Push" (chest, shoulders, triceps), "Pull" (back, biceps), and "Legs" (quads, hamstrings, glutes, calves).</li>
                <li><strong>Frequency:</strong> Can be done 3 days a week (one cycle) or 6 days a week (two cycles for higher frequency).</li>
                <li><strong>Pros:</strong>
                    <ul>
                        <li>Organizes exercises synergistically, reducing overlapping muscle fatigue on subsequent days.</li>
                        <li>Offers a good balance of frequency and volume for muscle growth and strength.</li>
                        <li>Flexible; can be adapted to 3 or 6 days of training.</li>
                    </ul>
                </li>
                <li><strong>Cons:</strong> Requires understanding of movement patterns to properly categorize exercises.</li>
                <li><strong>Ideal For:</strong> Intermediate to advanced lifters seeking a balanced, high-frequency, and high-volume approach for hypertrophy and strength.</li>
            </ul>

            <h4>Choosing the Right Split:</h4>
            <p>The best training split is one that fits your personal schedule, allows for adequate recovery, keeps you consistent, and directly supports your fitness goals. Consider your experience level, how many days you can realistically commit to training, and how your body responds to different volumes and frequencies. Experimentation and adjustments are key to finding your optimal structure.</p>
        `,
        duration: 1 // Duration set to 1 as per user instruction
    },
{
        type: 'quiz',
        title: 'Quiz: Form & Splits',
        question: 'A new lifter, focused on building foundational strength and ensuring long-term consistency, can realistically commit to training 3 days per week. Which combination of training split and safety principle is most aligned with their goals and current stage?',
        options: [
            'Body Part Split; Consistently training to muscular failure',
            'Upper/Lower Split; Always pushing for max weight, even if form breaks down',
            'Full Body Split; Prioritizing proper form and controlled movements',
            'Push/Pull/Legs Split; Skipping warm-ups to save time'
        ],
        correctAnswer: 2, // Full Body Split; Prioritizing proper form and controlled movements
        duration: 1, // Duration set to 1 as per user instruction
    completed: false
    },

    // --- Module 3: Cardiovascular Fitness ---
{
        type: 'lesson',
        title: 'Introduction to Cardiovascular Fitness',
        content: `
            <h3>Heart Health and Endurance: The Foundation of Overall Wellness</h3>
            <p>Cardiovascular fitness, often referred to as 'cardio' or aerobic fitness, is the ability of your heart, lungs, and blood vessels to supply oxygen-rich blood to your working muscles efficiently over a sustained period. It's a vital component of overall physical health and performance, impacting everything from your daily energy levels to your long-term disease risk.</p>

            <h4>Physiological Benefits: How Your Body Adapts</h4>
            <p>Regular cardiovascular exercise elicits profound positive adaptations throughout your body:</p>
            <ul>
                <li><strong>Stronger Heart:</strong> Your heart, a muscle, becomes more efficient. It can pump more blood with each beat (increased stroke volume), leading to a lower resting heart rate, meaning it works less to circulate blood when you're at rest. This reduces the strain on your cardiovascular system.</li>
                <li><strong>Improved Lung Capacity:</strong> Your lungs become more efficient at taking in oxygen and expelling carbon dioxide. This leads to an increase in your VO2 max (maximal oxygen uptake), which is a key indicator of aerobic fitness.</li>
                <li><strong>Enhanced Blood Circulation:</strong> Regular cardio improves the elasticity of your blood vessels and can help keep them clear, promoting healthy blood flow and reducing the risk of plaque buildup.</li>
                <li><strong>Efficient Energy Production:</strong> Your body's oxidative (aerobic) energy system becomes more efficient at using oxygen to break down carbohydrates and fats for fuel, delaying fatigue during prolonged activities. Your muscles also become better at extracting oxygen from the blood.</li>
                <li><strong>Increased Capillarization:</strong> More tiny blood vessels (capillaries) grow around muscle fibers, further improving oxygen and nutrient delivery, and waste removal.</li>
            </ul>

            <h4>Broader Health Benefits: Why Cardio Matters</h4>
            <p>Beyond performance enhancements, robust cardiovascular fitness significantly contributes to your overall health and longevity:</p>
            <ul>
                <li><strong>Reduced Risk of Chronic Diseases:</strong> A strong cardiovascular system is a powerful defense against heart disease, stroke, type 2 diabetes, certain cancers, and osteoporosis.</li>
                <li><strong>Weight Management:</strong> Cardiovascular exercise burns calories, which is crucial for maintaining a healthy weight or facilitating fat loss when combined with proper nutrition.</li>
                <li><strong>Improved Mood and Mental Health:</strong> Exercise releases endorphins, natural mood elevators, which can reduce stress, anxiety, and symptoms of depression.</li>
                <li><strong>Better Sleep Quality:</strong> Regular physical activity can help you fall asleep faster and experience deeper, more restorative sleep.</li>
                <li><strong>Enhanced Immune Function:</strong> Moderate cardiovascular exercise can boost your immune system, making you less susceptible to illness.</li>
            </ul>

            <h4>Types of Cardiovascular Exercise: Finding Your Fit</h4>
            <p>Cardio comes in many forms, allowing you to choose activities you enjoy:</p>
            <ul>
                <li><strong>Low-Impact:</strong> Brisk walking, cycling, swimming, elliptical training.</li>
                <li><strong>High-Impact:</strong> Running, jumping rope, high-impact aerobics.</li>
                <li><strong>Classes:</strong> Dance, aerobics, spin classes.</li>
                <li><strong>Sports:</strong> Basketball, soccer, tennis.</li>
            </ul>

            <h4>General Recommendations for Adults:</h4>
            <p>For substantial health benefits, adults should aim for at least 150 minutes of moderate-intensity aerobic activity or 75 minutes of vigorous-intensity aerobic activity per week, or an equivalent combination. Spread this activity throughout the week. You can monitor your intensity using a heart rate monitor or the Rate of Perceived Exertion (RPE) scale, where moderate intensity feels like you can talk but not sing, and vigorous intensity makes talking difficult.</p>
        `,
        duration: 1 // Duration set to 1 as per user instruction
    },
{
        type: 'lesson',
        title: 'Types of Cardio and Intensity Zones',
        content: `
            <h3>Maximizing Your Cardio: LISS, HIIT, and Intensity Zones</h3>
            <p>Cardiovascular exercise is a cornerstone of health and performance, but not all cardio is created equal. By understanding different types of cardio and how to manipulate intensity, you can tailor your training to achieve specific fitness goals, from enhancing endurance to optimizing fat loss.</p>

            <h4>1. LISS (Low-Intensity Steady State) Cardio</h4>
            <ul>
                <li><strong>Description:</strong> LISS involves performing continuous, sustained aerobic activity at a moderate, consistent pace for an extended period. You should be able to maintain a conversation comfortably during LISS.</li>
                <li><strong>Physiological Focus:</strong> This type of training primarily relies on your oxidative (aerobic) energy system, making it highly efficient at utilizing fat as a primary fuel source, especially over longer durations.</li>
                <li><strong>Intensity Zone:</strong> Typically performed in Moderate Intensity Zones (e.g., 50-70% of Maximum Heart Rate or 4-6 on an RPE scale of 1-10).</li>
                <li><strong>Pros:</strong>
                    <ul>
                        <li>Excellent for building an aerobic base and improving cardiovascular endurance.</li>
                        <li>Lower impact and less taxing on joints and the central nervous system, making it good for active recovery days or for beginners.</li>
                        <li>Effective for fat burning over sustained periods.</li>
                        <li>Reduces stress and can be highly enjoyable.</li>
                    </ul>
                </li>
                <li><strong>Cons:</strong>
                    <ul>
                        <li>More time-consuming to achieve significant calorie expenditure.</li>
                        <li>Less effective for improving anaerobic capacity or maximizing post-exercise calorie burn.</li>
                    </ul>
                </li>
                <li><strong>Examples:</strong> Brisk walking, light jogging, steady cycling, swimming laps, hiking, elliptical training.</li>
            </ul>

            <h4>2. HIIT (High-Intensity Interval Training)</h4>
            <ul>
                <li><strong>Description:</strong> HIIT alternates short, intense bursts of maximal or near-maximal effort with brief, low-intensity recovery periods. This creates a challenging workout that is typically much shorter in duration than LISS.</li>
                <li><strong>Physiological Focus:</strong> HIIT heavily taxes both your ATP-PC and Glycolytic (anaerobic) energy systems during the work intervals, pushing your body's limits. While primarily anaerobic, consistent HIIT can significantly improve your aerobic capacity over time by increasing your VO2 max.</li>
                <li><strong>Intensity Zone:</strong> Work intervals are in Vigorous to Maximal Intensity Zones (e.g., 80-95%+ of Maximum Heart Rate or 7-10 on RPE scale).</li>
                <li><strong>Pros:</strong>
                    <ul>
                        <li>Extremely time-efficient for improving cardiovascular fitness.</li>
                        <li>Significant post-exercise calorie burn (Excess Post-exercise Oxygen Consumption - EPOC, or the "afterburn effect").</li>
                        <li>Enhances both aerobic and anaerobic capacity, power, and speed.</li>
                        <li>Can lead to greater fat loss and muscle retention compared to steady-state cardio.</li>
                    </ul>
                </li>
                <li><strong>Cons:</strong>
                    <ul>
                        <li>Very demanding on the body; requires good recovery between sessions.</li>
                        <li>Higher risk of injury if proper form is not maintained during high-intensity intervals or if performed too frequently.</li>
                        <li>Not suitable for absolute beginners or those with certain health conditions without medical clearance.</li>
                    </ul>
                </li>
                <li><strong>Examples:</strong> Sprinting, burpees, jumping jacks, battle ropes, cycling intervals (e.g., 30 seconds max effort, 60 seconds rest).</li>
            </ul>

            <h4>Understanding Intensity Zones: Guiding Your Effort</h4>
            <p>Training in specific intensity zones helps you target different physiological adaptations. Two common methods for monitoring intensity are:</p>
            <ul>
                <li><strong>Heart Rate Zones:</strong>
                    <ul>
                        <li><strong>Maximum Heart Rate (MHR):</strong> Roughly estimated as 220 minus your age.</li>
                        <li><strong>Moderate Intensity:</strong> Typically 50-70% of your MHR. This zone is ideal for LISS, building aerobic base, and fat burning.</li>
                        <li><strong>Vigorous Intensity:</strong> Typically 70-85% of your MHR. This zone significantly improves cardiovascular fitness and burns more calories per minute, used in LISS for more advanced individuals or during the steady-state portions of interval training.</li>
                        <li><strong>Maximal Intensity:</strong> 85-100% of your MHR. This is the zone for HIIT work intervals, pushing anaerobic capacity.</li>
                    </ul>
                </li>
                <li><strong>Rate of Perceived Exertion (RPE) Scale:</strong> A subjective scale from 1 (very light activity) to 10 (maximal effort).
                    <ul>
                        <li><strong>Light (RPE 2-3):</strong> Easy breathing, conversation effortless.</li>
                        <li><strong>Moderate (RPE 4-6):</strong> Breathing heavily but can still talk in short sentences.</li>
                        <li><strong>Vigorous (RPE 7-8):</strong> Breathing very hard, can only speak a few words.</li>
                        <li><strong>Maximal (RPE 9-10):</strong> All-out effort, unable to speak.</li>
                    </ul>
                </li>
            </ul>
            <p>Choosing between LISS and HIIT, and utilizing intensity zones, depends on your fitness level, goals, available time, and recovery capacity. A well-rounded program often incorporates both types of cardio to maximize benefits.</p>
        `,
        duration: 1 // Duration set to 1 as per user instruction
    },
{
        type: 'quiz',
        title: 'Quiz: Cardio Basics',
        question: 'An individual is new to cardiovascular exercise and wants to improve their long-term heart health and build a solid endurance base without excessive joint stress. They also prefer activities where they can maintain a conversation. Which type of cardio and approximate RPE intensity zone would be most appropriate for them?',
        options: [
            'HIIT, at an RPE of 8-9 (Vigorous to Maximal)',
            'LISS, at an RPE of 4-6 (Moderate)',
            'Maximal Interval Training, at an RPE of 10',
            'Sustained high-impact cardio, at an RPE of 7-8 (Vigorous)'
        ],
        correctAnswer: 1, // LISS, at an RPE of 4-6 (Moderate)
        duration: 1,
    completed: false
    },
{
        type: 'lesson',
        title: 'Detailed Benefits of Cardiovascular Training',
        content: `
            <h3>Beyond Endurance: Unlocking a Healthier, More Resilient You</h3>
            <p>While often associated with weight loss or running a marathon, cardiovascular (aerobic) training offers a profound and wide-ranging impact on your overall health, well-being, and longevity. It's truly one of the most powerful tools for improving virtually every system in your body.</p>

            <h4>1. Revolutionized Heart Health</h4>
            <ul>
                <li><strong>Stronger, More Efficient Heart:</strong> Regular cardio strengthens your heart muscle, increasing its stroke volume (the amount of blood pumped with each beat). This means your heart can pump more blood with fewer beats, leading to a significantly lower resting heart rate – a key indicator of cardiovascular fitness.</li>
                <li><strong>Improved Blood Pressure:</strong> Consistent aerobic exercise helps relax and widen blood vessels, which can lower both systolic and diastolic blood pressure, reducing the strain on your arteries and heart.</li>
                <li><strong>Better Cholesterol Profile:</strong> Cardio can help increase levels of high-density lipoprotein (HDL) cholesterol (the "good" cholesterol) and lower low-density lipoprotein (LDL) cholesterol (the "bad" cholesterol) and triglycerides, directly contributing to healthier arteries.</li>
                <li><strong>Reduced Atherosclerosis Risk:</strong> By improving blood vessel elasticity and reducing plaque buildup, cardiovascular training significantly lowers the risk of arterial hardening and narrowing, which are precursors to heart attacks and strokes.</li>
            </ul>

            <h4>2. Enhanced Stamina and Energy Efficiency</h4>
            <ul>
                <li><strong>Increased VO2 Max:</strong> This is the maximum amount of oxygen your body can use during intense exercise. Regular cardio training improves your body's ability to take in, transport, and utilize oxygen, leading to a higher VO2 max and significantly increased endurance.</li>
                <li><strong>Improved Oxygen Delivery:</strong> Your body adapts by increasing capillarization (the growth of new, tiny blood vessels) within muscles, allowing for more efficient delivery of oxygen and nutrients and better removal of waste products.</li>
                <li><strong>Mitochondrial Powerhouse:</strong> Cardio training increases the number and size of mitochondria (the "power plants" of your cells) within muscle fibers, enabling more efficient aerobic energy production and delaying fatigue.</li>
                <li><strong>Better Fuel Utilization:</strong> Your body becomes more adept at burning fat for fuel during sustained lower-intensity activities, preserving glycogen stores for higher intensity efforts and delaying the onset of fatigue.</li>
            </ul>

            <h4>3. Effective Weight Management and Body Composition</h4>
            <ul>
                <li><strong>Calorie Expenditure:</strong> Cardiovascular exercise burns a significant number of calories during the activity itself, which is crucial for creating a calorie deficit necessary for fat loss or maintaining a healthy weight.</li>
                <li><strong>Metabolic Boost:</strong> High-intensity cardio, like HIIT, can lead to EPOC (Excess Post-exercise Oxygen Consumption), also known as the "afterburn effect," where your body continues to burn calories at an elevated rate even after your workout ends.</li>
                <li><strong>Improved Body Composition:</strong> While resistance training is primary for muscle growth, consistent cardio helps reduce overall body fat, leading to a leaner physique and improved muscle definition.</li>
            </ul>

            <h4>4. Significant Reduction in Chronic Disease Risk</h4>
            <ul>
                <li><strong>Type 2 Diabetes:</strong> Regular physical activity improves insulin sensitivity, helping your body regulate blood sugar levels more effectively and reducing the risk of developing type 2 diabetes.</li>
                <li><strong>Cardiovascular Diseases (Heart Attack, Stroke):</strong> As detailed above, the comprehensive improvements in heart function, blood pressure, and cholesterol directly translate to a significantly lower risk of these life-threatening conditions.</li>
                <li><strong>Certain Cancers:</strong> Research suggests that regular physical activity can lower the risk of several cancers, including colon, breast, and endometrial cancers, possibly due to improved immune function, reduced inflammation, and better hormone regulation.</li>
                <li><strong>Osteoporosis:</strong> Weight-bearing cardiovascular activities (like running, brisk walking, dancing) contribute to maintaining and improving bone density, reducing the risk of osteoporosis.</li>
            </ul>

            <h4>5. Powerful Mental Health and Cognitive Boost</h4>
            <ul>
                <li><strong>Stress and Anxiety Reduction:</strong> Exercise is a natural stress reliever. It helps decrease the levels of stress hormones like cortisol and adrenaline, while stimulating the production of feel-good endorphins.</li>
                <li><strong>Mood Enhancement:</strong> The release of endorphins can lead to a natural "runner's high" and sustained improvements in mood, helping to alleviate symptoms of depression and anxiety.</li>
                <li><strong>Improved Sleep Quality:</strong> Regular cardiovascular activity can help regulate your sleep-wake cycle, leading to faster sleep onset and deeper, more restorative sleep.</li>
                <li><strong>Enhanced Cognitive Function:</strong> Increased blood flow to the brain during and after exercise can improve memory, focus, and overall cognitive function. It may also promote the growth of new brain cells.</li>
            </ul>
            <p>Incorporating cardiovascular training into your routine is one of the most impactful decisions you can make for your immediate well-being and long-term health, offering benefits that extend far beyond simply improving your endurance.</p>
        `,
        duration: 1 // Duration set to 1 as per user instruction
    },
{
        type: 'lesson',
        title: 'Calculating Your Target Heart Rate Zones',
        content: `
            <h3>Train Smarter, Not Just Harder: Navigating Your Heart Rate Zones</h3>
            <p>To truly optimize your cardiovascular workouts and achieve specific fitness goals, understanding and utilizing target heart rate zones is key. Training within these zones ensures you're applying the right intensity for the desired physiological adaptations, whether it's building endurance, improving fat-burning efficiency, or enhancing performance.</p>

            <h4>Why Monitor Your Heart Rate?</h4>
            <ul>
                <li><strong>Objective Intensity Measurement:</strong> Heart rate provides a quantifiable and objective measure of your workout intensity, unlike subjective feelings alone.</li>
                <li><strong>Goal-Specific Training:</strong> Different heart rate zones correspond to different physiological responses, allowing you to tailor your workout for specific outcomes (e.g., fat loss, endurance improvement, speed).</li>
                <li><strong>Prevent Overtraining/Undertraining:</strong> Helps ensure you're not pushing too hard (risk of overtraining) or not hard enough (insufficient stimulus for adaptation).</li>
                <li><strong>Track Progress:</strong> A decreasing resting heart rate or the ability to perform at a higher intensity within the same heart rate zone indicates improved fitness.</li>
            </ul>

            <h4>Estimating Your Maximum Heart Rate (MHR)</h4>
            <p>Your Maximum Heart Rate (MHR) is the highest number of beats per minute your heart can possibly achieve during maximal exertion. While laboratory tests are the most accurate, here are common estimation methods:</p>
            <ul>
                <li><strong>Age-Predicted Max Heart Rate (APMHR): The 220 - Age Formula</strong>
                    <p>The most common and simplest formula is: <code>MHR = 220 - Your Age</code>. For example, a 30-year-old would have an estimated MHR of 190 bpm (220 - 30).</p>
                    <p><strong>Limitations:</strong> This is a general estimate and can vary significantly among individuals. It doesn't account for individual differences in fitness levels or genetics.</p>
                </li>
                <li><strong>Karvonen Formula (Heart Rate Reserve Method) - A More Precise Approach</strong>
                    <p>The Karvonen formula is generally considered more accurate because it takes into account your Resting Heart Rate (RHR), which reflects your current fitness level.</p>
                    <ol>
                        <li><strong>Measure your Resting Heart Rate (RHR):</strong> Take your pulse for a full minute immediately after waking up, before getting out of bed. Repeat for a few days and average the results.</li>
                        <li><strong>Calculate Heart Rate Reserve (HRR):</strong> <code>HRR = MHR (from 220-age) - RHR</code></li>
                        <li><strong>Calculate Target Heart Rate (THR):</strong> <code>THR = (HRR × % Intensity) + RHR</code></li>
                    </ol>
                    <p><strong>Example (for a 30-year-old with MHR=190, RHR=60):</strong></p>
                    <p>To train at 70% intensity:</p>
                    <ul>
                        <li>HRR = 190 - 60 = 130</li>
                        <li>THR = (130 × 0.70) + 60 = 91 + 60 = 151 bpm</li>
                    </ul>
                </li>
            </ul>

            <h4>Understanding Your Heart Rate Zones and Their Benefits</h4>
            <p>These zones are percentages of your Maximum Heart Rate, each designed to elicit different physiological adaptations:</p>
            <ul>
                <li><strong>Zone 1: Very Light (50-60% of MHR)</strong>
                    <ul>
                        <li><strong>Purpose:</strong> Recovery, warm-up, cool-down, preparing for or cooling down from more intense exercise. Improves overall health and aids in reducing soreness.</li>
                        <li><strong>Fuel:</strong> Almost exclusively fat.</li>
                        <li><strong>Feeling:</strong> Very easy, comfortable breathing, can hold a full conversation.</li>
                    </ul>
                </li>
                <li><strong>Zone 2: Light / Fat Burning (60-70% of MHR)</strong>
                    <ul>
                        <li><strong>Purpose:</strong> Building aerobic base, improving cardiovascular endurance, optimal for long-duration LISS cardio. Highly effective for fat oxidation.</li>
                        <li><strong>Fuel:</strong> Primarily fat, with some carbohydrates.</li>
                        <li><strong>Feeling:</strong> Comfortable, can talk easily but breathing is more noticeable.</li>
                    </ul>
                </li>
                <li><strong>Zone 3: Moderate / Aerobic (70-80% of MHR)</strong>
                    <ul>
                        <li><strong>Purpose:</strong> Enhancing aerobic fitness and endurance, improving the efficiency of your cardiovascular system.</li>
                        <li><strong>Fuel:</strong> Mix of fat and carbohydrates.</li>
                        <li><strong>Feeling:</strong> Moderate effort, can speak in short sentences, breathing is deeper and more labored.</li>
                    </ul>
                </li>
                <li><strong>Zone 4: Hard / Anaerobic Threshold (80-90% of MHR)</strong>
                    <ul>
                        <li><strong>Purpose:</strong> Pushing your anaerobic threshold, improving speed endurance and your body's ability to clear lactate. Used in vigorous LISS or interval training.</li>
                        <li><strong>Fuel:</strong> Primarily carbohydrates.</li>
                        <li><strong>Feeling:</strong> Difficult to speak, breathing is heavy and rapid, muscles may start to feel a burning sensation.</li>
                    </ul>
                </li>
                <li><strong>Zone 5: Maximal / Redline (90-100% of MHR)</strong>
                    <ul>
                        <li><strong>Purpose:</strong> Maximal effort, typically for very short intervals in HIIT. Improves maximal performance, speed, and power.</li>
                        <li><strong>Fuel:</strong> Almost exclusively carbohydrates.</li>
                        <li><strong>Feeling:</strong> Unsustainable for more than very short periods, gasping for breath, muscles feel exhausted.</li>
                    </ul>
                </li>
            </ul>

            <h4>Practical Application and Monitoring</h4>
            <p>To effectively train within your target zones, you can use:</p>
            <ul>
                <li><strong>Wearable Devices:</strong> Smartwatches, fitness trackers, and chest strap heart rate monitors provide real-time data. Chest straps are generally considered the most accurate for continuous monitoring.</li>
                <li><strong>Manual Pulse Checks:</strong> Count your pulse at your wrist or neck for 15 seconds and multiply by 4 to get beats per minute.</li>
            </ul>
            <p>Remember that factors like stress, caffeine, medication, dehydration, and environmental conditions (heat, altitude) can all affect your heart rate. It's often beneficial to use the Rate of Perceived Exertion (RPE) in conjunction with heart rate monitoring for a more holistic understanding of your body's response to exercise.</p>
        `,
        duration: 1 // Duration set to 1 as per user instruction
    },
    {
        type: 'quiz',
        title: 'Quiz: Cardio Intensity',
        question: 'A 40-year-old individual has a resting heart rate (RHR) of 65 bpm. If they want to train to improve their cardiovascular endurance within the moderate aerobic zone (70-80% of MHR using the Karvonen formula), which of the following heart rate ranges represents their target zone?',
        options: [
            '110-125 bpm',
            '130-145 bpm',
            '146-157 bpm',
            '160-170 bpm'
        ],
        correctAnswer: 2, // 146-157 bpm (Calculation: MHR = 220-40=180. HRR = 180-65=115. 70%: (115*0.7)+65 = 145.5. 80%: (115*0.8)+65 = 157)
        duration: 1,
        completed: false
    },
{
        type: 'lesson',
        title: 'Progressing Your Cardio Workouts',
        content: `
            <h3>Continuously Challenging Your Cardiovascular System: The Principle of Progressive Overload in Cardio</h3>
            <p>Just like with strength training, your cardiovascular system adapts to the demands placed upon it. To continue seeing improvements in endurance, heart health, and overall fitness, you must continually challenge your body beyond its current capabilities. This is the essence of **progressive overload** applied to cardiovascular training. Without it, your body will plateau, and your progress will stall.</p>

            <h4>Key Ways to Progress Your Cardio Workouts:</h4>

            <h5>1. Increase Duration (Time)</h5>
            <ul>
                <li><strong>How:</strong> Gradually extend the length of your cardio sessions.
                    <ul>
                        <li><strong>Example:</strong> If you currently jog for 30 minutes, aim to increase it to 33-35 minutes next week. A general guideline is to increase duration by no more than 10% per week to allow for proper adaptation and avoid overuse injuries.</li>
                    </ul>
                </li>
                <li><strong>Benefits:</strong> Directly improves aerobic capacity, endurance, and calorie expenditure.</li>
                <li><strong>Applicable To:</strong> Most effective for LISS cardio, but can also involve extending the total workout time for HIIT sessions (e.g., adding more rounds).</li>
            </ul>

            <h5>2. Increase Frequency (How Often)</h5>
            <ul>
                <li><strong>How:</strong> Add more cardio sessions to your weekly routine.
                    <ul>
                        <li><strong>Example:</strong> If you currently do cardio 3 times a week, try adding a fourth session.</li>
                    </ul>
                </li>
                <li><strong>Benefits:</strong> Provides more consistent stimulus for adaptation, leading to faster improvements in cardiovascular fitness.</li>
                <li><strong>Considerations:</strong> Ensure adequate recovery between sessions, especially if intensity is also high.</li>
            </ul>

            <h5>3. Increase Intensity (How Hard)</h5>
            <p>This is a powerful way to challenge your cardiovascular system and can be applied in several ways:</p>
            <ul>
                <li><strong>Speed/Pace:</strong>
                    <ul>
                        <li><strong>Example (Running/Cycling):</strong> Increase your average speed or pace for the duration of your workout. If you do interval training (HIIT), increase the speed during your high-intensity work intervals.</li>
                    </ul>
                </li>
                <li><strong>Resistance/Incline/Elevation:</strong>
                    <ul>
                        <li><strong>Example (Treadmill/Elliptical):</strong> Increase the incline.</li>
                        <li><strong>Example (Cycling):</strong> Increase the resistance.</li>
                        <li><strong>Example (Outdoors):</strong> Incorporate hills into your runs or rides.</li>
                    </ul>
                </li>
                <li><strong>Heart Rate Zones/RPE:</strong>
                    <ul>
                        <li><strong>How:</strong> Aim to spend more time in higher heart rate zones (e.g., moving from primarily Zone 2 to spending more time in Zone 3) while maintaining the same duration. Alternatively, if your fitness improves, you'll notice your heart rate is lower at a given pace, allowing you to increase pace to hit the same target zone.</li>
                        <li><strong>Feeling:</strong> Increase your Rate of Perceived Exertion (RPE) for a given duration.</li>
                    </ul>
                </li>
                <li><strong>HIIT-Specific Progression:</strong>
                    <ul>
                        <li>Decrease recovery periods between high-intensity intervals.</li>
                        <li>Increase the duration of your work intervals.</li>
                        <li>Increase the number of total intervals/rounds in a session.</li>
                        <li>Perform work intervals at an even higher maximal effort.</li>
                    </ul>
                </li>
            </ul>

            <h5>4. Vary Activities (Type/Modality)</h5>
            <ul>
                <li><strong>How:</strong> Introduce new forms of cardiovascular exercise or combine different types.
                    <ul>
                        <li><strong>Example:</strong> If you always run, try swimming, cycling, or rowing. Incorporate activities like dancing or sports.</li>
                    </ul>
                </li>
                <li><strong>Benefits:</strong>
                    <ul>
                        <li>Challenges your body in new ways, recruiting different muscle groups and placing varied demands on your cardiovascular system.</li>
                        <li>Helps prevent overuse injuries by distributing stress across different joints and muscles.</li>
                        <li>Keeps workouts fresh and prevents boredom, aiding consistency.</li>
                        <li>Can improve overall athleticism and reduce muscular imbalances.</li>
                    </ul>
                </li>
            </ul>

            <h4>Smart Progression and Listening to Your Body:</h4>
            <p>While progressive overload is vital, it's equally important to progress intelligently. Avoid making drastic jumps in intensity or volume, which can lead to overtraining, burnout, or injury. Listen to your body, ensure adequate rest and nutrition, and consider incorporating "deload" weeks where you intentionally reduce intensity or volume to allow for full recovery and adaptation. This strategic variation and recovery are key aspects of **periodization**, ensuring continuous and sustainable progress over the long term.</p>
        `,
        duration: 1 // Duration set to 1 as per user instruction
    },
{
        type: 'lesson',
        title: 'Common Types of Cardiovascular Exercises',
        content: `
            <h3>A Variety of Ways to Get Your Heart Pumping: Exploring Cardio Modalities</h3>
            <p>While running and cycling are popular choices, the world of cardiovascular exercise is incredibly diverse, offering a multitude of engaging and effective ways to boost your heart health, improve endurance, and burn calories. Choosing activities you enjoy and varying your routine can enhance consistency and prevent boredom.</p>

            <h4>Popular Cardiovascular Exercise Types:</h4>

            <h5>1. Walking</h5>
            <ul>
                <li><strong>Description:</strong> The most accessible form of cardio, ranging from a leisurely stroll to a brisk power walk or vigorous hiking.</li>
                <li><strong>Benefits:</strong> Low-impact, easy on joints, suitable for all fitness levels. Can be easily incorporated into daily life. Helps with general health, stress reduction, and can be social.</li>
                <li><strong>Progression:</strong> Increase speed, duration, incline (hills or treadmill), or incorporate weighted vests.</li>
            </ul>

            <h5>2. Running</h5>
            <ul>
                <li><strong>Description:</strong> A high-impact activity that can range from light jogging to intense sprinting.</li>
                <li><strong>Benefits:</strong> Excellent for calorie burning, improving cardiovascular endurance, increasing bone density, and enhancing leg strength. Can be done outdoors or indoors on a treadmill.</li>
                <li><strong>Considerations:</strong> Higher impact on joints; proper footwear and form are crucial to prevent injuries. Can be adapted for LISS or HIIT.</li>
            </ul>

            <h5>3. Cycling</h5>
            <ul>
                <li><strong>Description:</strong> Includes outdoor road or mountain biking, as well as indoor stationary bikes or spin classes.</li>
                <li><strong>Benefits:</strong> Low-impact, making it a great option for individuals with joint sensitivities or injuries. Builds leg strength and endurance. Spin classes offer a motivating group environment.</li>
                <li><strong>Progression:</strong> Increase speed, resistance, duration, or tackle more challenging terrain (hills).</li>
            </ul>

            <h5>4. Swimming</h5>
            <ul>
                <li><strong>Description:</strong> A full-body, non-impact exercise performed in water.</li>
                <li><strong>Benefits:</strong> One of the best low-impact options, excellent for joint health. Engages upper body, core, and lower body. Dramatically improves lung capacity and cardiovascular efficiency without putting stress on weight-bearing joints. Great for recovery.</li>
                <li><strong>Progression:</strong> Increase laps, speed, incorporate different strokes, or use resistance paddles.</li>
            </ul>

            <h5>5. Rowing</h5>
            <ul>
                <li><strong>Description:</strong> Typically performed on an indoor rowing machine (ergometer), but also includes outdoor sculling. It's a seated, full-body movement.</li>
                <li><strong>Benefits:</strong> Engages approximately 85% of your muscles (legs, core, back, arms). It's low-impact, provides both cardiovascular and strength benefits, and can be adapted for LISS or HIIT workouts. Excellent for overall conditioning.</li>
                <li><strong>Progression:</strong> Increase stroke rate, resistance, duration, or incorporate interval training.</li>
            </ul>

            <h5>6. Jumping Rope (Skipping)</h5>
            <ul>
                <li><strong>Description:</strong> A high-intensity, full-body exercise using a jump rope.</li>
                <li><strong>Benefits:</strong> Incredibly efficient for calorie burning in a short amount of time. Improves cardiovascular fitness, coordination, agility, footwork, and bone density. Portable and inexpensive.</li>
                <li><strong>Considerations:</strong> High impact; requires good coordination and proper technique to avoid injury.</li>
            </ul>

            <h5>7. Dancing</h5>
            <ul>
                <li><strong>Description:</strong> Includes a wide range of styles from structured aerobics and Zumba to freestyle and ballroom dancing.</li>
                <li><strong>Benefits:</strong> A fun and highly engaging way to get your heart rate up. Improves cardiovascular health, coordination, balance, flexibility, and mood. Offers a social element.</li>
                <li><strong>Progression:</strong> Increase duration, intensity of movements, or learn more complex routines.</li>
            </ul>

          <h5>8. Group Fitness Classes</h5>
            <ul>
                <li><strong>Description:</strong> Structured exercise sessions led by an instructor in a group setting. Can include various modalities like aerobics, spinning, Zumba, HIIT, bootcamp, or dance fitness.</li>
                <li><strong>Benefits:</strong> High motivation from group energy and instructor guidance. Provides structured workouts, often with music, which can make exercise more enjoyable. Offers variety and a sense of community.</li>
                <li><strong>Progression:</strong> Attend more frequently, choose higher intensity classes, increase effort within the class, or aim for more challenging modifications.</li>
            </ul>
            <p>Varying your cardiovascular activities not only prevents boredom but also challenges your body in different ways, leading to more comprehensive fitness improvements.</p>
        `,
        duration: 1
    },
     {
        type: 'quiz',
        title: 'Quiz: Cardio Progression & Variety',
        question: 'A seasoned runner consistently completes 30-minute runs at a moderate pace (RPE 5-6) three times a week. To effectively apply progressive overload and further enhance their cardiovascular endurance, which of the following strategies would be most effective while considering varied stimuli?',
        options: [
            'Continue running 30 minutes at the same pace, but add a fourth session per week of the exact same type and intensity.',
            'Immediately increase all three run durations to 60 minutes and their pace to an RPE of 8 on all sessions.',
            'Introduce two short (15-20 min) HIIT sprint sessions at an RPE of 9-10 into their week, while maintaining two longer moderate runs.',
            'Switch to only low-intensity walking for all sessions to focus solely on active recovery.'
        ],
        correctAnswer: 2, // Introduce two short (15-20 min) HIIT sprint sessions at an RPE of 9-10 into their week, while maintaining two longer moderate runs.
        duration: 1,
         completed: false
    },

    // --- Module 4: Recovery & Mindset ---
{
        type: 'lesson',
        title: 'The Importance of Recovery and Sleep',
        content: `
            <h3>Optimal Performance Through Rest: The Crucial Role of Recovery and Sleep in Fitness</h3>
            <p>In the pursuit of fitness goals, training and nutrition often take center stage. However, it's during the often-overlooked phase of **recovery** that your body truly adapts, strengthens, and prepares for future challenges. Without adequate recovery, even the most perfectly designed training plan and diet will lead to stalled progress, increased injury risk, and burnout. At the core of effective recovery lies quality sleep.</p>

            <h4>Why is Recovery So Crucial? (The Science of Adaptation)</h4>
            <p>Recovery is not just about resting; it's an active biological process where your body repairs the stress induced by exercise:</p>
            <ul>
                <li><strong>Muscle Repair and Growth (Anabolism):</strong> During workouts, tiny micro-tears occur in your muscle fibers. Recovery is when these tears are repaired and rebuilt stronger through protein synthesis, leading to muscle hypertrophy (growth). Without sufficient rest, this repair process is incomplete, hindering gains.</li>
                <li><strong>Glycogen Replenishment:</strong> Intense exercise depletes your muscle and liver glycogen (stored carbohydrate) stores. Recovery time allows your body to replenish these energy reserves, ensuring you have fuel for your next workout.</li>
                <li><strong>Nervous System Restoration:</strong> High-intensity training places significant stress on your central nervous system (CNS). Recovery provides the CNS time to recuperate, preventing fatigue, irritability, and decreased performance often associated with CNS overtraining. It helps balance the sympathetic (fight-or-flight) and parasympathetic (rest-and-digest) nervous systems.</li>
                <li><strong>Hormonal Balance:</strong> Recovery is vital for regulating key hormones involved in growth and repair, such as growth hormone and testosterone. It also helps manage stress hormones like cortisol, which, if chronically elevated, can hinder recovery and muscle growth.</li>
                <li><strong>Immune System Support:</strong> Intense training can temporarily suppress your immune system, making you more susceptible to illness. Adequate recovery strengthens your immune defenses.</li>
            </ul>

            <h4>The Unrivaled Power of Sleep</h4>
            <p>Sleep is arguably the most critical component of recovery. It's during specific sleep stages that the most profound reparative processes occur:</p>
            <ul>
                <li><strong>Deep Sleep (Non-REM Stage 3 & 4):</strong> This is the most physically restorative stage. Your body releases the majority of its daily growth hormone, essential for muscle repair, fat metabolism, and bone growth. Blood flow to muscles increases, and energy stores (glycogen) are replenished.</li>
                <li><strong>REM Sleep (Rapid Eye Movement):</strong> While less about physical repair, REM sleep is crucial for cognitive function, memory consolidation, emotional regulation, and mental restoration. It helps reduce mental fatigue and improve focus for future training.</li>
            </ul>
            <p><strong>Consequences of Insufficient Sleep:</strong> Chronic sleep deprivation (less than 7-9 hours for most adults) can severely undermine your fitness efforts:</p>
            <ul>
                <li>Decreased athletic performance (strength, power, endurance, reaction time).</li>
                <li>Increased risk of injury due to impaired decision-making and reduced motor control.</li>
                <li>Hormonal imbalances (e.g., increased ghrelin/appetite, decreased leptin/satiety, higher cortisol).</li>
                <li>Impaired glucose metabolism and insulin sensitivity.</li>
                <li>Reduced immune function.</li>
                <li>Poor mood, irritability, and decreased motivation.</li>
                <li>Impaired cognitive function and focus.</li>
            </ul>
            <p><strong>Sleep Hygiene Tips:</strong> To optimize your sleep, consider:</p>
            <ul>
                <li>Maintaining a consistent sleep schedule, even on weekends.</li>
                <li>Creating a dark, quiet, and cool sleep environment.</li>
                <li>Avoiding caffeine and heavy meals close to bedtime.</li>
                <li>Limiting screen time before sleep.</li>
                <li>Incorporating a relaxing pre-sleep routine.</li>
            </ul>

            <h4>Active vs. Passive Recovery Strategies</h4>
            <ul>
                <li><strong>Passive Recovery:</strong> Involves complete rest, such as scheduled rest days or simply sleeping. This allows the body to fully recuperate without any added stress.</li>
                <li><strong>Active Recovery:</strong> Involves low-intensity activity that increases blood flow without placing significant stress on the body.
                    <ul>
                        <li><strong>Examples:</strong> Light walking, cycling at a very easy pace, gentle stretching, foam rolling, or yoga.</li>
                        <li><strong>Benefits:</strong> Helps remove metabolic waste products (like lactate), reduces muscle soreness (DOMS), and can improve flexibility and mobility.</li>
                    </ul>
                </li>
            </ul>

            <h4>Signs of Insufficient Recovery (Overtraining Syndrome)</h4>
            <p>Ignoring recovery signals can lead to overtraining, a state of chronic fatigue and decreased performance. Be mindful of symptoms such as:</p>
            <ul>
                <li>Persistent muscle soreness or heavy legs.</li>
                <li>Decreased performance in workouts (e.g., inability to lift previous weights, reduced endurance).</li>
                <li>Increased resting heart rate.</li>
                <li>Frequent illness or prolonged recovery from colds.</li>
                <li>Sleep disturbances (insomnia, restless sleep).</li>
                <li>Increased irritability, mood swings, or lack of motivation.</li>
                <li>Loss of appetite.</li>
                <li>Increased frequency of minor injuries.</li>
            </ul>
            <p>Prioritizing recovery and ensuring adequate, quality sleep are not just optional extras; they are fundamental pillars that directly underpin your ability to train effectively, adapt, and make consistent progress towards your fitness goals.</p>
        `,
        duration: 1 // Duration set to 1 as per user instruction
    },
{
        type: 'lesson',
        title: 'Motivation, Goal Setting, and Overcoming Setbacks',
        content: `
            <h3>The Mental Game of Fitness: Sustaining Your Journey with Motivation and Resilience</h3>
            <p>While physical training and nutrition form the bedrock of fitness, your mindset and mental approach are equally, if not more, critical for long-term adherence and success. Fitness is a journey filled with ups and downs, and the ability to navigate challenges, stay motivated, and adapt to setbacks defines true progress.</p>

            <h4>Understanding Motivation: Fueling Your Drive</h4>
            <p>Motivation is the driving force behind your actions. Recognizing its different forms can help you leverage it effectively:</p>
            <ul>
                <li><strong>Intrinsic Motivation:</strong>
                    <ul>
                        <li><strong>Description:</strong> Arises from within, driven by internal rewards. You engage in an activity because you genuinely enjoy it, find it satisfying, or feel a sense of accomplishment and mastery.</li>
                        <li><strong>Examples:</strong> The joy of a challenging workout, the feeling of improved energy, the satisfaction of learning a new skill, the sense of well-being after exercise.</li>
                        <li><strong>Long-Term Sustainability:</strong> Intrinsic motivation is generally more sustainable and powerful for long-term adherence, as it's less reliant on external factors.</li>
                    </ul>
                </li>
                <li><strong>Extrinsic Motivation:</strong>
                    <ul>
                        <li><strong>Description:</strong> Comes from outside yourself, driven by external rewards or avoidance of punishment.</li>
                        <li><strong>Examples:</strong> Losing weight for an event, winning a competition, receiving compliments, improving health markers (e.g., lower blood pressure), fitting into certain clothes.</li>
                        <li><strong>Role:</strong> Can be a great starting point to kickstart a fitness journey, but relying solely on extrinsic motivation can make consistency challenging once the external reward is achieved or the novelty wears off. The goal is often to transition towards more intrinsic drivers over time.</li>
                    </ul>
                </li>
            </ul>
            <p><strong>Strategies to Boost and Maintain Motivation:</strong></p>
            <ul>
                <li><strong>Find Enjoyment:</strong> Experiment with different activities until you find what you truly like.</li>
                <li><strong>Track Progress:</strong> Visualizing your improvements (even small ones) can be incredibly motivating.</li>
                <li><strong>Vary Your Routine:</strong> Keep workouts fresh to prevent boredom and stimulate new adaptations.</li>
                <li><strong>Workout with Others:</strong> A partner or group can provide accountability and make exercise more enjoyable.</li>
                <li><strong>Celebrate Small Victories:</strong> Acknowledge and reward your efforts for sticking to your plan, not just achieving big goals.</li>
                <li><strong>Mindful Movement:</strong> Focus on how your body feels and the positive sensations of exercise.</li>
            </ul>

            <h4>Strategic Goal Setting: The SMART Approach</h4>
            <p>Effective goal setting provides direction, clarity, and focus. The **SMART** framework ensures your goals are well-defined and achievable:</p>
            <ul>
                <li><strong>S - Specific:</strong> Clearly define what you want to achieve. (e.g., "Run a 5k race" instead of "Run more").</li>
                <li><strong>M - Measurable:</strong> Quantify your goal so you can track progress and know when you've achieved it. (e.g., "Run a 5k race in under 30 minutes" instead of "Run faster").</li>
                <li><strong>A - Achievable:</strong> Set realistic goals that challenge you without being impossible. Consider your current fitness level, time, and resources. (e.g., If you haven't run before, a sub-20 minute 5k might not be achievable in 3 months).</li>
                <li><strong>R - Relevant:</strong> Ensure your goal aligns with your broader health and fitness values and interests. Is it meaningful to you? (e.g., "Running a 5k aligns with my goal of improving cardiovascular health and completing a personal challenge").</li>
                <li><strong>T - Time-bound:</strong> Set a specific deadline for achieving your goal, which creates urgency and accountability. (e.g., "Run a 5k race in under 30 minutes by December 31st").</li>
            </ul>
            <p>It's beneficial to set both **long-term goals** (your ultimate destination) and **short-term goals** (the stepping stones that lead you there). Short-term goals provide regular successes that boost motivation.</p>

            <h4>Overcoming Setbacks and Building Resilience</h4>
            <p>Fitness journeys are rarely linear. Plateaus, injuries, busy schedules, illness, travel, or simply a dip in motivation are normal and inevitable. How you respond to these setbacks is crucial for long-term success.</p>
            <p><strong>Common Setbacks Include:</strong></p>
            <ul>
                <li><strong>Plateaus:</strong> When progress stalls despite consistent effort.</li>
                <li><strong>Injuries/Illness:</strong> Physical limitations requiring rest or modified training.</li>
                <li><strong>Time Constraints:</strong> Busy periods making consistent workouts difficult.</li>
                <li><strong>Lack of Immediate Results:</strong> Getting discouraged when progress isn't as fast as expected.</li>
                <li><strong>Demotivation:</strong> Feeling uninspired or losing interest.</li>
            </ul>
            <p><strong>Strategies for Overcoming Setbacks:</strong></p>
            <ul>
                <li><strong>Adapt, Don't Stop:</strong> Instead of quitting, modify your training. If injured, focus on non-impact exercises or areas of the body not affected. If short on time, do shorter, higher-intensity workouts.</li>
                <li><strong>Re-evaluate and Adjust Goals:</strong> Sometimes, goals need to be adjusted based on current circumstances. Be flexible.</li>
                <li><strong>Seek Support:</strong> Talk to a friend, family member, or fitness professional for encouragement and advice.</li>
                <li><strong>Focus on Consistency over Perfection:</strong> Small, consistent efforts (e.g., 15-minute walks) are always better than nothing and help maintain the habit.</li>
                <li><strong>Perspective Shift:</strong> View setbacks as temporary challenges and learning opportunities, not failures. What can you learn from this?</li>
                <li><strong>Self-Compassion:</strong> Be kind to yourself. Acknowledge the challenge without self-criticism, and then strategize your return.</li>
            </ul>
            <p><strong>Building Resilience:</strong> Resilience is the capacity to recover quickly from difficulties. In fitness, it means bouncing back from missed workouts, plateaus, or minor injuries without losing your overall commitment. It's a skill that improves with practice, each setback overcome strengthens your mental fortitude.</p>
            <p>A strong mindset, characterized by clear goals, intrinsic motivation, and unwavering resilience, is truly as important as your physical strength in achieving and sustaining a healthier, more active life.</p>
        `,
        duration: 1 // Duration set to 1 as per user instruction
    },
{
        type: 'lesson',
        title: 'Signs and Prevention of Overtraining',
        content: `
            <h3>Recognizing When to Rest: Avoiding Overtraining for Sustainable Progress</h3>
            <p>While pushing your limits is essential for progress, there's a critical point where more isn't better – it's detrimental. **Overtraining Syndrome (OTS)** occurs when the physical and psychological stress of training (and often life) consistently exceeds your body's capacity to recover and adapt. Unlike simple fatigue after a hard workout, OTS is a chronic state that leads to a decline in performance, increased injury risk, and significant negative impacts on your overall health and well-being.</p>

            <h4>Key Signs of Overtraining: When Your Body is Crying for Rest</h4>
            <p>Overtraining can manifest in various ways, affecting your performance, physical state, and even your mood. Pay attention to a combination of these indicators:</p>

            <h5>1. Performance Decline:</h5>
            <ul>
                <li><strong>Stalled or Regressed Progress:</strong> You're no longer getting stronger, faster, or fitter. Your lifts may feel heavier, runs slower, or endurance has decreased.</li>
                <li><strong>Increased RPE for Same Effort:</strong> A workout that used to feel moderate now feels extremely hard.</li>
                <li><strong>Lack of "Pep" or Enthusiasm:</strong> You dread workouts or feel unusually sluggish during them.</li>
                <li><strong>Decreased Coordination or Reaction Time:</strong> Noticing clumsiness or slower responses.</li>
            </ul>

            <h5>2. Physiological & Physical Symptoms:</h5>
            <ul>
                <li><strong>Persistent Fatigue:</strong> Feeling tired even after a full night's sleep or adequate rest days. This is a deep, unshakeable fatigue.</li>
                <li><strong>Prolonged Muscle Soreness (DOMS):</strong> Muscle soreness that lasts unusually long (more than 48-72 hours) or is more intense than usual for the given workout.</li>
                <li><strong>Increased Resting Heart Rate (RHR):</strong> Taking your pulse first thing in the morning before getting out of bed. A consistently elevated RHR (5-10+ beats higher than your baseline) can be a red flag.</li>
                <li><strong>Sleep Disturbances:</strong> Difficulty falling asleep, frequent waking, restless sleep, or waking up feeling unrefreshed despite getting enough hours.</li>
                <li><strong>Frequent Illness/Compromised Immune Function:</strong> More frequent colds, longer recovery from illness, or recurring minor infections.</li>
                <li><strong>Changes in Appetite:</strong> Persistent loss of appetite or, conversely, increased cravings for unhealthy foods.</li>
                <li><strong>Increased Incidence of Minor Injuries:</strong> Recurring strains, sprains, or nagging aches and pains (e.g., joint pain, shin splints) that don't resolve.</li>
                <li><strong>Hormonal Imbalances:</strong> In more severe cases, changes in cortisol, testosterone, and other hormone levels can occur.</li>
            </ul>

            <h5>3. Psychological & Emotional Symptoms:</h5>
            <ul>
                <li><strong>Irritability, Mood Swings, Anxiety, or Depression:</strong> Feeling unusually short-tempered, emotional, or generally down.</li>
                <li><strong>Loss of Motivation or Enjoyment:</strong> The activities you once loved now feel like a chore.</li>
                <li><strong>Difficulty Concentrating:</strong> Feeling mentally foggy or having trouble focusing.</li>
                <li><strong>Feeling Overwhelmed or Easily Stressed:</strong> Reduced ability to cope with daily stressors outside of training.</li>
            </ul>

            <h4>Key Prevention Strategies: Training Smart, Recovering Smarter</h4>
            <p>Preventing overtraining is about finding the right balance between challenging your body and allowing it sufficient time to adapt. This involves a holistic approach:</p>
            <ul>
                <li><strong>Smart Progressive Overload & Periodization:</strong>
                    <ul>
                        <li><strong>Gradual Increases:</strong> Avoid making drastic jumps in training volume or intensity. Stick to increments of no more than 10% per week for duration or intensity.</li>
                        <li><strong>Deload Weeks:</strong> Incorporate planned "deload" or recovery weeks (e.g., every 4-6 weeks) where you significantly reduce volume and/or intensity to allow your body to fully recover and supercompensate.</li>
                        <li><strong>Vary Intensity:</strong> Don't always train at maximal effort. Incorporate LISS sessions, moderate workouts, and recovery days alongside higher-intensity efforts.</li>
                    </ul>
                </li>
                <li><strong>Prioritize Recovery & Sleep:</strong>
                    <ul>
                        <li><strong>Adequate Sleep:</strong> Aim for 7-9 hours of quality sleep per night for most adults. Make sleep a non-negotiable part of your routine.</li>
                        <li><strong>Scheduled Rest Days:</strong> Incorporate 1-3 full rest days per week, depending on your training volume and intensity. Use active recovery on some of these days.</li>
                        <li><strong>Active Recovery:</strong> On rest days, engage in light activities like walking, gentle stretching, or foam rolling to promote blood flow and reduce soreness without adding significant stress.</li>
                    </ul>
                </li>
                <li><strong>Optimal Nutrition & Hydration:</strong>
                    <ul>
                        <li><strong>Adequate Calories:</strong> Ensure you're consuming enough calories to fuel your workouts and support recovery, especially if you have a high training volume.</li>
                        <li><strong>Macronutrient Balance:</strong> Prioritize sufficient protein intake for muscle repair and carbohydrates for glycogen replenishment. Healthy fats are also crucial.</li>
                        <li><strong>Hydration:</strong> Stay well-hydrated throughout the day, before, during, and after workouts.</li>
                    </ul>
                </li>
                <li><strong>Listen to Your Body:</strong>
                    <ul>
                        <li>Pay attention to subtle signals like persistent fatigue, unusual soreness, or a general feeling of "off-ness."</li>
                        <li>Use the RPE scale to gauge your effort level. If a workout feels harder than it should at a given intensity, it might be a sign to back off.</li>
                    </ul>
                </li>
                <li><strong>Manage Life Stress:</strong>
                    <ul>
                        <li>Recognize that stress from work, relationships, or other life factors adds to your body's overall stress burden.</li>
                        <li>Incorporate stress-reducing practices like meditation, mindfulness, deep breathing, or hobbies into your daily routine.</li>
                        <li>During highly stressful periods, consider temporarily reducing your training intensity or volume.</li>
                    </ul>
                </li>
                <li><strong>Incorporate Variety/Cross-Training:</strong>
                    <ul>
                        <li>Engage in different types of exercise (e.g., balance cardio with strength training, try new cardio modalities). This can reduce repetitive stress on specific joints and muscles while still providing a training stimulus.</li>
                    <li>Vary your exercises within your strength training routine to avoid overuse.</li>
                    </ul>
                </li>
            </ul>

            <h4>What to Do If You Suspect Overtraining:</h4>
            <p>If you recognize several signs of overtraining, the most important step is to act: take an immediate, complete break from intense training. This could mean a few days to a week or even more, depending on the severity of your symptoms. Focus entirely on rest, sleep, proper nutrition, hydration, and light active recovery. Consult a healthcare professional if symptoms are severe or persist.</p>
            <p>Remember, consistency over perfection. It's better to under-train slightly than to overtrain and be forced to take a long break due to injury or burnout. Listening to your body is your best guide for sustainable, long-term fitness progress.</p>
        `,
        duration: 1 // Duration set to 1 as per user instruction
    },
{
        type: 'lesson',
        title: 'Active vs. Passive Recovery Methods',
        content: `
            <h3>Optimizing Your Body's Repair Process: Harnessing Active and Passive Recovery</h3>
            <p>Recovery is not a passive state of doing nothing; it's a dynamic and intentional process crucial for maximizing your fitness gains, preventing injury, and maintaining long-term adherence to your training. Understanding the distinction between active and passive recovery, and when to utilize each, allows you to strategically support your body's repair and adaptation mechanisms.</p>

            <h4>1. Passive Recovery: Complete Rest for Deep Repair</h4>
            <ul>
                <li><strong>Definition:</strong> Passive recovery involves the complete absence of any structured physical activity or significant physical exertion. It is about allowing your body to fully de-stress and recuperate without adding any further physiological load.</li>
                <li><strong>Primary Methods:</strong>
                    <ul>
                        <li><strong>Sleep:</strong> This is the most powerful and non-negotiable form of passive recovery. During deep sleep (Non-REM stages 3 & 4), your body releases the majority of its daily growth hormone, crucial for muscle repair, cellular regeneration, and fat metabolism. It's also when your central nervous system (CNS) fully recharges, which is vital for maintaining performance and preventing mental fatigue.</li>
                        <li><strong>Complete Rest Days:</strong> These are days with no formal exercise. They provide an opportunity for mental relaxation, hormonal rebalancing, and allow all physiological systems to fully reset before the next training stimulus.</li>
                    </ul>
                </li>
                <li><strong>Benefits:</strong>
                    <ul>
                        <li>Maximal physiological repair and energy replenishment.</li>
                        <li>Full restoration of the central nervous system.</li>
                        <li>Reduced inflammation and stress markers.</li>
                        <li>Enhanced mental clarity and motivation for subsequent workouts.</li>
                    </ul>
                </li>
                <li><strong>When to Use:</strong> Essential after particularly intense training phases (e.g., a heavy lifting week, a long endurance event), during scheduled "deload" weeks, or when experiencing early signs of overtraining.</li>
            </ul>

            <h4>2. Active Recovery: Strategic Movement for Enhanced Blood Flow</h4>
            <ul>
                <li><strong>Definition:</strong> Active recovery involves performing low-intensity physical activity designed to promote blood flow, remove metabolic waste products, and reduce muscle soreness, without causing additional muscle damage or significant fatigue. The key is *very low intensity* – it should feel easy and refreshing, not like a workout.</li>
                <li><strong>Physiological Mechanisms & Benefits:</strong>
                    <ul>
                        <li><strong>Increased Blood Flow:</strong> Gentle movement enhances circulation, helping to deliver oxygen and nutrients to fatigued muscles and facilitate the removal of metabolic byproducts (like lactate and hydrogen ions) that accumulate during intense exercise.</li>
                        <li><strong>Reduced Muscle Soreness (DOMS):</strong> By promoting blood flow and gentle movement, active recovery can help alleviate stiffness and reduce the severity of delayed onset muscle soreness.</li>
                        <li><strong>Improved Mobility & Flexibility:</strong> Many active recovery methods incorporate light stretching or range-of-motion work, which can help maintain or improve flexibility and reduce muscle tension.</li>
                        <li><strong>Mental Boost:</strong> Can provide a sense of accomplishment and maintain routine without the mental drain of a hard session, often improving mood and reducing anxiety.</li>
                    </ul>
                </li>
                <li><strong>Specific Methods and Examples:</strong>
                    <ul>
                        <li><strong>Light Aerobic Activity:</strong> Brisk walking (not power walking), very easy cycling, leisurely swimming, or a slow pace on an elliptical. The intensity should be low enough that you can easily hold a conversation (RPE 2-3, or Zone 1-2 heart rate).</li>
                        <li><strong>Foam Rolling / Self-Myofascial Release (SMR):</strong> Using a foam roller or massage ball to apply pressure to tight muscles and fascia. This can help break up knots, improve tissue elasticity, and enhance local blood flow.</li>
                        <li><strong>Gentle Stretching / Yoga / Mobility Drills:</strong> Light, non-strenuous stretching (dynamic or gentle static holds) or simple mobility exercises that take your joints through their full range of motion. Avoid pushing into pain.</li>
                        <li><strong>Light Resistance Training:</strong> Very light weights with high repetitions, focusing purely on movement and blood flow, not muscle fatigue. This is a more advanced active recovery method.</li>
                    </ul>
                </li>
                <li><strong>When to Use:</strong> On scheduled rest days, the day after a very intense workout, or as a cool-down after a moderate-intensity session.</li>
            </ul>

            <h4>Integrating Both Types for Optimal Results</h4>
            <p>A well-rounded fitness program strategically incorporates both active and passive recovery. For instance, you might schedule:
            <ul>
                <li>3-4 intense training days (strength and/or cardio)</li>
                <li>1-2 active recovery days (light walk, foam rolling)</li>
                <li>1-2 complete passive rest days (focus on sleep)</li>
            </ul>
            The exact balance depends on your training volume, intensity, individual recovery needs, and overall life stress. The key is to listen to your body and recognize that recovery is an integral part of your training, not just a break from it.</p>
        `,
        duration: 1 // Duration set to 1 as per user instruction
    },
    {
        type: 'quiz',
        title: 'Quiz: Recovery Fundamentals',
        question: 'A dedicated individual consistently trains intensely for 6 days a week, often getting only 5-6 hours of sleep due to a demanding work schedule. They\'ve noticed a recent decline in their workout performance, persistent muscle soreness, and increased irritability. Based on the principles of recovery, what is the most likely issue they are experiencing and what immediate action should they take?',
        options: [
            'They are likely experiencing a common plateau; they should immediately increase their training volume and intensity.',
            'They are showing clear signs of overtraining; they should prioritize 1-2 complete rest days and consistently aim for 7-9 hours of quality sleep nightly.',
            'Their diet is likely inadequate; they should drastically cut carbohydrates to improve energy during workouts.',
            'They are not doing enough active recovery; they should add more high-intensity foam rolling sessions daily on top of their current training.'
        ],
        correctAnswer: 1, // They are showing clear signs of overtraining; they should prioritize 1-2 complete rest days and consistently aim for 7-9 hours of quality sleep nightly.
        duration: 1,
        completed: false
    },
{
        type: 'lesson',
        title: 'Improving Your Sleep Hygiene',
        content: `
            <h3>The Foundation of Recovery: Mastering Your Sleep Hygiene for Peak Performance</h3>
            <p>Quality sleep is not a luxury; it is a non-negotiable biological necessity and the absolute cornerstone of physical recovery, mental well-being, and optimal athletic performance. **Sleep hygiene** refers to a set of practices and habits that are necessary to have good nighttime sleep quality and full daytime alertness. By consciously improving your sleep hygiene, you can significantly enhance your body's ability to repair, adapt, and prepare for daily demands and future training.</p>

            <h4>Key Pillars of Effective Sleep Hygiene:</h4>

            <h5>1. Establish and Stick to a Consistent Sleep Schedule</h5>
            <ul>
                <li><strong>Why it's Crucial:</strong> Your body operates on a natural internal clock called the circadian rhythm. Going to bed and waking up at roughly the same time every single day, even on weekends, helps regulate this rhythm. Consistency signals to your body when to release sleep-inducing hormones (like melatonin) and when to prepare for wakefulness.</li>
                <li><strong>Practical Tip:</strong> Try to limit variations in your sleep schedule to no more than an hour on non-work days.</li>
            </ul>

            <h5>2. Optimize Your Sleep Environment for Comfort and Serenity</h5>
            <ul>
                <li><strong>Darkness:</strong> Light, especially blue light from electronic screens, suppresses melatonin production, making it harder to fall asleep.
                    <ul>
                        <li><strong>Practical Tip:</strong> Make your bedroom as dark as possible. Use blackout curtains, an eye mask, or cover any light-emitting electronics.</li>
                    </ul>
                </li>
                <li><strong>Quiet:</strong> Unwanted noise can disrupt sleep stages.
                    <ul>
                        <li><strong>Practical Tip:</strong> Use earplugs, white noise machines, or a fan to block out disruptive sounds.</li>
                    </ul>
                </li>
                <li><strong>Cool Temperature:</strong> Your body temperature naturally drops slightly as you prepare for sleep.
                    <ul>
                        <li><strong>Practical Tip:</strong> Keep your bedroom cool, ideally between 60-67°F (15-19°C). Adjust bedding and sleepwear accordingly.</li>
                    </ul>
                </li>
                <li><strong>Comfort:</strong> Ensure your mattress, pillows, and bedding are comfortable and supportive.</li>
            </ul>

            <h5>3. Be Mindful of Diet, Drinks, and Substances</h5>
            <ul>
                <li><strong>Caffeine:</strong> A powerful stimulant with a long half-life. Consuming caffeine too close to bedtime can significantly interfere with sleep onset and quality.
                    <ul>
                        <li><strong>Practical Tip:</strong> Avoid caffeine (coffee, tea, energy drinks, some sodas) at least 6-8 hours before your planned bedtime.</li>
                    </ul>
                </li>
                <li><strong>Alcohol:</strong> While it may initially make you feel drowsy, alcohol disrupts sleep architecture, particularly REM sleep, leading to fragmented and less restorative sleep later in the night.
                    <ul>
                        <li><strong>Practical Tip:</strong> Limit or avoid alcohol, especially in the hours leading up to sleep.</li>
                    </ul>
                </li>
                <li><strong>Heavy Meals:</strong> Eating large, rich, or spicy meals close to bedtime can cause indigestion, heartburn, and keep your digestive system working, interfering with sleep.
                    <ul>
                        <li><strong>Practical Tip:</strong> Aim to finish your last substantial meal at least 2-3 hours before bed. A light, easily digestible snack is usually fine if needed.</li>
                    </ul>
                </li>
                <li><strong>Nicotine:</strong> A stimulant that can also disrupt sleep. Avoid nicotine products close to bedtime.</li>
            </ul>

            <h5>4. Limit Screen Time and Blue Light Exposure Before Bed</h5>
            <ul>
                <li><strong>Why it's Crucial:</strong> Electronic devices emit blue light, which signals to your brain that it's daytime, suppressing melatonin production and altering your natural sleep cycle.</li>
                <li><strong>Practical Tip:</strong> Turn off phones, tablets, computers, and TVs at least 1-2 hours before bed. If you must use devices, use blue light filters or wear blue-light-blocking glasses.</li>
            </ul>

            <h5>5. Develop a Relaxing Pre-Sleep Routine</h5>
            <ul>
                <li><strong>Why it's Crucial:</strong> A consistent bedtime routine signals to your body and mind that it's time to wind down and prepare for sleep.</li>
                <li><strong>Examples of Relaxing Activities:</strong>
                    <ul>
                        <li>Reading a physical book (not on a screen).</li>
                        <li>Taking a warm bath or shower (the subsequent drop in body temperature can promote sleep).</li>
                        <li>Gentle stretching or restorative yoga.</li>
                        <li>Practicing meditation or deep breathing exercises.</li>
                        <li>Listening to calming music or a podcast.</li>
                    </ul>
                </li>
                <li><strong>Avoid:</strong> Engaging in stimulating activities like intense exercise, stressful work, emotional conversations, or consuming exciting media close to bedtime.</li>
            </ul>

            <h5>6. Time Your Exercise Wisely</h5>
            <ul>
                <li><strong>Why it's Crucial:</strong> Regular physical activity significantly improves sleep quality. However, intense exercise too close to bedtime can be stimulating and raise your core body temperature, making it harder to fall asleep.</li>
                <li><strong>Practical Tip:</strong> Aim to finish vigorous workouts at least 2-3 hours before your planned bedtime. Lighter activities like gentle stretching or a walk are fine closer to sleep.</li>
            </ul>

            <p>By consistently implementing these sleep hygiene practices, you create an environment and routine that supports your body's natural sleep processes. Prioritizing quality sleep will not only enhance your physical recovery and training results but also significantly improve your cognitive function, mood, energy levels, and overall quality of life.</p>
        `,
        duration: 1 // Duration set to 1 as per user instruction
    },
{
        type: 'lesson',
        title: 'Stress Management and Its Impact on Fitness',
        content: `
            <h3>The Mind-Body Connection: Navigating Stress for Optimal Fitness and Well-being</h3>
            <p>In the world of fitness, we often focus on physical exertion and nutritional intake. However, an equally profound, yet often underestimated, factor influencing your progress is **stress**. Your mind and body are intricately connected, and chronic stress can significantly derail your fitness journey, impacting everything from your hormones and recovery to your motivation and sleep quality. Learning effective stress management techniques is not just about mental well-being; it's a critical component of achieving and sustaining your physical health goals.</p>

            <h4>Understanding Stress: Acute vs. Chronic</h4>
            <ul>
                <li><strong>Acute Stress:</strong> This is the body's immediate, short-term "fight or flight" response to a perceived threat or challenge (e.g., a challenging workout, a sudden deadline). While intense, it's typically temporary and, in controlled doses (like during exercise), can even be beneficial, promoting adaptation.</li>
                <li><strong>Chronic Stress:</strong> This occurs when stress is prolonged, persistent, and your body's "fight or flight" system remains activated for extended periods without adequate relief. This is the problematic type of stress that negatively impacts health and fitness.</li>
            </ul>

            <h4>The Physiological Impact of Chronic Stress on Fitness</h4>
            <p>When chronic stress activates your sympathetic nervous system, it triggers a cascade of hormonal responses that can sabotage your fitness efforts:</p>
            <ul>
                <li><strong>Elevated Cortisol Levels:</strong> Cortisol, often called the "stress hormone," is essential in acute situations, but chronically high levels are detrimental.
                    <ul>
                        <li><strong>Fat Storage:</strong> Chronic cortisol promotes the storage of visceral fat (around internal organs), particularly in the abdominal area.</li>
                        <li><strong>Muscle Breakdown (Catabolism):</strong> Cortisol is catabolic, meaning it breaks down tissues. Chronically high levels can lead to muscle protein breakdown, hindering muscle growth and strength gains.</li>
                        <li><strong>Insulin Sensitivity:</strong> Can impair insulin sensitivity, increasing the risk of blood sugar dysregulation and type 2 diabetes.</li>
                    </ul>
                </li>
                <li><strong>Impaired Recovery:</strong> An overactive stress response drains your body's resources, making it harder for muscles to repair, glycogen stores to replenish, and the central nervous system to recover. This significantly increases your risk of overtraining.</li>
                <li><strong>Disrupted Sleep:</strong> Chronic stress makes it difficult to fall asleep, stay asleep, and achieve the deep, restorative sleep necessary for physical and mental recovery. This creates a vicious cycle where lack of sleep exacerbates stress.</li>
                <li><strong>Weakened Immune System:</strong> Sustained high cortisol levels can suppress your immune system, making you more susceptible to illness and delaying recovery from sickness.</li>
                <li><strong>Increased Inflammation:</strong> Chronic stress can contribute to systemic inflammation in the body, which hinders recovery and can contribute to various chronic diseases.</li>
                <li><strong>Digestive Issues:</strong> Stress can negatively impact gut motility and nutrient absorption.</li>
            </ul>

            <h4>The Psychological Impact of Chronic Stress on Fitness</h4>
            <p>Beyond the physical, chronic stress takes a significant toll on your mental state, which directly affects your adherence to a fitness regimen:</p>
            <ul>
                <li><strong>Decreased Motivation and Adherence:</strong> Feeling overwhelmed, exhausted, or irritable due to stress often leads to skipped workouts, poor food choices, and ultimately, abandoning healthy habits.</li>
                <li><strong>Increased Cravings:</strong> Many people turn to "comfort foods" (often high in sugar and unhealthy fats) during stressful periods.</li>
                <li><strong>Poor Decision-Making:</strong> Stress can impair cognitive function, leading to less thoughtful choices regarding training intensity, nutrition, and recovery.</li>
                <li><strong>Negative Mood:</strong> Irritability, anxiety, and feelings of being overwhelmed make the fitness journey less enjoyable and harder to sustain.</li>
            </ul>

            <h4>Effective Stress Management Techniques: Your Toolkit for Resilience</h4>
            <p>Learning to manage stress is not about eliminating it entirely, but about developing healthy coping mechanisms that help your body and mind return to a state of balance:</p>
            <ul>
                <li><strong>Mindfulness and Meditation:</strong> These practices train your mind to focus on the present moment, reduce rumination, and activate the parasympathetic (rest-and-digest) nervous system. Even 5-10 minutes daily can make a significant difference.</li>
                <li><strong>Deep Breathing Exercises:</strong> Simple yet powerful. Techniques like diaphragmatic breathing or box breathing can immediately lower heart rate and blood pressure, signaling to your body to relax.</li>
                <li><strong>Regular, Moderate Physical Activity:</strong> While *overtraining* adds stress, *moderate* and consistent exercise is a fantastic stress reliever. It helps burn off excess adrenaline and cortisol, releases endorphins (natural mood boosters), and provides a healthy outlet for tension.</li>
                <li><strong>Spending Time in Nature:</strong> Research shows that exposure to natural environments can significantly reduce stress hormones, lower blood pressure, and improve mood.</li>
                <li><strong>Engage in Hobbies and Interests:</strong> Dedicate time to activities you genuinely enjoy, offering a mental escape and a sense of fulfillment outside of your daily demands.</li>
                <li><strong>Prioritize Sleep:</strong> As discussed, adequate and quality sleep is fundamental for stress resilience.</li>
                <li><strong>Cultivate Social Connections:</strong> Spending time with supportive friends and family can provide emotional support and reduce feelings of isolation.</li>
                <li><strong>Effective Time Management and Prioritization:</strong> Learning to manage your schedule, delegate tasks, and say "no" can reduce feelings of overwhelm.</li>
                <li><strong>Journaling:</strong> Writing down your thoughts and feelings can help process emotions and gain perspective on stressors.</li>
                <li><strong>Professional Help:</strong> If stress feels overwhelming and persistently interferes with your life, seeking support from a therapist or counselor can provide valuable coping strategies.</li>
            </ul>
            <p>Viewing stress management as an integral part of your fitness regimen is crucial for holistic health. A balanced lifestyle that includes effective stress coping mechanisms will not only support your physical goals but also enhance your mental well-being, energy levels, and overall quality of life, allowing you to sustain your fitness journey with greater ease and enjoyment.</p>
        `,
        duration: 1 // Duration set to 1 as per user instruction
    },
{
        type: 'quiz',
        title: 'Quiz: Sleep & Stress',
        question: 'A client is consistently meeting their training volume goals but reports feeling chronically fatigued, is experiencing difficulty falling asleep, and has noticed increased belly fat despite generally adhering to their diet. They admit to high daily work stress. Which of the following is the most comprehensive explanation for their symptoms, and what primary advice should be given?',
        options: [
            'They are likely overtraining due to their high volume; they should immediately increase their calorie intake to fuel more intense workouts.',
            'Their increased belly fat is purely diet-related; they need to drastically cut all fats from their diet for rapid weight loss.',
            'Chronic stress is likely elevating cortisol, impairing recovery, disrupting sleep, and promoting fat storage; they need to prioritize stress management techniques and improved sleep hygiene.',
            'They need more active recovery; suggest adding daily intense foam rolling sessions to their existing intense training regimen.'
        ],
        correctAnswer: 2, // Chronic stress is likely elevating cortisol, impairing recovery, disrupting sleep, and promoting fat storage; they need to prioritize stress management techniques and improved sleep hygiene.
        duration: 1,
    completed: false
    },
{
        type: 'lesson',
        title: 'Building Consistent Habits & Mental Toughness',
        content: `
            <h3>From Discipline to Lifestyle: Cultivating Consistent Habits and Unyielding Mental Toughness for Lasting Fitness</h3>
            <p>While bursts of motivation can kickstart a fitness journey, long-term, sustainable success doesn't hinge on constant willpower. Instead, it's built upon the foundation of consistent habits and a resilient mindset. These elements transform fitness from a chore into an ingrained part of your lifestyle, allowing you to navigate challenges and continue progressing even when motivation wanes.</p>

            <h4>1. The Power of Consistent Habits: Automating Your Success</h4>
            <p>Habits are automated behaviors that require little conscious effort. Building strong fitness habits reduces decision fatigue and ensures you show up consistently.</p>
            <ul>
                <li><strong>Start Small, Build Big:</strong> Don't aim for perfection immediately. Begin with ridiculously small, manageable steps.
                    <ul>
                        <li><strong>Example:</strong> Instead of "I'll run 5 miles every day," start with "I'll put on my running shoes for 5 minutes." This builds the habit of starting.</li>
                    </ul>
                </li>
                <li><strong>Consistency Over Intensity (Especially Early On):</strong> Showing up consistently, even for short durations or lighter workouts, is more important for habit formation than hitting peak intensity every time. The goal is to solidify the behavior first.</li>
                <li><strong>Habit Stacking:</strong> Attach a new habit to an existing one. This uses existing routines as cues.
                    <ul>
                        <li><strong>Example:</strong> "After I finish my morning coffee (existing habit), I will do 10 minutes of stretching (new habit)."</li>
                    </ul>
                </li>
                <li><strong>Environmental Design:</strong> Make healthy choices the easy choices.
                    <ul>
                        <li><strong>Example:</strong> Lay out your workout clothes the night before, keep healthy snacks visible, pre-pack your gym bag.</li>
                    </ul>
                </li>
                <li><strong>Track Progress and Celebrate Wins:</strong> Visualizing your consistency (e.g., marking off days on a calendar, using a fitness tracker) and celebrating small accomplishments reinforces the habit loop and provides positive feedback.</li>
                <li><strong>Accountability:</strong> Share your goals with a friend, join a group, or work with a coach. External accountability can be a powerful motivator until habits become automatic.</li>
                <li><strong>Be Patient and Forgiving:</strong> Habits take time to form (often more than 21 days!). Don't let one missed day derail your entire progress. Acknowledge the slip, learn from it, and get back on track immediately.</li>
            </ul>

            <h4>2. Developing Mental Toughness: Pushing Through Discomfort</h4>
            <p>Mental toughness (or grit) is the psychological edge that helps you perform your best regardless of the circumstances. It's not about never feeling pain or doubt, but about controlling your response to them and persisting through adversity.</p>
            <ul>
                <li><strong>Define Your Strong "Why":</strong> Understand the deep-seated reasons behind your fitness journey. When challenges arise, connect back to this purpose. This internal drive fuels resilience more than external rewards.
                    <ul>
                        <li><strong>Example:</strong> "I train not just to lose weight, but to be strong and healthy enough to keep up with my kids, prevent future health issues, and feel confident in myself."</li>
                    </ul>
                </li>
                <li><strong>Embrace Discomfort and Reframe Challenges:</strong> Understand that growth happens outside your comfort zone. View physical or mental discomfort during workouts as a sign of progress and an opportunity to strengthen your mental resolve, rather than a signal to stop.</li>
                <li><strong>Positive Self-Talk and Affirmations:</strong> Your internal dialogue significantly impacts your performance. Replace negative or self-defeating thoughts with encouraging, constructive ones.
                    <ul>
                        <li><strong>Example:</strong> Instead of "I can't do this," try "This is tough, but I am strong enough to push through."</li>
                    </ul>
                </li>
                <li><strong>Visualization:</strong> Mentally rehearse successful workouts, achieving goals, or overcoming anticipated challenges. This builds confidence and prepares your mind.</li>
                <li><strong>Focus on the Process, Not Just the Outcome:</strong> Celebrate the effort, the consistency, and the small improvements in your training, rather than solely focusing on the end result. This fosters a sense of accomplishment during the journey.</li>
                <li><strong>Grit and Perseverance:</strong> Develop the long-term passion and sustained perseverance toward achieving your goals, even in the face of obstacles and plateaus. It's about showing up day after day, year after year.</li>
                <li><strong>Resilience:</strong> The ability to bounce back quickly from setbacks (injuries, missed workouts, slow progress) without letting them derail your overall commitment. Learn from them and adapt.</li>
                <li><strong>Control the Controllables:</strong> Focus your energy on what is within your power (your effort, your attitude, your choices) rather than worrying about external factors beyond your control.</li>
            </ul>

            <h4>The Synergy of Habits and Mental Toughness</h4>
            <p>Habits automate the fundamental actions – they get you to the gym, ensure you eat healthily most of the time, and establish your rest routine. Mental toughness then allows you to maximize those opportunities: to push harder when needed, to persist when tired, and to bounce back when things don't go as planned. Together, they create a robust framework for not just achieving, but sustaining, your fitness and health goals for a lifetime.</p>
        `,
        duration: 1 // Duration set to 1 as per user instruction
    },
    {
        type: 'quiz',
        title: 'Quiz: Habits & Mindset',
        question: 'Sarah wants to improve her fitness consistency but often struggles with motivation after a long workday. Her long-term goal is to run a 10K race in six months. Based on principles of habit building and mental toughness, which strategy combination would be most effective for her to implement daily?',
        options: [
            'Set a daily goal of running 5 miles immediately after work, relying solely on willpower, and using self-criticism if she misses a session.',
            'Focus exclusively on her 10K race outcome, ignore tracking small daily wins, and tell herself she\'s "not a real runner" whenever she feels tired.',
            'Establish a "habit stack" by laying out her running clothes before bed, committing to a 10-minute brisk walk immediately upon arriving home, and regularly visualizing herself successfully crossing the 10K finish line to build consistency and mental resilience.',
            'Delegate all household chores to free up time for intense, 90-minute gym sessions every evening, regardless of her energy levels or current fatigue.'
        ],
        correctAnswer: 2, // Establish a "habit stack" by laying out her running clothes before bed, committing to a 10-minute brisk walk immediately upon arriving home, and regularly visualizing herself successfully crossing the 10K finish line to build consistency and mental resilience.
        duration: 1,
        completed: false
    },

    // --- Module 5: Exercise Techniques and Modalities ---
    {
        type: 'lesson',
        title: 'Introduction to Bodyweight Training (Calisthenics)',
        content: `
            <h3>Mastering Your Own Body: An Introduction to Bodyweight Training (Calisthenics)</h3>
            <p><strong>Bodyweight training, commonly known as calisthenics</strong>, is a foundational and highly effective form of strength training that leverages your own body weight as resistance. Derived from the Greek words "kallos" (beauty) and "sthenos" (strength), calisthenics emphasizes grace, strength, and perfect body control. It's a versatile modality that requires minimal to no equipment, making it incredibly accessible and adaptable for individuals of all fitness levels.</p>

            <h4>Core Principles and Key Benefits of Bodyweight Training:</h4>
            <ul>
                <li><strong>Accessibility:</strong> No gym membership, expensive equipment, or even shoes are strictly required. You can perform effective workouts virtually anywhere – at home, in a park, or while traveling.</li>
                <li><strong>Functional Strength:</strong> Calisthenics exercises mimic natural human movement patterns (pushing, pulling, squatting, hinging, core bracing) that translate directly to improved performance in daily life and other sports.</li>
                <li><strong>Improved Mobility and Flexibility:</strong> Many bodyweight movements inherently encourage a full range of motion, helping to improve joint flexibility and overall mobility without dedicated stretching sessions.</li>
                <li><strong>Enhanced Core Stability:</strong> Nearly every bodyweight exercise requires significant core engagement to maintain proper form, balance, and transmit force, leading to a strong, stable trunk.</li>
                <li><strong>Better Body Control and Proprioception:</strong> By learning to manipulate your own body through space, you develop a heightened awareness of your body's position and movement, reducing injury risk and improving athletic prowess.</li>
                <li><strong>Scalability for All Levels:</strong> Whether you're a complete beginner or an advanced athlete, bodyweight exercises can be regressed (made easier) or progressed (made harder) to match your current strength and continuously challenge you.</li>
                <li><strong>Low Impact (Generally):</strong> Compared to lifting heavy external weights, many bodyweight exercises place less compressive stress on joints, making them a good option for joint health, though plyometric variations can be high impact.</li>
                <li><strong>Cost-Effective:</strong> Eliminates the need for expensive gym fees or home equipment.</li>
            </ul>

            <h4>Foundational Bodyweight Movements: Your Starting Point</h4>
            <p>These core exercises form the basis of a comprehensive bodyweight routine, engaging major muscle groups:</p>
            <ul>
                <li><strong>Push-ups:</strong> (Targets: Chest, Shoulders, Triceps, Core) - A fundamental upper body pushing exercise. Variations include incline, knee, or decline push-ups.</li>
                <li><strong>Squats (Bodyweight/Air Squats):</strong> (Targets: Quadriceps, Hamstrings, Glutes, Core) - Essential for lower body strength and mobility, mimicking sitting down and standing up.</li>
                <li><strong>Lunges:</strong> (Targets: Quadriceps, Hamstrings, Glutes, Balance) - Excellent for unilateral (single-leg) leg strength and improving balance.</li>
                <li><strong>Planks:</strong> (Targets: Core - Rectus Abdominis, Obliques, Transverse Abdominis, Lower Back) - A static exercise vital for building isometric core strength and stability, crucial for all movements.</li>
                <li><strong>Glute Bridges:</strong> (Targets: Glutes, Hamstrings, Lower Back) - Focuses on hip extension and strengthening the posterior chain.</li>
                <li><strong>Dips (Bench or Parallel Bars):</strong> (Targets: Triceps, Chest, Shoulders) - A powerful exercise for pushing strength, often performed using a sturdy bench or parallel bars.</li>
                <li><strong>Inverted Rows (Australian Pull-ups):</strong> (Targets: Back, Biceps, Forearms, Core) - While true pull-ups require a bar, inverted rows (performed under a sturdy table or low bar) are excellent for developing fundamental pulling strength in the back and biceps.</li>
            </ul>

            <h4>The Art of Progression & Regression: Continuously Challenging Yourself</h4>
            <p>The beauty of calisthenics lies in its infinite scalability. You can always make an exercise easier or harder:</p>
            <ul>
                <li><strong>To Regress (Make Easier):</strong>
                    <ul>
                        <li><strong>Change Leverage/Angle:</strong> Perform incline push-ups against a wall or elevated surface.</li>
                        <li><strong>Reduce Range of Motion:</strong> Partial squats or push-ups.</li>
                        <li><strong>Use Support:</strong> Hold onto a chair for balance during squats or lunges.</li>
                        <li><strong>Reduce Repetitions/Sets:</strong> Start with fewer reps or fewer rounds.</li>
                    </ul>
                </li>
                <li><strong>To Progress (Make Harder):</strong>
                    <ul>
                        <li><strong>Increase Repetitions/Sets/Duration:</strong> More reps per set, more sets, or increase time under tension (slower tempo, isometric holds).</li>
                        <li><strong>Decrease Rest Periods:</strong> Perform more work in less time.</li>
                        <li><strong>Increase Range of Motion:</strong> Go deeper into a squat or lunge.</li>
                        <li><strong>Change Leverage/Angle:</strong> Perform decline push-ups (feet elevated), or decline sit-ups.</li>
                        <li><strong>Add Instability:</strong> Single-leg squats (pistol squats), or single-arm push-ups (requires significant prior strength).</li>
                        <li><strong>Introduce Plyometrics:</strong> Explosive movements like jump squats or clapping push-ups.</li>
                        <li><strong>Advance to More Complex Movements:</strong> Progress towards exercises like handstands, L-sits, pull-ups, or muscle-ups (often requires external equipment like a bar).</li>
                    </ul>
                </li>
            </ul>
            <p>By understanding these foundational movements and the principles of progression and regression, you can design effective, full-body bodyweight workouts that continuously challenge you, regardless of your current fitness level. Calisthenics offers a pathway to not just physical strength, but also remarkable body control and functional fitness.</p>
        `,
        duration: 1 // Duration set to 1 as per user instruction
    },
    {
        type: 'quiz',
        title: 'Quiz: Training Modalities',
        question: 'A beginner client, John, wants to start strength training but has no access to a gym or equipment. He\'s currently unable to perform a full push-up from the floor. Based on the principles of bodyweight training and progression, which of the following is the most appropriate initial exercise recommendation for him to build foundational pushing strength?',
        options: [
            'Attempt 3 sets of 5 full push-ups from the floor until he masters them, even if it means struggling with form.',
            'Perform incline push-ups against a wall or elevated surface to decrease the resistance, focusing on proper form.',
            'Focus solely on pull-ups using a door frame until he can do 10 repetitions, as pulling strength is more important.',
            'Do 100 jumping jacks daily to improve his overall fitness before attempting any push movements.'
        ],
        correctAnswer: 1, // Perform incline push-ups against a wall or elevated surface to decrease the resistance, focusing on proper form.
        duration: 1,
        completed: false
    },
    {
        type: 'lesson',
        title: 'The Importance of Warm-ups and Cool-downs',
        content: `
            <h3>Prepare and Recover Effectively: The Essential Role of Warm-ups and Cool-downs in Your Fitness Routine</h3>
            <p>Often viewed as optional add-ons, warm-ups and cool-downs are, in fact, integral components of a safe, effective, and sustainable fitness regimen. They serve distinct but equally crucial purposes: warm-ups prepare your body for the stress of exercise, while cool-downs facilitate a gradual return to a resting state and aid in recovery, significantly reducing the risk of injury and enhancing overall performance.</p>

            <h4>1. The Warm-Up: Preparing Your Body for Action</h4>
            <p>A proper warm-up transitions your body from a resting state to an exercise-ready state, both physically and mentally. Skipping it can increase your risk of injury and limit your performance.</p>
            <h5>Purpose and Benefits:</h5>
            <ul>
                <li><strong>Increased Blood Flow and Oxygen Delivery:</strong> Elevates heart rate and sends more blood to working muscles, priming them for activity.</li>
                <li><strong>Raised Core Body Temperature:</strong> Warmer muscles are more elastic, less prone to tears, and their enzymatic activity (which fuels contractions) is optimized.</li>
                <li><strong>Improved Joint Mobility and Lubrication:</strong> Stimulates the production of synovial fluid, which lubricates joints, reducing friction and enhancing range of motion.</li>
                <li><strong>Enhanced Neuromuscular Activation:</strong> "Wakes up" the nervous system, improving the communication between your brain and muscles, leading to better coordination, balance, and muscle recruitment.</li>
                <li><strong>Mental Preparation:</strong> Helps you mentally switch focus to the workout, improving concentration and exercise adherence.</li>
                <li><strong>Injury Prevention:</strong> Reduces the risk of muscle strains, sprains, and other acute injuries by preparing tissues for the demands of exercise.</li>
            </ul>
            <h5>Components of an Effective Warm-Up (Typically 10-15 minutes):</h5>
            <ol>
                <li><strong>General Warm-up (5-10 minutes):</strong> Light, low-intensity aerobic activity to gradually elevate heart rate and body temperature.
                    <ul>
                        <li><strong>Examples:</strong> Brisk walking, light jogging, cycling, elliptical, jumping jacks.</li>
                    </ul>
                </li>
                <li><strong>Dynamic Stretching (5-10 minutes):</strong> Movements that take your joints through their full range of motion. This is crucial because dynamic stretching activates muscles and improves functional mobility, whereas static stretching (holding a stretch for a period) before exercise can sometimes temporarily decrease power and strength.
                    <ul>
                        <li><strong>Examples:</strong> Arm circles, leg swings, torso twists, walking lunges with a twist, cat-cow, knee hugs to chest, glute kicks.</li>
                    </ul>
                </li>
                <li><strong>Specific Warm-up (Optional, for resistance training):</strong> If you're lifting weights, perform 1-2 light sets of the exact exercises you're about to do with very light weight or just your bodyweight, focusing on form.</li>
            </ol>

            <h4>2. The Cool-Down: Facilitating Recovery and Flexibility</h4>
            <p>The cool-down is just as important as the warm-up, allowing your body to gradually transition from an active state back to rest. It aids recovery and can contribute to long-term flexibility.</p>
            <h5>Purpose and Benefits:</h5>
            <ul>
                <li><strong>Gradual Return to Rest:</strong> Slowly decreases heart rate and breathing, preventing blood pooling in the extremities (which can cause dizziness or lightheadedness).</li>
                <li><strong>Waste Product Removal:</strong> Helps clear metabolic byproducts that accumulated during exercise, though its direct impact on DOMS is still debated by research.</li>
                <li><strong>Flexibility Enhancement:</strong> Muscles are warm and pliable after exercise, making it an ideal time to improve range of motion through stretching.</li>
                <li><strong>Injury Prevention (Long-term):</strong> Improved flexibility can contribute to better movement patterns and reduced chronic pain over time.</li>
                <li><strong>Mental Decompression:</strong> Provides a dedicated time to relax, reflect on your workout, and transition mentally from intense activity.</li>
            </ul>
            <h5>Components of an Effective Cool-Down (Typically 10-15 minutes):</h5>
            <ol>
                <li><strong>Light Aerobic Activity (5-10 minutes):</strong> Continue with the same activity you just performed but at a very low intensity.
                    <ul>
                        <li><strong>Examples:</strong> Slow walking, very light cycling, gentle swimming. The goal is to bring your heart rate down gradually.</li>
                    </ul>
                </li>
                <li><strong>Static Stretching (5-10 minutes):</strong> Hold stretches for major muscle groups for 15-30 seconds each, ensuring you stretch without bouncing. Focus on the muscles that were heavily used during your workout.
                    <ul>
                        <li><strong>Examples:</strong> Hamstring stretch, quad stretch, chest stretch, triceps stretch, calf stretch, hip flexor stretch. Stretch to the point of mild tension, never pain.</li>
                    </ul>
                </li>
            </ol>
            <p>By consistently incorporating both warm-ups and cool-downs into every training session, you not only make your workouts safer and more effective but also promote better recovery, reduce stiffness, and contribute to long-term physical health and performance.</p>
        `,
        duration: 1 // Duration set to 1 as per user instruction
    },
    {
        type: 'quiz',
        title: 'Quiz: Warm-up & Cool-down',
        question: 'After a vigorous strength training session, Sarah performs a cool-down. Which of the following activities is most appropriate to include during the static stretching portion of her cool-down, and why?',
        options: [
            'Dynamic leg swings, because they are excellent for increasing blood flow and preparing muscles for activity.',
            'Holding a hamstring stretch for 20-30 seconds, because muscles are warm and pliable after exercise, making it an ideal time to improve flexibility.',
            'High-intensity jumping jacks, because they help to keep the heart rate elevated and maximize calorie burn post-workout.',
            'Performing explosive plyometric push-ups, to maximize post-workout strength gains and overall power.'
        ],
        correctAnswer: 1, // Holding a hamstring stretch for 20-30 seconds, because muscles are warm and pliable after exercise, making it an ideal time to improve flexibility.
        duration: 1,
        completed: false
    },
    {
        type: 'lesson',
        title: 'Introduction to Weight Training: Free Weights vs. Machines',
        content: `
            <h3>Choosing Your Tools for Strength: A Comprehensive Look at Free Weights vs. Machines</h3>
            <p>Weight training, also known as resistance training, involves causing muscles to contract against an external resistance with the aim of increasing strength, power, endurance, or muscle mass. When embarking on a weight training journey, one of the first decisions you'll encounter is whether to use free weights or machines. Both have unique advantages and disadvantages, and understanding them is key to building an effective and sustainable program.</p>

            <h4>1. Free Weights: Functional Strength and Versatility</h4>
            <p><strong>Description:</strong> Free weights refer to any weight that is not attached to a machine. This includes barbells, dumbbells, kettlebells, and even medicine balls used for resistance. They offer a more "free" range of motion and rely on your body to stabilize the weight.</p>
            <h5>Advantages:</h5>
            <ul>
                <li><strong>Functional Strength & Real-World Application:</strong> Free weight exercises often mimic natural human movement patterns (like lifting, carrying, pushing, pulling). They engage multiple joints and muscle groups simultaneously, developing strength that directly translates to daily activities, sports, and overall athleticism.</li>
                <li><strong>Greater Stabilizer Muscle Activation:</strong> Because the weight is not fixed, your body must work harder to control and balance the load throughout the movement. This leads to increased engagement of smaller, stabilizing muscles, improving overall balance, coordination, and proprioception (your body's awareness in space).</li>
                <li><strong>Versatility & Adaptability:</strong> Free weights are incredibly versatile, allowing for a vast array of exercises and variations to target muscles from different angles. They also accommodate individual biomechanics more readily than fixed-path machines.</li>
                <li><strong>Enhanced Core Engagement:</strong> Most free weight exercises inherently demand significant core stability to maintain proper posture and transfer force efficiently.</li>
                <li><strong>Cost-Effective (for home gyms):</strong> While the initial investment might be higher, once purchased, there are no recurring fees, making them a good long-term option for home setups.</li>
            </ul>
            <h5>Considerations:</h5>
            <ul>
                <li><strong>Higher Skill Requirement:</strong> Free weight exercises typically have a steeper learning curve. They require more technical proficiency, coordination, and attention to form to be performed safely and effectively.</li>
                <li><strong>Greater Injury Risk (if form is poor):</strong> Due to the lack of external guidance, improper form with heavy free weights can significantly increase the risk of injury.</li>
                <li><strong>Need for Spotting:</strong> For heavier compound lifts (like barbell bench press or squats), a spotter is often recommended or necessary for safety.</li>
            </ul>
            <h5>Common Free Weight Exercises:</h5>
            <p>Barbell Squats, Dumbbell Lunges, Barbell Bench Press, Dumbbell Rows, Overhead Press, Deadlifts, Kettlebell Swings.</p>

            <h4>2. Weight Machines: Stability and Isolation</h4>
            <p><strong>Description:</strong> Weight machines are pieces of equipment that use a guided path to control the movement of the weight. This category includes fixed-path machines (e.g., leg press, chest press machine, lat pulldown) and cable machines (which offer more versatility than fixed-path but still guide the resistance).</p>
            <h5>Advantages:</h5>
            <ul>
                <li><strong>Beginner-Friendly & Easy to Learn:</strong> The fixed movement patterns of machines make them much easier to learn and perform correctly. This reduces the need for complex coordination and balance, allowing beginners to focus on muscle activation.</li>
                <li><strong>Isolation & Targeted Muscle Activation:</strong> Machines excel at isolating specific muscle groups, which can be beneficial for hypertrophy (muscle growth) or addressing muscular imbalances.</li>
                <li><strong>Safety:</strong> Generally considered safer for performing heavy lifts or training to muscle failure, as the weight is guided and often has safety mechanisms. This can be advantageous when training alone.</li>
                <li><strong>Useful for Rehabilitation:</strong> The controlled movement path can be beneficial for working around injuries or for early-stage rehabilitation, as it minimizes stress on surrounding joints and ligaments.</li>
                <li><strong>Reduced Need for Spotter:</strong> Most machine exercises can be performed without a spotter.</li>
            </ul>
            <h5>Considerations:</h5>
            <ul>
                <li><strong>Less Functional:</strong> The rigid movement patterns of machines often don't mimic real-world activities as closely, potentially leading to less transferable functional strength.</li>
                <li><strong>Less Stabilizer Muscle Activation:</strong> Because the machine provides stability, the smaller, supporting muscles are less engaged, which can limit overall coordination development.</li>
                <li><strong>Limited Versatility:</strong> Machines are often designed for a single or a limited number of movements, offering less variety compared to free weights.</li>
                <li><strong>May Not Fit All Body Types:</strong> Machine dimensions are standardized and may not align perfectly with every individual's unique limb lengths and biomechanics, potentially leading to awkward or uncomfortable positions.</li>
            </ul>
            <h5>Common Machine Exercises:</h5>
            <p>Leg Press, Chest Press Machine, Lat Pulldown Machine, Leg Extension, Hamstring Curl Machine, Cable Crossovers, Bicep Curl Machine.</p>

            <h4>Integrating Both for a Well-Rounded Program</h4>
            <p>Neither free weights nor machines are inherently "better"; they simply serve different purposes and offer distinct benefits. A well-rounded resistance training program often incorporates both:</p>
            <ul>
                <li><strong>For Beginners:</strong> Machines can be an excellent starting point to safely learn movement patterns, build foundational strength, and develop confidence before progressing to more complex free weight exercises.</li>
                <li><strong>For Intermediate to Advanced Lifters:</strong> Free weights are often used as the primary tools for compound, multi-joint exercises to build overall strength, power, and athleticism. Machines can then be utilized for accessory work, isolation exercises, or to work around specific fatigue or injury.</li>
                <li><strong>For Specific Goals:</strong> Machines might be prioritized for pure muscle hypertrophy in isolated areas or for rehabilitation. Free weights are often preferred for overall strength, power, and functional improvements.</li>
            </ul>
            <p>Regardless of your chosen tools, the paramount importance of **proper form** cannot be overstated. Always start with lighter weights or less resistance to master the movement pattern before gradually increasing the load. This approach ensures safety, maximizes effectiveness, and sets the stage for continuous progress in your strength journey.</p>
        `,
        duration: 1 // Duration set to 1 as per user instruction
    },
    {
        type: 'lesson',
        title: 'Foundational Upper Body Compound Exercises',
        content: `
            <h3>Building a Strong Upper Body: Mastering Foundational Compound Exercises</h3>
            <p>To build a truly strong, functional, and muscular upper body, your training program should be centered around **compound exercises**. Unlike isolation exercises (which target a single muscle and joint), compound movements involve multiple muscle groups and joints working together simultaneously. This makes them incredibly efficient for building overall strength, increasing muscle mass, enhancing functional fitness, and eliciting a significant metabolic response.</p>

            <h4>General Principles for Performing Compound Lifts:</h4>
            <ul>
                <li><strong>Prioritize Form Above All:</strong> Never compromise proper technique for heavier weight. Mastering form first is paramount for safety and effectiveness.</li>
                <li><strong>Progressive Overload:</strong> These are the exercises where you should consistently aim to progressively increase the weight, repetitions, or sets over time to continually challenge your muscles.</li>
                <li><strong>Dynamic Warm-up & Specific Activation:</strong> Always precede these lifts with a thorough dynamic warm-up and, for heavier lifts, 1-2 lighter sets of the exercise itself to activate the muscles and practice the movement pattern.</li>
                <li><strong>Breathing and Bracing:</strong> For most compound lifts, learning to brace your core effectively (like preparing for a punch) is crucial for spinal stability and force production. This often involves taking a deep breath and holding it during the heaviest part of the lift (Valsalva maneuver for advanced lifters).</li>
            </ul>

            <h4>Key Foundational Upper Body Compound Exercises:</h4>

            <h5>1. Bench Press (Barbell or Dumbbell)</h5>
            <ul>
                <li><strong>Movement Pattern:</strong> Horizontal Push</li>
                <li><strong>Primary Muscles Worked:</strong> Pectoralis Major (chest), Anterior Deltoids (front of shoulders), Triceps.</li>
                <li><strong>Stabilizer Muscles:</strong> Rotator cuff muscles, Latissimus Dorsi (lats), core.</li>
                <li><strong>Execution & Key Form Cues:</strong>
                    <ul>
                        <li>Lie on a flat or inclined bench with feet flat on the floor, creating a stable base.</li>
                        <li>Grip the barbell slightly wider than shoulder-width, or hold dumbbells with palms facing each other (neutral grip) or forward (pronated grip).</li>
                        <li>Retract and depress your shoulder blades (pull them back and down) to create a stable platform and protect your shoulders. Maintain a slight, natural arch in your lower back.</li>
                        <li>Lower the weight in a controlled manner to your mid-chest, keeping elbows tucked slightly (approx. 45-60 degrees from your body).</li>
                        <li>Press the weight back up powerfully, extending your arms without locking out your elbows excessively.</li>
                    </ul>
                </li>
                <li><strong>Variations:</strong> Incline Bench Press (emphasizes upper chest), Decline Bench Press (emphasizes lower chest), Dumbbell Bench Press (greater range of motion, more stabilizer work), Close-Grip Bench Press (emphasizes triceps).</li>
            </ul>

            <h5>2. Overhead Press (Barbell, Dumbbell, or Machine; Standing or Seated)</h5>
            <ul>
                <li><strong>Movement Pattern:</strong> Vertical Push</li>
                <li><strong>Primary Muscles Worked:</strong> Deltoids (shoulders – especially anterior and medial heads), Triceps.</li>
                <li><strong>Stabilizer Muscles:</strong> Upper back muscles (trapezius, rhomboids), core (especially for standing variations), glutes.</li>
                <li><strong>Execution & Key Form Cues:</strong>
                    <ul>
                        <li>For standing variations, brace your entire body: feet hip-width apart, core tight, glutes squeezed. For seated, ensure a supportive backrest.</li>
                        <li>Hold the barbell or dumbbells at shoulder height, just outside your shoulders.</li>
                        <li>Press the weight directly overhead in a straight line, locking out your elbows at the top. Your head should move slightly forward to allow a clear path for the bar.</li>
                        <li>Lower the weight in a controlled manner back to the starting position.</li>
                    </ul>
                </li>
                <li><strong>Variations:</strong> Seated Overhead Press (less core/lower body involvement), Dumbbell Overhead Press (more unilateral work, greater range of motion), Push Press (uses leg drive for heavier loads).</li>
            </ul>

            <h5>3. Barbell Rows (Bent-Over Rows)</h5>
            <ul>
                <li><strong>Movement Pattern:</strong> Horizontal Pull</li>
                <li><strong>Primary Muscles Worked:</strong> Latissimus Dorsi (lats), Rhomboids, Trapezius (mid and upper back), Biceps.</li>
                <li><strong>Stabilizer Muscles:</strong> Lower back erectors, hamstrings, glutes, core.</li>
                <li><strong>Execution & Key Form Cues:</strong>
                    <ul>
                        <li>Stand with feet hip-width apart, hinge at your hips, keeping your back straight (neutral spine, not rounded), and chest up, allowing your torso to be roughly parallel to the floor (or at a significant angle).</li>
                        <li>Grip the barbell with an overhand grip, slightly wider than shoulder-width.</li>
                        <li>Pull the bar towards your lower chest/upper abdomen, squeezing your shoulder blades together at the top of the movement. Imagine driving your elbows towards the ceiling.</li>
                        <li>Control the eccentric (lowering) phase, allowing the bar to return to the starting position without rounding your back or jerking the weight.</li>
                    </ul>
                </li>
                <li><strong>Variations:</strong> Pendlay Row (bar returns to floor each rep), Dumbbell Row (unilateral, allows for greater stretch), T-Bar Row.</li>
            </ul>

            <h5>4. Pull-ups / Chin-ups / Lat Pulldowns</h5>
            <ul>
                <li><strong>Movement Pattern:</strong> Vertical Pull</li>
                <li><strong>Primary Muscles Worked:</strong> Latissimus Dorsi (lats), Biceps, Rhomboids, Trapezius.</li>
                <li><strong>Stabilizer Muscles:</strong> Core, forearms.</li>
                <li><strong>Execution & Key Form Cues (for Pull-ups/Chin-ups):</strong>
                    <ul>
                        <li>Hang from a pull-up bar with an overhand grip (pull-up) or underhand grip (chin-up), hands slightly wider than shoulder-width.</li>
                        <li>Initiate the movement by depressing and retracting your shoulder blades, then pull your body up until your chin clears the bar.</li>
                        <li>Focus on driving your elbows down towards your hips.</li>
                        <li>Lower yourself in a controlled manner until your arms are fully extended. Avoid kipping (excessive swinging) if your goal is strength.</li>
                    </ul>
                </li>
                <li><strong>Execution & Key Form Cues (for Lat Pulldowns):</strong>
                    <ul>
                        <li>Sit at the lat pulldown machine, adjust knee pads, and grasp the bar with a wide grip (overhand).</li>
                        <li>Slightly lean back, engage your core, and pull the bar down towards your upper chest, squeezing your lats.</li>
                        <li>Control the weight as it returns to the starting position.</li>
                    </ul>
                </li>
                <li><strong>Variations:</strong> Assisted Pull-ups (machine or bands), Neutral-Grip Pull-ups, various grip widths.</li>
            </ul>
            <p>Incorporating these foundational upper body compound exercises into your routine will provide the most bang for your buck, efficiently building strength, muscle, and functional capacity across your entire upper body.</p>
        `,
        duration: 1 // Duration set to 1 as per user instruction
    },
    {
        type: 'lesson',
        title: 'Foundational Lower Body Compound Exercises',
        content: `
            <h3>Powering Your Lower Half: Mastering Foundational Lower Body Compound Exercises</h3>
            <p>The lower body is home to your largest and most powerful muscle groups, including the quadriceps, hamstrings, and glutes. Training these muscles effectively through compound exercises is paramount for developing overall strength, increasing athletic performance, boosting metabolism, and enhancing functional movement for daily life. These "big lifts" should form the cornerstone of any comprehensive strength training program.</p>

            <h4>General Principles for Performing Lower Body Compound Lifts:</h4>
            <ul>
                <li><strong>Unwavering Focus on Form:</strong> Due to the heavy loads often involved and the engagement of the spine, impeccable form is non-negotiable. Master the movement pattern before progressively adding weight.</li>
                <li><strong>Progressive Overload is Key:</strong> To continue gaining strength and muscle, you must consistently challenge your lower body by gradually increasing resistance, repetitions, sets, or decreasing rest times.</li>
                <li><strong>Thorough Warm-up:</strong> Always start with a dynamic warm-up that includes exercises to improve hip and ankle mobility, along with light sets of the actual exercises you plan to perform.</li>
                <li><strong>Robust Core Bracing:</strong> For exercises like squats and deadlifts, a strong, stable core is vital for protecting your spine and efficiently transferring force. Learn to brace your core as if preparing for a punch.</li>
            </ul>

            <h4>Key Foundational Lower Body Compound Exercises:</h4>

            <h5>1. Squats (Barbell Back Squat, Front Squat, Goblet Squat)</h5>
            <ul>
                <li><strong>Movement Pattern:</strong> Vertical Push (pushing the floor away from you to stand up).</li>
                <li><strong>Primary Muscles Worked:</strong> Quadriceps (front of thighs), Glutes (buttocks), Hamstrings (back of thighs), Adductors (inner thighs).</li>
                <li><strong>Stabilizer Muscles:</strong> Core (erector spinae, abdominals, obliques), calves, upper back (for bar stability in barbell squats).</li>
                <li><strong>Execution & Key Form Cues:</strong>
                    <ul>
                        <li>Stand with feet shoulder-width apart, toes slightly pointed out (adjust based on comfort and mobility).</li>
                        <li>Brace your core and initiate the movement by pushing your hips back and bending your knees simultaneously, as if sitting into a chair.</li>
                        <li>Keep your chest up, maintain a neutral spine, and ensure your knees track in line with your toes.</li>
                        <li>Descend to a depth that allows you to maintain good form (ideally hips below knees), then drive back up powerfully through your heels/midfoot.</li>
                    </ul>
                </li>
                <li><strong>Variations:</strong> Front Squat (bar on front of shoulders, more quad/core focus, less lower back), Goblet Squat (holding a single dumbbell/kettlebell at chest, excellent for beginners and core bracing), Zercher Squat, Box Squat.</li>
            </ul>

            <h5>2. Deadlifts (Conventional, Sumo, Romanian Deadlift - RDL)</h5>
            <ul>
                <li><strong>Movement Pattern:</strong> Hip Hinge (pulling from the floor, or hinging from the hips).</li>
                <li><strong>Primary Muscles Worked:</strong> Hamstrings, Glutes, Erector Spinae (lower back), Latissimus Dorsi (lats), Trapezius (traps), Forearms (grip).</li>
                <li><strong>Stabilizer Muscles:</strong> Entire posterior chain, core.</li>
                <li><strong>Execution & Key Form Cues (Conventional Deadlift):</strong>
                    <ul>
                        <li>Stand with feet hip-width apart, shins close to the barbell.</li>
                        <li>Hinge at your hips, then bend your knees to grip the bar with hands just outside your shins.</li>
                        <li>Ensure a neutral spine (flat back), chest up, and shoulders slightly ahead of the bar. Brace your core.</li>
                        <li>Initiate the pull by driving your feet through the floor, extending your knees and hips simultaneously. Keep the bar close to your body.</li>
                        <li>Lower the weight with control by reversing the movement, hinging at the hips first.</li>
                    </ul>
                </li>
                <li><strong>Variations:</strong> Sumo Deadlift (wider stance, toes out, more quad/adductor involvement), Romanian Deadlift (starts from the top, focuses on hamstring stretch and glute activation, does not touch the floor on each rep), Trap Bar Deadlift (easier to maintain upright torso).</li>
            </ul>

            <h5>3. Lunges (Dumbbell, Barbell, Bodyweight)</h5>
            <ul>
                <li><strong>Movement Pattern:</strong> Unilateral (single-leg) step or split squat.</li>
                <li><strong>Primary Muscles Worked:</strong> Quadriceps, Glutes, Hamstrings (one leg at a time).</li>
                <li><strong>Stabilizer Muscles:</strong> Core, hip abductors/adductors, and significant balance engagement.</li>
                <li><strong>Execution & Key Form Cues:</strong>
                    <ul>
                        <li>Step forward or backward with one leg, keeping your torso upright and core braced.</li>
                        <li>Lower your hips until both knees are bent at approximately a 90-degree angle. Your front knee should be aligned over your ankle, and your back knee should hover just above the floor.</li>
                        <li>Push through the heel of your front foot to return to the starting position.</li>
                    </ul>
                </li>
                <li><strong>Variations:</strong> Walking Lunges (continuous forward movement), Reverse Lunges (step back), Lateral Lunges (step to the side for inner/outer thigh), Split Squats (stationary, one foot forward), Bulgarian Split Squats (rear foot elevated on a bench, increased difficulty and glute activation).</li>
            </ul>

            <h5>4. Leg Press (Machine)</h5>
            <ul>
                <li><strong>Movement Pattern:</strong> Horizontal Push (guided).</li>
                <li><strong>Primary Muscles Worked:</strong> Quadriceps, Glutes, Hamstrings.</li>
                <li><strong>Stabilizer Muscles:</strong> Significantly less overall stabilization compared to free weight variations, as the machine guides the movement.</li>
                <li><strong>Execution & Key Form Cues:</strong>
                    <ul>
                        <li>Sit on the leg press machine, place your feet shoulder-width apart on the platform. Ensure your entire back is pressed firmly against the back pad.</li>
                        <li>Release the safety catches and lower the platform in a controlled manner until your knees are deeply bent (avoid letting your lower back round off the pad).</li>
                        <li>Push the platform back up powerfully, extending your legs without locking out your knees excessively at the top.</li>
                    </ul>
                </li>
                <li><strong>Variations:</strong> Single-Leg Leg Press, various foot placements on the platform (e.g., higher feet for more glute/hamstring, lower feet for more quad).</li>
            </ul>
            <p>Mastering these foundational lower body compound exercises is crucial for building powerful legs, a strong core, and enhancing your overall athletic potential. Integrate them consistently into your routine to drive significant strength and muscle gains across your entire lower body and beyond.</p>
        `,
        duration: 1 // Duration set to 1 as per user instruction
    },
    {
        type: 'quiz',
        title: 'Quiz: Compound Lifts',
        question: 'A client is performing barbell deadlifts. They complain of lower back discomfort and their form shows significant rounding of the spine during the lift. Based on the principles of foundational lower body compound exercises, what is the most likely cause of their discomfort and the primary corrective cue they should focus on?',
        options: [
            'They are likely performing a bicep curl incorrectly; they should use a wider grip on the barbell and lift with their arms.',
            'Their quadriceps are too weak; they should primarily focus on isolating their quadriceps with leg extensions before attempting deadlifts.',
            'They are failing to maintain a neutral spine and properly brace their core during the hip hinge; they should focus on keeping their chest up and pushing their hips back while initiating the lift, ensuring the back remains flat.',
            'The weight is too light for them; they should immediately increase the weight to engage their muscles more effectively and reduce discomfort.'
        ],
        correctAnswer: 2, // They are failing to maintain a neutral spine and properly brace their core during the hip hinge; they should focus on keeping their chest up and pushing their hips back while initiating the lift, ensuring the back remains flat.
        duration: 1,
        completed: false
    },
{
        type: 'lesson',
        title: 'Understanding Isolation Exercises',
        content: `
            <h3>Targeting Specific Muscles: The Role and Application of Isolation Exercises in Your Program</h3>
            <p>While **compound exercises** (like squats, deadlifts, and presses) are the cornerstone of building overall strength, muscle mass, and functional fitness, **isolation exercises** play a crucial supplementary role. Isolation exercises are defined by their focus on moving a single joint and primarily targeting a single muscle group. Understanding their purpose and proper application can significantly enhance your training outcomes, whether your goal is aesthetics, addressing imbalances, or supporting rehabilitation.</p>

            <h4>Purpose and Key Benefits of Isolation Exercises:</h4>
            <ul>
                <li><strong>Addressing Muscle Imbalances:</strong> In some cases, stronger muscles can overpower and compensate for weaker ones during compound movements. Isolation exercises allow you to directly target and strengthen these weaker links, leading to more balanced development, improved form in compound lifts, and reduced injury risk.</li>
                <li><strong>Hypertrophy and Aesthetic Development:</strong> For those aiming to maximize muscle size (hypertrophy) or sculpt a specific physique, isolation exercises are invaluable. By concentrating tension on a single muscle, you can optimize the mind-muscle connection, apply specific stress, and drive growth in that particular area.</li>
                <li><strong>Rehabilitation and Prehabilitation:</strong> Following an injury, or to prevent one, isolation exercises performed with light loads and strict control can safely strengthen a specific muscle without putting undue stress on surrounding joints or tissues. They allow for controlled strengthening in a protected range of motion.</li>
                <li><strong>"Finishing" Work and Maximizing the Pump:</strong> Performed at the end of a workout, isolation exercises can be used to further fatigue a muscle group, drive blood flow (creating a "pump"), and enhance metabolic stress, which contributes to muscle growth.</li>
                <li><strong>Pre-Activation/Warm-up (Limited Role):</strong> In some instances, a very light set of an isolation exercise can be used to "wake up" a specific muscle before a compound lift if there's difficulty feeling that muscle. However, a general dynamic warm-up remains paramount.</li>
            </ul>

            <h4>Characteristics and Considerations of Isolation Exercises:</h4>
            <ul>
                <li><strong>Single Joint Movement:</strong> This is their defining characteristic. For example, a bicep curl involves only the elbow joint, unlike a pull-up which involves the elbow, shoulder, and shoulder blade.</li>
                <li><strong>Lower Overall Calorie Burn:</strong> Because fewer muscles are engaged simultaneously, isolation exercises typically burn fewer calories compared to compound movements.</li>
                <li><strong>Less Demanding on the Central Nervous System (CNS):</strong> They are less taxing on the CNS, making them suitable for adding volume without leading to overtraining, or for active recovery sessions.</li>
                <li><strong>Typically Lighter Loads:</strong> While progressive overload (increasing resistance over time) still applies, the absolute weight lifted during isolation exercises will be significantly lower than during compound lifts.</li>
                <li><strong>Placement in a Program:</strong> Isolation exercises are generally performed *after* your main compound lifts in a workout. This ensures you're fresh and strong for the heavy, multi-joint movements that provide the greatest overall stimulus.</li>
            </ul>

            <h4>Common Examples of Isolation Exercises:</h4>
            <p>Here are some prevalent isolation exercises targeting various muscle groups:</p>
            <ul>
                <li><strong>Bicep Curls (Dumbbell, Barbell, Cable, Machine):</strong>
                    <ul>
                        <li><strong>Target Muscle:</strong> Biceps Brachii.</li>
                        <li><strong>Purpose:</strong> Directly develops bicep size and strength, and acts as an accessory to pulling movements.</li>
                    </ul>
                </li>
                <li><strong>Tricep Extensions (Dumbbell, Cable Pushdowns, Overhead, Skullcrushers):</strong>
                    <ul>
                        <li><strong>Target Muscle:</strong> Triceps Brachii.</li>
                        <li><strong>Purpose:</strong> Directly develops tricep size and strength, and acts as an accessory to pushing movements.</li>
                    </ul>
                </li>
                <li><strong>Lateral Raises (Dumbbell, Cable):</strong>
                    <ul>
                        <li><strong>Target Muscle:</strong> Medial Deltoid (side of the shoulder).</li>
                        <li><strong>Purpose:</strong> Builds shoulder width and balances overall deltoid development.</li>
                    </ul>
                </li>
                <li><strong>Leg Extensions (Machine):</strong>
                    <ul>
                        <li><strong>Target Muscle:</strong> Quadriceps.</li>
                        <li><strong>Purpose:</strong> Isolates the quads for strength and hypertrophy.</li>
                    </ul>
                </li>
                <li><strong>Hamstring Curls (Machine - Seated or Lying):</strong>
                    <ul>
                        <li><strong>Target Muscle:</strong> Hamstrings.</li>
                        <li><strong>Purpose:</strong> Isolates the hamstrings for strength and hypertrophy, complementing compound movements like deadlifts.</li>
                    </ul>
                </li>
                <li><strong>Calf Raises (Standing, Seated):</strong>
                    <ul>
                        <li><strong>Target Muscles:</strong> Gastrocnemius and Soleus (calves).</li>
                        <li><strong>Purpose:</strong> Direct development of the calf muscles.</li>
                    </ul>
                </li>
                <li><strong>Face Pulls (Cable):</strong>
                    <ul>
                        <li><strong>Target Muscles:</strong> Rear Deltoids, Upper Back (Rhomboids, Traps).</li>
                        <li><strong>Purpose:</strong> Excellent for shoulder health, posture, and targeting often underdeveloped posterior shoulder muscles.</li>
                    </ul>
                </li>
            </ul>
            <p>By strategically incorporating isolation exercises into your training program after your main compound lifts, you can refine your physique, strengthen weak links, aid in recovery, and achieve a more comprehensive and balanced muscular development.</p>
        `,
        duration: 1 // Duration set to 1 as per user instruction
    },
{
        type: 'lesson',
        title: 'Progressions in Bodyweight Training',
        content: `<h3>Taking Calisthenics to the Next Level: Mastering Progressive Overload</h3>
<p>As you master basic bodyweight exercises, you can strategically progress them to continuously increase difficulty and stimulate further strength and muscle development. This approach, known as progressive overload, ensures continuous challenge without needing external weights.</p>

<h4>Key Principles of Progression:</h4>
<ul>
    <li><b>Increase Repetitions or Sets:</b> A fundamental way to progress. Once you can comfortably perform 3 sets of 10-12 reps, aim for more reps per set or add another set.</li>
    <li><b>Reduce Rest Time:</b> Shorter rest periods between sets increase the cardiovascular demand and muscular endurance.</li>
    <li><b>Improve Form and Control:</b> Focus on slower, more controlled movements, especially during the eccentric (lowering) phase, to increase time under tension.</li>
    <li><b>Increase Range of Motion:</b> Perform exercises through their fullest possible range for greater muscle activation.</li>
    <li><b>Advance Exercise Variations:</b> This is the most common method in bodyweight training, moving from easier to harder versions of an exercise.</li>
</ul>

<h4>Progressions for Core Bodyweight Exercises:</h4>

<h5>Push-ups: Building Upper Body Strength</h5>
<ul>
    <li><b>Incline Push-ups:</b> Hands on an elevated surface (wall, counter, bench). The higher the incline, the easier.</li>
    <li><b>Knee Push-ups:</b> A good starting point on the floor if full push-ups are too challenging.</li>
    <li><b>Standard Push-ups:</b> Hands and toes on the floor, body in a straight line.</li>
    <li><b>Decline Push-ups:</b> Feet elevated on a bench or box. The higher the feet, the harder.</li>
    <li><b>Plyometric Push-ups:</b> Explosive push-ups where your hands leave the ground (e.g., clap push-ups).</li>
    <li><b>Archer Push-ups:</b> One arm extends out to the side, taking less load, while the other arm performs the push-up.</li>
    <li><b>Pseudo Planche Push-ups:</b> Hands turned out, leaned forward significantly to load the shoulders and triceps more intensely.</li>
    <li><b>Single-Arm Push-ups:</b> The ultimate progression, requiring significant core and unilateral strength.</li>
</ul>

<h5>Squats: Developing Lower Body Power</h5>
<ul>
    <li><b>Assisted Squats:</b> Holding onto a sturdy object for balance and support (e.g., chair, doorframe).</li>
    <li><b>Box Squats:</b> Squatting down to a box or chair, tapping it, and standing up. This helps with depth and confidence.</li>
    <li><b>Air Squats:</b> Standard bodyweight squats, focusing on full depth and controlled movement.</li>
    <li><b>Bulgarian Split Squats:</b> One foot elevated behind you on a bench, working one leg at a time.</li>
    <li><b>Jump Squats:</b> Explosive squats that add a plyometric element.</li>
    <li><b>Pistol Squats (Single-Leg Squats):</b> Squatting down on one leg while the other leg is extended forward. Requires significant balance, strength, and mobility.</li>
    <li><b>Shrimp Squats:</b> Another advanced single-leg squat variation where one leg is bent behind you and held.</li>
</ul>

<h5>Pull-ups: Enhancing Back and Bicep Strength</h5>
<ul>
    <li><b>Assisted Pull-ups (Band or Machine):</b> Using a resistance band looped over the bar or a machine to reduce your bodyweight.</li>
    <li><b>Negative Pull-ups:</b> Jumping or stepping to the top of the pull-up position and slowly lowering yourself down.</li>
    <li><b>Scapular Pulls:</b> Hanging from the bar and depressing your shoulders to lift your body slightly, focusing on scapular retraction.</li>
    <li><b>Standard Pull-ups/Chin-ups:</b> Full range of motion pull-ups (overhand grip) or chin-ups (underhand grip).</li>
    <li><b>L-Sit Pull-ups:</b> Performing pull-ups while holding your legs straight out in front of you in an L-shape.</li>
    <li><b>Weighted Pull-ups:</b> Adding external weight via a dip belt or weighted vest.</li>
    <li><b>Archer Pull-ups:</b> One arm straight, providing assistance while the other arm pulls.</li>
    <li><b>One-Arm Assisted Pull-ups:</b> Using one arm with the other hand lightly assisting the pulling arm.</li>
    <li><b>One-Arm Pull-ups:</b> The pinnacle of pulling strength, performing the movement with a single arm.</li>
</ul>

<h5>Planks: Fortifying Core Stability</h5>
<ul>
    <li><b>Knee Plank:</b> Performing the plank on your knees instead of your toes.</li>
    <li><b>Standard Plank:</b> Forearms and toes on the ground, body in a straight line, engaging the core.</li>
    <li><b>Extended Plank:</b> Forearms further out in front of you, increasing leverage.</li>
    <li><b>Plank with Leg/Arm Raises:</b> Lifting one leg or one arm (or opposite arm and leg) while maintaining core stability.</li>
    <li><b>Side Plank:</b> Supporting yourself on one forearm and the side of your foot, working the obliques.</li>
    <li><b>Weighted Plank:</b> Placing a weight plate on your lower back for added resistance.</li>
    <li><b>Dynamic Planks:</b> Incorporating movements like plank jacks or shoulder taps while maintaining the plank position.</li>
    <li><b>Plank with TRX/Stability Ball:</b> Performing planks with hands or feet on an unstable surface, greatly increasing core activation.</li>
</ul>

<p>Remember to prioritize proper form over the number of repetitions or the difficulty of the variation. Listen to your body and progressively challenge yourself to continue growing stronger and more capable.</p>`,
        duration: 1
    },
{
        type: 'lesson',
        title: 'Core Training Essentials',
        content: `<h3>The Foundation of All Movement: Unlocking Your Core Potential</h3>
<p>Your core muscles are far more than just your "abs." This intricate network includes your abdominals (rectus abdominis, transversus abdominis), obliques (internal and external), erector spinae (lower back muscles), and glutes. Together, they act as the central hub of your body, providing critical stability and transferring power for almost every movement you make, whether in daily life or athletic pursuits.</p>

<h4>Why a Strong Core is Non-Negotiable:</h4>
<ul>
    <li><b>Improved Posture:</b> A robust core helps maintain proper spinal alignment, reducing slouching and promoting an upright stance.</li>
    <li><b>Reduced Risk of Back Pain:</b> Weak core muscles often lead to an overreliance on the lower back, contributing to strain and pain. A strong core supports the spine, alleviating this stress.</li>
    <li><b>Enhanced Athletic Performance:</b> From lifting weights to running, jumping, and throwing, power originates in the core. A stable core allows for more efficient force transfer, leading to better performance in any sport or activity.</li>
    <li><b>Better Balance and Stability:</b> Core strength is crucial for maintaining equilibrium, preventing falls, and ensuring controlled movements.</li>
    <li><b>Injury Prevention:</b> By stabilizing the spine and pelvis, a strong core protects your body from injuries during various physical activities.</li>
</ul>

<h4>Key Core Exercises for Comprehensive Strength:</h4>

<h5>1. Plank (and variations): Global Core Stability</h5>
<ul>
    <li><b>Standard Plank:</b> Lie face down, prop yourself up on your forearms and toes, keeping your body in a straight line from head to heels. Engage your abs and glutes to prevent your hips from sagging or rising too high. Hold for time.</li>
    <li><b>Forearm Plank:</b> As above, focusing on maintaining a rigid body.</li>
    <li><b>High Plank:</b> Similar to the top of a push-up position, with hands directly under shoulders.</li>
    <li><b>Side Plank:</b> Lie on your side, supporting yourself on one forearm and the side of your foot. Keep your body straight, lifting your hips off the ground. Excellent for obliques.</li>
    <li><b>Plank with Leg/Arm Lift:</b> While in a standard plank, slowly lift one leg or one arm a few inches off the ground, maintaining stability.</li>
</ul>

<h5>2. Bird-Dog: Spinal Stability and Coordination</h5>
<ul>
    <li>Start on all fours, hands under shoulders, knees under hips.</li>
    <li>Engage your core. Slowly extend your right arm straight forward and your left leg straight back simultaneously, keeping your back flat and hips level.</li>
    <li>Hold for a moment, then slowly return to the starting position. Alternate sides. Focus on controlled movement rather than height.</li>
</ul>

<h5>3. Dead Bug: Anti-Extension and Core Control</h5>
<ul>
    <li>Lie on your back with your knees bent at 90 degrees directly over your hips, and arms extended straight up towards the ceiling.</li>
    <li>Press your lower back firmly into the floor (imagine squashing a bug). Maintain this lower back contact throughout the exercise.</li>
    <li>Slowly extend your right arm overhead and your left leg straight towards the floor (without letting it touch), simultaneously.</li>
    <li>Bring them back to the start and alternate sides. The key is to prevent your lower back from arching.</li>
</ul>

<h5>4. Crunch and Twist Variations: Abdominal Activation</h5>
<ul>
    <li><b>Basic Crunch:</b> Lie on your back, knees bent, feet flat. Place hands behind your head or across your chest. Lift your head and shoulders off the floor, engaging your abs. Avoid pulling on your neck.</li>
    <li><b>Bicycle Crunches:</b> Lie on your back, hands behind head, knees bent. Bring one knee towards your chest as you twist your torso to bring the opposite elbow towards that knee. Alternate sides in a pedaling motion.</li>
    <li><b>Russian Twists:</b> Sit on the floor, knees bent, feet flat (or slightly elevated for more challenge). Lean back slightly, engaging your core. Clasp your hands together and twist your torso from side to side.</li>
</ul>

<h4>Important Considerations:</h4>
<ul>
    <li><b>Focus on Control, Not Just Speed:</b> Slow, deliberate movements with proper muscle engagement are far more effective than fast, sloppy repetitions.</li>
    <li><b>Breathe:</b> Remember to breathe throughout each exercise. Don't hold your breath.</li>
    <li><b>Progressive Overload:</b> As you get stronger, you can increase the duration of holds, add repetitions, or move to more challenging variations.</li>
    <li><b>Listen to Your Body:</b> If you feel pain, especially in your lower back, stop and reassess your form.</li>
</ul>

<p>By consistently incorporating these core essentials, you'll build a strong, stable foundation for all your fitness endeavors and daily life.</p>`,
        duration: 1
    },
    {
        type: 'quiz',
        title: 'Quiz: Bodyweight & Core',
        question: 'Which of the following represents an *advanced progression* for a standard push-up?',
        options: [
            'Performing push-ups on your knees',
            'Doing push-ups with your hands elevated on a bench',
            'Executing a single-arm push-up',
            'Increasing your rest time between sets of push-ups'
        ],
        correctAnswer: 2, // Executing a single-arm push-up
        duration: 1,
        completed: false
    },
{
        type: 'lesson',
        title: 'Flexibility and Mobility: Why They Matter',
        content: `<h3>Moving Freely and Reducing Injury: The Power of Flexibility and Mobility</h3>
<p>While often used interchangeably, <b>Flexibility</b> and <b>Mobility</b> are distinct yet equally crucial components of a healthy, functional body. Understanding and training both will significantly impact your fitness journey and daily well-being.</p>

<h4>Defining the Terms:</h4>
<ul>
    <li><b>Flexibility:</b> This refers to the passive ability of your muscles and connective tissues (tendons, ligaments) to lengthen, allowing a joint to move through its full potential range of motion. Think of it as the *potential* for movement at a joint.</li>
    <li><b>Mobility:</b> This is the *active* ability of a joint to move through its full range of motion under muscular control. It requires a combination of flexibility, strength, balance, and coordination. It's about how well you can actually *use* that potential range of motion.</li>
</ul>
<p>Think of it this way: You might have the flexibility to touch your toes if someone pushes you, but true mobility means you can actively bend over and touch your toes with control.</p>

<h4>Why Both Are Crucial For Everyone:</h4>
<ul>
    <li><b>Improved Exercise Performance:</b> Greater range of motion allows you to perform exercises like squats, lunges, and overhead presses with better form and deeper activation, leading to greater strength gains and reduced risk of compensation.</li>
    <li><b>Reduced Risk of Injury:</b> Adequate flexibility and mobility prevent muscles from becoming overly tight and joints from becoming restricted. This reduces strain on tendons and ligaments, allowing your body to absorb forces more effectively and preventing common injuries during exercise and daily activities.</li>
    <li><b>Better Posture and Reduced Stiffness:</b> Tight muscles (e.g., hip flexors from sitting) can pull your body out of alignment. Improving flexibility in these areas, coupled with mobility exercises, helps restore natural posture, alleviates stiffness, and reduces chronic pain, especially in the back and neck.</li>
    <li><b>Enhanced Daily Functional Movement:</b> Simple tasks like reaching for something on a high shelf, tying your shoes, getting in and out of a car, or playing with children become easier and more comfortable when your body moves without restriction.</li>
    <li><b>Improved Blood Flow and Recovery:</b> Stretching can aid in blood circulation to muscles, helping with nutrient delivery and waste removal, which contributes to faster recovery after workouts.</li>
</ul>

<h4>Integrating Flexibility & Mobility into Your Routine:</h4>

<h5>1. Dynamic Stretching (Before Workouts): Prepare Your Body</h5>
<p>These are controlled, flowing movements that take your joints through their full range of motion, increasing blood flow, warming up muscles, and improving joint lubrication. They prepare your body for activity without overstretching cold muscles.</p>
<ul>
    <li><b>Examples:</b> Leg swings (front-to-back, side-to-side), arm circles, torso twists, walking lunges with a twist, cat-cow, high knees, butt kicks.</li>
    <li><b>When to Use:</b> As part of your warm-up before any workout, sport, or physical activity.</li>
</ul>

<h5>2. Static Stretching (After Workouts / Cool-Downs): Improve Length</h5>
<p>This involves holding a stretch for a sustained period, typically 20-30 seconds, to lengthen muscles and connective tissues. It's most effective when muscles are warm.</p>
<ul>
    <li><b>Examples:</b> Hamstring stretch (seated or standing), quadriceps stretch, triceps stretch, shoulder stretch, calf stretch.</li>
    <li><b>When to Use:</b> During your cool-down after a workout, or as a dedicated flexibility session on rest days. Avoid deep static stretches before intense activity as it can temporarily reduce power output.</li>
</ul>

<h5>3. Foam Rolling (Before or After Workouts): Enhance Tissue Quality</h5>
<p>Foam rolling is a form of self-myofascial release, applying pressure to tight spots (trigger points) in your muscles. It helps to improve tissue extensibility, reduce muscle soreness, and can enhance range of motion by breaking up adhesions.</p>
<ul>
    <li><b>Examples:</b> Rolling quads, hamstrings, glutes, IT band, lats, upper back.</li>
    <li><b>When to Use:</b> Can be used as part of your warm-up to prepare muscles for movement, or during your cool-down to aid recovery and alleviate soreness.</li>
</ul>

<p>By consistently incorporating a balanced approach of dynamic movements, static stretches, and self-myofascial release, you can significantly enhance your flexibility, improve joint mobility, and unlock your body's full movement potential, leading to a healthier, more active, and pain-free life.</p>`,
        duration: 1
    },
{
        type: 'lesson',
        title: 'Stretching Techniques: Static, Dynamic, and Foam Rolling',
        content: `<h3>Tools for Better Movement: A Practical Guide to Stretching and Self-Myofascial Release</h3>
<p>Understanding and correctly applying different stretching and recovery methods is key to improving your flexibility, enhancing mobility, preventing injuries, and optimizing your overall athletic performance. Each technique serves a unique purpose and is best utilized at specific times in your fitness routine.</p>

<h4>1. Dynamic Stretching: Preparing Your Body for Action (Warm-up)</h4>
<p>Dynamic stretching involves controlled, flowing movements that take your joints through their full range of motion. The goal is to gradually increase heart rate, blood flow to muscles, and prepare your body for the movements you're about to perform. It's an active warm-up, not a passive stretch.</p>
<ul>
    <li><b>When to Use:</b> Before any workout, sport, or physical activity.</li>
    <li><b>Key Principles:</b> Perform movements in a controlled manner; avoid jerky or ballistic movements; gradually increase range of motion.</li>
    <li><b>Examples:</b>
        <ol>
            <li><b>Leg Swings:</b> Stand tall, holding onto a support if needed. Swing one leg forward and backward in a controlled arc, gradually increasing the height. Repeat 10-15 times per leg.</li>
            <li><b>Arm Circles:</b> Stand with feet shoulder-width apart. Perform large, controlled circles with your arms, both forward and backward. Repeat 10-15 times in each direction.</li>
            <li><b>Torso Twists:</b> Stand with feet shoulder-width apart, arms extended to the sides. Gently twist your torso from side to side, keeping your hips relatively stable. Repeat 10-15 twists per side.</li>
            <li><b>Walking Lunges with Torso Twist:</b> Step forward into a lunge, and as you do, twist your torso over the front leg. Step up and alternate sides. Perform 8-10 lunges per leg.</li>
            <li><b>Cat-Cow Stretch:</b> On all fours, arch your back as you inhale (cow), then round your back as you exhale (cat). Repeat 10-12 times.</li>
        </ol>
    </li>
</ul>

<h4>2. Static Stretching: Lengthening and Recovering (Cool-down)</h4>
<p>Static stretching involves holding a stretch in a fixed position for a sustained period, allowing the muscle to lengthen and relax. This technique is effective for increasing overall flexibility and is best performed when your muscles are already warm.</p>
<ul>
    <li><b>When to Use:</b> During your cool-down after a workout, or as a dedicated flexibility session on rest days. Avoid deep static stretches on cold muscles or immediately before power-based activities.</li>
    <li><b>Key Principles:</b> Hold each stretch for 20-30 seconds (or up to 60 seconds for very tight muscles); breathe deeply and evenly; stretch to the point of mild tension, not pain; avoid bouncing.</li>
    <li><b>Examples:</b>
        <ol>
            <li><b>Hamstring Stretch:</b> Sit on the floor with one leg extended straight, the other bent with your foot against your inner thigh. Reach for the toes of your extended leg, keeping your back straight. Hold.</li>
            <li><b>Quadriceps Stretch:</b> Stand tall and hold onto a wall for balance. Grab your ankle with one hand and gently pull your heel towards your glute. Keep your knees close together. Hold.</li>
            <li><b>Triceps Stretch:</b> Raise one arm overhead, bend your elbow, and let your hand drop behind your head. Use your other hand to gently push down on the elbow. Hold.</li>
            <li><b>Pectoral (Chest) Stretch:</b> Stand in a doorway, place your forearms on the doorframe on either side, and gently lean forward until you feel a stretch across your chest. Hold.</li>
            <li><b>Calf Stretch:</b> Stand facing a wall, place your hands on it. Step one foot back, keeping that heel on the ground and knee straight. Lean into the wall until you feel a stretch in your calf. Hold.</li>
        </ol>
    </li>
</ul>

<h4>3. Foam Rolling: Self-Myofascial Release (Before/After Workouts)</h4>
<p>Foam rolling is a self-massage technique that applies pressure to specific points on your body to release muscle tightness, knots, and adhesions. It helps to improve blood flow, reduce muscle soreness, and restore normal muscle function and range of motion.</p>
<ul>
    <li><b>When to Use:</b> Can be used as part of your warm-up (e.g., 5-10 minutes) to prepare muscles for movement, or during your cool-down (e.g., 10-15 minutes) to aid recovery and alleviate soreness.</li>
    <li><b>Key Principles:</b> Roll slowly (about one inch per second); when you find a tender spot, pause on it for 20-30 seconds, taking deep breaths; avoid rolling directly over joints or bones.</li>
    <li><b>Examples of Areas to Roll:</b>
        <ol>
            <li><b>Quads (Front of Thighs):</b> Lie face down, place the roller under your thighs. Support yourself on your forearms and roll from your hips to just above your knees.</li>
            <li><b>Hamstrings (Back of Thighs):</b> Sit with the roller under your hamstrings. Use your hands for support and roll from your glutes to just above your knees.</li>
            <li><b>Glutes (Buttocks):</b> Sit on the roller, cross one ankle over the opposite knee, and lean into the glute of the crossed leg. Roll to find tender spots.</li>
            <li><b>Lats (Upper Back/Sides):</b> Lie on your side, arm extended, with the roller under your armpit area. Roll along your side and upper back.</li>
            <li><b>Calves (Lower Legs):</b> Sit with one calf on the roller, the other leg crossed over it to add pressure. Roll from just below the knee to the ankle.</li>
        </ol>
    </li>
</ul>

<p>By integrating these techniques strategically into your fitness regimen, you'll not only enhance your physical capabilities but also contribute significantly to injury prevention, faster recovery, and overall movement longevity.</p>`,
        duration: 1
    },
  {
        type: 'quiz',
        title: 'Quiz: Flexibility & Mobility',
        question: 'Which type of stretching involves controlled, flowing movements and is primarily recommended for warm-ups?',
        options: [
            'Static Stretching',
            'Ballistic Stretching',
            'Dynamic Stretching',
            'PNF Stretching'
        ],
        correctAnswer: 2, // Dynamic Stretching
        duration: 1,
      completed: false
    },


// ............ Final Test Placeholder ...............
    {
        type: 'final_test_placeholder',
        title: 'Final Assessment - 30 minutes',
        duration: 1
    }
];

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
    // New question from expanded lessons: Core Training Essentials
    {
        question: 'Which core exercise involves simultaneously extending an opposite arm and leg while maintaining a flat back, focusing on spinal stability and coordination?',
        options: ['Plank', 'Dead Bug', 'Bird-Dog', 'Russian Twist'],
        correctAnswer: 2 // Bird-Dog
    },
    // New question from expanded lessons: Progressions in Bodyweight Training
    {
        question: 'Which of the following is considered an advanced progression for a standard bodyweight squat, requiring significant balance and unilateral strength?',
        options: ['Box Squats', 'Bulgarian Split Squats', 'Pistol Squats', 'Jump Squats'],
        correctAnswer: 2 // Pistol Squats
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
        correctAnswer: 1 // To target and develop specific muscle groups or imbalances
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
    },
    // New question from expanded lessons: Flexibility and Mobility
    {
        question: 'Which term refers to the *active* ability of a joint to move through its full range of motion under muscular control?',
        options: ['Flexibility', 'Hyper-extension', 'Mobility', 'Elasticity'],
        correctAnswer: 2 // Mobility
    },
    // New question from expanded lessons: Stretching Techniques
    {
        question: 'When should static stretching typically be performed for optimal results in increasing muscle length?',
        options: ['Before a workout, on cold muscles', 'During the most intense part of a workout', 'During the cool-down phase, when muscles are warm', 'Only on rest days, immediately upon waking'],
        correctAnswer: 2 // During the cool-down phase, when muscles are warm
    }
];

// --- New Global Variables for Penalty Logic ---
let penaltyPoints = 0; // Accumulates penalty points for the current slide
let lastPenaltyBlock = -1; // Tracks which penalty block was last applied to avoid duplicate deductions

// --- Global Score Variable ---
let totalCourseScore = 100; // Initialize the overall course score. Adjust starting value as needed.
const INCORRECT_QUIZ_PENALTY = 5; // Points to deduct for each incorrect quiz answer. Adjust as needed.


// --- JavaScript variables (declared here, assigned inside DOMContentLoaded) ---
let currentSlideIndex = 0;
let timerInterval;
let timeLeft;
let quizAttempted = false; // To prevent going back during a quiz (used for current active quiz)
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
submitQuizBtn; // Will be assigned in DOMContentLoaded
quizFeedbackEl; // Will be assigned in DOMContentLoaded
backBtn; // Will be assigned in DOMContentLoaded
nextBtn; // Will be assigned in DOMContentLoaded
timerDisplayEl; // Will be assigned in DOMContentLoaded
currentTimeEl; // Will be assigned in DOMContentLoaded
finalTestContainerEl; // Will be assigned in DOMContentLoaded
finalTestQuestionsEl; // Will be assigned in DOMContentLoaded
submitFinalTestBtn; // Will be assigned in DOMContentLoaded
finalTestResultsEl; // Will be assigned in DOMContentLoaded
certificationAreaEl; // Will be assigned in DOMContentLoaded


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

    // --- UPDATED BACK BUTTON EVENT LISTENER with failsafe ---
    backBtn.addEventListener('click', () => {
        // Failsafe: If the button is disabled, do not proceed with navigation
        if (backBtn.disabled) {
            console.log("Attempted to click disabled Back button. Action prevented.");
            return; // Exit the function, preventing navigation
        }

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

    const currentItem = courseContent[currentSlideIndex];
    courseTitleEl.textContent = currentItem.title;

    if (currentItem.type === 'lesson') {
        lessonContentEl.classList.remove('hidden');
        lessonContentEl.innerHTML = currentItem.content;
        startTimer(currentItem.duration);
        nextBtn.disabled = true; // Disable for lessons until timer is up
    } else if (currentItem.type === 'quiz') {
        lessonContentEl.classList.add('hidden');
        quizContainerEl.classList.remove('hidden');
        displayQuiz(currentItem);
        startTimer(currentItem.duration || 45); // Default quiz time if not specified, now 45s
        
        // --- Disable Next button when a quiz is displayed ---
        nextBtn.disabled = true; 

        // IMPORTANT: Only reset quizAttempted to false if this quiz hasn't been completed yet.
        // If it's a completed quiz being revisited, we want quizAttempted to remain true (or irrelevant for back button logic).
        if (currentItem.completed !== true) { 
            quizAttempted = false; 
        }
    } else if (currentItem.type === 'final_test_placeholder') {
        lessonContentEl.classList.add('hidden');
        quizContainerEl.classList.add('hidden');
        finalTestContainerEl.classList.remove('hidden');
        displayFinalTest();
        backBtn.disabled = true; // Cannot go back during final test
        nextBtn.disabled = true; // Cannot go forward from final test placeholder
    }

    // --- DEBUGGING CONSOLE LOGS ---
    console.log(`--- Displaying Slide Index: ${currentSlideIndex} ---`);
    console.log(`Slide Type: ${currentItem.type}`);
    console.log(`Quiz Completed Status (if quiz): ${currentItem.completed}`);
    console.log(`Global quizAttempted: ${quizAttempted}`);

    // --- NEW CONDITION: Check if the immediate previous slide was a completed quiz ---
    let isPreviousSlideCompletedQuiz = false;
    if (currentSlideIndex > 0) {
        const previousItem = courseContent[currentSlideIndex - 1];
        if (previousItem.type === 'quiz' && previousItem.completed === true) {
            isPreviousSlideCompletedQuiz = true;
        }
    }
    console.log(`Is Previous Slide Completed Quiz: ${isPreviousSlideCompletedQuiz}`); // Debugging

    // --- Manage Back button states ---
    // Disable back if:
    // 1. It's the first slide.
    // 2. It's the final test placeholder.
    // 3. It's a quiz that has been completed OR is currently unattempted.
    // 4. The immediately previous slide was a completed quiz. (NEW)
    const shouldDisableBack = currentSlideIndex === 0 || 
                              currentItem.type === 'final_test_placeholder' || 
                              (currentItem.type === 'quiz' && (currentItem.completed === true || !quizAttempted)) ||
                              isPreviousSlideCompletedQuiz;
    
    backBtn.disabled = shouldDisableBack;

    console.log(`Back Button shouldDisableBack (calculated): ${shouldDisableBack}`);
    console.log(`Back Button disabled (actual property): ${backBtn.disabled}`);
    console.log(`--------------------------------------`);
}

// --- The rest of your script.js continues from here ---

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
    }
    );
    quizFeedbackEl.textContent = '';
}

// --- UPDATED submitQuiz Function (includes overall score deduction and quiz completion marking) ---
function submitQuiz() {
    quizAttempted = true; // Mark quiz as attempted
    clearInterval(timerInterval); // Stop timer

    const selectedOption = document.querySelector('input[name="quizOption"]:checked');
    const currentQuiz = courseContent[currentSlideIndex];

    let correct = false;
    let feedbackMessage = '';

    if (selectedOption) {
        const selectedAnswerValue = parseInt(selectedOption.value);

        if (selectedAnswerValue === currentQuiz.correctAnswer) {
            correct = true;
            feedbackMessage = 'Correct! ';
            quizFeedbackEl.style.color = 'green';
        } else {
            feedbackMessage = `Incorrect. The correct answer was: ${currentQuiz.options[currentQuiz.correctAnswer]}. `;
            quizFeedbackEl.style.color = 'red';
            // DEDUCT POINTS FROM OVERALL SCORE FOR INCORRECT ANSWER
            totalCourseScore -= INCORRECT_QUIZ_PENALTY;
        }

        // Apply time penalties to the overall score (penaltyPoints is calculated in startTimer)
        totalCourseScore -= penaltyPoints;

        // Ensure overall score doesn't go below zero (optional, depends on how you want to handle negative scores)
        if (totalCourseScore < 0) {
            totalCourseScore = 0;
        }

        // --- NEW: Mark the current quiz as completed ---
        currentQuiz.completed = true; 

        // Display detailed feedback for the user for this specific quiz
        let currentQuizScoreForDisplay = (correct ? 1 : 0) - penaltyPoints; // Score for this specific quiz display
        if (currentQuizScoreForDisplay < 0) currentQuizScoreForDisplay = 0;

        feedbackMessage += `(Time Penalty: ${penaltyPoints} points. Your score for this quiz: ${currentQuizScoreForDisplay} point(s)).`;
        // Optionally, display the current overall score to the user for transparency
        feedbackMessage += ` Current Course Score: ${totalCourseScore}.`; // Added for transparency
        quizFeedbackEl.textContent = feedbackMessage;

        submitQuizBtn.classList.add('hidden'); // Hide submit button after attempt
        nextBtn.disabled = false; // Allow user to move to next slide

    } else { // This 'else' is now correctly associated with 'if (selectedOption)'
        quizFeedbackEl.textContent = 'Please select an answer.';
        quizFeedbackEl.style.color = 'orange';
        // If no option selected, quizAttempted remains false, allowing re-submission or time to run out
        // The back button will remain disabled as per the logic in displaySlide for unattempted quizzes
        
        if (timeLeft <= 0) { // If time ran out and no selection
            nextBtn.disabled = false; // Still allow to move on, but no answer recorded
            // If time runs out and no selection, still mark as attempted to prevent going back
            quizAttempted = true; // Consider it attempted if time ran out without selection
            currentQuiz.completed = true; // And mark as completed to prevent going back
            totalCourseScore -= penaltyPoints; // Still apply time penalty
            if (totalCourseScore < 0) totalCourseScore = 0; // Ensure score doesn't go below zero
            quizFeedbackEl.textContent += ` Time expired! No answer selected. Current Course Score: ${totalCourseScore}.`;
        } else {
            startTimer(timeLeft); // Resume timer if user needs to select
        }
    }
}

// Function to display the final test
// finalTestQuestions array is assumed to be defined elsewhere in your script
function displayFinalTest() {
    finalTestQuestionsEl.innerHTML = ''; // Clear previous
    finalTestScores = []; // Reset scores for final test

    // Define finalTestQuestions here for demonstration if not global
    // In a real scenario, this should be defined globally or fetched.
    const finalTestQuestions = [
        { question: 'What is the powerhouse of the cell?', options: ['Nucleus', 'Mitochondria', 'Ribosome', 'Cytoplasm'], correctAnswer: 1 },
        { question: 'Which nutrient is primarily responsible for muscle repair and growth?', options: ['Carbohydrates', 'Fats', 'Proteins', 'Vitamins'], correctAnswer: 2 },
        { question: 'What is the recommended daily water intake for adults (approximate)?', options: ['1-2 liters', '2-3 liters', '3-4 liters', '4-5 liters'], correctAnswer: 1 }
    ];

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
    // Assuming finalTestQuestions is accessible here (e.g., globally defined)
    const finalTestQuestions = [
        { question: 'What is the powerhouse of the cell?', options: ['Nucleus', 'Mitochondria', 'Ribosome', 'Cytoplasm'], correctAnswer: 1 },
        { question: 'Which nutrient is primarily responsible for muscle repair and growth?', options: ['Carbohydrates', 'Fats', 'Proteins', 'Vitamins'], correctAnswer: 2 },
        { question: 'What is the recommended daily water intake for adults (approximate)?', options: ['1-2 liters', '2-3 liters', '3-4 liters', '4-5 liters'], correctAnswer: 1 }
    ];

    finalTestQuestions.forEach((qData, qIndex) => {
        const selectedOption = document.querySelector(`input[name="finalQuestion${qIndex}"]:checked`);
        if (selectedOption && parseInt(selectedOption.value) === qData.correctAnswer) {
            correctAnswers++;
        }
    });

    const totalQuestions = finalTestQuestions.length;
    let scorePercentage = (correctAnswers / totalQuestions) * 100;

    // Incorporate the totalCourseScore into the final percentage, or display it alongside.
    // This is a conceptual integration. You might want to define how finalTestScore and totalCourseScore combine.
    // For now, let's just display both.
    finalTestResultsEl.innerHTML = `<p>Final Test Score: ${correctAnswers} out of ${totalQuestions} (${scorePercentage.toFixed(2)}%).</p>`;
    finalTestResultsEl.innerHTML += `<p>Overall Course Score (after penalties): ${totalCourseScore} points.</p>`; // Display overall score
    
    // You might want to adjust the pass threshold based on the combined score
    const combinedScoreConsideration = scorePercentage; // Or some calculation involving totalCourseScore
    finalTestResultsEl.style.color = combinedScoreConsideration >= 70 ? 'green' : 'red';

    if (combinedScoreConsideration >= 70) {
        certificationAreaEl.classList.remove('hidden');
        // Prompt for user's name for the certificate
        let userName = prompt("Congratulations! Please enter your name for the certificate:");
        if (!userName || userName.trim() === "") {
            userName = "Valued Learner"; // Default if no name entered
        }
        generateCertificate(userName, 'Interactive Fitness Course'); // Call the new function
    } else {
        certificationAreaEl.classList.add('hidden');
        finalTestResultsEl.innerHTML += `<p>You need at least 70% on the final test to receive a certification. Please review the material and try again!</p>`;
    }

    submitFinalTestBtn.disabled = true;
}

// NEW FUNCTION: Generate and draw the certificate on canvas
function generateCertificate(name, courseTitle) { // Keeping courseTitle as a parameter
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
