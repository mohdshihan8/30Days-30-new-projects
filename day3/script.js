// Mood-based quotes organized by mood
const quotesByMood = {
    happy: [
        { text: "Happiness is not something ready made. It comes from your own actions.", author: "Dalai Lama", category: "Happiness" },
        { text: "The most important thing is to enjoy your life—to be happy—it's all that matters.", author: "Audrey Hepburn", category: "Joy" },
        { text: "Happiness is when what you think, what you say, and what you do are in harmony.", author: "Mahatma Gandhi", category: "Happiness" },
        { text: "For every minute you are angry you lose sixty seconds of happiness.", author: "Ralph Waldo Emerson", category: "Joy" },
        { text: "The purpose of our lives is to be happy.", author: "Dalai Lama", category: "Happiness" },
        { text: "Happiness is a warm puppy.", author: "Charles M. Schulz", category: "Joy" },
        { text: "Count your age by friends, not years. Count your life by smiles, not tears.", author: "John Lennon", category: "Happiness" },
        { text: "Happiness often sneaks in through a door you didn't know you left open.", author: "John Barrymore", category: "Joy" },
        { text: "The best way to cheer yourself is to try to cheer someone else up.", author: "Mark Twain", category: "Happiness" },
        { text: "Be happy for this moment. This moment is your life.", author: "Omar Khayyam", category: "Joy" }
    ],
    motivated: [
        { text: "The only way to do great work is to love what you do.", author: "Steve Jobs", category: "Motivation" },
        { text: "Believe you can and you're halfway there.", author: "Theodore Roosevelt", category: "Motivation" },
        { text: "Don't watch the clock; do what it does. Keep going.", author: "Sam Levenson", category: "Perseverance" },
        { text: "The future belongs to those who believe in the beauty of their dreams.", author: "Eleanor Roosevelt", category: "Dreams" },
        { text: "It does not matter how slowly you go as long as you do not stop.", author: "Confucius", category: "Perseverance" },
        { text: "Everything you've ever wanted is on the other side of fear.", author: "George Addair", category: "Courage" },
        { text: "Believe in yourself. You are braver than you think, more talented than you know, and capable of more than you imagine.", author: "Roy T. Bennett", category: "Motivation" },
        { text: "I learned that courage was not the absence of fear, but the triumph over it.", author: "Nelson Mandela", category: "Courage" },
        { text: "Start where you are. Use what you have. Do what you can.", author: "Arthur Ashe", category: "Action" },
        { text: "The only impossible journey is the one you never begin.", author: "Tony Robbins", category: "Motivation" }
    ],
    sad: [
        { text: "Every day may not be good, but there's something good in every day.", author: "Alice Morse Earle", category: "Hope" },
        { text: "The sun himself is weak when he first rises, and gathers strength and courage as the day gets on.", author: "Charles Dickens", category: "Hope" },
        { text: "Tears are words that need to be written.", author: "Paulo Coelho", category: "Comfort" },
        { text: "You are stronger than you think. Keep going.", author: "Unknown", category: "Strength" },
        { text: "This too shall pass.", author: "Persian Proverb", category: "Hope" },
        { text: "When you come out of the storm, you won't be the same person who walked in. That's what the storm is all about.", author: "Haruki Murakami", category: "Growth" },
        { text: "The wound is the place where the Light enters you.", author: "Rumi", category: "Healing" },
        { text: "You're allowed to scream, you're allowed to cry, but do not give up.", author: "Unknown", category: "Perseverance" },
        { text: "Sometimes the bad things that happen in our lives put us directly on the path to the best things that will ever happen to us.", author: "Unknown", category: "Hope" },
        { text: "Keep your face always toward the sunshine—and shadows will fall behind you.", author: "Walt Whitman", category: "Hope" }
    ],
    stressed: [
        { text: "You must learn to let go. Release the stress. You were never in control anyway.", author: "Steve Maraboli", category: "Peace" },
        { text: "In times of stress, the best thing we can do for each other is to listen and to let each other know that we're here.", author: "Fred Rogers", category: "Support" },
        { text: "Take a deep breath. It's just a bad day, not a bad life.", author: "Unknown", category: "Perspective" },
        { text: "Almost everything will work again if you unplug it for a few minutes, including you.", author: "Anne Lamott", category: "Rest" },
        { text: "Calm mind brings inner strength and self-confidence, so that's very important for good health.", author: "Dalai Lama", category: "Peace" },
        { text: "You can't calm the storm, so stop trying. What you can do is calm yourself. The storm will pass.", author: "Timber Hawkeye", category: "Peace" },
        { text: "The greatest weapon against stress is our ability to choose one thought over another.", author: "William James", category: "Mindfulness" },
        { text: "Sometimes the most productive thing you can do is relax.", author: "Mark Black", category: "Rest" },
        { text: "Stress is caused by being here but wanting to be there.", author: "Eckhart Tolle", category: "Mindfulness" },
        { text: "Don't let your mind bully your body into believing it must carry the burden of its worries.", author: "Astrid Alauda", category: "Peace" }
    ],
    confused: [
        { text: "In the middle of difficulty lies opportunity.", author: "Albert Einstein", category: "Wisdom" },
        { text: "Confusion is a luxury which only the very, very young can possibly afford.", author: "E.E. Cummings", category: "Growth" },
        { text: "The best way out is always through.", author: "Robert Frost", category: "Perseverance" },
        { text: "Sometimes you need to step outside, get some air, and remind yourself of who you are and where you want to be.", author: "Unknown", category: "Clarity" },
        { text: "When you can't control what's happening, challenge yourself to control the way you respond. That's where your power is.", author: "Unknown", category: "Control" },
        { text: "If you don't know where you are going, any road will get you there.", author: "Lewis Carroll", category: "Direction" },
        { text: "Clarity comes from action, not thought.", author: "Marie Forleo", category: "Action" },
        { text: "The cave you fear to enter holds the treasure you seek.", author: "Joseph Campbell", category: "Courage" },
        { text: "Trust the process. Your time is coming. Just do the work and the results will handle themselves.", author: "Tony Gaskins", category: "Trust" },
        { text: "Sometimes the most important thing in a whole day is the rest we take between two deep breaths.", author: "Etty Hillesum", category: "Peace" }
    ],
    grateful: [
        { text: "Gratitude turns what we have into enough.", author: "Anonymous", category: "Gratitude" },
        { text: "The more grateful I am, the more beauty I see.", author: "Mary Davis", category: "Gratitude" },
        { text: "Gratitude is not only the greatest of virtues but the parent of all others.", author: "Marcus Tullius Cicero", category: "Virtue" },
        { text: "When you are grateful, fear disappears and abundance appears.", author: "Tony Robbins", category: "Abundance" },
        { text: "Enjoy the little things, for one day you may look back and realize they were the big things.", author: "Robert Brault", category: "Appreciation" },
        { text: "Gratitude is the healthiest of all human emotions.", author: "Zig Ziglar", category: "Gratitude" },
        { text: "Be thankful for what you have; you'll end up having more.", author: "Oprah Winfrey", category: "Abundance" },
        { text: "Acknowledging the good that you already have in your life is the foundation for all abundance.", author: "Eckhart Tolle", category: "Gratitude" },
        { text: "Gratitude makes sense of our past, brings peace for today, and creates a vision for tomorrow.", author: "Melody Beattie", category: "Peace" },
        { text: "The struggle ends when gratitude begins.", author: "Neale Donald Walsch", category: "Gratitude" }
    ],
    tired: [
        { text: "Rest when you're weary. Refresh and renew yourself, your body, your mind, your spirit. Then get back to work.", author: "Ralph Marston", category: "Rest" },
        { text: "Almost everything will work again if you unplug it for a few minutes, including you.", author: "Anne Lamott", category: "Rest" },
        { text: "Take rest; a field that has rested gives a bountiful crop.", author: "Ovid", category: "Renewal" },
        { text: "There is virtue in work and there is virtue in rest. Use both and overlook neither.", author: "Alan Cohen", category: "Balance" },
        { text: "Your body hears everything your mind says. Stay positive.", author: "Unknown", category: "Wellness" },
        { text: "Sleep is the best meditation.", author: "Dalai Lama", category: "Rest" },
        { text: "Sometimes the most productive thing you can do is sleep.", author: "Unknown", category: "Rest" },
        { text: "Fatigue makes cowards of us all.", author: "Vince Lombardi", category: "Energy" },
        { text: "The time to relax is when you don't have time for it.", author: "Sydney J. Harris", category: "Rest" },
        { text: "Self-care is giving the world the best of you, instead of what's left of you.", author: "Katie Reed", category: "Self-care" }
    ],
    inspired: [
        { text: "Creativity is intelligence having fun.", author: "Albert Einstein", category: "Creativity" },
        { text: "The only way to do great work is to love what you do.", author: "Steve Jobs", category: "Passion" },
        { text: "Innovation distinguishes between a leader and a follower.", author: "Steve Jobs", category: "Innovation" },
        { text: "Inspiration exists, but it has to find you working.", author: "Pablo Picasso", category: "Inspiration" },
        { text: "Don't wait for inspiration. It comes while working.", author: "Henri Matisse", category: "Action" },
        { text: "You can't use up creativity. The more you use, the more you have.", author: "Maya Angelou", category: "Creativity" },
        { text: "The desire to create is one of the deepest yearnings of the human soul.", author: "Dieter F. Uchtdorf", category: "Creation" },
        { text: "Every artist was first an amateur.", author: "Ralph Waldo Emerson", category: "Growth" },
        { text: "Creativity takes courage.", author: "Henri Matisse", category: "Courage" },
        { text: "The world is but a canvas to our imagination.", author: "Henry David Thoreau", category: "Imagination" }
    ],
    lonely: [
        { text: "The eternal quest of the human being is to shatter his loneliness.", author: "Norman Cousins", category: "Connection" },
        { text: "The soul that sees beauty may sometimes walk alone.", author: "Johann Wolfgang von Goethe", category: "Beauty" },
        { text: "Loneliness adds beauty to life. It puts a special burn on sunsets and makes night air smell better.", author: "Henry Rollins", category: "Perspective" },
        { text: "Sometimes you need to be alone. Not to be lonely, but to enjoy your free time being yourself.", author: "Unknown", category: "Solitude" },
        { text: "You cannot be lonely if you like the person you're alone with.", author: "Wayne Dyer", category: "Self-love" },
        { text: "The best part about being alone is that you really don't have to answer to anybody. You do what you want.", author: "Justin Timberlake", category: "Freedom" },
        { text: "Standing alone doesn't mean I'm alone. It means I'm strong enough to handle things by myself.", author: "Unknown", category: "Strength" },
        { text: "All great and precious things are lonely.", author: "John Steinbeck", category: "Value" },
        { text: "If you're lonely when you're alone, you're in bad company.", author: "Jean-Paul Sartre", category: "Self-companionship" },
        { text: "The capacity for friendship is God's way of apologizing for our families.", author: "Jay McInerney", category: "Friendship" }
    ],
    confident: [
        { text: "Confidence is not 'they will like me'. Confidence is 'I'll be fine if they don't'.", author: "Unknown", category: "Self-assurance" },
        { text: "You gain strength, courage and confidence by every experience in which you really stop to look fear in the face.", author: "Eleanor Roosevelt", category: "Courage" },
        { text: "The most beautiful thing you can wear is confidence.", author: "Blake Lively", category: "Confidence" },
        { text: "With confidence, you have won before you have started.", author: "Marcus Garvey", category: "Success" },
        { text: "Believe in yourself and all that you are. Know that there is something inside you that is greater than any obstacle.", author: "Christian D. Larson", category: "Self-belief" },
        { text: "Confidence comes not from always being right but from not fearing to be wrong.", author: "Peter T. McIntyre", category: "Courage" },
        { text: "No one can make you feel inferior without your consent.", author: "Eleanor Roosevelt", category: "Self-worth" },
        { text: "Once we believe in ourselves, we can risk curiosity, wonder, spontaneous delight, or any experience that reveals the human spirit.", author: "E.E. Cummings", category: "Self-belief" },
        { text: "Trust yourself. You know more than you think you do.", author: "Benjamin Spock", category: "Trust" },
        { text: "The way to develop self-confidence is to do the thing you fear.", author: "William Jennings Bryan", category: "Growth" }
    ],
    excited: [
        { text: "The future belongs to those who believe in the beauty of their dreams.", author: "Eleanor Roosevelt", category: "Dreams" },
        { text: "Great things never came from comfort zones.", author: "Unknown", category: "Adventure" },
        { text: "Life is either a daring adventure or nothing at all.", author: "Helen Keller", category: "Adventure" },
        { text: "The best is yet to come.", author: "Unknown", category: "Optimism" },
        { text: "Adventure is worthwhile in itself.", author: "Amelia Earhart", category: "Adventure" },
        { text: "Life begins at the end of your comfort zone.", author: "Neale Donald Walsch", category: "Growth" },
        { text: "Every day is a new beginning. Take a deep breath and start again.", author: "Unknown", category: "Fresh Start" },
        { text: "The only way to do great work is to love what you do.", author: "Steve Jobs", category: "Passion" },
        { text: "Dream big and dare to fail.", author: "Norman Vaughan", category: "Dreams" },
        { text: "The biggest adventure you can take is to live the life of your dreams.", author: "Oprah Winfrey", category: "Adventure" }
    ],
    anxious: [
        { text: "You don't have to control your thoughts. You just have to stop letting them control you.", author: "Dan Millman", category: "Control" },
        { text: "Worry does not empty tomorrow of its sorrow, it empties today of its strength.", author: "Corrie Ten Boom", category: "Peace" },
        { text: "Anxiety is like a rocking chair. It gives you something to do but gets you nowhere.", author: "Jodi Picoult", category: "Perspective" },
        { text: "Do not anticipate trouble, or worry about what may never happen. Keep in the sunlight.", author: "Benjamin Franklin", category: "Wisdom" },
        { text: "The greatest weapon against stress is our ability to choose one thought over another.", author: "William James", category: "Mindfulness" },
        { text: "Nothing can bring you peace but yourself.", author: "Ralph Waldo Emerson", category: "Inner Peace" },
        { text: "You wouldn't worry so much about what others think of you if you realized how seldom they do.", author: "Eleanor Roosevelt", category: "Perspective" },
        { text: "Present moment awareness is the key to freedom from anxiety.", author: "Unknown", category: "Mindfulness" },
        { text: "Breathe. Let go. And remind yourself that this very moment is the only one you know you have for sure.", author: "Oprah Winfrey", category: "Mindfulness" },
        { text: "Our anxiety does not come from thinking about the future, but from wanting to control it.", author: "Kahlil Gibran", category: "Control" }
    ],
    peaceful: [
        { text: "Peace comes from within. Do not seek it without.", author: "Buddha", category: "Inner Peace" },
        { text: "In the midst of movement and chaos, keep stillness inside of you.", author: "Deepak Chopra", category: "Calm" },
        { text: "The best fighter is never angry.", author: "Lao Tzu", category: "Peace" },
        { text: "Peace is not absence of conflict, it is the ability to handle conflict by peaceful means.", author: "Ronald Reagan", category: "Peace" },
        { text: "When you find peace within yourself, you become the kind of person who can live at peace with others.", author: "Peace Pilgrim", category: "Harmony" },
        { text: "Nothing can disturb your peace of mind unless you allow it to.", author: "Roy T. Bennett", category: "Inner Peace" },
        { text: "Peace is the result of retraining your mind to process life as it is, rather than as you think it should be.", author: "Wayne Dyer", category: "Acceptance" },
        { text: "Do not let the behavior of others destroy your inner peace.", author: "Dalai Lama", category: "Inner Peace" },
        { text: "The life of inner peace, being harmonious and without stress, is the easiest type of existence.", author: "Norman Vincent Peale", category: "Harmony" },
        { text: "Set peace of mind as your highest goal, and organize your life around it.", author: "Brian Tracy", category: "Peace" }
    ],
    determined: [
        { text: "It always seems impossible until it's done.", author: "Nelson Mandela", category: "Determination" },
        { text: "The difference between the impossible and the possible lies in a person's determination.", author: "Tommy Lasorda", category: "Determination" },
        { text: "I am not a product of my circumstances. I am a product of my decisions.", author: "Stephen Covey", category: "Choice" },
        { text: "The only limit to our realization of tomorrow is our doubts of today.", author: "Franklin D. Roosevelt", category: "Belief" },
        { text: "Success is not final, failure is not fatal: it is the courage to continue that counts.", author: "Winston Churchill", category: "Perseverance" },
        { text: "A winner is just a loser who tried one more time.", author: "George M. Moore Jr.", category: "Perseverance" },
        { text: "I will prepare and some day my chance will come.", author: "Abraham Lincoln", category: "Preparation" },
        { text: "The hard days are what make you stronger.", author: "Aly Raisman", category: "Strength" },
        { text: "Don't stop when you're tired. Stop when you're done.", author: "Unknown", category: "Perseverance" },
        { text: "Fall seven times, stand up eight.", author: "Japanese Proverb", category: "Resilience" }
    ],
    nostalgic: [
        { text: "Yesterday is but today's memory, and tomorrow is today's dream.", author: "Khalil Gibran", category: "Reflection" },
        { text: "The past beats inside me like a second heart.", author: "John Banville", category: "Memory" },
        { text: "Nostalgia is a file that removes the rough edges from the good old days.", author: "Doug Larson", category: "Memory" },
        { text: "We do not remember days, we remember moments.", author: "Cesare Pavese", category: "Memory" },
        { text: "Memory is a way of holding onto the things you love, the things you are, the things you never want to lose.", author: "Kevin Arnold", category: "Memory" },
        { text: "The best thing about memories is making them.", author: "Unknown", category: "Memories" },
        { text: "Sometimes you will never know the value of a moment until it becomes a memory.", author: "Dr. Seuss", category: "Appreciation" },
        { text: "Take only memories, leave only footprints.", author: "Chief Seattle", category: "Legacy" },
        { text: "Life is shorter than you think. Cherish every moment.", author: "Unknown", category: "Appreciation" },
        { text: "The best memories come from the craziest ideas.", author: "Unknown", category: "Adventure" }
    ]
};

