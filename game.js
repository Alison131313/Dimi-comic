let gameState = {
    shadows: 100,
    playerHealth: 100,
};

// Function to update the text shown on the page (narration)
function updateNarration(text) {
    document.getElementById('narration').innerText = text;
}

// Function to handle the game ending and update the game result
function endGame(result) {
    document.getElementById('game-result').innerText = result;
    document.getElementById('actions').style.display = 'none'; // Hide action buttons once game ends

    // Show victory or defeat image based on result
    if (result.includes("Defeat")) {
        document.getElementById('dimitri').src = "images/defeat.jpg"; // Change image to defeat
    } else {
        document.getElementById('dimitri').src = "images/victory.jpg"; // Change image to victory
    }
}

// Shield of Resolve action
function useShield() {
    if (gameState.shadows > 0) {
        gameState.shadows -= 20;
        updateNarration('The Shield of Resolve stands strong, deflecting the shadows! Dimitri stands firm.');
        if (gameState.shadows <= 0) {
            endGame('Victory! You’ve defeated the shadows.');
        }
    }
    if (gameState.playerHealth > 0) {
        gameState.playerHealth -= 10; // Deduct health when using the shield
    }
    checkGameState(); // Check if the player has lost
}

// Wolfe Amulet action
function useAmulet() {
    if (gameState.shadows > 0) {
        gameState.shadows -= 40;
        updateNarration('The Wolfe Amulet pulses with power, pushing back the darkness.');
        if (gameState.shadows <= 0) {
            endGame('The shadows retreat before Dimitri’s strength.');
        }
    }
    checkGameState();
}

// Wolf Transformation action
function transform() {
    if (gameState.shadows > 0) {
        gameState.shadows = 0;
        updateNarration('Dimitri transforms into the wolf, obliterating everything in his path!');
        document.getElementById('dimitri').src = "images/wolf_form.jpg"; // Change to wolf form image
        endGame('Triumph! The wolf’s power has vanquished the shadows!');
    }
}

// Function to check game status (shadows and player health)
function checkGameState() {
    if (gameState.playerHealth <= 0) {
        endGame('Defeat... You were consumed by the shadows.');
        document.getElementById('dimitri').src = "images/defeat.jpg"; // Show defeat image
    } else {
        updateStatus();
    }
}

// Function to update shadow count and player health status on the screen
function updateStatus() {
    document.getElementById('shadows-remaining').innerText = gameState.shadows;
    document.getElementById('player-health').innerText = gameState.playerHealth;
}

// Initial status update when game starts
updateStatus();
