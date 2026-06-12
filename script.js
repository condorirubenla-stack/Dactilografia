document.addEventListener('DOMContentLoaded', () => {
    function resizeApp() {
        const wrapper = document.getElementById('app-wrapper');
        if (!wrapper) return;
        const baseW = 1200;
        const baseH = 800;
        const scaleX = window.innerWidth / baseW;
        const scaleY = window.innerHeight / baseH;
        const scale = Math.min(scaleX, scaleY) * 0.95; // 95% of screen
        
        wrapper.style.transform = `scale(${scale})`;
        wrapper.style.transformOrigin = 'center center';
    }
    window.addEventListener('resize', resizeApp);
    resizeApp();

    const viewMenu = document.getElementById('view-menu');
    const viewTyping = document.getElementById('view-typing');
    const viewUsers = document.getElementById('view-users');
    const viewViewer = document.getElementById('view-viewer');
    const allViews = [viewMenu, viewTyping, viewUsers, viewViewer];

    const btnRealizar = document.getElementById('btn-realizar');
    const btnGestion = document.getElementById('btn-gestion');
    const btnVisor = document.getElementById('btn-visor');
    const btnTextosGrandes = document.getElementById('btn-textos-grandes');
    const btnsBack = document.querySelectorAll('.btn-back-menu, #btn-back, #btn-close-typing');

    const textDisplay = document.getElementById('text-display');
    const hiddenInput = document.getElementById('hidden-input');
    const lessonSelect = document.getElementById('lesson-select');
    const viewerSelect = document.getElementById('viewer-select');
    const viewerDisplay = document.getElementById('viewer-display');
    const typingContainer = document.querySelector('.typing-container');

    const statPulsaciones = document.getElementById('stat-pulsaciones');
    const wpmDisplay = document.getElementById('wpm');
    const statErrores = document.getElementById('stat-errores');
    const statTiempo = document.getElementById('stat-tiempo');

    const chkHideKey = document.getElementById('chk-hide-key');
    const chkHideKb = document.getElementById('chk-hide-kb');
    const chkHideFingers = document.getElementById('chk-hide-fingers');
    const virtualKeyboard = document.getElementById('virtual-keyboard');
    const handsContainer = document.getElementById('hands-container');
    const handLetter = document.getElementById('hand-letter');
    const btnPause = document.getElementById('btn-pause');

    // User management elements
    const userListSelect = document.getElementById('user-list');
    const newUserNameInput = document.getElementById('new-user-name');
    const btnAddUser = document.getElementById('btn-add-user');
    const btnSelectUser = document.getElementById('btn-select-user');
    const btnDeleteUser = document.getElementById('btn-delete-user');

    // Build Keyboard
    const layout = [
        ['º','1','2','3','4','5','6','7','8','9','0','\'','¡','Back'],
        ['Tab','Q','W','E','R','T','Y','U','I','O','P','`','+','Enter'],
        ['Caps','A','S','D','F','G','H','J','K','L','Ñ','´','Ç'],
        ['Shift','<','Z','X','C','V','B','N','M',',','.','-','Shift'],
        ['Ctrl','Alt','Space','AltGr','Ctrl']
    ];
    let keyElements = {};

    function getFingerClass(key) {
        const k = key.toLowerCase();
        const fLIndex = ['4','5','r','t','f','g','v','b'];
        const fLMiddle = ['3','e','d','c'];
        const fLRing = ['2','w','s','x'];
        const fLPinky = ['1','q','a','z','º','tab','caps','shift','<','\\'];
        const fRIndex = ['6','7','y','u','h','j','n','m'];
        const fRMiddle = ['8','i','k',','];
        const fRRing = ['9','o','l','.'];
        const fRPinky = ['0','p','ñ','-','\'','¡','+','ç','back','enter','`','´'];
        if (k === 'space') return 'finger-thumb';
        if (fLIndex.includes(k)) return 'finger-l-index';
        if (fLMiddle.includes(k)) return 'finger-l-middle';
        if (fLRing.includes(k)) return 'finger-l-ring';
        if (fLPinky.includes(k) || k === 'backspace' || k.includes('shift')) return 'finger-l-pinky';
        if (fRIndex.includes(k)) return 'finger-r-index';
        if (fRMiddle.includes(k)) return 'finger-r-middle';
        if (fRRing.includes(k)) return 'finger-r-ring';
        if (fRPinky.includes(k) || k === '\n') return 'finger-r-pinky';
        return 'finger-r-pinky';
    }

    layout.forEach(row => {
        let rowDiv = document.createElement('div');
        rowDiv.className = 'kb-row';
        row.forEach(key => {
            let keyDiv = document.createElement('div');
            keyDiv.className = 'key ' + getFingerClass(key);
            if(key === 'Back' || key === 'Tab' || key === 'Caps' || key === 'Shift' || key === 'Enter') keyDiv.classList.add('wide');
            if(key === 'Space') { keyDiv.classList.add('space'); keyDiv.innerText = ''; }
            else keyDiv.innerText = key;
            rowDiv.appendChild(keyDiv);
            keyElements[key.toLowerCase()] = keyDiv;
            if (key === 'Space') keyElements[' '] = keyDiv;
            if (key === 'Back') keyElements['backspace'] = keyDiv;
            if (key === 'Enter') keyElements['\n'] = keyDiv;
        });
        virtualKeyboard.appendChild(rowDiv);
    });

    let currentLesson = 0;
    let characters = [];
    let currentIndex = 0;
    let errors = 0;
    let pulsaciones = 0;
    let startTime = null;
    let timeElapsedMs = 0;
    let timer = null;
    let isFinished = false;
    let isPaused = false;

    let users = JSON.parse(localStorage.getItem('mecaUsers')) || [];
    let currentUserIndex = localStorage.getItem('mecaCurrentUser');

    function showView(view) {
        allViews.forEach(v => v.classList.remove('active'));
        view.classList.add('active');
        if (view === viewMenu) updateDashboard();
    }

    if (typeof lecciones !== 'undefined') {
        lecciones.forEach((lesson, index) => {
            const opt = document.createElement('option');
            opt.value = index;
            opt.textContent = `Lección ${index + 1}`;
            if (lessonSelect) lessonSelect.appendChild(opt);
            
            if (viewerSelect) {
                const optV = document.createElement('option');
                optV.value = index;
                optV.textContent = `Lección ${index + 1}`;
                viewerSelect.appendChild(optV);
            }
        });
    }

    updateDashboard();
    renderUserList();

    btnRealizar.addEventListener('click', () => {
        typingContainer.parentElement.classList.remove('large-text');
        showView(viewTyping);
        let nextLesson = 0;
        if (currentUserIndex !== null && users[currentUserIndex]) {
            nextLesson = users[currentUserIndex].history.length;
            if (nextLesson >= lecciones.length) nextLesson = lecciones.length - 1;
        }
        initLesson(nextLesson);
    });

    btnTextosGrandes.addEventListener('click', () => {
        typingContainer.parentElement.classList.add('large-text');
        showView(viewTyping);
        initLesson(75);
    });

    btnGestion.addEventListener('click', () => showView(viewUsers));
    
    btnVisor.addEventListener('click', () => {
        showView(viewViewer);
        populateViewer();
    });

    const viewerNivel = document.getElementById('viewer-nivel');
    const viewerBloques = document.getElementById('viewer-bloques');
    const viewerPalabras = document.getElementById('viewer-palabras');
    const viewerPreview = document.getElementById('viewer-preview');
    const btnRealizarEste = document.getElementById('btn-realizar-este');

    function populateViewer() {
        try {
            if (typeof lecciones === 'undefined') {
                viewerPreview.value = "ERROR: lecciones is undefined!";
                return;
            }
            if (!Array.isArray(lecciones)) {
                viewerPreview.value = "ERROR: lecciones is not an array! Type: " + typeof lecciones;
                return;
            }
            if (lecciones.length === 0) {
                viewerPreview.value = "ERROR: lecciones is empty!";
                return;
            }
            
            const totalLevels = Math.ceil(lecciones.length / 5);
            viewerNivel.innerHTML = '';
            for (let i = 1; i <= totalLevels; i++) {
                let opt = document.createElement('option');
                opt.value = i;
                opt.textContent = i;
                viewerNivel.appendChild(opt);
            }
            
            viewerNivel.addEventListener('change', updateViewerBloques);
            viewerBloques.addEventListener('change', updateViewerPalabras);
            viewerPalabras.addEventListener('change', updateViewerPreview);

            if (totalLevels > 0) {
                viewerNivel.selectedIndex = 0;
                updateViewerBloques();
            }
        } catch (err) {
            viewerPreview.value = "ERROR in populateViewer: " + err.message + "\n" + err.stack;
        }
    }

    function updateViewerBloques() {
        const nivel = parseInt(viewerNivel.value);
        if (!nivel) return;
        
        viewerBloques.innerHTML = '';
        const startIndex = (nivel - 1) * 5;
        const maxBlocks = Math.min(5, lecciones.length - startIndex);
        
        for (let i = 1; i <= maxBlocks; i++) {
            let opt = document.createElement('option');
            opt.value = i;
            opt.textContent = i;
            viewerBloques.appendChild(opt);
        }
        viewerBloques.selectedIndex = 0;
        updateViewerPalabras();
    }

    function updateViewerPalabras() {
        const nivel = parseInt(viewerNivel.value);
        const bloque = parseInt(viewerBloques.value);
        if (!nivel || !bloque) return;
        
        viewerPalabras.innerHTML = '';
        const index = (nivel - 1) * 5 + (bloque - 1);
        
        let label = "";
        if (index >= 75) {
            label = `(TEXTO-${String(index - 74).padStart(2, '0')})`;
        } else {
            let sample = lecciones[index].substring(0, 15).replace(/\n/g, ' ');
            label = sample;
        }

        let opt = document.createElement('option');
        opt.value = index;
        opt.textContent = label;
        viewerPalabras.appendChild(opt);
        
        viewerPalabras.selectedIndex = 0;
        updateViewerPreview();
    }

    function updateViewerPreview() {
        if (viewerPalabras.selectedIndex >= 0) {
            const idx = parseInt(viewerPalabras.value);
            viewerPreview.value = lecciones[idx];
        }
    }

    btnVisor.addEventListener('click', () => {
        showView(viewViewer);
        populateViewer();
    });

    if (btnRealizarEste) {
        btnRealizarEste.addEventListener('click', () => {
            if (viewerPalabras.selectedIndex >= 0) {
                const idx = parseInt(viewerPalabras.value);
                typingContainer.parentElement.classList.remove('large-text');
                showView(viewTyping);
                initLesson(idx);
            }
        });
    }

    // Keep btnsBack working properly
    btnsBack.forEach(btn => btn.addEventListener('click', () => {
        clearInterval(timer);
        showView(viewMenu);
    }));

    // User Management Functions
    function saveUsers() {
        localStorage.setItem('mecaUsers', JSON.stringify(users));
        if (currentUserIndex !== null) {
            localStorage.setItem('mecaCurrentUser', currentUserIndex);
        } else {
            localStorage.removeItem('mecaCurrentUser');
        }
    }

    const btnExamenes = document.getElementById('btn-examenes');
    const viewExams = document.getElementById('view-exams');
    const btnVerExamen = document.getElementById('btn-ver-examen');
    const btnRealizarExamen = document.getElementById('btn-realizar-examen');
    const examSelect = document.getElementById('exam-select');

    const btnJuegos = document.getElementById('btn-juegos');
    const viewGames = document.getElementById('view-games');

    allViews.push(viewExams, viewGames);

    // Populate Exam Select
    if (examSelect && typeof examenes !== 'undefined') {
        examenes.forEach((ex, idx) => {
            const opt = document.createElement('option');
            opt.value = idx;
            opt.innerText = `Examen ${idx + 1}`;
            examSelect.appendChild(opt);
        });
        if(examenes.length > 0) examSelect.selectedIndex = 0;
    }

    if(btnExamenes) {
        btnExamenes.addEventListener('click', () => {
            showView(viewExams);
        });
    }

    if(btnJuegos) {
        btnJuegos.addEventListener('click', () => {
            showView(viewGames);
        });
    }

    if (btnVerExamen) {
        btnVerExamen.addEventListener('click', () => {
            const idx = examSelect.value;
            if (idx === "") return;
            const text = examenes[idx];
            const printWindow = window.open('', '_blank', 'width=600,height=400');
            printWindow.document.write(`
                <html>
                <head><title>Examen ${parseInt(idx)+1}</title></head>
                <body style="font-family: Arial, sans-serif; padding: 20px;">
                    <h2>Examen ${parseInt(idx)+1}</h2>
                    <p style="white-space: pre-wrap;">${text}</p>
                    <button onclick="window.print()" style="margin-top: 20px; padding: 10px 20px;">Imprimir</button>
                </body>
                </html>
            `);
            printWindow.document.close();
        });
    }

    if (btnRealizarExamen) {
        btnRealizarExamen.addEventListener('click', () => {
            const idx = examSelect.value;
            if (idx === "") return;
            // Configurar modo examen
            isExamMode = true;
            initExam(idx);
        });
    }

    // Function to handle "Modo Examen"
    let isExamMode = false;

    function renderUserList() {
        userListSelect.innerHTML = '';
        users.forEach((u, i) => {
            const opt = document.createElement('option');
            opt.value = i;
            opt.textContent = u.name;
            userListSelect.appendChild(opt);
        });
    }

    btnAddUser.addEventListener('click', () => {
        const name = newUserNameInput.value.trim();
        if (name) {
            users.push({ name: name, history: [] });
            currentUserIndex = users.length - 1;
            saveUsers();
            renderUserList();
            newUserNameInput.value = '';
            showView(viewMenu);
        }
    });

    btnSelectUser.addEventListener('click', () => {
        if (userListSelect.selectedIndex >= 0) {
            currentUserIndex = userListSelect.value;
            saveUsers();
            showView(viewMenu);
        }
    });

    btnDeleteUser.addEventListener('click', () => {
        if (userListSelect.selectedIndex >= 0) {
            if (confirm("¿Seguro que quieres borrar este usuario?")) {
                users.splice(userListSelect.selectedIndex, 1);
                if (currentUserIndex == userListSelect.selectedIndex) currentUserIndex = null;
                else if (currentUserIndex > userListSelect.selectedIndex) currentUserIndex--;
                saveUsers();
                renderUserList();
            }
        }
    });

    function updateDashboard() {
        document.querySelectorAll('.chart-bar').forEach(b => b.remove());
        const chartGrid = document.querySelector('.chart-grid');

        if (currentUserIndex !== null && users[currentUserIndex]) {
            const user = users[currentUserIndex];
            let count = user.history.length;
            let nivel = Math.floor(count / 5) + 1;
            let bloque = (count % 5) + 1;
            
            document.getElementById('typing-username').innerText = `USUARIO: ${user.name}`;
            document.getElementById('typing-nivel').innerText = `NIVEL: ${nivel}`;
            document.getElementById('typing-bloque').innerText = `BLOQUE: ${bloque}`;
            
            const userNameDisplay = document.getElementById('user-name');
            if (userNameDisplay) {
                userNameDisplay.textContent = user.name;
                let avg = 0;
                if (user.history.length > 0) {
                    const sum = user.history.reduce((a, b) => a + b, 0);
                    avg = Math.round(sum / user.history.length);
                }
                const statsRow = userNameDisplay.parentElement.nextElementSibling;
                statsRow.innerHTML = `<p><b>NIVEL:</b> ${nivel}</p><p><b>BLOQUE:</b> ${bloque}</p>`;
                statsRow.nextElementSibling.innerHTML = `<b>P.P.M. de Media:</b> ${avg}`;
            }

            if (chartGrid) {
                const last10 = user.history.slice(-10);
                const gridWidth = chartGrid.clientWidth || 300;
                const barWidth = 15;
                const spacing = (gridWidth - (barWidth * 10)) / 11;
                
                last10.forEach((score, index) => {
                    const bar = document.createElement('div');
                    bar.classList.add('chart-bar');
                    bar.style.left = `${spacing + index * (barWidth + spacing)}px`;
                    const heightPercent = Math.min(100, (score / 150) * 100);
                    bar.style.height = `${heightPercent}%`;
                    chartGrid.appendChild(bar);
                });
            }
        } else {
            const userNameDisplay = document.getElementById('user-name');
            if (userNameDisplay) {
                userNameDisplay.textContent = "NO SELECCIONADO";
                const statsRow = userNameDisplay.parentElement.nextElementSibling;
                statsRow.innerHTML = `<p><b>NIVEL:</b> 0</p><p><b>BLOQUE:</b> 0</p>`;
                statsRow.nextElementSibling.innerHTML = `<b>P.P.M. de Media:</b> 0`;
            }
        }
    }

    const fingerMap = {
        'º':'dot-l-pinky', '1':'dot-l-pinky', '2':'dot-l-pinky', 'q':'dot-l-pinky', 'a':'dot-l-pinky', 'z':'dot-l-pinky', '<':'dot-l-pinky',
        '3':'dot-l-ring', 'w':'dot-l-ring', 's':'dot-l-ring', 'x':'dot-l-ring',
        '4':'dot-l-middle', 'e':'dot-l-middle', 'd':'dot-l-middle', 'c':'dot-l-middle',
        '5':'dot-l-index', '6':'dot-l-index', 'r':'dot-l-index', 't':'dot-l-index', 'f':'dot-l-index', 'g':'dot-l-index', 'v':'dot-l-index', 'b':'dot-l-index',
        '7':'dot-r-index', '8':'dot-r-index', 'y':'dot-r-index', 'u':'dot-r-index', 'h':'dot-r-index', 'j':'dot-r-index', 'n':'dot-r-index', 'm':'dot-r-index',
        '9':'dot-r-middle', 'i':'dot-r-middle', 'k':'dot-r-middle', ',':'dot-r-middle',
        '0':'dot-r-ring', 'o':'dot-r-ring', 'l':'dot-r-ring', '.':'dot-r-ring',
        '\'':'dot-r-pinky', '¡':'dot-r-pinky', 'p':'dot-r-pinky', '`':'dot-r-pinky', '+':'dot-r-pinky', 'ñ':'dot-r-pinky', '´':'dot-r-pinky', 'ç':'dot-r-pinky', '-':'dot-r-pinky', '\n':'dot-r-pinky',
        ' ':'dot-r-thumb'
    };

    function updateKeyboardHighlight() {
        Object.values(keyElements).forEach(k => k.classList.remove('active'));
        handLetter.innerText = '';
        document.querySelectorAll('circle[id^="dot-"]').forEach(dot => dot.style.display = 'none');

        if (isFinished || chkHideKey.checked || isPaused) return;
        
        if (currentIndex < characters.length) {
            let expectedChar = characters[currentIndex].innerText.toLowerCase();
            if (expectedChar === '\r') expectedChar = '\n';
            if (keyElements[expectedChar]) {
                if (!chkHideKb.checked) keyElements[expectedChar].classList.add('active');
            }
            if (!chkHideFingers.checked) {
                handLetter.innerText = characters[currentIndex].innerText;
                const dotId = fingerMap[expectedChar];
                if (dotId) {
                    const dot = document.getElementById(dotId);
                    if (dot) dot.style.display = 'block';
                }
            }
        }
    }

    chkHideKb.addEventListener('change', () => {
        virtualKeyboard.style.visibility = chkHideKb.checked ? 'hidden' : 'visible';
        updateKeyboardHighlight();
        hiddenInput.focus();
    });
    chkHideFingers.addEventListener('change', () => {
        handsContainer.style.visibility = chkHideFingers.checked ? 'hidden' : 'visible';
        updateKeyboardHighlight();
        hiddenInput.focus();
    });
    chkHideKey.addEventListener('change', () => {
        updateKeyboardHighlight();
        hiddenInput.focus();
    });

    function formatTime(ms) {
        let totalSeconds = Math.floor(ms / 1000);
        let minutes = Math.floor(totalSeconds / 60);
        let seconds = totalSeconds % 60;
        return `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
    }

    function updateStats() {
        statPulsaciones.innerText = pulsaciones;
        
        let accuracy = 100;
        if (pulsaciones > 0) {
            accuracy = Math.round(((pulsaciones - errors) / pulsaciones) * 100);
        }
        statErrores.innerText = `${errors} (${100 - accuracy}%)`;

        if (startTime && !isPaused) {
            timeElapsedMs += 1000;
            statTiempo.innerText = formatTime(timeElapsedMs);
            const timeElapsedMin = timeElapsedMs / 1000 / 60;
            if (timeElapsedMin > 0) {
                const wpm = Math.round((pulsaciones / 5) / timeElapsedMin);
                wpmDisplay.innerText = wpm;
            }
        } else if (!startTime) {
            wpmDisplay.innerText = 0;
            statTiempo.innerText = "TIEMPO INACTIVO";
        } else if (isPaused) {
            statTiempo.innerText = "PAUSADO " + formatTime(timeElapsedMs);
        }
    }

    function setupTypingArea(text) {
        textDisplay.innerHTML = '';
        characters = [];
        currentIndex = 0;
        errors = 0;
        pulsaciones = 0;
        startTime = null;
        timeElapsedMs = 0;
        isFinished = false;
        isPaused = false;
        btnPause.style.background = 'white';
        clearInterval(timer);
        
        updateStats();

        for (let i = 0; i < text.length; i++) {
            const charSpan = document.createElement('span');
            charSpan.innerText = text[i] === '\n' ? '\n' : text[i];
            charSpan.classList.add('char');
            textDisplay.appendChild(charSpan);
            characters.push(charSpan);
        }

        if (characters.length > 0) characters[0].classList.add('current');
        updateKeyboardHighlight();
        typingContainer.scrollTop = 0;
    }

    let currentExamIndex = 0;
    function initExam(idx) {
        currentExamIndex = idx;
        const fullText = examenes[idx];
        const typingNivel = document.getElementById('typing-nivel');
        const typingBloque = document.getElementById('typing-bloque');
        if(typingNivel) typingNivel.style.display = 'none';
        if(typingBloque) {
            typingBloque.style.display = 'inline';
            typingBloque.innerText = `EXAMEN ${parseInt(idx)+1}`;
        }
        setupTypingArea(fullText);
        showView(viewTyping);
        hiddenInput.focus();
    }

    function initLesson(index) {
        isExamMode = false;
        currentLesson = index;
        const text = lecciones[currentLesson] || "";
        
        const typingNivel = document.getElementById('typing-nivel');
        const typingBloque = document.getElementById('typing-bloque');
        if(typingNivel) typingNivel.style.display = 'inline';
        if(typingBloque) typingBloque.style.display = 'inline';
        
        setupTypingArea(text);
        hiddenInput.value = '';
        hiddenInput.focus();
    }

    btnPause.addEventListener('click', () => {
        if (isFinished || !startTime) return;
        isPaused = !isPaused;
        if (isPaused) {
            clearInterval(timer);
            btnPause.style.background = 'red';
            statTiempo.innerText = "PAUSADO " + formatTime(timeElapsedMs);
            updateKeyboardHighlight();
        } else {
            timer = setInterval(updateStats, 1000);
            btnPause.style.background = 'white';
            updateKeyboardHighlight();
            hiddenInput.focus();
        }
    });

    const btnRestartLesson = document.getElementById('btn-restart-lesson');
    if (btnRestartLesson) {
        btnRestartLesson.addEventListener('click', () => {
            if (isExamMode) {
                initExam(currentExamIndex);
            } else {
                initLesson(currentLesson);
            }
            hiddenInput.focus();
        });
    }

    hiddenInput.addEventListener('keydown', (e) => {
        if (!viewTyping.classList.contains('active') || isPaused) return;

        if (e.key === 'Backspace' && currentIndex > 0 && !isFinished) {
            characters[currentIndex].classList.remove('current');
            currentIndex--;
            const prevChar = characters[currentIndex];
            prevChar.classList.remove('correct', 'error');
            prevChar.classList.add('current');
            
            // Restore original character if it was changed
            if (prevChar.dataset.expected) {
                prevChar.innerText = prevChar.dataset.expected;
            }

            updateStats();
            updateKeyboardHighlight();
        } else if (e.key === 'Enter') {
            if (isFinished) return;
            const event = new InputEvent('input', { data: '\n' });
            hiddenInput.dispatchEvent(event);
            e.preventDefault();
        } else if (e.key === 'Escape') {
            btnPause.click();
        }
    });

    hiddenInput.addEventListener('input', (e) => {
        if (isFinished || isPaused || !viewTyping.classList.contains('active')) return;

        if (!startTime) {
            startTime = new Date();
            timer = setInterval(updateStats, 1000);
        }

        let inputChar = e.data;
        if (e.inputType === 'insertLineBreak') inputChar = '\n';
        
        const statusMessage = document.getElementById('status-message');

        if (inputChar && inputChar.length === 1) {
            pulsaciones++;
            let expectedChar = characters[currentIndex].innerText;
            if (expectedChar === '\r') expectedChar = '\n';
            
            // Save original char before overwriting
            if (!characters[currentIndex].dataset.expected) {
                characters[currentIndex].dataset.expected = expectedChar;
            }

            characters[currentIndex].classList.remove('current');

            if (inputChar === expectedChar) {
                characters[currentIndex].classList.add('correct');
                if(statusMessage) {
                    statusMessage.innerText = "¡MUY BIEN!";
                    statusMessage.style.color = "green";
                }
            } else {
                errors++;
                characters[currentIndex].classList.add('error');
                // OVERWRITE with what they actually typed so they see it
                characters[currentIndex].innerText = inputChar === '\n' ? '↵\n' : inputChar;
                if(statusMessage) {
                    statusMessage.innerText = "¡ERROR!";
                    statusMessage.style.color = "red";
                }
            }

            currentIndex++;
            if (currentIndex < characters.length) {
                characters[currentIndex].classList.add('current');
                // Scroll manual del contenedor para evitar que la pantalla entera salte
                const container = characters[currentIndex].parentElement.parentElement; // typing-container
                const charTop = characters[currentIndex].offsetTop;
                const charHeight = characters[currentIndex].offsetHeight;
                const containerHeight = container.clientHeight;
                
                let targetScroll = charTop - (containerHeight / 2) + (charHeight / 2);
                if (targetScroll < 0) targetScroll = 0;
                
                container.scrollTo({ top: targetScroll, behavior: 'smooth' });
                updateKeyboardHighlight();
            } else {
                finishLesson();
            }
            
            updateStats();
        }
        hiddenInput.value = '';
    });

    function finishLesson() {
        isFinished = true;
        clearInterval(timer);
        hiddenInput.blur();
        updateStats();
        
        const finalWpm = parseInt(wpmDisplay.innerText) || 0;
        if (currentUserIndex !== null && users[currentUserIndex]) {
            users[currentUserIndex].history.push(finalWpm);
            saveUsers();
        }

        setTimeout(() => {
            alert(`¡Lección Completada!\nPulsaciones: ${pulsaciones}\nErrores: ${errors}\nVelocidad: ${finalWpm} PPM`);
            showView(viewMenu);
        }, 100);
    }

    typingContainer.addEventListener('click', () => {
        if (!isPaused) hiddenInput.focus();
    });
    
    if (lessonSelect) {
        lessonSelect.addEventListener('change', (e) => initLesson(parseInt(e.target.value)));
    }
});

// Lógica de instalación PWA
let deferredPrompt;
const btnInstallPwa = document.getElementById('btn-install-pwa');

window.addEventListener('beforeinstallprompt', (e) => {
    // Evita que Chrome muestre el mini-infobar
    e.preventDefault();
    // Guarda el evento para dispararlo luego
    deferredPrompt = e;
    // Muestra el botón flotante
    if (btnInstallPwa) {
        btnInstallPwa.style.display = 'block';
    }
});

if (btnInstallPwa) {
    btnInstallPwa.addEventListener('click', async () => {
        if (deferredPrompt) {
            // Muestra el prompt de instalación nativo
            deferredPrompt.prompt();
            // Espera a que el usuario responda
            const { outcome } = await deferredPrompt.userChoice;
            console.log(`Respuesta del usuario: ${outcome}`);
            // Limpia la variable
            deferredPrompt = null;
            // Oculta el botón
            btnInstallPwa.style.display = 'none';
        }
    });
}

window.addEventListener('appinstalled', () => {
    // Oculta el botón una vez que la app ya está instalada
    if (btnInstallPwa) {
        btnInstallPwa.style.display = 'none';
    }
    console.log('PWA instalada con éxito');
});