// Mood data with emojis and themes
const moodData = {
    happy: { emoji: "😊", text: "Happy", theme: "happiness, joy, smile, celebration" },
    motivated: { emoji: "💪", text: "Motivated", theme: "success, motivation, achievement, goal" },
    sad: { emoji: "😔", text: "Sad", theme: "comfort, hope, nature, peace" },
    stressed: { emoji: "😰", text: "Stressed", theme: "calm, meditation, relaxation, peaceful" },
    confused: { emoji: "🤔", text: "Confused", theme: "clarity, path, direction, light" },
    grateful: { emoji: "🙏", text: "Grateful", theme: "gratitude, thankful, blessing, nature" },
    tired: { emoji: "😴", text: "Tired", theme: "rest, sleep, peaceful, sunset" },
    inspired: { emoji: "🌟", text: "Inspired", theme: "inspiration, creative, art, imagination" },
    lonely: { emoji: "😞", text: "Lonely", theme: "solitude, alone, reflection, sunset" },
    confident: { emoji: "😎", text: "Confident", theme: "confidence, strong, power, success" },
    excited: { emoji: "🤩", text: "Excited", theme: "excitement, celebration, adventure, energy" },
    anxious: { emoji: "😟", text: "Anxious", theme: "calm, peace, relaxation, meditation" },
    peaceful: { emoji: "😌", text: "Peaceful", theme: "peaceful, zen, nature, tranquil" },
    determined: { emoji: "🔥", text: "Determined", theme: "determination, focus, strength, victory" },
    nostalgic: { emoji: "🥺", text: "Nostalgic", theme: "nostalgia, memories, vintage, childhood" }
};

