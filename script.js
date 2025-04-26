const quotes = [
    "Believe you can and you're halfway there. - Theodore Roosevelt",
    "The only way to do great work is to love what you do. - Steve Jobs",
    "It always seems impossible until it's done.- Nelson Mandela",
    "Dream big and dare to fail. - Norman Vaughan",
    "Success is not in what you have, but who you are. - Bo Bennett",
    "Start where you are. Use what you have. Do what you can. - Arthur Ashe",
    "Don't watch the clock; do what it does. Keep going. - Sam Levenson",
    "The harder you work for something, the greater you'll feel when you achieve it.",
    "Dream it. Wish it. Do it.",
    "Great things never come from comfort zones.",
    "Push yourself, because no one else is going to do it for you.",
    "Success doesn't just find you. You have to go out and get it.",
    "The future depends on what you do today. - Mahatma Gandhi",
    "Little things make big days.",
    "Don't stop when you're tired. Stop when you're done.",
    "It's going to be hard, but hard does not mean impossible.",
    "Believe in yourself and all that you are.",
    "The secret of getting ahead is getting started. - Mark Twain",
    "Doubt kills more dreams than failure ever will. - Suzy Kassem",
    "Stay positive. Work hard. Make it happen."
];


function generate() {
    const randomQuote = Math.floor(Math.random() * quotes.length);
    document.getElementById("quote").innerText = quotes[randomQuote];
}
