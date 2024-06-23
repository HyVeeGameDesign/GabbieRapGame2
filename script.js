const rapperImages = [
    "eminem.png",
    "busta_rhymes.png",
    "nas.png",
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
    const confetti = document.getElementById('confetti');
    confetti.style.display = 'block';
    setTimeout(() => {
        confetti.style.display = 'none';
    }, 5000); // confetti display for 5 seconds
}

function animateFireworks() {
    const fireworks = document.getElementById('fireworks');
    fireworks.style.display = 'block';
    setTimeout(() => {
        fireworks.style.display = 'none';
    }, 5000); // fireworks display for 5 seconds
}
