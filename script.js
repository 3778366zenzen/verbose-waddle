const screens = document.querySelectorAll('.screen');

function showScreen(id) {
    screens.forEach(s => s.classList.remove('active'));
    document.getElementById(id).classList.add('active');
}

function checkPassword() {
    const pass = document.getElementById('password').value;

    if (pass === "REIZEN GUAPA11") {
        showScreen('askScreen');
    } else {
        alert("malig password uy taka2 balika");
    }
}

function logout() {
    document.getElementById('password').value = "";
    showScreen('secretScreen');
}

function goLogin() {
    showScreen('loginScreen');
}

function noMessage() {
    showScreen('noScreen');
}

function goAsk() {
    showScreen('askScreen');
}

function showChoices() {
    showScreen('choiceScreen');
}

function showMessage() {
    showScreen('messageScreen');
}

function showGallery() {
    showScreen('galleryScreen');
}

function backToChoices() {
    showScreen('choiceScreen');
}
