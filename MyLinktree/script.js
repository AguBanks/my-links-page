// Money-making quotes
const moneyQuotes = [
    "Make money work for you, not the other way around.",
    "Passive income is the key to financial freedom.",
    "Invest wisely, and watch your wealth grow.",
    "Every dollar you save is a dollar you invest in your future.",
    "Wealth is built one step at a time.",
    "Identify a profitable niche, such as 'Tech Consulting' or 'Event Planning'.",
    "Set up multiple income streams, like freelancing, investments, or affiliate marketing.",
    "Offer a high-demand service—examples include social media management or copywriting.",
    "Build and sell a product, such as an online course or a digital tool.",
    "Leverage networking opportunities by connecting with professionals at events or on LinkedIn.",
    "Save and invest smartly to ensure your money grows over time.",
    "Upskill and monetize your expertise in fields like programming, graphic design, or writing.",
    "Start a YouTube channel focusing on topics like finance tips or gaming content.",
    "Engage in e-commerce by selling physical products or handmade crafts online.",
    "Write and monetize an ebook about a topic you're knowledgeable in, such as personal finance.",
    "Create passive income streams through rental properties, stock dividends, or royalties.",
    "Freelance online on platforms like Upwork, Fiverr, or PeoplePerHour.",
    "Develop and monetize a mobile app that solves a problem, such as an expense tracker.",
    "Start blogging and earn from ads or sponsored posts—consider topics like lifestyle or tech.",
    "Sell your expertise as a coach or consultant in areas like career guidance or fitness.",
    "Learn about cryptocurrency trading and invest based on market trends and insights.",
    "Monetize your hobbies—turn photography, music, or art into a source of income.",
    "Explore new freelance platforms to find more opportunities and expand your reach.",
    "Invest in stocks, bonds, or mutual funds to grow your wealth over time.",
    "Create and sell digital products, such as printables, stock photos, or design assets.",
    "Start a podcast and monetize it through sponsorships, merchandise, or premium content.",
    "Offer online courses or workshops on platforms like Udemy or Teachable.",
    "Start an online tutoring business, teaching subjects you're proficient in, like coding or math",
];

// Function to refresh money quote
function refreshQuote() {
    let randomIndex = Math.floor(Math.random() * moneyQuotes.length);
    document.getElementById("money-quote").innerText = moneyQuotes[randomIndex];
}

// Dark mode toggle
const themeToggle = document.getElementById("theme-toggle");
const profilePic = document.getElementById("profile-pic");
let darkMode = false;

themeToggle.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");
    darkMode = !darkMode;
    
    // Switch profile picture
    profilePic.src = darkMode ? "images/profile-dark.jpg" : "images/profile-light.jpg";
    
    // Update button text
    themeToggle.innerText = darkMode ? "☀️ Light Mode" : "🌙 Dark Mode";
});

// Load a random quote on page load
refreshQuote();
