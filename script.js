

const text = "Explore Beautiful India";


const typingSpan = document.getElementById("typingText");


let counter = 0;

let typingInterval;

setTimeout(function() {
  
  typingInterval = setInterval(type, 100);
}, 1200);

function type() {
  if (counter < text.length) {
    typingSpan.innerHTML += text[counter];
    
    counter++;
  } else {
    clearInterval(typingInterval);
    
  }
}


//  THEME TOGGLE

const themeToggle = document.getElementById("themeToggle");
// finds our theme toggle div

const body = document.body;

const savedTheme = localStorage.getItem("theme");
// localStorage.getItem checks if user had previously selected a theme
// localStorage is like browser's notepad — remembers data after refresh
// if user never visited before this returns null
// if user selected light before this returns "light"

if (savedTheme === "light") {
  body.classList.add("light-theme");
  // if saved theme is light — apply it immediately on page load
  // this runs before page fully renders so no flash of wrong theme
}

themeToggle.addEventListener("click", function() {
  // addEventListener listens for a click on the toggle div
  // when clicked — run this function

  body.classList.toggle("light-theme");
  // classList.toggle adds the class if not present
  // removes the class if already present
  // one line does both add and remove — very clean

  if (body.classList.contains("light-theme")) {
    // classList.contains checks if class is currently on body
    // if light-theme is now ON — save "light" to localStorage

    localStorage.setItem("theme", "light");
    // localStorage.setItem saves key-value pair in browser
    // key = "theme", value = "light"
    // this persists even after browser tab is closed

  } else {
    localStorage.setItem("theme", "dark");
    
  }
});