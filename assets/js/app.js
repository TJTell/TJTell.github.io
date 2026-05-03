const questions = [
    {
        question: "When working on a project, what is your primary focus?",
        options: [
            { text: "Ensuring every detail is accurate and follows the rules.", major: "Accounting" },
            { text: "Maximizing profit and analyzing risk.", major: "Finance" },
            { text: "Managing people and coordinating the team.", major: "Leadership and Management" },
            { text: "Using data to find trends and solve technical problems.", major: "BAIT" },
            { text: "Understanding consumer behavior and creative branding.", major: "Marketing" },
            { text: "Optimizing the flow of goods from start to finish.", major: "Supply Chain Management" }
        ]
    },
    {
        question: "Which environment sounds most appealing for a career?",
        options: [
            { text: "A detailed auditing firm or tax department.", major: "Accounting" },
            { text: "A fast-paced investment bank or trading floor.", major: "Finance" },
            { text: "A corporate office building leading a department.", major: "Leadership and Management" },
            { text: "A tech-focused hub managing data systems.", major: "BAIT" },
            { text: "An advertising agency or market research firm.", major: "Marketing" },
            { text: "A global logistics center or distribution hub.", major: "Supply Chain Management" }
        ]
    },
    {
        question: "How do you prefer to solve a difficult problem?",
        options: [
            { text: "By reconciling the facts and ensuring compliance.", major: "Accounting" },
            { text: "By calculating the potential return on investment.", major: "Finance" },
            { text: "By motivating others to work together toward a solution.", major: "Leadership and Management" },
            { text: "By writing a script or querying a database for answers.", major: "BAIT" },
            { text: "By brainstorming a creative way to influence people.", major: "Marketing" },
            { text: "By finding a more efficient way to transport resources.", major: "Supply Chain Management" }
        ]
    },
    {
        question: "What is your favorite type of 'data' to work with?",
        options: [
            { text: "Financial statements and ledger entries.", major: "Accounting" },
            { text: "Stock prices, interest rates, and market trends.", major: "Finance" },
            { text: "Employee performance metrics and team feedback.", major: "Leadership and Management" },
            { text: "Raw datasets, code, and information systems.", major: "BAIT" },
            { text: "Customer demographics and social media engagement.", major: "Marketing" },
            { text: "Inventory levels and shipping schedules.", major: "Supply Chain Management" }
        ]
    },
    {
        question: "Which of these skills would you most like to master?",
        options: [
            { text: "Mastering complex tax laws and reporting standards.", major: "Accounting" },
            { text: "Portfolio management and capital budgeting.", major: "Finance" },
            { text: "Conflict resolution and strategic decision-making.", major: "Leadership and Management" },
            { text: "Database management and business intelligence.", major: "BAIT" },
            { text: "Content creation and brand storytelling.", major: "Marketing" },
            { text: "Global procurement and operations management.", major: "Supply Chain Management" }
        ]
    },
    {
        question: "If you were at a startup, what would your role be?",
        options: [
            { text: "The person making sure the books are balanced and legal.", major: "Accounting" },
            { text: "The person pitching to investors for more funding.", major: "Finance" },
            { text: "The CEO or manager overseeing the whole operation.", major: "Leadership and Management" },
            { text: "The person building the tech infrastructure and data tools.", major: "BAIT" },
            { text: "The person getting users to love the product.", major: "Marketing" },
            { text: "The person making sure the product actually gets delivered.", major: "Supply Chain Management" }
        ]
    },
    {
        question: "What motivates you most in a professional setting?",
        options: [
            { text: "Order, precision, and clear documentation.", major: "Accounting" },
            { text: "Financial growth and wealth management.", major: "Finance" },
            { text: "The ability to influence and guide others.", major: "Leadership and Management" },
            { text: "Innovation and technical efficiency.", major: "BAIT" },
            { text: "Creative expression and psychological insight.", major: "Marketing" },
            { text: "Reliability and solving logistical puzzles.", major: "Supply Chain Management" }
        ]
    },
    {
        question: "Pick a secondary interest outside of pure business:",
        options: [
            { text: "Law and ethics.", major: "Accounting" },
            { text: "Economics and mathematics.", major: "Finance" },
            { text: "Psychology and communication.", major: "Leadership and Management" },
            { text: "Computer science and programming.", major: "BAIT" },
            { text: "Art, media, and sociology.", major: "Marketing" },
            { text: "Geography and engineering.", major: "Supply Chain Management" }
        ]
    },
    {
        question: "Which 'buzzword' appeals to you the most?",
        options: [
            { text: "Integrity.", major: "Accounting" },
            { text: "Leverage.", major: "Finance" },
            { text: "Visionary.", major: "Leadership and Management" },
            { text: "Scalability.", major: "BAIT" },
            { text: "Engagement.", major: "Marketing" },
            { text: "Optimization.", major: "Supply Chain Management" }
        ]
    },
    {
        question: "How do you feel about working with numbers?",
        options: [
            { text: "I love them when they tell a perfectly balanced story.", major: "Accounting" },
            { text: "I love them when they represent growth and profit.", major: "Finance" },
            { text: "I prefer focusing on people more than the numbers.", major: "Leadership and Management" },
            { text: "I like numbers when they are part of a large dataset.", major: "BAIT" },
            { text: "I like numbers if they show how people are reacting.", major: "Marketing" },
            { text: "I like numbers that show how much time we saved.", major: "Supply Chain Management" }
        ]
    }
];

