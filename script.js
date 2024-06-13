document.addEventListener('DOMContentLoaded', (event) => {
    const candle = document.getElementById('candle');
    const flame = document.getElementById('flame');
    const popup = document.getElementById('popup');

    candle.addEventListener('click', () => {
        // Turn off the flame
        flame.style.display = 'none';

        // Show the popup message with a dramatic effect
        popup.style.display = 'block';

        // Fire the confetti
        confetti({
            particleCount: 100,
            spread: 70,
            origin: { y: 0.6 }
        });

        // Additional confetti bursts
        setTimeout(() => {
            confetti({
                particleCount: 100,
                spread: 70,
                origin: { y: 0.6 }
            });
        }, 500);

        setTimeout(() => {
            confetti({
                particleCount: 100,
                spread: 70,
                origin: { y: 0.6 }
            });
        }, 1000);
    });
});
