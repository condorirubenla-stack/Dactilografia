document.addEventListener('DOMContentLoaded', () => {
    const viewGames = document.getElementById('view-games');
    const viewGameCanvas = document.getElementById('view-game-canvas');
    const btnLluvia = document.getElementById('btn-lluvia');
    const btnNavegante = document.getElementById('btn-navegante');
    const btnEscurridiza = document.getElementById('btn-escurridiza');
    const btnCloseGame = document.getElementById('btn-close-game');
    const btnStartGame = document.getElementById('btn-start-game');
    const gameArea = document.getElementById('game-area');
    const gameTitle = document.getElementById('game-title');
    
    if (btnCloseGame) {
        btnCloseGame.addEventListener('click', () => {
            stopGame();
            if (typeof showView === 'function') {
                showView(document.getElementById('view-menu'));
            } else {
                document.querySelectorAll('.view').forEach(v => v.classList.remove('active'));
                document.getElementById('view-menu').classList.add('active');
            }
        });
    }
    const scoreEl = document.getElementById('game-score');
    const levelEl = document.getElementById('game-level');
    const livesEl = document.getElementById('game-lives');

    if(!viewGameCanvas) return; // Wait until loaded

    let currentGame = null;
    let gameLoop = null;
    let isGameRunning = false;
    let score = 0;
    let level = 1;
    let lives = 3;
    let gameObjects = [];
    let speedMultiplier = 1;

    const ALL_CHARS = "abcdefghijklmnopqrstuvwxyz";

    function showGameCanvas(title, type) {
        // Hide all views first
        document.querySelectorAll('.view').forEach(v => v.classList.remove('active'));
        viewGameCanvas.classList.add('active');
        gameTitle.innerText = title;
        currentGame = type;
        resetGameStats();
        clearGameArea();
        btnStartGame.style.display = 'inline-block';
    }

    function resetGameStats() {
        score = 0;
        level = 1;
        lives = 3;
        speedMultiplier = 1;
        updateStatsUI();
    }

    function updateStatsUI() {
        scoreEl.innerText = score;
        levelEl.innerText = level;
        livesEl.innerText = lives;
    }

    function clearGameArea() {
        gameArea.innerHTML = '';
        gameObjects = [];
    }

    if(btnLluvia) btnLluvia.addEventListener('click', () => showGameCanvas('Lluvia de Letras (Nivel Básico)', 'lluvia'));
    if(btnNavegante) btnNavegante.addEventListener('click', () => showGameCanvas('Letra Navegante (Nivel Intermedio)', 'navegante'));
    if(btnEscurridiza) btnEscurridiza.addEventListener('click', () => showGameCanvas('Letra Escurridiza (Nivel Avanzado)', 'escurridiza'));

    if(btnStartGame) {
        btnStartGame.addEventListener('click', () => {
            startGame();
        });
    }

    function startGame() {
        if(isGameRunning) return;
        btnStartGame.style.display = 'none';
        resetGameStats();
        clearGameArea();
        isGameRunning = true;

        if(currentGame === 'lluvia') {
            spawnInterval = setInterval(spawnLetterLluvia, 2000);
        } else if (currentGame === 'navegante') {
            spawnInterval = setInterval(spawnLetterNavegante, 3000);
        } else if (currentGame === 'escurridiza') {
            spawnInterval = setInterval(spawnLetterEscurridiza, 2000);
        }

        lastTime = performance.now();
        gameLoop = requestAnimationFrame(updateGame);
    }

    function stopGame() {
        isGameRunning = false;
        cancelAnimationFrame(gameLoop);
        if(spawnInterval) clearInterval(spawnInterval);
    }

    function gameOver() {
        stopGame();
        alert(`¡Juego Terminado!\n\nPuntuación Final: ${score}`);
        btnStartGame.style.display = 'inline-block';
    }

    let spawnInterval = null;
    let lastTime = 0;

    function spawnLetterLluvia() {
        if(!isGameRunning) return;
        const char = ALL_CHARS[Math.floor(Math.random() * ALL_CHARS.length)];
        const el = document.createElement('div');
        el.innerText = char;
        el.style.position = 'absolute';
        el.style.fontSize = '32px';
        el.style.fontWeight = 'bold';
        el.style.color = '#000';
        el.style.left = Math.floor(Math.random() * (gameArea.clientWidth - 40)) + 'px';
        el.style.top = '-40px';
        
        gameArea.appendChild(el);
        gameObjects.push({ el, char, type: 'lluvia', x: parseFloat(el.style.left), y: -40, speed: 50 * speedMultiplier });
    }

    function spawnLetterNavegante() {
        if(!isGameRunning) return;
        const char = ALL_CHARS[Math.floor(Math.random() * ALL_CHARS.length)];
        const el = document.createElement('div');
        el.innerText = char;
        el.style.position = 'absolute';
        el.style.fontSize = '4rem';
        el.style.fontWeight = 'bold';
        el.style.color = 'blue';
        const yPos = Math.floor(Math.random() * (gameArea.clientHeight - 60));
        el.style.top = yPos + 'px';
        const isLeft = Math.random() > 0.5;
        el.style.left = isLeft ? '-40px' : (gameArea.clientWidth + 40) + 'px';
        
        gameArea.appendChild(el);
        gameObjects.push({ el, char, type: 'navegante', x: isLeft ? -40 : gameArea.clientWidth + 40, y: yPos, speedX: (isLeft ? 80 : -80) * speedMultiplier });
    }

    function spawnLetterEscurridiza() {
        if(!isGameRunning) return;
        const char = ALL_CHARS[Math.floor(Math.random() * ALL_CHARS.length)];
        const el = document.createElement('div');
        el.innerText = char;
        el.style.position = 'absolute';
        el.style.fontSize = '4rem';
        el.style.fontWeight = 'bold';
        el.style.color = 'red';
        el.style.left = Math.floor(Math.random() * (gameArea.clientWidth - 40)) + 'px';
        el.style.top = Math.floor(Math.random() * (gameArea.clientHeight - 60)) + 'px';
        
        gameArea.appendChild(el);
        gameObjects.push({ 
            el, char, type: 'escurridiza', 
            x: parseFloat(el.style.left), 
            y: parseFloat(el.style.top), 
            speedX: (Math.random() > 0.5 ? 100 : -100) * speedMultiplier,
            speedY: (Math.random() > 0.5 ? 100 : -100) * speedMultiplier
        });
    }

    function updateGame(currentTime) {
        if(!isGameRunning) return;
        const dt = (currentTime - lastTime) / 1000;
        lastTime = currentTime;

        for (let i = gameObjects.length - 1; i >= 0; i--) {
            const obj = gameObjects[i];

            if (obj.type === 'lluvia') {
                obj.y += obj.speed * dt;
                obj.el.style.top = obj.y + 'px';
                if (obj.y > gameArea.clientHeight) {
                    loseLife(i);
                }
            } else if (obj.type === 'navegante') {
                obj.x += obj.speedX * dt;
                obj.el.style.left = obj.x + 'px';
                if ((obj.speedX > 0 && obj.x > gameArea.clientWidth) || (obj.speedX < 0 && obj.x < -40)) {
                    loseLife(i);
                }
            } else if (obj.type === 'escurridiza') {
                obj.x += obj.speedX * dt;
                obj.y += obj.speedY * dt;
                
                // Bounce
                if (obj.x <= 0 || obj.x >= gameArea.clientWidth - 30) obj.speedX *= -1;
                if (obj.y <= 0 || obj.y >= gameArea.clientHeight - 30) obj.speedY *= -1;

                obj.el.style.left = obj.x + 'px';
                obj.el.style.top = obj.y + 'px';
            }
        }

        if(isGameRunning) gameLoop = requestAnimationFrame(updateGame);
    }

    function loseLife(index) {
        const obj = gameObjects[index];
        if(obj.el.parentNode) obj.el.parentNode.removeChild(obj.el);
        gameObjects.splice(index, 1);
        
        lives--;
        updateStatsUI();
        gameArea.style.backgroundColor = '#ffcccc';
        setTimeout(() => { gameArea.style.backgroundColor = 'white'; }, 200);

        if (lives <= 0) {
            gameOver();
        }
    }

    const hiddenInput = document.getElementById('hidden-input');
    
    // Al tocar el área de juego en móvil, enfocar el input para sacar el teclado
    gameArea.addEventListener('click', () => {
        if (isGameRunning) hiddenInput.focus();
    });

    // Simular keydown a partir del input del móvil
    hiddenInput.addEventListener('input', (e) => {
        if (!isGameRunning) return;
        const char = e.data;
        if (char) {
            const keydownEvent = new KeyboardEvent('keydown', { key: char });
            document.dispatchEvent(keydownEvent);
        }
        hiddenInput.value = '';
    });

    // Keydown listener for the document, but only handle if game is running
    document.addEventListener('keydown', (e) => {
        if (!isGameRunning) return;
        if (isGameRunning) hiddenInput.focus();
        
        // Prevent default actions for typing
        if (e.key.length === 1 && !e.ctrlKey && !e.altKey) {
            const charTyped = e.key.toLowerCase();
            
            // Find the oldest matching character (first in array usually)
            let foundIdx = -1;
            // For lluvia, find lowest Y. For others, just first match.
            if(currentGame === 'lluvia') {
                let maxY = -999;
                for (let i = 0; i < gameObjects.length; i++) {
                    if (gameObjects[i].char === charTyped && gameObjects[i].y > maxY) {
                        maxY = gameObjects[i].y;
                        foundIdx = i;
                    }
                }
            } else {
                foundIdx = gameObjects.findIndex(o => o.char === charTyped);
            }

            if (foundIdx !== -1) {
                // Correct!
                const obj = gameObjects[foundIdx];
                if(obj.el.parentNode) obj.el.parentNode.removeChild(obj.el);
                gameObjects.splice(foundIdx, 1);
                
                score += 10;
                if (score % 100 === 0) {
                    level++;
                    speedMultiplier += 0.2;
                    if(spawnInterval) {
                        clearInterval(spawnInterval);
                        let newTime = 2000 - (level * 100);
                        if (newTime < 500) newTime = 500;
                        if(currentGame === 'lluvia') spawnInterval = setInterval(spawnLetterLluvia, newTime);
                        if(currentGame === 'navegante') spawnInterval = setInterval(spawnLetterNavegante, newTime);
                        if(currentGame === 'escurridiza') spawnInterval = setInterval(spawnLetterEscurridiza, newTime);
                    }
                }
                updateStatsUI();
            } else {
                // Wrong key! Maybe penalize?
                score -= 2;
                if (score < 0) score = 0;
                updateStatsUI();
            }
        }
    });

});
