// Letters
const letters = "abcdefghijklmnopqrstuvwxyz";

// Get Arry From Letters
// وضعنا المتغير داخل متغير اخر يحتوي عليه بشكل مصفوفة
let lettersArray = Array.from(letters);

// Swlect Letters Container
// وضعناعنصر في اتش تي ام ال داخل عنصر في جافاسكريبت
let lettersContainer = document.querySelector(".letters");

// Generate Letters
// طبق على العنصر هذا الموجود داخل المصفوفه هذه الخواص
lettersArray.forEach((letters) => {
  // Create Span
  let span = document.createElement("span");

  // Create Letter Text Node
  let theLetter = document.createTextNode(letters);

  // Append The Letter To Span
  span.appendChild(theLetter);

  // Add Class On span
  span.className = "letter-box";

  // Append Span To The Letter Container
  // وضعناعنصر السبان الذي طبقنا عليه جميع الخواص السابقة داخل العنصر الرئيسي الذي يعبر عن العنصر في اتش تي ام ال
  lettersContainer.appendChild(span);
});

// Object Of Word + Categories
// عملننا مصفوفات تملك كلمات
const words = {
  programming: [
    "php",
    "javascript",
    "go",
    "scala",
    "databas",
    "roby",
    "mysql",
    "python",
  ],
  movies: [
    "prestige",
    "inception",
    "parasite",
    "interstellar",
    "whiplash",
    "memento",
    "coco",
    "up",
  ],
  people: [
    "anwer",
    "sos",
    "hala",
    "mohamad",
    "mohamad othman",
  ],
  countries: ["syria", "palestine", "yemen", "egypt", "bahrain", "qatar"],
};

// Get Random Proprty
// دالة تجمع جميع المصفوفات داخل العنصر
let allKeys = Object.keys(words);

// وضعنا العناصر يلي داخل المصفوفه السابقه داخل هذا العنصر بطريقة الراندوم
let randomPropNumber = Math.floor(Math.random() * allKeys.length);

// وضعنا العناصر الداخل المصفوفه داخل عناوين المصفوفات
// Category
let randomPropName = allKeys[randomPropNumber];

// وضعنا المتغير السابق الذي أنشأناه داخل المتغير الرئيسي الذي يضم جميع المصفوفات
// Category Word
let randomPropValue = words[randomPropName];

// اعطيني المتغير بطريقة الراندوم
let randomValueNumber = Math.floor(Math.random() * randomPropValue.length);

// أعطني المتغير بطريقة المتغير الذي صنعته
let randomValueValue = randomPropValue[randomValueNumber];

// Set Category Info
// وضع القيمه للظهور من خلال متغير اتش تي ام ال
document.querySelector(".game-info .category span").innerHTML = randomPropName;

// Select Letters Guss Element
let lettersGuessContainer = document.querySelector(".letters-guess");

// create Span Depened On Word
let lettersAndSpace = Array.from(randomValueValue);

//Create Spans Depened On Word
lettersAndSpace.forEach((letter) => {
  // Create Empty Span
  let emptySpan = document.createElement("span");

  // If Letter Is Space
  if (letter === " ") {
    // Add Class To Span
    emptySpan.className = "with-space";
  }

  // Append Span To The Letters Guess Container
  lettersGuessContainer.appendChild(emptySpan);
});

// Select Guess Spans
let guessSpans = document.querySelectorAll(".letters-guess span");

// Set wrong Attempts
let wrongAttempts = 0;


// Select The Draw Element
let theDraw = document.querySelector(".hangman-draw");


// Handle Clicking On Letters
document.addEventListener("click", (e) => {

  // Set The Chose Status
  let theStatus = false;

  if (e.target.className === "letter-box") {
       
    e.target.classList.add("clicked");

    // Get Clicked Letter
    let theClickedLetter = e.target.innerHTML.toLowerCase();

    // The Chosen Word
    let theChosenWord = Array.from(randomValueValue.toLowerCase());

    // console.log(lettersAndSpace); // The chosen Word

    theChosenWord.forEach((wordLetter, WordIndex) => {
      if (theClickedLetter == wordLetter) {

        // Set Status To Correct
        theStatus = true;

        // Loop On All Guess Spans
        guessSpans.forEach((span, spanIndex) => {
          if (WordIndex === spanIndex) {
            span.innerHTML = theClickedLetter;

          }
        });
      }
    });

    // If Letter Is Wrong
    if (theStatus !== true) {

        // Increase The Wrong Attempts
        wrongAttempts++;

        // Add Class Wrong On The Draw Element
        theDraw.classList.add(`wrong-${wrongAttempts}`);


        // Play Fial Sound
        document.getElementById("fial").play();

        if (wrongAttempts === 8){

            endGame();

            lettersContainer.classList.add("finished");

            // play Finished Sound
            document.getElementById("finished").play();
        }

    }else{

        // Play Success Sound
        document.getElementById("success").play();


    }

  }
});


// End Game Function
function endGame() {

    // Creat Popup Div
    let div = document.createElement("div");

    // Creat text
    let divText = document.createTextNode(`Game Over, The Word Is ${randomValueValue}`);

    div.appendChild(divText);

    // Add Class On Div
    div.className ='ppo';

    // Appind To The Body
    document.body.appendChild(div);

}