// Current state
let currentMood = '';
let currentQuote = null;
let usedQuotes = new Set();

// DOM elements
const moodPage = document.getElementById('moodPage');
const quotePage = document.getElementById('quotePage');
const moodCards = document.querySelectorAll('.mood-card');
const backBtn = document.getElementById('backBtn');
const newQuoteBtn = document.getElementById('newQuoteBtn');
const shareBtn = document.getElementById('shareBtn');
const favoriteBtn = document.getElementById('favoriteBtn');
const currentMoodEmoji = document.getElementById('currentMoodEmoji');
const currentMoodText = document.getElementById('currentMoodText');
const quoteText = document.getElementById('quote');
const quoteAuthor = document.getElementById('author');
const categoryTag = document.getElementById('category');
const quoteBox = document.querySelector('.quote-box');

// Mood selection event
moodCards.forEach(card => {
    card.addEventListener('click', () => {
        currentMood = card.dataset.mood;
        usedQuotes.clear(); // Reset used quotes when changing mood
        showQuotePage();
        displayNewQuote();
    });
});

// Show quote page with animation
function showQuotePage() {
    moodPage.classList.remove('active');
    quotePage.classList.add('active');
    
    // Update mood display
    const mood = moodData[currentMood];
    currentMoodEmoji.textContent = mood.emoji;
    currentMoodText.textContent = mood.text;
    
    // Change background gradient based on mood
    document.body.style.background = getGradientForMood(currentMood);
}

