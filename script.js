const rapperImages = [
    "eminem.png",
    "busta_rhymes.png",
    "nas.png",
    "kitty.png", // Hello Kitty image
    "italian_creator.png", // Italian the Creator image
    "a_tribe_called_quest.png",
    "digable_planets.png",
    "notorious_david.png"
];

document.getElementById('startButton').addEventListener('click', startGame);
document.getElementById('submitButton').addEventListener('click', beatRapper);
document.getElementById('nextButton').addEventListener('click', nextRapper);

const rappers = [
    { name: "Eminem", bar: "That's an awfully hot coffee pot" },
    { name: "Busta Rhymes", bar: "Gimme some more" },
    { name: "Nas", bar: "I never sleep, 'cause sleep is the cousin of death" },
    { name: "Hello Kitty", bar: "I'm cute and sweet, but don't underestimate my beat!" }, // Hello Kitty details
    { name: "Italian the Creator", bar: "I'm tryna buy my neighbor house and turn it to a yard. If you don't know my grandma name, then we ain't really dogs, mama mia!" }, // Italian the Creator details
    { name: "A Tribe Called Quest", bar: "Can I kick it? Yes, you can!" },
    { name: "Digable Planets", bar: "We be to rap what key be to lock" },
    { name: "The Notorious D.A.V.I.D.", bar: "You wanna sip mo' on my living room flo'? Play Nintendo with Cease a Leo. Pick up my phone say, 'Poppa not home'" }
];

let currentRapperIndex = 0;

function startGame() {
    document.getElementById('introScreen').style.display = 'none';
    document.getElementById('battleScreen').style.display = 'block';
    showRapper();
}

function showRapper() {
    const rapper = rappers[currentRapperIndex];
    document.getElementById('rapperName').textContent = rapper.name;
    document.getElementById('rapperBar').textContent = `${rapper.name} just spat a bar: "${rapper.bar}"`;
    document.getElementById('playerInput').value = '';
    document.getElementById('submitButton').style.display = 'block';
    document.getElementById('nextButton').style.display = 'none';
    document.getElementById('rapperImage').src = `images/${rapperImages[currentRapperIndex]}`;
}

function beatRapper() {
    const playerInput = document.getElementById('playerInput').value.trim();
    if (playerInput === '') {
        alert('Please type your diss before submitting!');
        return;
    }
    const rapper = rappers[currentRapperIndex];
    document.getElementById('rapperName').textContent = 'Congratulations!';
    document.getElementById('rapperBar').textContent = `You have successfully out-rapped ${rapper.name}`;
    document.getElementById('submitButton').style.display = 'none';
    document.getElementById('nextButton').style.display = 'block';
}

function nextRapper() {
    currentRapperIndex++;
    if (currentRapperIndex < rappers.length) {
        showRapper();
    } else {
        // Show final screen
        document.getElementById('battleScreen').style.display = 'none';
        document.getElementById('finalScreen').style.display = 'block';
        animateConfetti();
        animateFireworks();
        // Display Lil Lily image
        document.getElementById('lilLilyImage').src = 'images/lil_lily.png';
    }
}

function animateConfetti() {
    const confettiContainer = document.getElementById('confetti');
    confettiContainer.innerHTML = '';
    for (let i = 0; i < 100; i++) {
        const confettiPiece = document.createElement('div');
        confettiPiece.className = 'confetti-piece';
        confettiPiece.style.left = Math.random() * 100 + 'vw';
        confettiPiece.style.animationDelay = Math.random() * 5 + 's';
        confettiContainer.appendChild(confettiPiece);
    }
}

function animateFireworks() {
    const fireworksContainer = document.getElementById('fireworks');
    fireworksContainer.innerHTML = '';
    for (let i = 0; i < 20; i++) {
        setTimeout(() => {
            const firework = document.createElement('div');
            firework.className = 'firework';
            firework.style.left = Math.random() * 100 + 'vw';
            firework.style.animationDelay = Math.random() * 2 + 's';
            fireworksContainer.appendChild(firework);
        }, i * 100);
    }
    setTimeout(() => {
        fireworksContainer.innerHTML = '';
    }, 7000); // fireworks display for 7 seconds
}
