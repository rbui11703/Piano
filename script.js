document.addEventListener("DOMContentLoaded", () => {
    // Select all piano keys
    const keys = document.querySelectorAll(".key");

    // Map keyboard keys to corresponding piano notes
    const keyMap = {
        "a": "C", "w": "Db", "s": "D", "e": "Eb", "d": "E", 
        "f": "F", "t": "Gb", "g": "G", "y": "Ab", "h": "A", 
        "u": "Bb", "j": "B"
    };
    
    // Function to play the note when key is pressed or clicked
    function playNote(note) {
        const audio = document.getElementById(note); // Get corresponding audio element
        const key = document.querySelector(`.key[data-note='${note}']`); // Get corresponding key
        if (audio && key) {
            audio.currentTime = 0; // Reset audio to start
            audio.play(); // Play the sound
            key.classList.add("active"); // Add active class for visual effect
            setTimeout(() => key.classList.remove("active"), 200); // Remove active class after a short delay
        }
    }
    
    // Listen for keyboard events and play corresponding note
    document.addEventListener("keydown", (event) => {
        if (keyMap[event.key]) { // Check if key is mapped to a note
            playNote(keyMap[event.key]); // Play the note
        }
    });
    
    // Listen for mouse events and play corresponding note
    keys.forEach(key => {
        key.addEventListener("click", () => {
            playNote(key.dataset.note); // Play the note
        });
    });
    
    // Create Help Button
    const helpButton = document.createElement("button");
    helpButton.innerText = "Help";
    helpButton.classList.add("help-button");
    document.body.appendChild(helpButton);

    // Create Help Dialog
    const helpDialog = document.createElement("div");
    helpDialog.classList.add("help-dialog");
    helpDialog.innerHTML = `<h3>Keyboard Map</h3>
                            <p>A → C</p>
                            <p>W → Db</p>
                            <p>S → D</p>
                            <p>E → Eb</p>
                            <p>D → E</p>
                            <p>F → F</p>
                            <p>T → Gb</p>
                            <p>G → G</p>
                            <p>Y → Ab</p>
                            <p>H → A</p>
                            <p>U → Bb</p>
                            <p>J → B</p>`;
    document.body.appendChild(helpDialog);

    // Toggle Help Dialog
    helpButton.addEventListener("click", () => {
        helpDialog.classList.toggle("visible");
    });
});