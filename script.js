const music = document.getElementById('bg-music');
const muteIcon = document.getElementById('mute-icon');

function startSite() {
    document.getElementById('enter-screen').style.opacity = '0';
    setTimeout(() => {
        document.getElementById('enter-screen').style.display = 'none';
        const main = document.getElementById('main-content');
        main.style.display = 'block';
        setTimeout(() => main.style.opacity = '1', 50);
        music.play();
        createSnow();
    }, 1200);
}

function toggleMute() {
    music.muted = !music.muted;
    muteIcon.src = music.muted ? "assets/icons/mute.svg" : "assets/icons/unmute.svg";
}

function copyDiscord(val) {
    navigator.clipboard.writeText(val);
    const alert = document.getElementById('copy-alert');
    alert.style.display = 'block';
    setTimeout(() => alert.style.display = 'none', 2500);
}

function createSnow() {
    const container = document.getElementById('snow-container');
    for (let i = 0; i < 50; i++) {
        const snowflake = document.createElement('div');
        snowflake.className = 'snowflake';
        snowflake.style.backgroundImage = "url('assets/snowflakes.svg')";
        snowflake.style.left = Math.random() * 100 + 'vw';
        snowflake.style.animationDuration = (Math.random() * 3 + 2) + 's';
        snowflake.style.opacity = Math.random();
        snowflake.style.width = snowflake.style.height = (Math.random() * 15 + 5) + 'px';
        container.appendChild(snowflake);
    }
}

document.addEventListener('mousemove', (e) => {
    const card = document.getElementById('profile-card');
    const x = (window.innerWidth / 2 - e.pageX) / 35;
    const y = (window.innerHeight / 2 - e.pageY) / 35;
    card.style.transform = `rotateY(${x}deg) rotateX(${-y}deg)`;
});