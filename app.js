const emojiButton = document.getElementById("emojiButton");
const emojiDisplay = document.getElementById("emoji");

// Create an array of emojis
const emojis = ["😀", "😂", "😍", "🥳", "😎", "🐱", "🐶", "🌸", "⭐", "🍕"];

// Create a click event
emojiButton.addEventListener("click", function() {

    // Select a random emoji
    const randomNumber = Math.floor(Math.random() * emojis.length);

    // Display the selected emoji
    emojiDisplay.textContent = emojis[randomNumber];

});