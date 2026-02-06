# Mood-Based Quote Generator 💭✨

A beautiful, interactive quote generator that personalizes inspiring quotes based on your current mood. Features mood selection, dynamic images, and a modern user interface.

## 🌟 Features

### Mood Selection (15 Moods)
- 😊 **Happy** - Joyful and energetic
- 💪 **Motivated** - Ready to conquer the world
- 😔 **Sad** - Need comfort and hope
- 😰 **Stressed** - Overwhelmed and anxious
- 🤔 **Confused** - Seeking clarity and direction
- 🙏 **Grateful** - Counting your blessings
- 😴 **Tired** - Need rest and restoration
- 🌟 **Inspired** - Full of creative energy
- 😞 **Lonely** - Feeling disconnected
- 😎 **Confident** - Believing in yourself
- 🤩 **Excited** - Full of anticipation
- 😟 **Anxious** - Worried about the future
- 😌 **Peaceful** - Calm and serene
- 🔥 **Determined** - Focused and unstoppable
- 🥺 **Nostalgic** - Remembering the past

### Interactive Features
- **Mood-Based Quotes**: 150+ curated quotes categorized by mood (10 quotes per mood)
- **Dynamic Images**: Beautiful images from Unsplash that match your mood
- **Smooth Transitions**: Elegant page transitions and animations
- **Color Themes**: Background changes based on selected mood
- **Share Functionality**: Share quotes via Web Share API or copy to clipboard
- **Favorite Quotes**: Save your favorite quotes (stored in browser)
- **Keyboard Shortcut**: Press Space bar for a new quote
- **Fully Responsive**: Works on all devices

## 🎨 User Experience

### Page 1: Mood Selection
- Beautiful grid layout with 15 mood cards
- Interactive hover effects with animations
- Each card shows emoji, title, and description
- Smooth transitions when selecting a mood

### Page 2: Quote Display
- Dynamic background gradient matching your mood
- Beautiful image related to your mood theme
- Large, readable quote with author attribution
- Category badge showing quote type
- Action buttons: New Quote, Share, Favorite
- Back button to change mood

## 🛠️ Technologies Used

- **HTML5** - Semantic structure
- **CSS3** - Advanced animations, gradients, and transitions
- **Vanilla JavaScript** - ES6+ features
- **Unsplash API** - Dynamic mood-based images
- **Local Storage** - Favorite quotes persistence
- **Web Share API** - Native sharing on supported devices
- **Google Fonts** - Poppins & Playfair Display

## 🚀 How to Use

### Installation
1. Clone or download the repository
2. Open `index.html` in your web browser
3. No installation or build process needed!

### Using the App
1. **Select Your Mood**: Click on a mood card that matches how you're feeling
2. **View Quote**: See a personalized quote with a beautiful image
3. **Get More Quotes**: Click "New Quote" or press Space bar
4. **Share**: Click share button to copy or share the quote
5. **Favorite**: Click the heart icon to save favorite quotes
6. **Change Mood**: Click "Change Mood" to go back and select a different mood

## 📁 Project Structure

```
mood-quote-generator/
│
├── index.html          # Main HTML with mood selection & quote pages
├── style.css           # Styling, animations, and responsive design
├── script.js           # Quote logic, mood management, and API integration
└── README.md           # Project documentation
```

## 🎯 Features Breakdown

### Mood System
- 15 distinct moods with unique color schemes
- Each mood has 10 specially curated quotes
- Background gradient changes based on mood
- Mood emoji displays on quote page

### Quote Management
- 150 total quotes (10 per mood category)
- Smart quote rotation (won't repeat until all are shown)
- Category badges for each quote
- Author attribution

### Image Integration
- Unsplash API integration for dynamic images
- Mood-based search terms
- Smooth image loading
- Hover effects on images

### User Interface
- Clean, modern design
- Smooth page transitions
- Interactive hover effects
- Responsive button states
- Loading animations

## 💾 Local Storage Features

The app saves your favorite quotes locally in the browser:
- Favorites persist across sessions
- No login required
- Privacy-friendly (all data stays on your device)

## 🎨 Customization

### Adding More Quotes
Edit the `quotesByMood` object in `script.js`:

```javascript
happy: [
    { 
        text: "Your quote here", 
        author: "Author Name", 
        category: "Category" 
    },
    // Add more quotes...
]
```

### Changing Mood Colors
Modify gradients in `style.css`:

```css
--happy-gradient: linear-gradient(135deg, #f093fb 0%, #f5576c 100%);
```

### Customizing Images
Change the Unsplash search terms in `script.js`:

```javascript
const moodData = {
    happy: { 
        emoji: "😊", 
        text: "Happy", 
        theme: "happiness, joy, smile, celebration" 
    }
}
```

## 🌐 Browser Support

- ✅ Chrome (latest)
- ✅ Firefox (latest)
- ✅ Safari (latest)
- ✅ Edge (latest)
- ✅ Mobile browsers (iOS & Android)

### Required Features
- ES6+ JavaScript support
- CSS Grid & Flexbox
- Local Storage
- Fetch API (for images)

## 📱 Responsive Design

- **Desktop**: Full grid layout with hover effects
- **Tablet**: Adjusted grid (2-3 columns)
- **Mobile**: Optimized for touch, 2-column grid
- All features work across devices

## 🔮 Future Enhancements

- [ ] Add even more moods (Bored, Romantic, Energetic, etc.)
- [ ] Daily quote notification
- [ ] Export favorites as image
- [ ] Dark mode toggle
- [ ] Custom mood creation
- [ ] Quote search functionality
- [ ] Social media direct sharing
- [ ] Quote of the day feature
- [ ] User-submitted quotes
- [ ] Multilingual support

## 🎓 Learning Outcomes

This project demonstrates:
- Multi-page SPA (Single Page Application) design
- State management in vanilla JavaScript
- API integration (Unsplash)
- Local Storage implementation
- Advanced CSS animations and transitions
- Responsive design patterns
- User experience design
- Mood-based content personalization

## 📄 License

This project is open source and available under the MIT License.

## 🙏 Acknowledgments

- Quotes from famous authors, thinkers, and leaders
- Images powered by [Unsplash](https://unsplash.com)
- Fonts from [Google Fonts](https://fonts.google.com)
- Icons created with SVG

## 🤝 Contributing

Feel free to fork this project and add your own moods, quotes, or features!

---

**Find your mood, get inspired!** ✨

Created as part of the 30 Days JavaScript Challenge - Day 3

**Made with ❤️ and JavaScript**