// Get gradient for specific mood
function getGradientForMood(mood) {
    const gradients = {
        happy: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)',
        motivated: 'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)',
        sad: 'linear-gradient(135deg, #a1c4fd 0%, #c2e9fb 100%)',
        stressed: 'linear-gradient(135deg, #fa709a 0%, #fee140 100%)',
        confused: 'linear-gradient(135deg, #30cfd0 0%, #330867 100%)',
        grateful: 'linear-gradient(135deg, #ffecd2 0%, #fcb69f 100%)',
        tired: 'linear-gradient(135deg, #e0c3fc 0%, #8ec5fc 100%)',
        inspired: 'linear-gradient(135deg, #f7971e 0%, #ffd200 100%)',
        lonely: 'linear-gradient(135deg, #d299c2 0%, #fef9d7 100%)',
        confident: 'linear-gradient(135deg, #ff9a9e 0%, #fecfef 100%)',
        excited: 'linear-gradient(135deg, #ffd89b 0%, #19547b 100%)',
        anxious: 'linear-gradient(135deg, #a8edea 0%, #fed6e3 100%)',
        peaceful: 'linear-gradient(135deg, #c1dfc4 0%, #deecdd 100%)',
        determined: 'linear-gradient(135deg, #ee0979 0%, #ff6a00 100%)',
        nostalgic: 'linear-gradient(135deg, #fbc2eb 0%, #a6c1ee 100%)'
    };
    return gradients[mood] || 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)';
}

