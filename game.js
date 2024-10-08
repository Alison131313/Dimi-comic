let gameState = {
    shadows: 100,
    playerHealth: 100,
};

// Update shadow status and player health
function updateStatus() {
    document.getElementById('shadows-remaining').innerText = gameState.shadows;
    document.getElementById('player-health').innerText = gameState.playerHealth;
}

// Function for updating the narrative text
function updateNarration(text) {
    document.getElementById('narration').innerText = text;
}

// End game and display final message
function endGame(result) {
    document.getElementById('game-result').innerText = result;
    document.getElementById('actions').style.display = 'none';
    document.getElementById('dimitri').src = "images/victory.jpg"; // Change Dimitri image at the end
}

// Shield function
function useShield() {
    if (gameState.shadows > 0) {
        gameState.shadows -= 20;
        updateNarration('The Shield of Resolve deflects the shadows! Dimitri stands firm.');
        if (gameState.shadows <= 0) {
            endGame('Victory! You’ve defeated the shadows.');
        }
    }
    if (gameState.playerHealth > 0) {
        gameState.playerHealth -= 10; // Minor health penalty for defense
    }
    checkGameState();
}

// Wolfe Amulet function
function useAmulet() {
    if (gameState.shadows > 0) {
        gameState.shadows -= 40;
        updateNarration('The Wolfe Amulet pulses with light, banishing the darkness.');
        if (gameState.shadows <= 0) {
            endGame('Victory! The amulet’s power saved the day.');
        }
    }
    checkGameState();
}

// Wolf transformation function
function transform() {
    if (gameState.shadows > 0) {
        gameState.shadows = 0;
        updateNarration('Dimitri transforms into the wolf, obliterating the shadows!');
        document.getElementById('dimitri').src = "images/wolf_form.jpg"; // Change to wolf form image
        endGame('Triumph! The wolf’s strength has vanquished the shadows.');
    }
}

// Check if the game is still running
function checkGameState() {
    if (gameState.playerHealth <= 0) {
        endGame('Defeat... You were consumed by the shadows.');
        document.getElementById('dimitri').src = "images/defeat.jpg"; // Change to defeat image
    }
    updateStatus();
}

updateStatus();