let currentQuestion = 0;
let scores = {};

function startQuiz() {
    currentQuestion = 0;
    scores = {
        "Accounting": 0, "Finance": 0, "Leadership and Management": 0,
        "BAIT": 0, "Marketing": 0, "Supply Chain Management": 0
    };
    showQuestion();
}

function showQuestion() {
    const quizContent = document.getElementById('quiz-content');
    const q = questions[currentQuestion];

    // This creates a list of buttons using your .email-btn style
    let optionsHTML = q.options.map(opt => `
        <button onclick="recordAnswer('${opt.major}')" class="email-btn" 
                style="background:none; cursor:pointer; display:block; width:100%; text-align:left; margin-bottom:10px; text-transform:none;">
            ${opt.text}
        </button>
    `).join('');

    quizContent.innerHTML = `
        <span class="genre-tag">Question ${currentQuestion + 1} of ${questions.length}</span>
        <h2 class="book-title" style="margin-bottom:20px;">${q.question}</h2>
        <div class="hero-actions">${optionsHTML}</div>
    `;
}

function recordAnswer(major) {
    scores[major]++;
    currentQuestion++;

    if (currentQuestion < questions.length) {
        showQuestion();
    } else {
        showResult();
    }
}

function showResult() {
    const quizContent = document.getElementById('quiz-content');
    const bestMatch = Object.keys(scores).reduce((a, b) => scores[a] > scores[b] ? a : b);

    // Data for the detailed result descriptions
    const majorDetails = {
        "Accounting": {
            desc: "You are the 'Language of Business.' You enjoy structure, precision, and ensuring financial integrity through rigorous reporting and analysis.",
            careers: ["Certified Public Accountant (CPA)", "Forensic Auditor", "Tax Consultant"]
        },
        "Finance": {
            desc: "You are a strategist of capital. You thrive on analyzing risk, valuing assets, and making high-stakes decisions to grow wealth and investment portfolios.",
            careers: ["Investment Banker", "Financial Analyst", "Portfolio Manager"]
        },
        "Leadership and Management": {
            desc: "You are a visionary and a builder of teams. You focus on organizational strategy, human psychology, and leading people toward a common goal.",
            careers: ["Operations Manager", "Human Resources Director", "Management Consultant"]
        },
        "BAIT": {
            desc: "You sit at the intersection of technology and business. You use data structures, coding, and analytics to solve complex technical problems.",
            careers: ["Data Scientist", "IT Project Manager", "Systems Architect"]
        },
        "Marketing": {
            desc: "You are the voice of the brand. You understand consumer behavior and use creative storytelling and data to influence the market.",
            careers: ["Brand Manager", "Digital Strategist", "Market Research Analyst"]
        },
        "Supply Chain Management": {
            desc: "You are the architect of global flow. You optimize the complex journey of products from raw materials to the customer's doorstep.",
            careers: ["Logistics Coordinator", "Procurement Manager", "Operations Analyst"]
        }
    };

    const details = majorDetails[bestMatch];

    // Generate the list of careers as bullet points
    const careerList = details.careers.map(c => `<li style="margin-bottom: 5px;">${c}</li>`).join('');

    quizContent.innerHTML = `
        <span class="genre-tag">The Result</span>
        <h2 class="book-title">Your Match: ${bestMatch}</h2>
        
        <p class="book-description" style="color: white; margin-bottom: 20px;">
            ${details.desc}
        </p>

        <div style="background: #111; border-left: 3px solid #dc2626; padding: 15px; margin-bottom: 25px;">
            <h3 style="color: #dc2626; font-size: 0.9rem; text-transform: uppercase; letter-spacing: 1px; margin-bottom: 10px;">Example Career Paths</h3>
            <ul style="color: #ccc; padding-left: 20px; font-family: 'Inter', sans-serif;">
                ${careerList}
            </ul>
        </div>

        <div class="hero-actions">
            <button onclick="startQuiz()" class="email-btn" style="background:none; cursor:pointer;">Retake Test</button>
        </div>
    `;
}