const music = document.getElementById('bg-music');
const muteIcon = document.getElementById('mute-icon');

function startSite() {
    document.getElementById('enter-screen').style.opacity = '0';
    setTimeout(() => {
        document.getElementById('enter-screen').style.display = 'none';
        const main = document.getElementById('main-content');
        main.style.display = 'block';
        setTimeout(() => main.style.opacity = '1', 50);
        
        music.play().catch(() => console.log("Autoplay von Browser blockiert"));
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

document.addEventListener('mousemove', (e) => {
    const card = document.getElementById('profile-card');
    if (card) {
        const x = (window.innerWidth / 2 - e.pageX) / 35;
        const y = (window.innerHeight / 2 - e.pageY) / 35;
        card.style.transform = `rotateY(${x}deg) rotateX(${-y}deg)`;
    }
});
