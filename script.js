//const text = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia fugit debitis suscipit delectus voluptatibus natus, ipsum alias dignissimos veritatis, molestias veniam autem porro necessitatibus earum tempore ducimus, magni nesciunt quaerat tenetur reiciendis. Aperiam tempore architecto eligendi suscipit, nulla, quis officiis saepe incidunt quas unde ea ipsa exercitationem quo repudiandae tenetur?";
//const typingTextElement = document.getElementById("typing-text");

//let index = 0;

//function type() {
 // const currentChar = text.charAt(index);
 // typingTextElement.textContent += currentChar;

 // index++;

  //if (index < text.length) {
    // Check if the current character is a line break
   // if (currentChar === '\n') {
   //   typingTextElement.innerHTML += '<br>';
    }
 //   setTimeout(type, 50); // Adjust typing speed here
  }
}

//type();//


const text = "Falling character animation";
const fallingTextElement = document.getElementById("falling-text");

function createFallingText() {
  text.split("").forEach((char, index) => {
    const charSpan = document.createElement("span");
    charSpan.textContent = char;
    charSpan.style.animationDelay = `${index * 50}ms`; // Adjust delay here
    fallingTextElement.appendChild(charSpan);
  });
}

createFallingText();
