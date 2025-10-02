// This script initializes the tsParticles instance after the window has loaded.
window.addEventListener('load', () => {
    // The tsParticles.load function takes an object with the ID of the container element
    // and the configuration options for the particles.
    tsParticles.load({
        id: "particles-js",
        options: particlesConfig
    }).then(container => {
        console.log('tsParticles loaded successfully.');
    }).catch(error => {
        console.error('Error loading tsParticles:', error);
    });
});