// Back to mood selection
backBtn.addEventListener('click', () => {
    quotePage.classList.remove('active');
    moodPage.classList.add('active');
    document.body.style.background = 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)';
});

// Get random quote for current mood
function getRandomQuote() {
    const quotes = quotesByMood[currentMood];
    
    // If all quotes have been used, reset
    if (usedQuotes.size >= quotes.length) {
        usedQuotes.clear();
    }
    
    // Get unused quote
    let quote;
    do {
        const randomIndex = Math.floor(Math.random() * quotes.length);
        quote = quotes[randomIndex];
    } while (usedQuotes.has(quote.text) && usedQuotes.size < quotes.length);
    
    usedQuotes.add(quote.text);
    return quote;
}

// Display new quote
function displayNewQuote() {
    quoteBox.classList.add('loading');
    
    currentQuote = getRandomQuote();
    
    setTimeout(() => {
        quoteText.textContent = currentQuote.text;
        quoteAuthor.textContent = currentQuote.author;
        categoryTag.textContent = currentQuote.category;
        
        quoteBox.classList.remove('loading');
        
        // Animate quote
        quoteText.style.animation = 'none';
        setTimeout(() => {
            quoteText.style.animation = 'fadeIn 0.5s ease-in';
        }, 10);
    }, 500);
}

