let gameState = {
    shadows: 100,
    playerHealth: 100,
};

function updateStatus() {
    document.getElementById('shadows-remaining').innerText = gameState.shadows;
    document.getElementById('player-health').innerText = gameState.playerHealth;
}

function updateNarration(text) {
    document.getElementById('narration').innerText = text;
}

function endGame(result) {
    document.getElementById('game-result').innerText = result;
    document.getElementById('actions').style.display = 'none';
}

function useShield() {
    if (gameState.shadows > 0) {
        gameState.shadows -= 20;
        updateNarration('The Shield of Resolve deflects the shadows!');
        if (gameState.shadows <= 0) {
            endGame('Victory! You’ve defeated the shadows.');
        }
    }
    if (gameState.playerHealth > 0) {
        gameState.playerHealth -= 10; // Minor health penalty for defense
    }
    checkGameState();
}

function useAmulet() {
    if (gameState.shadows > 0) {
        gameState.shadows -= 40;
        updateNarration('The Wolfe Amulet pulses with light, banishing the shadows!');
        if (gameState.shadows <= 0) {
            endGame('Victory! You’ve destroyed the shadows.');
        }
    }
    checkGameState();
}

function transform() {
    if (gameState.shadows > 0) {
        gameState.shadows = 0;
        updateNarration('Dimitri transforms into the wolf, obliterating the shadows!');
        endGame('Triumph! The wolf’s strength has saved the day.');
    }
}

function checkGameState() {
    if (gameState.playerHealth <= 0) {
        endGame('Defeat... You succumbed to the shadows.');
    }
    updateStatus();
}

updateStatus();