// Share quote
function shareQuote() {
    if (!currentQuote) {
        displayNewQuote();
        return;
    }
    
    const shareText = `"${currentQuote.text}" - ${currentQuote.author}\n\nMood: ${moodData[currentMood].text} ${moodData[currentMood].emoji}`;
    
    if (navigator.share) {
        navigator.share({
            title: 'Inspiring Quote',
            text: shareText
        })
        .then(() => console.log('Quote shared successfully'))
        .catch((error) => console.log('Error sharing:', error));
    } else {
        navigator.clipboard.writeText(shareText)
            .then(() => {
                const originalHTML = shareBtn.innerHTML;
                shareBtn.innerHTML = '<svg class="btn-icon" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M5 13L9 17L19 7" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>Copied!';
                
                setTimeout(() => {
                    shareBtn.innerHTML = originalHTML;
                }, 2000);
            })
            .catch((error) => {
                console.error('Failed to copy:', error);
                alert('Failed to copy quote. Please try again.');
            });
    }
}

// Favorite quote
let favorites = JSON.parse(localStorage.getItem('favoriteQuotes')) || [];

function toggleFavorite() {
    if (!currentQuote) return;
    
    const quoteId = currentQuote.text;
    const index = favorites.findIndex(fav => fav.text === quoteId);
    
    if (index > -1) {
        // Remove from favorites
        favorites.splice(index, 1);
        favoriteBtn.classList.remove('favorited');
    } else {
        // Add to favorites
        favorites.push({
            text: currentQuote.text,
            author: currentQuote.author,
            mood: currentMood,
            category: currentQuote.category
        });
        favoriteBtn.classList.add('favorited');
    }
    
    localStorage.setItem('favoriteQuotes', JSON.stringify(favorites));
}

// Event listeners
newQuoteBtn.addEventListener('click', displayNewQuote);
shareBtn.addEventListener('click', shareQuote);
favoriteBtn.addEventListener('click', toggleFavorite);

// Keyboard shortcut (Space for new quote)
document.addEventListener('keydown', (event) => {
    if (event.code === 'Space' && event.target === document.body && quotePage.classList.contains('active')) {
        event.preventDefault();
        displayNewQuote();
    }
});

// Check if quote is favorited when displaying
function updateFavoriteButton() {
    if (!currentQuote) return;
    
    const isFavorited = favorites.some(fav => fav.text === currentQuote.text);
    if (isFavorited) {
        favoriteBtn.classList.add('favorited');
    } else {
        favoriteBtn.classList.remove('favorited');
    }
}

// Update the displayNewQuote function to include favorite check
const originalDisplayNewQuote = displayNewQuote;
displayNewQuote = function() {
    originalDisplayNewQuote();
    setTimeout(updateFavoriteButton, 600);
};
